import BOOkS_DATA from "../data/data.js";
import createBookTemplate from "./book.js";
const listOfBooks = () => /*html*/ `
  <ul>
    ${BOOkS_DATA.map((book) => createBookTemplate(book)).join("")}
  </ul>
`;

export default listOfBooks;
