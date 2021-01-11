import React, { Component } from "react";

import { formatPopulation } from "../../helpers/formatHelper";
import css from "./header.module.css";

export default class Header extends Component {
  handleChange = (event) => {
    const { onInputChange } = this.props;

    onInputChange(event.target.value);
  };

  render() {
    const { filter, totalPopulation, totalCountries } = this.props;

    return (
      <div className={css.headerContainer}>
        <input
          placeholder="Pesquise um país"
          type="text"
          value={filter}
          className={css.input}
          onChange={this.handleChange}
        />
        <span>Quantidade de países: {totalCountries}</span>
        <span>População total: {formatPopulation(totalPopulation)}</span>
      </div>
    );
  }
}
