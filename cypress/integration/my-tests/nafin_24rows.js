describe('Simulación NAFIN', () => {
    it("Debe obtener 24 columnas", () => {
        cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do')
        cy.get('#dispDate')
            .clear().type('05/05/2020')
        cy.get('#btn')
            .click()
        cy.get('#creditAmount')
            .clear().type('20000')
        cy.get('#paymentMethod')
            .select('1')
        cy.get('#period')
            .select('2')
        cy.get('#rate')
            .clear().type('15.0')
        cy.contains('Calcular')
            .click()
        cy.get('#encuestaWindow')
            .then($modal => {
                if($modal.is(':visible')){
                    cy.get('#shortEncuestaNafin-close').click()
                }
            })
        cy.get('#resultadosSimulador')
            .find('tbody').find('tr').should('have.length', 24)
    })
})