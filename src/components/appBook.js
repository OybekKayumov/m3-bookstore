import './pages.css';
import ItemBook from './elements';
import Form from './ListForm';

const Books = () => (
  <section className="book-list-container">
    <section className="book-list">
      <ItemBook
        title="The Adventures of Tom Sawyer"
        author="Mark Twain"
        categories="Novell"
      />
      <ItemBook
        title="One Morning in Maine"
        author="Robert McCloskey"
        categories="Fairytale"
      />
    </section>
    <Form />
  </section>
);

export default Books;
