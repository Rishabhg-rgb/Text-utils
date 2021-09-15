// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react'
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";



function App() {
  const [style, setMyStyle] = useState('light')
  const toggleMode = () => {
    if (style === 'dark') {
      setMyStyle('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }

    else {
      setMyStyle('dark')
      document.body.style.backgroundColor = '#15013d'
      showAlert('Dark mode has been enabled', 'success')
      setTimeout(() => {
        setAlert(null)
      }, 1500);
    }
  }
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  setInterval(() => {
    document.title = 'Type your text'
  }, 1000);

  setInterval(() => {
    document.title='Textutils'
  }, 1200);


  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About Textutils" theme={toggleMode} mode={style} />
      <Alerts alert={alert} />

      <div className="container my-3 ">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/">
            <TextForm alert={showAlert} heading='Enter the text to analyze' placeholder='Enter your texthere' mode={style} />

          </Route>
        </Switch>
        {/* <About/> */}
      </div>
      </Router>
    </>

  );
}



export default App;
