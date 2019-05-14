import React from "react";
import {events} from "../event"



export default class Event extends React.Component {
    state = {
      event: events.find(event => event.id === Number(this.props.match.params.id))
    }

    render() {
      let event = this.state.event, history = this.props.history;
      return (
        <React.Fragment>
           <button className="button-back" onClick={history.goBack}>Назад</button>
           <div className="container-event">
              <h2>{event.title}</h2>
              <img src={`${event.img}`}/>
              <p> Местоположение: {event.place}</p>
              <p> Цена: {event.price}</p>
              <p> {event.description}</p>
           </div>
        </React.Fragment>
      );
    }
}