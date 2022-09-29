import { Fragment } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

import Button from "../components/Button";

const HomeStyle = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
  position: relative;
  top: 160px;
  left: 36.5%;
  overflow-x: hidden;
`;

const WelcomeStyle = styled.div`
  position: relative;
  top: 130px;
  text-align: center;
  font-size: 2em;
  overflow: hidden;
`;

const HomeText = styled.p`
  height: ${({ h }) => h};
  width: ${({ w }) => w};
  position: ${({ p }) => p};
  top: ${({ t }) => t};
  left: ${({ l }) => l};
  border: 1px;
  padding: 1px;
  text-align: center;
`;

const Vertical = styled.div`
  border-left: 2px solid black;
  height: 150px;
  position: absolute;
  top: 39%;
  left: 49.5%;
  &:hover {
    cursor: none;
  }
`;

const Home = () => {
  return (
    <Fragment>
      <Route path="/inspect" />
      <Route path="/duel" />
      <WelcomeStyle>
        <h1>Welcome to Dev-Duel</h1>
      </WelcomeStyle>
      <HomeStyle>
        <Link to={"/inspect"}>
          <Button
            //   onClick={(to = "/inspect")}
            className="inspectButton"
            h={"55px"}
            w={"150px"}
            br={"20px"}
          >
            Inspect
          </Button>
        </Link>
        <Link to={"/duel"}>
          <Button
            //   onClick={(to = "/duel")}
            className="duelButton"
            h={"55px"}
            w={"150px"}
            br={"20px"}
          >
            Duel
          </Button>
        </Link>
      </HomeStyle>
      <HomeText
        className="pInspect"
        h={"50px"}
        w={"200px"}
        p={"absolute"}
        t={"48%"}
        l={"38%"}
      >
        Look up a fellow dev's Github info
      </HomeText>
      <HomeText
        className="pDuel"
        h={"50px"}
        w={"140px"}
        p={"absolute"}
        t={"48%"}
        l={"52.5%"}
      >
        Pick two devs to go head to head
      </HomeText>
      <Vertical></Vertical>
    </Fragment>
  );
};

export default Home;
