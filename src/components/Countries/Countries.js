import React, { Component } from "react";
import Country from "./Country";

export default class Countries extends Component {
  render() {
    const { countries } = this.props;

    return (
      <div>
        {countries.map((country) => {
          return <Country key={country.id} country={country} />;
        })}
      </div>
    );
  }
}
