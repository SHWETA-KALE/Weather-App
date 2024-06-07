//Box internally returns div
import { useState } from 'react';// storing the form data 
import {Box, styled} from '@mui/material';
import Sunset from '../assets/images/bg.jpg';
import bg from '../assets/images/bg-n2.jpg';
import Form from '../components/Form';
import Info from '../components/Info';

const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '65%'
}) 

const Image = styled(Box)({
    backgroundImage: `url(${Sunset})`,
    width: '30%',
    height: '80%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '20px 0 0 20px',
    transition: 'background-image 0.5s ease-in-out', // Add transition for smooth change
    '&:hover': {
        backgroundImage: `url(${bg})` // Change image on hover
    }
})

const Home = () =>{

    const [result, setResult] = useState({})
    return (
    <Component> 
       <Image></Image>
       <Box style={{width: '70%', height: '80%'}}>
            <Form setResult={setResult}/>
            <Info result={result}/>
       </Box>
    </Component>
    )
}

export default Home;