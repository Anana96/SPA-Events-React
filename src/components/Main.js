import React from "react";
import Events from "./Events";
import {events} from "../event"

export default class Main extends React.Component {
    state = {
      events: events
    }

    render() {
      return (
        <React.Fragment>
           <h1>Новые мероприятия:</h1>
               <Events events = {this.state.events}/>
        </React.Fragment>
      );
    }
}
