import React from 'react'
import logo from "../../images/logo.png"
import { TextField, Box, Button, Typography, styled } from '@mui/material';
import {Link} from "react-router-dom"

const Component = styled(Box)`
    max-width: 500px;
    margin: auto;
    margin-top: 20px;
    box-shadow: 1px 1px 5px 2px rgb(0 0 0/ 0.6);
`;
const Image = styled('img')({
    width: 200,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'

});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #646464;
    color: #fff;
    height: 48px;
    border-radius: 2px;
    transition: '0.4s',
    '&:hover': {
      background: '#646464',
      color: "orange"
    }
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #4f240f;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
    transition: '0.4s',
    '&:hover': {
      background: '#646464',
      color: "orange"
    }
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const Login = () => {

  return (
    <Component>

    <Box>
        <Image src={logo} alt="logo" />
        <Wrapper>
        <TextField variant="standard"  name='username' label='Enter Username' />
        <TextField variant="standard"   name='password' label='Enter Password' />
        <LoginButton variant="contained" >Login</LoginButton>
        <Text style={{ textAlign: 'center' }}>OR</Text>
        <SignupButton style={{ marginBottom: 50 }}><Link to="/register">Create Account</Link></SignupButton>
        </Wrapper>
    </Box>
    </Component>
  )
}

export default Login