import React, { useEffect, useState } from "react";
import "./GithubID.css";

const GitID = () => {
  const [id, setId] = useState("aya02200220");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
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
    setId(_id);
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setName(data.name);
        setAvatar(data.avatar_url);
      });
  }, [id]);

  return (
    <>
      <div className="git-container">
        <button onClick={getRandomId}>Change ID</button>
        <p>
          ID:[ {id} ]'s name is [ {name} ] on GitHub.
        </p>
      </div>
      <img src={avatar} alt="" />
      <hr />
    </>
  );
};

export default GitID;
