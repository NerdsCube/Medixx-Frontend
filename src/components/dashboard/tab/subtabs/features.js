import React from "react";
import styled from "styled-components";
import { IoBagAdd, IoMan, IoCheckmarkCircleSharp } from "react-icons/io5";
import { RiMoonClearFill } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";

function Features() {
  return (
        <div>
            <Grid>
                <GridItem>
                    <GridIcon><IoBagAdd /></GridIcon>
                    <GridItemContent>
                        <h3>65 kg</h3>
                        <p>Weight</p>
                    </GridItemContent>
                </GridItem>
                <GridItem>
                    <GridIcon><RiMoonClearFill /></GridIcon>
                    <GridItemContent>
                        <h3>7h 30m</h3>
                        <p>Sleep</p>
                    </GridItemContent>
                </GridItem>
                <GridItem style={{
                  gridColumn: 3,
                  gridRow: "1 / span 2",
                  textAlign: "left"
                }}>
                    <ul>
                        <h2>Notes</h2>
                        <li><span><IoCheckmarkCircleSharp /></span>Add appointment</li>
                        <li><span><IoCheckmarkCircleSharp /></span>Add appointment</li>
                        <li><span><IoCheckmarkCircleSharp /></span>Add appointment</li>
                        <li><span><IoCheckmarkCircleSharp /></span>Add appointment</li>
                    </ul>
                </GridItem>
                <GridItem>
                    <GridIcon><IoMan /></GridIcon>
                    <GridItemContent>
                        <h3>187 cm</h3>
                        <p>Height</p>
                    </GridItemContent>
                </GridItem>
                <GridItem>
                    <GridIcon><FaHeartbeat /></GridIcon>
                    <GridItemContent>
                        <h3>102 BPM</h3>
                        <p>Pulse</p>
                    </GridItemContent>
                </GridItem>
            </Grid>
        </div>
  );
}

export default Features;

const Grid = styled.div`
    display: grid;
    grid-gap: 20px;
    background-color: green;
    padding: 1rem;

    @media (min-width: 428px) and (max-width: 919px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    @media (max-width: 427px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

const GridItem = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 30px;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    ul {
        margin: 0;
        padding: 0;
        color: #616bbe;
        
        li {
            padding-top: .8rem;
            cursor: pointer;

            span {
                margin-right: .8rem;
            }
        }
    }
`;

const GridIcon = styled.span`
    padding: .8rem;
    border-radius: 50%;
    background: #95a4b7;
    font-size: 1.5rem;
`;

const GridItemContent = styled.div`
    padding-left: 1rem;
    line-height: .1;
    text-align: left;

    h3 {
        font-weight: bold;
        padding-top: .2rem;
    }

`;
