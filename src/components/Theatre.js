import React from "react";
import {events} from "../event";
import Events from "./Events";

export default class Theatre extends React.Component {
    state = {
       events: events.filter(event => event.type ==='theatre')
    }

    render() {
      return (
        <React.Fragment>
            <h1>Театральные постановки:</h1>
            <Events events = {this.state.events}/>
        </React.Fragment>     
      );
    }
  }