import React, { useEffect, useState } from "react";
import "./GithubID.css";

const GitID = () => {
  // const [id, setId] = useState("aya02200220");
  // const [name, setName] = useState("");
  // const [avatar, setAvatar] = useState("");
  const [gitData, setGitData] = useState({
    id: "aya02200220",
    name: "",
    avatar: "",
  });
  const ids = [
    "aya02200220",
    "kubilaycakmak",
    "cysnova",
    "Kanako-muff",
    "mari0514",
    "Matizin",
    "maxin73",
    "MayuHayakawa",
  ];
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)];
    setGitData((prevData) => ({ ...prevData, id: _id }));
    console.log("id:::", gitData.id);
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/${gitData.id}`)
      .then((res) => res.json())
      .then((apiData) => {
        console.log(apiData);
        // setName(data.name);
        // setAvatar(data.apiData);
        setGitData((prevData) => ({
          ...prevData,
          name: apiData.name,
          avatar: apiData.avatar_url,
        }));
      });
  }, [gitData]);

  return (
    <>
      <div className="git-container">
        <button onClick={getRandomId}>Change ID</button>
        <p>
          {/* ID:[ {id} ]'s name is [ {name} ] on GitHub. */}
          ID:[ {gitData.id} ]'s name is [ {gitData.name} ] on GitHub.
        </p>
      </div>
      <img src={gitData.avatar} alt="" />
      <hr />
    </>
  );
};

export default GitID;
