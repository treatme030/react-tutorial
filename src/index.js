import React from 'react';
import ReactDom from 'react-dom';
import Book from './Book';
import './index.css';
import { data } from './books';


const BookList = () => {
  return (
    <section className="booklist">
      {
        data.map(book => <Book key={book.id} book={book}/>)
      }
    </section>
  );
}

ReactDom.render(<BookList/>, document.getElementById('root'));