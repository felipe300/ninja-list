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
      <header>My Reading List</header>
      <main>
        <div class="book-list"></div>
        <!-- book-list here -->
        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <!-- form here -->
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;
