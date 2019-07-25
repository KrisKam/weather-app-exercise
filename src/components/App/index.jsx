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
    displayWeather: "block",
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
            displayWeather: "block", 
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

  onReset = () => {
    this.setState({
      locations: [],
      displayWeather: "none",
      result: null,
    })
  }

  render() { 

    const { locations, result, weather, display, displayWeather } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <SearchBar onLocationSubmit={this.onLocationSubmit} onReset={this.onReset}/>
        </header>
        {locations.length === 0 && result !== "none" &&
          <StartPage />
        } 
        {result === "none" && <NoResult />}
        <SearchResults locations={locations} onLocationSelect={this.onLocationSelect} display={display}/> 
        <CurrentWeather weather={weather} displayWeather={displayWeather}/>
      </div>
    )
  }
}

export default App;
