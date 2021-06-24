import React, { useState } from "react";
import styled from "styled-components";
import Info from "./subtabs/info";
import Diet from "./subtabs/diet";
import Features from "./subtabs/features";

function Tab() {
  const [tab, setTab] = useState(Info);
  return (
    <Tabs>
      <TabHeader>
        <TabHeading onClick={() => setTab(Info)}>Info</TabHeading>
        <TabHeading onClick={() => setTab(Diet)}>diet</TabHeading>
        <TabHeading onClick={() => setTab(Features)}>Features</TabHeading>
      </TabHeader>
      <TabContent>{tab}</TabContent>
    </Tabs>
  );
}

export default Tab;

const Tabs = styled.div`
  
`;

const TabHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 2rem;
`;

const TabHeading = styled.div`
  margin-right: 3rem;
  text-transform: capitalize;
  font-weight: bold;
  cursor: pointer;
  color: #95a4b7;
  line-height: 1.7;

  &:hover {
    color: #261362;
    border-bottom: 1px solid #261362;
    border-width: 3px;
  }

  @media (min-width: 428px) and (max-width: 919px) {
    margin-right: 1.5rem;
    font-size: 1rem;
  }
`;

const TabContent = styled.div``;
