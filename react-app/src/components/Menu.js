import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import './Menu.css';

const CustomComponent = props => {
  return (
    <Link className="list-group-item menu" to={props.url}>
      {props.title}
    </Link>
  );
}

// TODO: ...
const Menu = () => (
  <ListGroup componentClass="div">
    <CustomComponent url="/" title="Authors" />
    <CustomComponent url="/" title="Top" />
    <CustomComponent url="/" title="Popular" />
    <CustomComponent url="/" title="Favorites" />
  </ListGroup>
);

export default Menu;
