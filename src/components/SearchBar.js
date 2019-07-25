import React, { Component } from "react";
import { Navbar, NavbarBrand, Form, Input, Button } from "reactstrap";
import "./Search.css";


class SearchBar extends Component {

  state = {
    location: "",
  };

  onInputChange = (e) => {
    this.setState({
      location: e.target.value
    })
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onLocationSubmit(this.state.location);
    this.setState({
      location: ""
    })
  }

  onReset = () => {
    this.props.onReset();
    this.setState({
      location: ""
    })
  }

  render() {

    return (
      <Navbar color="dark" className="text-warning" expand="medium">
        <NavbarBrand onClick={this.onReset}> 
          Weather App
        </NavbarBrand>
        <Form onSubmit={this.onFormSubmit} inline>
          <Input
            bsSize="sm"
            id="SearchBar-input"
            type="search"
            name="search"
            placeholder="Location..."
            aria-label="Search for location"
            value={this.state.location}
            onChange={this.onInputChange}
          />
          <Button size="sm" type="submit">Search</Button>
        </Form>
      </Navbar> 
    )
  }
}

export default SearchBar;
