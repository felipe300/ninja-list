// WARNING:
// "html" you will have higlights, but will get an error: "html is not defined"
// "/*html*/" you will solve the error, but will lost higlights
const createHomepageTemplate = () => /*html*/ `
  <!doctype html>
  <html lang="en">
    <head>
      <title>My reading list</title>
      <script
        src="https://unpkg.com/htmx.org@2.0.1"
        integrity="sha384-QWGpdj554B4ETpJJC9z+ZHJcA/i59TyjxEPXiiUgN2WmTyV5OEZWCD6gQhgkdpB/"
        crossorigin="anonymous"
      ></script>
      <link rel="stylesheet" href="/styles.css" />
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>
      <main>
        <div class="book-list">
          <button
            hx-get="/books"
            hx-swap="innerHTML"
            hx-target=".book-list"
            hx-trigger="dblclick"
          >
            Show books
          </button>
          <!-- HERE -->
        </div>
        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <form
            hx-post="/books"
            hx-on::after-request="document.querySelector('form').reset()"
            hx-target=".book-list ul"
            hx-swap="beforeend"
          >
            <input type="text" name="title" placeholder="title" required />
            <input type="text" name="author" placeholder="author" required />
            <button>Add Book</button>
          </form>
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;
