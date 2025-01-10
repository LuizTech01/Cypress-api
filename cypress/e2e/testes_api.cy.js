describe('Testes de API RESTful lista de produtos', () => {
  
  it('Deve retornar a lista de produtos com GET', () => {
    cy.viewport(1280, 720)

    cy.api({
        method: 'GET',
        url: 'https://fakestoreapi.com/products',
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response.body))
      });  
  });

  it('Deve retornar a categoria dos produtos com GET', () => {
    cy.viewport(1280, 720)

    cy.api({
        method: 'GET',
        url: 'https://fakestoreapi.com/products/categories',
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response.body))
      });  
  });
  
  it('Deve retornar so uma categoria dos produtos com GET', () => {
    cy.viewport(1280, 720)

    cy.api({
        method: 'GET',
        url: 'https://fakestoreapi.com/products/category/jewelery',
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response.body))
      });  
  });

  it('Deve retornar so 5 produtos com GET', () => {

      cy.api({
        method: 'GET',
        url: 'https://fakestoreapi.com/products?limit=5',
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response.body))
      });  
  });

  it('Cria um novo produto com POST', () => {
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

  it('Atualiza dados com PUT', () => {
    cy.viewport(1280, 720)

    cy.api({
        method: 'PUT',
        url: 'https://fakestoreapi.com/products/1',
        body: {
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
      });
    });

  it('Deve atualizar parcialmente o produto com PATCH', () => {
    cy.viewport(1280, 720)

    cy.api({
        method: 'PATCH',
        url: 'https://fakestoreapi.com/products/1',
        body: {
          price: 99.99,
          title: "Updated Title - Backpack"
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response.body));
        expect(response.body).to.include({
          price: 99.99,
          title: "Updated Title - Backpack"
        });
        expect(response.body.id).to.eq(1);
      });
    });

  it('Deve deletar um produto com DELETE', () => {
    cy.viewport(1280, 720)

    cy.api({
        method: 'DELETE',
        url: 'https://fakestoreapi.com/products/1',
        body: {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          rating: {
            rate: 3.9,
            count: 120
          }
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response.body));
        expect(response.body.id).to.eq(1);
      });
    });
     
  it('Deve retornar a lista de usuarios com GET', () => {
    cy.viewport(1280, 720)

    cy.api({
      method: 'GET',
      url: 'https://fakestoreapi.com/carts?userId=1',
    }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response.body))
      });  
  });
    
});
