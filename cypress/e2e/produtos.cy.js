describe('Testes de API RESTful lista de produtos', () => {
  it('Deve retornar a lista de produtos', () => {
    cy.viewport(1280, 720)

      cy.api({
        method: 'GET',
        url: 'https://fakestoreapi.com/products',
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response.body))
      });  
  });

  it('Cria um novo produto', () => {
    cy.api({
      method: 'POST',
      url: 'https://fakestoreapi.com/products',
      body: {
        id: 21,
        title: "Natura - Eco-Friendly Backpack, Fits 17 Laptops",
        price: 129.99,
        description: "A sustainable and stylish backpack for your daily adventures. Keep your laptop (up to 17 inches) secure in the cushioned compartment, along with your essentials.",
        category: "accessories",
        image: "https://fakestoreapi.com/img/new-backpack-image.jpg",
        rating: {
          rate: 4.5,
          count: 250
      }
    }
    }).then((response) => {
      console.log(response.body);
      expect(response.status).to.eq(200);
      expect(response.body).to.include({
        id: 21,
        title: "Natura - Eco-Friendly Backpack, Fits 17 Laptops",
        price: 129.99,
        description: "A sustainable and stylish backpack for your daily adventures. Keep your laptop (up to 17 inches) secure in the cushioned compartment, along with your essentials.",
        category: "accessories",
        image: "https://fakestoreapi.com/img/new-backpack-image.jpg",
      });
    });
  });

  
});
