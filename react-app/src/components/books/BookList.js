import React, {Component} from 'react';
import { Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getBooks } from '../../actions/books';
import { connect } from 'react-redux';
import Book from './Book';

// TODO: Add boostrap card component
class BookList extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const { books } = this.props;
    return (
      <Row className="show-grid">
        {books.map((book, index) => <Book key={index} title={book.title} image={book.image} alt={book.image} link="#" />)}
      </Row>
    );
  }
}

BookList.propTypes = {
  getBooks: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps,  { getBooks })(BookList);
