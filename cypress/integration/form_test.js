describe("form_test app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  // helper functions
  const nameInput = () => cy.get('input[name="name"]')
  const emailInput = () => cy.get('input[name="email"]')
  const passwordInput = () => cy.get('input[name="password"]')


  // test 1 - name input
  it("get the name input and type a name in", () => {
    nameInput()
    .should("have.value", "")
    .type("this is the first test")
  })

  // test 2 -  check to see if value matches what you entered
  it("name input has value entered", () => {
    nameInput()
    .should("have.value", "")
    .type("this is the first test")
    .should("have.value", "this is the first test")
  })

  // test 3 - get email input and type an email address inside
  it("get email input and enter address into it", () => {
    emailInput()
    .type("cjram@gmail.com")
  })

  // test 4 - get password input and type a password inside
  it("get password input and enter a password", () => {
    passwordInput()
    .type("password")
  })





  //end of overall describe brackets below
})