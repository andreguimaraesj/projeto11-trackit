import styled from "styled-components"
import { useState } from "react";
import axios from "axios";
import { BASEURL } from "../../constants/urls";
import { UserContext } from "../../constants/usercontext";
import { useContext } from "react";

export default function HabitCreation({setHabitCreationOn}){
    const isVisible = setHabitCreationOn;
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const [habitName, setHabitName] = useState("");
    const [habitDays, setHabitDays] = useState([]);
    const { userInfo } = useContext(UserContext);

    function selectionDays(e) {
        const day = parseInt(e.target.id);
        if (habitDays.includes(day)) {
            setHabitDays(habitDays.filter((d) => d !== day));
        } else {
            setHabitDays([...habitDays, day]);
        }
    }

    function newHabit(e){
        e.preventDefault();

        if (habitDays.length === 0){
            alert("Selecione os dias do hábito primeiro!");
            return;
        }
        const habit = {
            name: habitName,
            days: habitDays
        }
        const config = {
            headers: {
                Authorization:`Bearer ${userInfo.token}`
            }
        }
    
        console.log(habit);
    
        axios.post(`${BASEURL}/habits`, habit, config)
        .then(resp =>{
            setHabitName("");
            setHabitDays([]);
            isVisible(false);
        })
        .catch(error =>{
            console.log(error.response.data.message)
            alert(error.response.data.message)
            })
    }
    return(
        <CreationDiv onSubmit={newHabit} data-test="habit-create-container">
            <input
                required
                type="text"
                id="habit-name"
                value={habitName}
                onChange={(e) => setHabitName(e.target.value)}
                placeholder="nome do hábito"
                data-test="habit-name-input"
            />
            <SelecionarDias>
            {weekDays.map((day, index) => {
                return (
                        <button
                            type="button"
                            key={index}
                            id={index}
                            className={habitDays.includes(index) ? "selected" : ""}
                            onClick={(e) => selectionDays(e)}
                            data-test="habit-day"
                        >{day}
                        </button>
                );
            })}
            </SelecionarDias>
            <CreationButtons>
                <p onClick={ ()=> isVisible(false)} data-test="habit-create-cancel-btn">Cancelar</p>
                <button type="submit" data-test="habit-create-save-btn">Salvar</button>
            </CreationButtons>
        </CreationDiv>
        )
}

const CreationDiv = styled.form`
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

        &.selected {
            background-color: #CFCFCF;
            border-color: #CFCFCF;
            color: #FFFFFF;
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