import React from "react";
import {Link} from 'react-router-dom'
export default class Menu extends React.Component {
    render() {
      return (
        <div className = "menu">
          <Link to='/' className="menu-bar">Мероприятия</Link>
          <Link to='/concert' className="menu-bar">Концерты</Link>
          <Link to='/theatre' className="menu-bar">Театр</Link>
          <Link to='/about' className="menu-bar">О нас</Link>
        </div>
      );
    }
  }