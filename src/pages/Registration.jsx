import React from "react"
import logo from "../assets/Group8.png"
import styled from "styled-components"

export default function Registration(){
    return(
        <>
        <Logo src={logo}></Logo>
        <FormsDiv>
            <input placeholder="email" />
            <input placeholder="senha" />
            <input placeholder="nome" />
            <input placeholder="foto" />
            <button type="submit">Cadastrar</button>
        </FormsDiv>
        <Link>
            <p>Já tem uma conta? Faça login!</p>
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
        margin-top: 3px;
        width: 300px;
        height: 45px;
        background: #52B6FF;
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