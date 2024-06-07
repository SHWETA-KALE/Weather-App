import React, { useState } from 'react';
import { Box, InputBase, Button, styled } from '@mui/material';
import { getWeather } from '../services/api';

const Container = styled(Box)({
    display: 'flex',
    background: '#445A6F',
    padding: 10,
    alignItems: 'center'
});

const Input = styled(InputBase)({
    color: '#FFF',
    marginRight: 20,
    flexGrow: 1,  
    fontSize: 18
});

const GetButton = styled(Button)({
    background: '#e67e22',
    marginLeft: 'auto'   
    
})

const Form = ({ setResult }) => {
    const [data, setData] = useState({ city: ''})

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const getWeatherInfo = async () => {
        let response = await getWeather(data.city);
        setResult(response);
    }

    return (
        <Container>
            <Input 
                placeholder="City"
                onChange={(e) => handleChange(e)}
                name="city"
            />
            
            <GetButton
                variant="contained"
                onClick={() => getWeatherInfo()}
            >Get Weather</GetButton>
        </Container>
    )
}

export default Form;