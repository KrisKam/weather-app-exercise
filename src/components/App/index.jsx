import React, { Component } from "react";
import "./styles.css";

import SearchBar from "../SearchBar";
import StartPage from "../StartPage";
import SearchResults from "../SearchResults";
import CurrentWeather from "../CurrentWeather";
import NoResult from "../NoResult"

class App extends Component {

  state = {
    locations: [],
    selectedLocation: null,
    weather: null,
    display: "block",
    result: null,
  }

  onLocationSubmit = (query) => {
    return fetch(`/api/location/search/?query=${query}`)
      .then(res => res.json())
      .then(data => {
        if (data.length === 0) {
          this.setState({
            result: "none",
            weather: null
          })
        } else {
          this.setState({
            locations: data,
            display: "block", 
            weather: null,
            result: "data-received"
          })
        }
      })
      .catch(error => console.log(error))
  }

  onLocationSelect = (selectedLocation) => {
    const locationId = selectedLocation.woeid;
    return fetch(`/api/location/${locationId}/`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          selectedLocation,
          weather: data,
          display: "none"
        })
      })
      .catch(error => console.log(error))
  }

  render() { 

    return (
      <div className="App">
        <header className="App-header">
          <SearchBar onLocationSubmit={this.onLocationSubmit}/>
        </header>
        {this.state.locations.length === 0 && this.state.result !== "none" &&
          <StartPage />
        } 
        {this.state.result === "none" && <NoResult />}
        <SearchResults locations={this.state.locations} onLocationSelect={this.onLocationSelect} display={this.state.display}/> 
        <CurrentWeather weather={this.state.weather}/>
      </div>
    )
  }
}

export default App;
