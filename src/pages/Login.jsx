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
`;
const Link = styled.div`
    p{
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        text-decoration-line: underline;

        color: #52B6FF;
    }
`;