import React, { useState, useContext } from "react"
import logo from "../assets/Group8.png"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BASEURL } from "../constants/urls";
import { UserContext } from "../constants/usercontext"

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { userInfo, setUserInfo } = useContext(UserContext);
    const navigate = useNavigate();

    function entrar(e){
        e.preventDefault();
        axios.post(`${BASEURL}/auth/login`,{email: email,password: password} )
        .then(resp =>{
            console.log(resp)
            setUserInfo(resp.data);
            navigate(`/hoje`);
        })
        .catch(error =>{
            console.log(error)
            alert("Usuário ou senha inválida!")
        })
    }
    return(
        <>
        <Logo src={logo}></Logo>
        <FormsDiv onSubmit={entrar}>
            <input
                required
                id='email'
                type="email"
                placeholder="email"
                data-test="email-input"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                required
                id='senha'
                type="password"
                placeholder="senha"
                data-test="password-input"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" data-test="login-btn">Entrar</button>
        </FormsDiv>
        <Link to='/cadastro' data-test="signup-link">
            <LinkText>Não tem uma conta? Cadastre-se!</LinkText>
        </Link>
        </>
    )
}

const Logo = styled.img`
    width: 180px;
`;
const FormsDiv = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        margin: 3px;
        padding: 5px;
        width: 300px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        :focus{
            outline: none;
        }

        ::placeholder{
            font-size: 20px;
            color: #DBDBDB;
            margin-bottom: 2px;
        }
    }
    button{
        width: 300px;
        height: 45px;
        background: #52B6FF;
        margin-top: 3px;
        border-radius: 5px;
        border: none;
        font-size: 21px;
        color: #FFFFFF;
        cursor: pointer;

        :focus{
            outline: none;
        }
    }
`;
const LinkText = styled.p`
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        text-decoration-line: underline;

        color: #52B6FF;
        cursor: pointer;
`;