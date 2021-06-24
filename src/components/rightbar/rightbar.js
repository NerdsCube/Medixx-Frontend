import React from "react";
import styled from "styled-components";
import { GiLungs } from "react-icons/gi";
import { FaTooth } from "react-icons/fa";
import { CgPill } from "react-icons/cg";
import { BiChevronRight } from "react-icons/bi";
import Calender from "../calender/calender";

const RightBar = () => <Container>
    <div><Calender /></div>
    <Card>
        <CardBox>
            <CardHeader>
                <CardTitle>
                    <CardIcon><GiLungs style={{ }} /></CardIcon>
                    <h4>Pulmonologist</h4>
                </CardTitle>
                <CardIcon><BiChevronRight /></CardIcon>
            </CardHeader>
            <CardBody>
                <CardText>10:00-11:00</CardText>
                <CardText>Dr. Cameron Williamson</CardText>
            </CardBody>
        </CardBox>
        <CardBox style={{ background: "#f5f6fb", color: "#261362" }}>
            <CardHeader style={{ color: "#616bbe" }}>
                <CardTitle>
                    <CardIcon><FaTooth style={{ }} /></CardIcon>
                    <h4>Dentist</h4>
                </CardTitle>
                <CardIcon><BiChevronRight /></CardIcon>
            </CardHeader>
            <CardBody style={{ color: "#616bbe" }}>
                <CardText>15:00-15:30</CardText>
                <CardText>Dr. Daniel Rusell</CardText>
            </CardBody>
        </CardBox>
        <h3 style={{ color: "#616bbe" }}>Your treatment</h3>
        <CardBox style={{ background: "#f5f6fb", color: "#261362" }}>
            <CardHeader style={{ color: "#616bbe" }}>
                <CardTitle>
                    <CardIcon><CgPill style={{ }} /></CardIcon>
                    <h4>Antibiotic</h4>
                </CardTitle>
                <CardIcon><BiChevronRight /></CardIcon>
            </CardHeader>
            <CardBody style={{ color: "#616bbe" }}>
                <CardText>One tablet after a meal</CardText>
            </CardBody>
        </CardBox>
    </Card>
</Container>;

export default RightBar;

const Container = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-between;

    @media (min-width: 320px) and (max-width: 427px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    } 
`;

const Card = styled.div`
    margin-top: 1rem;
`;

const CardBox = styled.div`
    background: #616bbe;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    width: 250px;

    @media (min-width: 428px) and (max-width: 1024px) {
       width: 200px;
    }
`;

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: .5rem;
    color: white;
`;

const CardTitle = styled.div`
    display: flex;
    justify-content: flex-start;

    h4 {
        line-height: 0;
        margin: .8rem .4rem;
    }
`;

const CardIcon = styled.span`
    
`;

const CardBody = styled.div`
    line-height: .5;
    color: white;
    margin: 0 2.38rem .5rem;

    @media (min-width: 428px) and (max-width: 1024px) {
        line-height: 1;
        margin: 0 1.5rem .3rem;
    }

    @media (min-width: 428px) and (max-width: 919px) {
      line-height: 1;
    } 
`;

const CardText = styled.p`
    font-size: .8rem;
    padding: .1rem .3rem;
`;
