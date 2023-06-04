import styled from "styled-components"
import { UserContext } from "../../constants/usercontext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Header(){

    const { userInfo } = useContext(UserContext);
    
    return(
        <HeaderDiv data-test="header">
            <Link to='/'>
                <h1>TrackIt</h1>
            </Link>
            <img src={userInfo.image} alt="User Profile Image" data-test="avatar"></img>
        </HeaderDiv>
    )
}

const HeaderDiv = styled.div`
    width: 100%;
    height: 70px;
    padding: 10px 20px 10px 20px;
    align-items: center;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;

    h1{
        font-family: 'Playball', cursive;
        color: #ffffff;
        font-size: 39px;
    }

    a{
        text-decoration: none;
    }

    img{
        width: 50px;
        height: 50px;
        border-radius: 30px;
        object-fit: cover;
    }
`;