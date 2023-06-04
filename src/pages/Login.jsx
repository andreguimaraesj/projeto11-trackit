import React from "react"
import logo from "../assets/Group8.png"
import styled from "styled-components"

export default function Login(){
    return(
        <>
        <Logo src={logo}></Logo>
        <FormsDiv>
            <input placeholder="email" />
            <input placeholder="senha" />
            <button type="submit">Entrar</button>
        </FormsDiv>
        <Link>
            <p>Não tem uma conta? Cadastre-se!</p>
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
const Link = styled.div`
    p{
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        text-decoration-line: underline;

        color: #52B6FF;
        cursor: pointer;
    }
`;