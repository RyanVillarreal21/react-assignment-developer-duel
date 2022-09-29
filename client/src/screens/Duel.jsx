import { Fragment, useState } from "react";

import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import { duelUsers } from "./../services/userService";

const Duel = () => {
  const [data, setData] = useState([]);
  const [username1, setUsername1] = useState("");
  const [username2, setUsername2] = useState("");
  let user1 = [];
  let user2 = [];

  const foundUsers = async (e) => {
    e.preventDefault();
    setData(await duelUsers(username1, username2));
    console.log("user1" + user1);
    console.log("user2" + user2);
    console.log(data);
  };

  if (data.length > 1) {
    user1 = data[0];
    user2 = data[1];
  }

  const handleChange1 = (e) => {
    setUsername1(e.target.value);
    console.log(e.target.value);
  };

  const handleChange2 = (e) => {
    setUsername2(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Fragment>
      <Input
        type={"text"}
        p={"absolute"}
        t={"12.5%"}
        l={"32.5%"}
        placeholder="Username 1"
        onChange={handleChange1}
      />
      <Input
        type={"text"}
        p={"absolute"}
        t={"12.5%"}
        l={"53.8%"}
        placeholder="Username 2"
        onChange={handleChange2}
      />
      <Button
        className="submitDuel"
        h={"55px"}
        w={"180px"}
        br={"20px"}
        p={"absolute"}
        t={"15%"}
        l={"42.4%"}
        onClick={foundUsers}
      >
        Duel
      </Button>
      {user1["username"] || user2["username"] != null ? (
        <Fragment>
          <Card h={"500px"} w={"500px"} p={"absolute"} t={"40%"} l={"16.5%"}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "25px",
              }}
            >
              {user1["total-stars"] > user2["total-stars"] ? (
                <span style={{ color: " green" }}>Winner</span>
              ) : (
                <span style={{ color: " red" }}>Loser</span>
              )}
            </h2>
            <img
              src={user1["avatar-url"]}
              alt="avatar"
              style={{
                height: "100px",
                position: "absolute",
                right: "5%",
                borderRadius: "35px",
              }}
            />
            <ul style={{ listStyle: "none", paddingTop: "35px" }}>
              <li>Username: {user1["username"]}</li>
              <li>Name: {user1["name"] != null ? user1["name"] : "Empty"}</li>
              <li>
                Location:{" "}
                {user1["location"] != null ? user1["location"] : "Empty"}
              </li>
              <li style={{ fontStyle: "italic" }}>
                <span style={{ fontStyle: "normal" }}>Bio:</span>{" "}
                {user1["bio"] != null ? user1["bio"] : "Empty"}
              </li>
              <li>Titles: {user1["titles"]}</li>
              <li>
                Favorite Language:{" "}
                {user1["favorite-language"] != null
                  ? user1["favorite_language"]
                  : "Empty"}
              </li>
              <li>Public Repos: {user1["public-repos"]}</li>
              <li>Total Stars: {user1["total-stars"]}</li>
              <li>Highest Starred: {user1["highest-starred"]}</li>
              <li>Perfect Repos: {user1["perfect-repos"]}</li>
              <li>Followers: {user1["followers"]}</li>
              <li>Following: {user1["following"]}</li>
            </ul>
          </Card>
          <Card h={"500px"} w={"500px"} p={"absolute"} t={"40%"} r={"16.5%"}>
            <h2
              style={{
                textAlign: "center",
                fontSize: "25px",
              }}
            >
              {user2["total-stars"] > user1["total-stars"] ? (
                <span style={{ color: " green" }}>Winner</span>
              ) : (
                <span style={{ color: " red" }}>Loser</span>
              )}
            </h2>
            <img
              src={user2["avatar-url"]}
              alt="avatar"
              style={{
                height: "100px",
                position: "absolute",
                right: "5%",
                borderRadius: "35px",
              }}
            />
            <ul style={{ listStyle: "none", paddingTop: "35px" }}>
              <li>Username: {user2["username"]}</li>
              <li>Name: {user2["name"] != null ? user2["name"] : "Empty"}</li>
              <li>
                Location:{" "}
                {user2["location"] != null ? user2["location"] : "Empty"}
              </li>
              <li style={{ fontStyle: "italic" }}>
                <span style={{ fontStyle: "normal" }}>Bio:</span>{" "}
                {user2["bio"] != null ? user2["bio"] : "Empty"}
              </li>
              <li>Titles: {user2["titles"]}</li>
              <li>
                Favorite Language:{" "}
                {user2["favorite-language"] != null
                  ? user2["favorite_language"]
                  : "Empty"}
              </li>
              <li>Public Repos: {user2["public-repos"]}</li>
              <li>Total Stars: {user2["total-stars"]}</li>
              <li>Highest Starred: {user2["highest-starred"]}</li>
              <li>Perfect Repos: {user2["perfect-repos"]}</li>
              <li>Followers: {user2["followers"]}</li>
              <li>Following: {user2["following"]}</li>
            </ul>
          </Card>
        </Fragment>
      ) : (
        <h1>{data.tips}</h1>
      )}
      {/* {user2["username"] != null ? (
        <Card h={"500px"} w={"500px"} p={"absolute"} t={"40%"} r={"16.5%"}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "25px",
            }}
          >
            {user2["total-stars"] > user1["total-stars"] ? (
              <span style={{ color: " green" }}>Winner</span>
            ) : (
              <span style={{ color: " red" }}>Loser</span>
            )}
          </h2>
          <img
            src={user2["avatar-url"]}
            alt="avatar"
            style={{
              height: "100px",
              position: "absolute",
              right: "5%",
              borderRadius: "35px",
            }}
          />
          <ul style={{ listStyle: "none", paddingTop: "35px" }}>
            <li>Username: {user2["username"]}</li>
            <li>Name: {user2["name"] != null ? user2["name"] : "Empty"}</li>
            <li>
              Location:{" "}
              {user2["location"] != null ? user2["location"] : "Empty"}
            </li>
            <li style={{ fontStyle: "italic" }}>
              <span style={{ fontStyle: "normal" }}>Bio:</span>{" "}
              {user2["bio"] != null ? user2["bio"] : "Empty"}
            </li>
            <li>Titles: {user2["titles"]}</li>
            <li>
              Favorite Language:{" "}
              {user2["favorite-language"] != null
                ? user2["favorite_language"]
                : "Empty"}
            </li>
            <li>Public Repos: {user2["public-repos"]}</li>
            <li>Total Stars: {user2["total-stars"]}</li>
            <li>Highest Starred: {user2["highest-starred"]}</li>
            <li>Perfect Repos: {user2["perfect-repos"]}</li>
            <li>Followers: {user2["followers"]}</li>
            <li>Following: {user2["following"]}</li>
          </ul>
        </Card>
      ) : (
        <h1>{data.tips}</h1>
      )} */}
      {/* {user1["username"] || user2["username"] != null ? (
        <Fragment>
          <h2
            style={{
              postition: "absolute",
              top: "30%",
              left: "25%",
              fontSize: "25px",
            }}
          >
            {user1["total-stars"] > user2["total-stars"] ? (
              <span style={{ color: " green" }}>Winner</span>
            ) : (
              <span style={{ color: " red" }}>Loser</span>
            )}
          </h2>
          <h2
            style={{
              postition: "relative",
              bottom: "2000px;",
              right: "500 px",
              fontSize: "25px",
            }}
          >
            {user2["total-stars"] > user1["total-stars"] ? (
              <span style={{ color: " green" }}>Winner</span>
            ) : (
              <span style={{ color: " red" }}>Loser</span>
            )}
          </h2>
        </Fragment>
      ) : (
        <h1>{data.tips}</h1>
      )} */}
    </Fragment>
  );
};

export default Duel;
