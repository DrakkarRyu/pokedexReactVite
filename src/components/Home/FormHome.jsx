import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserNameGlobal } from '../../store/slices/userName.slice'

const FormHome = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        dispatch(setUserNameGlobal(e.target.trainer__name.value.trim()))
        navigate('/pokedex')
    }

    return (
        <form onSubmit={submit} className='pokedex__form'>
            <input
                id='trainer__name'
                className='pokedex__input'
                type="text"
                placeholder='Put your name over here' />
            <button className='pokedex__btn'>Catch all them</button>
        </form>
    );
};

export default FormHome;