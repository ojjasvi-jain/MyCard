import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card" style={{ backgroundColor: "#1D2226" }}>
        <Avatar />
        <div className="data">
          <Intro />
          {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
          <SkillList />
        </div>
      </div>
    </>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://media.licdn.com/dms/image/v2/D4D2DAQF0EhdA3slrxg/profile-treasury-image-shrink_480_480/profile-treasury-image-shrink_480_480/0/1708534594846?e=1724342400&v=beta&t=Wv6pmhVpxW_1rueq6-EZHBs8pDV2OvgWI1AkqdpxJHs"
      alt="Ojjasvi Jain"
    />
  );
}

function Intro() {
  return (
    <div style={{ color: "#FFF" }}>
      <h1>Ojjasvi Jain</h1>
      <p>
        Passionate about learning and implementing new things! I love exploring
        new technologies and leveraging them to solve real-life problems
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Svelte" emoji="👶" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

export default App;
