import styled from "styled-components";
import Header from "./components/header";
import Menu from "./components/menu";

export default function Habits(){
    return(
        <HabitsPage>
            <Header />
            <CreateHabit>
                <h2>Meus hábitos</h2>
                <p>+</p>
            </CreateHabit>
            <EmpyMessage>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </EmpyMessage>
            <Menu />
        </HabitsPage>
    )
}

const HabitsPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;
    background-color: #F2F2F2;
    height: 100vh;
`

const CreateHabit = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0px 10px 5px 10px;

    h2{
        font-size: 23px;
        color: #126BA5;
    }

    p{
        color: #FFFFFF;
        font-size: 27px;
        background-color: #52B6FF;
        padding: 0px 12px 0px 12px;
        border-radius: 3px;
        margin-right: 5px;
        cursor: pointer;
    }
`
const EmpyMessage = styled.p`
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    text-align: left;
`