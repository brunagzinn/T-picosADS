// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('petshop');

// Create a new document in the collection.
db.getCollection('clientes').insertMany(
    [
        {          
          "nome_pet": "Rex",
          "nome_tutor": "João",
          "sexo_pet": "M",
          "endereco": "Rua das Flores, 123"
        },
        {          
          "nome_pet": "Luna",
          "nome_tutor": "Maria",
          "sexo_pet": "F",
          "endereco": "Avenida Principal, 456"
        },
        {          
          "nome_pet": "Max",
          "nome_tutor": "Pedro",
          "sexo_pet": "M",
          "endereco": "Praça Central, 789"
        },
        {          
          "nome_pet": "Bella",
          "nome_tutor": "Ana",
          "sexo_pet": "F",
          "endereco": "Rua das Árvores, 321"
        },
        {          
          "nome_pet": "Charlie",
          "nome_tutor": "Mariana",
          "sexo_pet": "M",
          "endereco": "Avenida dos Pássaros, 654"
        },
        {          
          "nome_pet": "Sophie",
          "nome_tutor": "Lucas",
          "sexo_pet": "F",
          "endereco": "Rua dos Gatos, 987"
        },
        {          
          "nome_pet": "Rocky",
          "nome_tutor": "Gabriel",
          "sexo_pet": "M",
          "endereco": "Avenida das Rosas, 741"
        },
        {          
          "nome_pet": "Daisy",
          "nome_tutor": "Isabela",
          "sexo_pet": "F",
          "endereco": "Rua das Margaridas, 852"
        },
        {          
          "nome_pet": "Maximus",
          "nome_tutor": "Gustavo",
          "sexo_pet": "M",
          "endereco": "Avenida dos Coqueiros, 369"
        },
        {          
          "nome_pet": "Lola",
          "nome_tutor": "Carolina",
          "sexo_pet": "F",
          "endereco": "Rua das Palmeiras, 159"
        },
        {          
          "nome_pet": "Thor",
          "nome_tutor": "Fernanda",
          "sexo_pet": "M",
          "endereco": "Praça das Orquídeas, 753"
        },
        {          
          "nome_pet": "Cleo",
          "nome_tutor": "Rafael",
          "sexo_pet": "F",
          "endereco": "Avenida das Violetas, 246"
        },
        {          
          "nome_pet": "Simba",
          "nome_tutor": "Juliana",
          "sexo_pet": "M",
          "endereco": "Rua das Borboletas, 852"
        },
        {          
          "nome_pet": "Molly",
          "nome_tutor": "Thiago",
          "sexo_pet": "F",
          "endereco": "Avenida dos Cachorros, 753"
        },
        {          
          "nome_pet": "Bruno",
          "nome_tutor": "Natália",
          "sexo_pet": "M",
          "endereco": "Rua das Corujas, 951"
        }
      ]
      
);
