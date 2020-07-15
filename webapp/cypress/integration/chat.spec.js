describe('Chat View', () => {
  it('Does write a text, its render on the messages list and the input is being emptied', () => {
    cy.visit('https://gyss.github.io/basic-chat/')
    cy.get('input').type('Hello world')
    cy.get('[data-testid=send-button]').click()

    cy.contains('Hello world')
    cy.get('input').should('have.value', '')
  })

  it('Does enables ctrl+enter option in Settings and writes a message with ctrl+enter', () => {
    cy.visit('https://gyss.github.io/basic-chat/')

    cy.get('[href="/basic-chat/settings"]').click()
    cy.url().should('include', '/settings')
    cy.get('[value="on"]').click()

    cy.get('[href="/basic-chat/"]').click()
    cy.get('input').type('Hello{ctrl}{enter}')
    cy.contains('Hello')
  })
})
