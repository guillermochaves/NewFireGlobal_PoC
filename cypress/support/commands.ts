declare namespace Cypress {
  interface Chainable {
    getBoookrequestId: typeof getBoookrequestId;
  }
}

/**
 *
 * @returns book isbn
 */
function getBoookrequestId() {
  return cy
    .request({
      method: "GET",
      url: "https://demoqa.com/BookStore/v1/Books",
    })
    .then((response) => {
      return response.body.books[0].isbn;
    });
}

Cypress.Commands.add("getBoookrequestId", getBoookrequestId);

