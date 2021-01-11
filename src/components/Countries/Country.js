import React, { Component } from "react";

import { formatPopulation } from "../../helpers/formatHelper";
import css from "./country.module.css";

export default class Country extends Component {
  render() {
    const { name, flag, population } = this.props.country;

    return (
      <div className={css.countryContainer}>
        <img className={css.countryFlag} src={flag} alt={name} />
        <h3>{name}</h3>
        <p>População: {formatPopulation(population)}</p>
      </div>
    );
  }
}
