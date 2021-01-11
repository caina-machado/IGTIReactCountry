import React, { Component } from "react";
import Countries from "./components/Countries/Countries";
import Header from "./components/Header/Header";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      countries: [],
      filteredCountries: [],
      filter: "",
      totalPopulation: 0,
    };
  }

  async componentDidMount() {
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const json = await response.json();

    const allCountries = json.map((country) => {
      const { numericCode, name, flag, population } = country;
      return {
        id: numericCode,
        name: name,
        flag: flag,
        population: population,
      };
    });

    this.setState({
      countries: allCountries,
      filteredCountries: allCountries,
      totalPopulation: this.getTotalPopulation(allCountries),
    });
  }

  handleChange = (value) => {
    const { countries } = this.state;

    this.setState({
      filter: value,
    });

    const filteredCountries = countries.filter((country) => {
      return country.name.toLowerCase().includes(value);
    });

    const populationResult = this.getTotalPopulation(filteredCountries);

    this.setState({
      filteredCountries: filteredCountries,
      totalPopulation: populationResult,
    });
  };

  getTotalPopulation = (filteredCountries) => {
    return filteredCountries.reduce((sum, item) => {
      return (sum += parseInt(item.population));
    }, 0);
  };

  render() {
    const { filteredCountries, filter, totalPopulation } = this.state;

    return (
      <div>
        <Header
          onInputChange={this.handleChange}
          filter={filter}
          totalPopulation={totalPopulation}
          totalCountries={filteredCountries.length}
        />
        <Countries countries={filteredCountries} />
      </div>
    );
  }
}
