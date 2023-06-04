import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Menu(){
    const percentage = 25;
    return(
        <Menudiv>
            <p>Hábitos</p>
            <ProgressDiv>
                <CircularProgressbar
                    value={percentage}
                    text={`Hoje`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                    })}
                />
            </ProgressDiv>
            <p>Histórico</p>
        </Menudiv>
    )
}

const Menudiv = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    padding: 5px 60px 5px 60px;

    p{
        color: #52B6FF;
        font-size: 18px;
        cursor: pointer;
    }
`;
const ProgressDiv = styled.div`
    width: 90px;
    margin-top: -35px;
    cursor: pointer;
`;