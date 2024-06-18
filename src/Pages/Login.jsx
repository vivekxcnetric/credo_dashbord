import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

import LoginLogo from '../Asset/loginLogo.png';
import LoginBg from '../Asset/LoginBg.png';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 110vh;
  background: url(${LoginBg}) no-repeat center;
  background-size: auto;
  marginbottom:20%;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LoginBox = styled.div`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 450px;
  width: 100%;

  animation: ${fadeIn} 0.5s ease-in;
`;

const Logo = styled.div`
 display: flex;
 justify-content: center;
  img {
    width: 200px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #00796b;
  font-size: 24px;
`;

const Input = styled.input`
  width: calc(100% - 30px);
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
`;

const PasswordContainer = styled.div`
  position: relative;
  width: calc(100% - 30px);
  margin: 10px auto;
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
`;

const ToggleButton = styled.button`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #00796b;
`;

const Button = styled.button`
  width: 70%;
  padding: 15px;
  background-color: #00bfa5;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 50px;
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
  margin-left: 8px;
  label{
    margin-left: 10px;
  }
`;

const ToggleSwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const ToggleSlider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.isChecked ? '#00bfa5' : '#ccc')};
  transition: .4s;
  border-radius: 25px;

  &:before {
    position: absolute;
    content: "";
    height: 15px;
    width: 15px;
    left: ${(props) => (props.isChecked ? '30px' : '4px')};
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
`;

const Login = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(username)) {
      toast.error('Please enter a valid email address!');
      return;
    }
    if (!validatePassword(password)) {
      toast.error('Password should be at least 8 characters long and include uppercase, lowercase, number, and special character!');
      return;
    }

    if (username === 'admin@gmail.com' && password === 'Admin@123') {
      toast.success('Login successful!');
      navigate("/dashboard");
    } else {
      toast.error('Invalid username or password!');
    }
  
  };

  return (
    <Container>
      <Toaster />
      <LoginBox>
        <Logo>
          <img src={LoginLogo} alt="Credo Logo" />
        </Logo>
        <Title>Welcome!</Title>
        <form onSubmit={handleSubmit}>
          <Input 
            type="text" 
            placeholder="Your username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <PasswordContainer>
            <PasswordInput
              type={showPassword ? 'text' : 'password'}
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ToggleButton type="button" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </ToggleButton>
          </PasswordContainer>
          <RememberMe>
            <ToggleSwitchWrapper>
              <HiddenCheckbox checked={isChecked} onChange={handleToggle} />
              <ToggleSlider isChecked={isChecked} />
            </ToggleSwitchWrapper>
            <label>Remember Me</label>
          </RememberMe>
          <Button type="submit">Login</Button>
        </form>
      </LoginBox>
    </Container>
  );
};

export default Login;
