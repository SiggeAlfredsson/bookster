import axios from "axios";
import type Book from "@/model/Book";

class BookService {
  fetchBooks(): Promise<Book[]> {
    return axios.get("http://localhost:3000/library/books")
    .then(response => {
      const books = response.data.books as Book[];
      books.forEach((book: Book) => {
        book.orderQuantity = 0;
      });
      return books;
    })
    .catch(error => {
      console.error(error);
      return [];
    });
  }

  searchBooks(query: string): Promise<Book[]> {
    return axios.get(`http://localhost:3000/library/books/search?q=${query}`)
    .then(response => {
      const books = response.data.books as Book[];
      books.forEach((book:Book) => {
        book.orderQuantity = 0;
      });
      return books;
    })
    .catch(error => {
      console.error(error);
      return [];
    });
    }

    // placeorder

  }


export const bookService = new BookService();