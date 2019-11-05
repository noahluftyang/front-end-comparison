describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('/movies');
  });

  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });

  it('Does not do much!', () => {
    expect(true).to.equal(false);
  });
});
