import styled from "styled-components"
import checkhabit from "../../assets/checkhabit.svg"

export default function MyHabit(){
    return(
        <Habit>
            <h3>Ler 1 capítulo de livro</h3>
            <p>Sequência atual: 3 dias</p>
            <p>Seu recorde: 5 dias</p>
            <img src={checkhabit} alt="complete habit" />
        </Habit>
    )
}

const Habit = styled.div`
    width: 100%;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 20px 0px 20px 0px;
    position: relative;

    h3{
        margin: 0px;
        font-size: 20px;
        color: #666666;
        margin-bottom: 7px;
    }
    p{
        font-size: 13px;
        color: #666666;
        margin: 0px;
    }

    img{
        position: absolute;
        right: 15px;
        top: 20px;
        cursor: pointer;
    }
`;