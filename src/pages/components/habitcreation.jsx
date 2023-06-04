import styled from "styled-components"

export default function HabitCreation(){
    return(
        <CreationDiv>
            <input placeholder="nome do hábito" />
            <SelecionarDias>
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </SelecionarDias>
            <CreationButtons>
                <p>Cancelar</p>
                <button>Salvar</button>
            </CreationButtons>
        </CreationDiv>
        )
}

const CreationDiv = styled.div`
    width: 90%;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 15px;

    input{
        width: 100%;
        height: 45px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        padding-left: 10px;
        :focus{
            outline: none;
        }

        ::placeholder{
            font-size: 20px;
            color: #DBDBDB;
        }
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
        padding: 0px 8px 0px 8px;
        margin-right: 4px;
        cursor: pointer;

        :focus{
            outline: none;
        }
    }
`
const CreationButtons = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;

    p{
        font-size: 16px;
        color: #52B6FF;
        margin-right: 25px;
        cursor: pointer;
    }

    button{
        font-size: 16px;
        color: #FFFFFF;
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        border: none;

        :focus{
            outline: none;
        }
    }
`