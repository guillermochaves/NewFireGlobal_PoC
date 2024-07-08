
context("GET /books", () => {
    it("gets a list of books", () => {
        cy.request("GET", "https://demoqa.com/BookStore/v1/Books").then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.books).length.to.be.greaterThan(1)
        })
    })

    it('Get an spectific book', () => {
        cy.getBoookrequestId().then((id) => {
            cy.request("GET", `https://demoqa.com/BookStore/v1/Book?ISBN=${id}`).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('isbn', id)
            })
        })
    });
})
