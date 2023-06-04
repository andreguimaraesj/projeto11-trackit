import styled from "styled-components"
import deleteicon from "../../assets/deleteicon.svg"

export default function Habit(){
    return(
        <HabitDiv>
            <p>Ler 1 capítulo de livro</p>
            <SelecionarDias>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </SelecionarDias>
            <img src={deleteicon} alt="delete habit" />
        </HabitDiv>
    )
}

const HabitDiv = styled.div`
    width: 90%;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    padding: 13px 15px 13px 15px;
    position: relative;

    p{
        font-size: 20px;
        color: #666666;
        margin: 0px;
    }

    img{
        width: 16px;
        position: absolute;
        top: 13px;
        right: 15px;
        cursor: pointer;
    }
`
const SelecionarDias = styled.div`
    padding: 10px 0px 10px 0px;
    display: flex;
    align-items: start;

    button{
        font-size: 20px;
        color: #DBDBDB;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        background-color: #ffffff;
        margin-right: 4px;
        cursor: pointer;

        :focus{
            outline: none;
        }
    }
`