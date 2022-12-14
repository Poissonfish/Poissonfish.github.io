# Website layout

Here is an example of how you could use TypeScript to create a landing page website with a three-column layout at the bottom. This code defines a class called Website that has a title property and a render method that generates the HTML for the website and adds it to the page

```typescript

class Website {
  title: string;

  constructor(title: string) {
    this.title = title;
  }

  render() {
    // create the HTML for the title of the website
    const titleHtml = `<h1>${this.title}</h1>`;

    // create the HTML for the three columns
    const column1Html = `<div class="column">Column 1</div>`;
    const column2Html = `<div class="column">Column 2</div>`;
    const column3Html = `<div class="column">Column 3</div>`

    // create the HTML for the three-column layout
    const columnsHtml = `<div class="columns">${column1Html}${column2Html}${column3Html}</div>`;

    // create the HTML for the footer
    const footerHtml = `<footer>Copyright 2021</footer>`;

    // create the HTML for the entire website
    const html = `<div class="container">${titleHtml}${columnsHtml}${footerHtml}</div>`;

    // write the HTML to the page
    document.write(html);
  }
}

const myWebsite = new Website("My Website");
myWebsite.render();
```
