describe("form_test app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  // helper functions
  const nameInput = () => cy.get('input[name="name"]')
  const emailInput = () => cy.get('input[name="email"]')
  const passwordInput = () => cy.get('input[name="password"]')
  const checkbox = () => cy.get('[type="checkbox"]')
  const submitBtn = () => cy.get('button[id=submitBtn]')


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

  // test 5 - see if a user can check the agree to terms checkbox
  it("check checkbox", () => {
    checkbox().check()
  })

  // test 6 - check to see if user can submit the form
  it("submit button is enabled after entering all data", () => {
    nameInput().type("Chris")
    emailInput().type("cjram@gmail.com")
    passwordInput().type("password")
    checkbox().check()
    submitBtn().should("be.enabled")
  })

  // test 7 - check for form validation if an input is left empty
  it("submit button is disabled when an input does not meet criteria/is left empty", () => {
    nameInput().type("A")
    emailInput().type("cjram@gmail.com")
    passwordInput().type("password")
    checkbox().check()
    submitBtn().should("be.disabled")
  })






  //end of overall describe brackets below
})