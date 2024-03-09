import React from "react";
import "./App.css";
import data from "./CollegeBasketballTeams.json";

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

function Welcome() {
  return (
    <div>
      <h1>This site helps you get to know march madness teams.</h1>
    </div>
  );
}

function TeamList() {
  return (
    <div>
      {data.map((data, i) => (
        <Team {...data} />
      ))}
    </div>
  );
}

class Team extends React.Component<TeamProps> {
  render() {
    const { school, name, city, state } = this.props;

    return (
      <div className="team-card" key="i">
        <h2>{school}</h2>
        <h3>The {name}</h3>
        <h4>
          {city}, {state}
        </h4>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
