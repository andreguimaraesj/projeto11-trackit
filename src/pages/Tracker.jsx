import styled from "styled-components"
import Header from "./components/header";
import Menu from "./components/menu";

export default function Tracker(){
    return(
        <TrackerPage>
            <Header />
            <h2>Histórico</h2>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            <Menu />
        </TrackerPage>
    )
}

const TrackerPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: #F2F2F2;
    height: 100vh;
    padding: 70px 10px 5px 0px;


    h2{
        font-size: 23px;
        color: #126BA5;
        margin: 0px;
        margin-top: 10px;
    }

    p{
        font-size: 18px;
        line-height: 22px;
        color: #666666;
        text-align: left;
    }
`