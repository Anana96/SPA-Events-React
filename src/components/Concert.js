import React from "react";
import {events} from "../event";
import Events from "./Events";

export default class Concert extends React.Component {
    state = {
      events: events.filter(event => event.type==='concert')
    }

    render() {
      return (
        <React.Fragment>
          <h1>Концерты:</h1>
          <Events events = {this.state.events}/>
        </React.Fragment>
      );
    }
}