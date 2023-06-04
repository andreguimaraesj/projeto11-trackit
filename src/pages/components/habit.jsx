import styled from "styled-components"
import { useContext, useState } from "react";
import deleteicon from "../../assets/deleteicon.svg"
import { BASEURL } from "../../constants/urls";
import axios from "axios";
import { UserContext } from "../../constants/usercontext";

export default function Habit({ id, name, days, setmyHabits }){
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const { userInfo } = useContext(UserContext);

    const config = {
        headers: {
            Authorization:`Bearer ${userInfo.token}`
        }
    }

    function deleteHabit(habitId) {
        const confirmDelete = window.confirm("Deseja realmente excluir?");

        if (confirmDelete) {
            const url = `${BASEURL}/habits/${habitId}`;
            
            axios.delete(url, config)
            .then((response) => {
                setmyHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== habitId));
            })
            .catch((error) => {
                console.log(error.response.data.message);
                alert(error.response.data.message);
            });
        }
    }

    return(
        <HabitDiv data-test="habit-container">
            <p data-test="habit-name">{name}</p>
            <SelecionarDias>
            {weekDays.map((day, index) => (
                <button
                    key={index}
                    className={days.includes(index) ? "selected" : ""}
                    data-test="habit-day"
                >
                    {day}
                </button>
            ))}
            </SelecionarDias>
            <img
                src={deleteicon}
                alt="delete habit"
                onClick={() => deleteHabit(id)}
                data-test="habit-delete-btn"
            />
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
    margin-bottom: 10px;

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

        &.selected {
            background-color: #CFCFCF;
            border-color: #CFCFCF;
            color: #FFFFFF;
        }
    }
`