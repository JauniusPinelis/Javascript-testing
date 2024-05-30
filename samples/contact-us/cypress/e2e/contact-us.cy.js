describe('Contact us display', () => {

  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  })

  it('displays contact us heading', () => {
    const element = cy.contains("h1", "Contact Us")

    element.should("be.visible")
  })

  it('displays the form with empty fields', () => {
    cy.contains("label", "Name:").should("be.visible")
    cy.get("#name").should("be.visible").and("have.value", "")

    cy.contains("label", "Email:").should("be.visible")
    cy.get("#email").should("be.visible").and("have.value", "")

    cy.contains("label", "Subject:").should("be.visible")
    cy.get("#subject").should("be.visible").and("have.value", "")

    cy.contains("label", "Message:").should("be.visible")
    cy.get("#message").should("be.visible").and("have.value", "")
  })

  it('displays submit button', () => {
    const element = cy.contains("button", /submit/i)

    element.should("be.visible")
  })
})

describe("Contact us functionality", () => {
  it("Customer is able to fill contact us form", () => {
    // Customer goes to the page
    cy.visit('http://localhost:5173/')
    // Fill the form
    cy.get("#name").type("jaunius")

    cy.get("#email").type("jauniuspinelis@gmail.com")

    cy.get("#subject").type("hello")

    cy.get("#message").type("hello again")
    // Presses the button
    cy.contains("button", /submit/i).click()
    // Sees 'Thank for sending' label
    cy.contains("Thank you for your message! We will get back to you soon.").should("be.visible")
  })
})