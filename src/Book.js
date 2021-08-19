import React from 'react';

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
};

export default Book;