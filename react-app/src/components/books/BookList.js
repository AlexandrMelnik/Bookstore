import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getBooks } from '../../actions/books';
import { connect } from 'react-redux';

// TODO: Add boostrap card component
class BookList extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const { books } = this.props;
    return (
      <div>
        {books.map((book, index) => <div key={index}>{book.title} <img src={book.image} /></div>)}
      </div>
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
