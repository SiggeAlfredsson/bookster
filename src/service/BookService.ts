// All code that have with books to do. Every api request to the server about BOOK is in here.
// Could move interface to model instead of here

import axios from "axios";
import type Book from "@/model/Book";

interface EditBookPayload {
  previous: {
    title: string;
  };
  current: {
    title?: string;
    author?: string;
    quantity?: number;
  };
}

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

    placeOrder(book: Book) {
      return axios.post("http://localhost:3000/library/user/books", {
        title: book.title,
        quantity: book.orderQuantity
      }, {
        headers: {
          Authorization: localStorage.getItem("accessToken")
        }})
        .then (response => {
          const books = response.data.context.books as Book[];
          books.forEach((book:Book) => {
            book.orderQuantity = 0;
          })
          
          return books;
        })
        .catch(error => {
          console.error(error);
          return [];
        })
    }

    editBook(oldBook: Book, updatedBook: Book) {
      console.log(oldBook);
      const payload: EditBookPayload = {
        previous: {
          title: oldBook.title
        },
        current: {}
      };
  
      if (updatedBook.title) {
        payload.current.title = updatedBook.title;
      }
  
      if (updatedBook.author) {
        payload.current.author = updatedBook.author;
      }
  
      if (updatedBook.quantity) {
        payload.current.quantity = updatedBook.quantity;
      }
  
      return axios
        .put("http://localhost:3000/admin/books", payload, {
          headers: {
            Authorization: localStorage.getItem("accessToken")
          }
        })
        .then(response => {
          const updatedBooks = response.data.books as Book[];
          return updatedBooks;
        })
        .catch(error => {
          console.error(error);
          return [];
        });
    }

    addBook(book: Book) {
      console.log("quantity= :"+book.quantity)
      return axios.post("http://localhost:3000/admin/books", {
        title: book.title,
        author: book.author,
        quantity: book.quantity
      }, {
        headers: {
          Authorization: localStorage.getItem("accessToken")
        }})
        .then (response => {
          const books = response.data.context.books as Book[];
          books.forEach((book:Book) => {
            book.orderQuantity = 0;
          })
          
          return books;
        })
        .catch(error => {
          console.error(error);
          return [];
        })
    }

    deleteBook(book: Book) {
      return axios.delete("http://localhost:3000/admin/books", {
        headers: {
          Authorization: localStorage.getItem("accessToken")
        },
        data: {
          title: book.title
        }
      })
    .then (response => {
      const books = response.data.context.books as Book[];

      return books;
    })
    .catch(error => {
      console.error(error);
      return [];
    })
        }

  }


export const bookService = new BookService();