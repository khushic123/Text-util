// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import { useState } from 'react';
import Alert from './Components/Alert'
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  const [mode,setmode]=useState('light');    //for body 
  const  [btntext,setbtntext]=useState('Enable dark mode');          //for button 

    const [style,setmystyle]=useState({      //for button color
        color: 'black',
    }
    );



    const togglemode=()=>{ 
        if(mode==='light')
    {
    setmode('dark');
    setbtntext('Enable light mode');
    setmystyle({
        color: 'white',
    })
  

    document.body.style.backgroundColor='#042743';
  showalert('switched to dark mode:','success')
      }
    else
    {
    setmode('light');
    setbtntext('Enable dark mode');
    setmystyle({
        color: 'black',
    })
    

    document.body.style.backgroundColor='white';
    showalert('switched to light mode:','success')
     }
     

    }


    const [alert,setAlert]=useState(null);    //for alert 

    const showalert=(message,type)=>{
      setAlert({
        msg:message,
        type:type,
      })

       setTimeout(() => {
         setAlert(null);
       }, 800);
    }

  
  return (
    <>
    <Router>
    <Navbar mode={mode} togglemode={togglemode} style={style} btntext={btntext}/>
     <Alert alert={alert} />
     <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          <Route path="/">
          <Textform heading="Analyze your text" mode={mode} showalert={showalert}/>
          </Route>
        </Switch>
    </Router>
     </>
  );
}

export default App;
