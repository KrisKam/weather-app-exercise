import React from "react";
import { Container, ListGroup } from 'reactstrap';
import SearchItem from "./SearchItem";


const SearchResults = ({ locations, onLocationSelect, display }) => {

  if (locations.length > 0) {

    const searchResultsList = locations.map(location => {
      return (
        <SearchItem key={location.woeid} location={location} onLocationSelect={onLocationSelect}/>
      )
    });
     
    return (
      <Container className={`SearchResults-container-${display}`}>
        <h4>Search Results: {locations.length}</h4>
        <p>Choose a location from the list.</p>
        <ListGroup>
          {searchResultsList}
        </ListGroup>
        <p />
      </Container>
    );
  } else {
    return null;
  }
}

export default SearchResults;