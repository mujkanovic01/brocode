import "./NavigationBar.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Routes from "../../../enums/routes.enum";

const NavigationBar = () => {
  return (
    <div className="NavigationBar">
      <div className="NavigationBar__Content">
        <div className="NavigationBar__Content__Logo">
          <p>BROCODE</p>
        </div>
        <div className="NavigationBar__Content__Links">
          <Link href="#" to="#">
            <p>Pitanja i Odgovori</p>
          </Link>
          <Link href="#" to="#">
            <p>Materijal</p>
          </Link>
        </div>
        <div className="NavigationBar__Content__Username">
          <p>John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
