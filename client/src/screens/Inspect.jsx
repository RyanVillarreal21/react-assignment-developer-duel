import { Fragment, useState } from "react";

import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import { inspectUser } from "./../services/userService";

const Inspect = () => {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");

  const foundUser = async (e) => {
    e.preventDefault();
    setData(await inspectUser(username));
    console.log(data);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  console.log(username);

  return (
    <Fragment>
      <Input
        type={"text"}
        p={"absolute"}
        t={"12.5%"}
        l={"43%"}
        placeholder="Username"
        onChange={handleChange}
      />
      <Button
        className="submitInspect"
        h={"55px"}
        w={"180px"}
        br={"20px"}
        p={"absolute"}
        t={"15%"}
        l={"42.35%"}
        onClick={foundUser}
      >
        Inspect
      </Button>
      {data.username != null ? (
        <Card h={"500px"} w={"500px"} p={"absolute"} t={"40%"} l={"36.5%"}>
          <img
            src={data["avatar-url"]}
            alt="avatar"
            style={{
              height: "100px",
              position: "absolute",
              right: "5%",
              borderRadius: "35px",
            }}
          />
          <ul style={{ listStyle: "none", paddingTop: "35px" }}>
            <li>Username: {data["username"]}</li>
            <li>Name: {data["name"] != null ? data["name"] : "Empty"}</li>
            <li>
              Location: {data["location"] != null ? data["location"] : "Empty"}
            </li>
            <li style={{ fontStyle: "italic" }}>
              <span style={{ fontStyle: "normal" }}>Bio:</span>{" "}
              {data["bio"] != null ? data["bio"] : "Empty"}
            </li>
            <li>Titles: {data["titles"]}</li>
            <li>
              Favorite Language:{" "}
              {data["favorite-language"] != null
                ? data["favorite_language"]
                : "Empty"}
            </li>
            <li>Public Repos: {data["public-repos"]}</li>
            <li>Total Stars: {data["total-stars"]}</li>
            <li>Highest Starred: {data["highest-starred"]}</li>
            <li>Perfect Repos: {data["perfect-repos"]}</li>
            <li>Followers: {data["followers"]}</li>
            <li>Following: {data["following"]}</li>
          </ul>
        </Card>
      ) : (
        <h1>{data.tips}</h1>
      )}
      ;
    </Fragment>
  );
};

export default Inspect;
