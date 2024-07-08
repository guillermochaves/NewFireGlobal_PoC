import { SalaryInsights } from "../pages/homePage";
const testData = require("../../fixtures/salaryInsights.json");
describe("Salary Insghts Tool", () => {
  const salaryInsights = new SalaryInsights();

    testData.forEach((search) => {
    it("Salary info for " + search.role + " in " + search.country, () => {
      cy.intercept(
        "GET",
        "https://api-prod.letsdeel.com/salary_insights/data"
      ).as("data");
      cy.visit("https://www.deel.com/salary-insights");
      cy.wait("@data");
      salaryInsights.selectRoleDdl(search.role);
      salaryInsights.selectCountryDdl(search.country);
      salaryInsights.clickSerachButton();
      salaryInsights.getResultsFilterBar().should("be.visible");
      salaryInsights.getSalaryTable().should('contain', `Senior ${search.role} compensation in ${search.country}`);
    });
  });

    it("Leave Role dropdown empty", () => {
      cy.intercept(
        "GET",
        "https://api-prod.letsdeel.com/salary_insights/data"
      ).as("data");
      cy.visit("https://www.deel.com/salary-insights");
      cy.wait("@data");
      salaryInsights.selectCountryDdl('Canada');
      salaryInsights.clickSerachButton();
      salaryInsights.getRoleErrorMsg().should("contain", "Role is required");
      salaryInsights.getResultsFilterBar().should("not.exist");
      salaryInsights.getSalaryTable().should("not.exist");
    });
});
