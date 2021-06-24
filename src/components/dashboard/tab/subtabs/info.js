import React from "react";
import styled from "styled-components";
import { IoBagAdd, IoMan, IoCheckmarkCircleSharp } from "react-icons/io5";
import { RiMoonClearFill } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";

function Info() {
  return (
        <div>
            <Grid>
                <GridItem style={{
                  background: "#f5f6fb"
                }}>
                    <GridIcon><IoBagAdd /></GridIcon>
                    <GridItemContent>
                        <h4>65 kg</h4>
                        <p>Weight</p>
                    </GridItemContent>
                </GridItem>
                <GridItem style={{
                  background: "#e66a7e",
                  opacity: ".5"
                }}>
                    <GridIcon style={{
                      color: "#e66a7e"
                    }}>
                        <RiMoonClearFill />
                    </GridIcon>
                    <GridItemContent>
                        <h4>7h 30m</h4>
                        <p>Sleep</p>
                    </GridItemContent>
                </GridItem>
                <GridItem style={{
                  gridColumn: 3,
                  gridRow: "1 / span 2",
                  textAlign: "left",
                  background: "#f5f6fb"
                }}>
                    <ul>
                        <h2>Notes</h2>
                        <li><span><IoCheckmarkCircleSharp /></span>Add appointment</li>
                        <li><span><IoCheckmarkCircleSharp /></span>Add appointment</li>
                        <li><span><IoCheckmarkCircleSharp /></span>Add appointment</li>
                        <li><span><IoCheckmarkCircleSharp /></span>Add appointment</li>
                    </ul>
                </GridItem>
                <GridItem style={{
                  background: "#e66a7e",
                  opacity: ".5"
                }}>
                    <GridIcon style={{
                      color: "#e66a7e"
                    }}>
                        <IoMan />
                    </GridIcon>
                    <GridItemContent>
                        <h4>187 cm</h4>
                        <p>Height</p>
                    </GridItemContent>
                </GridItem>
                <GridItem style={{
                  background: "#616bbe",
                  color: "white"
                }}>
                    <GridIcon><FaHeartbeat /></GridIcon>
                    <GridItemContent>
                        <h4>102 BPM</h4>
                        <p>Pulse</p>
                    </GridItemContent>
                </GridItem>
            </Grid>
        </div>
  );
}

export default Info;

const Grid = styled.div`
    display: grid;
    grid-gap: 20px;
    padding: 0;

    @media (max-width: 427px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

const GridItem = styled.div`
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #261362;

    @media (min-width: 320px) and (max-width: 427px) {
        padding: 30px 0;
    }

    ul {
        margin: 0;
        padding: 1rem 0;
        color: #261362;
        
        li {
            padding-top: .8rem;
            cursor: pointer;

            @media (min-width: 746px) and (max-width: 1024px) {
                font-size: 13px;
            }

            span {
                margin-right: .8rem;

                @media (min-width: 746px) and (max-width: 1024px) {
                    margin-right: .4rem;
                }
            }
        }
    }
`;

const GridIcon = styled.span`
    padding: .8rem;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.1);
    font-size: 1.5rem;

    @media (min-width: 746px) and (max-width: 1024px) {
        font-size: 1rem;
    }
`;

const GridItemContent = styled.div`
    padding-left: 1rem;
    line-height: .1;
    text-align: left;

    h4 {
        font-weight: bold;
        padding-top: .2rem;
    }

`;
