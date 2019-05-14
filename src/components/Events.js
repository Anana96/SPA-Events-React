import React from "react";
import {Link} from 'react-router-dom'
   
export default class Events extends React.Component {
    render() {
      let events = this.props.events;
      return (
        <div className="container-events">
        { events.map(event => {
             return(   
              <div className ="event" key={event.id}>
                <img src={`${event.img}`}/>
                <h3>
                <Link to = {`/event/${event.id}`} >{event.title}</Link>
                </h3>
                <p>Дата: {event.date}</p>
              </div>
              );
            })
        }
        </div>
      );
    }
}