import React,{useState} from 'react';
import{ BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar';
import rings from './images/rings.png'
import paris2024 from './images/paris2024.png'
import tokyo2020 from './images/tokyo2020.png'
import rio2016 from './images/rio2016.png'
import london2012 from './images/london2012.png'
import beijing2008 from './images/beijing2008.png'
import la2028 from './images/la2028.png'
import User from './components/comments';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';



  




const App = function(){

  const [isOpen, setIsopen] = useState (false)

  

  return(
  
 <>
   <header className="App-header">
   <figure className='introimg'>
        <img src={rings}/>
      </figure>
   <h1>Welcome to the Olympic's  </h1>
   </header>
    <div>

  
  

<BrowserRouter>
<Navbar />
<Routes>
<Route path='/' />
<Route path='/about' element={<About />}/>
<Route path='/contact' element={<Contact />}/>
</Routes>
</BrowserRouter>



  <h1 className="title"> Olympic Facts</h1>   
  <section className="extrafacts">
   <p>The Olympics are one of the most-watched sporting events worldwide, attracting billions of viewers across different countries. This global viewership is highly attractive to advertisers looking to reach a diverse and extensive audience.</p>
  <button className="button" onClick={function(){setIsopen(!isOpen)}}>{isOpen ?"Hide" : "Read More"}</button>
  </section>
<section>
  {isOpen &&
  ( 
 

 <div className="extrafacts"> <p>The selection of host cities for the Olympic Games is determined by the International Olympic Committee through a bidding process. Cities compete to demonstrate their ability to host the Games, considering factors like infrastructure, accommodations, and sustainability.</p>

  <p>The Olympics are broken up into two events, the "Summer Olympics" and the "Winter Olympics".</p>
    
   <p>The Summer Olympics feature a wide range of sports that typically do not involve snow or ice. These include athletics (track and field), swimming, gymnastics, basketball, soccer (football), tennis, and many others.</p>

  <p>The Winter Olympics feature sports that are played on snow and ice. These include skiing (alpine, cross-country, freestyle), snowboarding, figure skating, speed skating, ice hockey, curling, and others.</p></div>)}
 
</section>
 
  
   
    </div>
  

   <div>
    <h1 className="title"> Olympic Logo's</h1>
   </div>

      <section className='cardcontainer'>
        
    
        <User image={paris2024} name="Paris" date='2024' comments='Current Games ' message= <a href="https://www.nbcolympics.com/medals" target="_blank" rel="noopener noreferrer">'Follow Medal count'</a>/> 

        <User image={tokyo2020} name="Tokyo" date='2020' message='Tokyo 2020 (held in 2021 due to COVID-19)

United States: 113 medals (39 Gold, 41 Silver, 33 Bronze)
China: 88 medals (38 Gold, 32 Silver, 18 Bronze)
Japan: 58 medals (27 Gold, 14 Silver, 17 Bronze)
Great Britain: 65 medals (22 Gold, 21 Silver, 22 Bronze)
ROC (Russian Olympic Committee): 71 medals (20 Gold, 28 Silver, 23 Bronze)'/>
        <User image={rio2016} name="Rio" date='2016' message='Rio 2016

 United States: 121 medals (46 Gold, 37 Silver, 38 Bronze)
Great Britain: 67 medals (27 Gold, 23 Silver, 17 Bronze)
China: 70 medals (26 Gold, 18 Silver, 26 Bronze)
Russia: 56 medals (19 Gold, 18 Silver, 19 Bronze)
Germany: 42 medals (17 Gold, 10 Silver, 15 Bronze)'/>
        <User image={london2012} name="London" date='2024' message='London 2012

United States: 104 medals (46 Gold, 29 Silver, 29 Bronze)
China: 88 medals (38 Gold, 27 Silver, 23 Bronze)
Great Britain: 65 medals (29 Gold, 17 Silver, 19 Bronze)
Russia: 82 medals (24 Gold, 26 Silver, 32 Bronze)
Germany: 44 medals (11 Gold, 19 Silver, 14 Bronze)'/>
        <User image={beijing2008} name="Beijing" date='2020' message='Beijing 2008
United States: 110 medals (36 Gold, 38 Silver, 36 Bronze)
China: 100 medals (48 Gold, 22 Silver, 30 Bronze)
Russia: 72 medals (23 Gold, 21 Silver, 28 Bronze)
Great Britain: 47 medals (19 Gold, 13 Silver, 15 Bronze)
Germany: 41 medals (14 Gold, 10 Silver, 17 Bronze)'/>
        <User image={la2028} name="Los Angles" date='2028' comments='Future Games' message='Check back in 2028'/>
      </section>




   











    </>
  )
}







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


