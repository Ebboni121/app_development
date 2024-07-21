import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import tree from './images/tree.jpg';
import User from './comments'
// IMPORT IMAGES
import smiley_icon from './images/smiley_icon.png'
import pity_icon from './images/pity_icon.png'
import suspicious_icon from './images/suspicious_icon.png'


//create content in the app using function component
const App = function(){

  //define a variable name==========================
  let fullname ="Ebboni ";
//DECLARE A FUNCTION============================
function greeting(){
  return "Good evening!"
}
  return(
    <div>

      <h1 style={{textAlign: "center", color:"magenta",fontFamily:"cursive"}}>Welcome to React JS {fullname}</h1>
      <p style={{textAlign: "center",fontFamily:"cursive"}}> {greeting()}Let's get familiar with JSX Elements</p>
      <figure className='introimg'>
        <img src={tree}/>
      </figure>

      {/*CARD*/}

      <section className='cardcontainer'>
        <User image={smiley_icon} name="Jade" date='2/2' comments='Feeling Happy'/>
        <User image={pity_icon} name="Emery" date='8/8' comments='Feeling pity'/>
        <User image={suspicious_icon} name="Jay" date='8/18' comments='Feeling Suspicious'/>
      </section>
    </div>
  )
}

//root the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


