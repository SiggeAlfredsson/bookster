
// orderQuantity is not from the api, default is always 0. It specifies the value of how many books the user wanted to order when placing a order.

interface Book {
  title: string;
  author: string;
  quantity: number;
  orderQuantity: number;
} 

export default Book;