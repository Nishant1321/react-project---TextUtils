import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';




function App() {
const [Mode, setMode]=  useState('light'); //dark mode is unable or not
const [alert, setAlert]=useState(null);
const showAlert=(message, type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(() => {
  setAlert(null);
}, 1500); 
}
const toggleMode =()=>{
  if(Mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor ='#052966';
    showAlert("Dark mode has been enable", "success");
    document.title='TextUtils - Dark Mode';
    // setInterval(() => {
    //   document.title='TextUtils is Amazing';
    // }, 2000);
    // setInterval(() => {
    //   document.title='Install a TextUtils ';
    // }, 1500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor ='white';
    showAlert("Light mode has been enable", "success");
    document.title='TextUtils - Light Mode';
  }
}
  return (
    <>
  
{/* <Navbar title='TextUtil' aboutText='About TextUtil'/> */}
<Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
 <TextForm  showAlert={showAlert} heading="Enter the text to analyze below" mode={Mode}/>
        

  
{/* <About/> */}
</div>

    </>
   
  );
}
    

export default App;
