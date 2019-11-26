describe('layout', () => {
  beforeEach(() => {
    // visit root baseURL
    cy.visit('/');
  });

  it('page contains "Open Source Community Africa"', () => {
    cy.contains('Open Source Community Africa');
  });
});
