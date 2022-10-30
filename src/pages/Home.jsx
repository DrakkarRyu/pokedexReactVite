import React from 'react';
import FormHome from '../components/Home/FormHome';

const Home = () => {
    return (
        <div className='pokedex'>
            <h1 className='pokedex__title'>Pokedex</h1>
            <h2 className='pokedex__subtitle'>Hi Trainer!</h2>
            <p className='pokedex__text'>Write your name for to start</p>
            <FormHome/>
        </div> 
    );
};

export default Home;