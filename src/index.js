import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41f14L74oVL._AC_SX184_.jpg',
    title: 'Sugar Town Queens',
    author: 'Mella Nunn',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51x59t7BK1L._AC_SX184_.jpg',
    title: 'And They Lived Happily Ever After',
    author: 'Therese Beharrie',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/41yMNepSxpL._AC_SX184_.jpg',
    title: 'Eleanor & Park',
    author: 'Rainbow Rowell',
  },
  {
    id: 4,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51r+ad5lrkL._AC_SX184_.jpg',
    title: 'Fat Chance, Charlie Vega',
    author: 'Crystal Maldonado',
  },
];


const BookList = () => {
  return (
    <section className="booklist">
      {
        books.map(book => <Book key={book.id} book={book}/>)
      }
    </section>
  );
}

const Book = ({ book }) => {
  //props는 object
  const { img, title, author } = book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}

ReactDom.render(<BookList/>, document.getElementById('root'));