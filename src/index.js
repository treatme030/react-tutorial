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
  const { img, title, author } = book;

  const clickHandler = (e) => {
    console.log(e); //이벤트
    console.log(e.target); //이벤트가 일어나는 요소
    // alert('Hi');
  }

  const complexExample = (author) => {
    console.log(author);
  }
  return (
    <article className="book" onMouseOver={() => {
      console.log(title);
    }}>
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={(e) => clickHandler(e)}>example</button>
      <button type="button" onClick={() => complexExample(author)}>more complex example</button>
    </article>
  );
}

ReactDom.render(<BookList/>, document.getElementById('root'));