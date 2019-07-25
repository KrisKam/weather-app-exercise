import React from "react";
import { ListGroupItem } from 'reactstrap';

const SearchItem = ({ location, onLocationSelect }) => {

  return (
    <ListGroupItem action woeid={location.woeid} onClick={() => onLocationSelect(location)}>
      {location.title}
    </ListGroupItem>
  )
}

export default SearchItem;