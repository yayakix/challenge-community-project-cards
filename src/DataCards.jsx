import React from "react";
import CardOutline from "./CardOutline";
import cardData from "./carddata";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function MakeCard(props) {
  return (
    <CardOutline
      className="outline"
      userid={props.userid}
      name={props.name}
      desc={props.desc}
      userInterest={props.userInterest}
      time={props.time}
      creator={props.creator}
    />
  );
}
// grid doesnt work here
function DataCards() {
  return (
    <div className="app">
      <dl className="dictionary">{cardData.map(MakeCard)}</dl>
    </div>
  );
}

export default DataCards;
