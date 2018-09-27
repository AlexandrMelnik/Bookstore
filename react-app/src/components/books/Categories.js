import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/categories';
import './Categories.css';

class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <ListGroup componentClass="div">
        {categories.map((category, index) => <Link key={ index } className="list-group-item menu" to={'/categories/' + category.id } > { category.name } </Link>)}
      </ListGroup>
    );
  }
}

Categories.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

export default connect(mapStateToProps, { fetchCategories })(Categories);
