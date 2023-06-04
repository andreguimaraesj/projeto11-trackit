import styled from "styled-components"
import Header from "./components/header";
import Menu from "./components/menu";
import MyHabit from "./components/myhabits";


export default function Today(){
    return(
        <TodayPage>
            <Header />
            <h2>Segunda, 17/05</h2>
            <p>Nenhum hábito concluído ainda</p>
            <MyHabit />
            <Menu />
        </TodayPage>
    )
}

const TodayPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: #F2F2F2;
    height: 100vh;
    padding: 70px 15px 5px 15px;

    h2{
        font-size: 23px;
        color: #126BA5;
        margin: 0px;
        margin-top: 10px;
    }

    p{
        font-size: 18px;
        color: #bababa;
        text-align: left;
        margin: 0px;
        margin-top: 10px;
    }
`