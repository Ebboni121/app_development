import React from 'react';
import '../index.css';
import arc from '../images/arc.png'
import aswim from '../images/aswim.png'
import breakd from '../images/breakd.png'
import fence from '../images/Fence.png'
import gym from '../images/gym.png'
import dive from '../images/Dive.png'
import tf from '../images/tf.png'
import cycle from '../images/cycle.png'
import vb from '../images/VB.png'
import tri from '../images/Tri.png'
import can from '../images/can.png'


const About= function(){
    return(
        <>
        <header className='header'>
            <h1 className='title'>Olympic Sports</h1>
            <h2> Sports in the Summer Games </h2>
            </header>


            <div className="sports">
        <img src={arc} alt="arc" />
        <img src={aswim} alt="arc "/>
        <img src={breakd} alt="arc "/>
        <img src={cycle} alt="arc " />
        <img src={tf} alt="arc "/>
        <img src={cycle} alt="arc "/>
        <img src={tri} alt="arc "/>
        <img src={fence} alt="arc " />
        <img src={gym} alt="arc "/>
        <img src={can} alt="arc "/>
        <img src={dive} alt="arc "/>
        <img src={vb} alt="arc " />
            </div>
     
        </>
    )
}

export default About;
