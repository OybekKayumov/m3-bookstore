import { useSelector } from 'react-redux';
import './pages.css';
import ItemBook from './elements';
import Form from './ListForm';

const Books = () => {
  const bookList = useSelector((state) => state.booksReducer);

  return (
    <section className="book-list-container">
      <section className="book-list">
        {
          bookList.map((book) => (
            <ItemBook
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              categories={book.categories}
            />
          ))
        }
      </section>
      <Form />
    </section>
  );
};

export default Books;
