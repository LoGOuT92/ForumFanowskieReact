import './App.css';
import { BrowserRouter as Router,Route, Switch}from 'react-router-dom';
import Header from './components/Header/Header';
import Matches from './components/Matches/Matches';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import AuthContext from './Context/authContext';
import { useEffect, useState } from 'react';
import Articule from './Pages/Articule/Articule';

function App(props) {
  const [isAuthenticated,setisAuthenticated]=useState(false)
  const [loading,setLoading]=useState(true)

  const login = (e) => {
    e.preventDefault()
    setisAuthenticated(true)
  }

  const logout = (e) => {
    e.preventDefault();
    setisAuthenticated(false)
  }
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      
    }, 1000);
  }, []);



  const menu =(<Menu />)
  const contex = (
         <>
         <Switch>
         <Route path="/articules/:id" component={Articule}>
          </Route>
          <Route exact={true} path="/">
            <Header />
            <Matches />
            <Content/>
          </Route>
          </Switch>
        </>
      )


  const footer =(<Footer />)

  return (
    <Router>
    <AuthContext.Provider value={{
      isAuthenticated: isAuthenticated,
      login: login,
      logout: logout
    }}>
      <Layout 
        Menu={menu}
        Contex={loading?<LoadingIcon/>:contex}
        Footer={footer}
      />
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
