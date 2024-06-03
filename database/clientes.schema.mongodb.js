// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('petshop');

// Create a new document in the collection.

db.createCollection("clientes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nome_pet", "nome_tutor", "sexo_pet", "endereco"],
      properties: {
        nome_pet: {
          bsonType: "string",
          description: "Nome pet - Obrigatório."
        },
        nome_tutor: {
          bsonType: "string",
          description: "Nome tutor - Obrigatório."
        },
        sexo_pet: {
          bsonType: "string",
          enum: [ "M", "F" ],
          description: "Sexo pet M ou F."
        },
        endereco: {
          bsonType: "string",
          description: "Endereço - Obrigatório."
        }
      }
    }
  }
})