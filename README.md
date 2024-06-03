# Petshop API

## Endpoints

### GET /api/clientes
Retorna todos os clientes.

#### Exemplo de resposta:
```json
[
  {
    "_id": "60d5ec4f4f1a2565d1d5e9b7",
    "nome_pet": "A",
    "nome_tutor": "B",
    "sexo_pet": "M",
    "endereco": "C"
  },
  {
    "_id": "60d5ec4f4f1a2565d1d5e9b8",
    "nome_pet": "D",
    "nome_tutor": "E",
    "sexo_pet": "F",
    "endereco": "F"
  }
]
```

### GET /api/clientes/:id
Retorna um cliente pelo ID.

#### Parâmetros:
- `id` - O ID do cliente a ser retornado.

#### Exemplo de resposta:
```json
{
  "_id": "60d5ec4f4f1a2565d1d5e9b7",
  "nome_pet": "A",
  "nome_tutor": "B",
  "sexo_pet": "M",
  "endereco": "C"
}
```

### POST /api/clientes
Adiciona um novo cliente.

#### Exemplo de corpo da requisição:
```json
{
  "nome_pet": "A",
  "nome_tutor": "B",
  "sexo_pet": "M",
  "endereco": "C"
}
```

#### Exemplo de resposta:

201 sem body

### PUT /api/clientes/:id
Atualiza um cliente pelo ID.

#### Parâmetros:
- `id` - O ID do cliente a ser atualizado.

#### Exemplo de corpo da requisição:
```json
{
  "nome_pet": "A",
  "nome_tutor": "B",
  "sexo_pet": "M",
  "endereco": "C"
}
```

#### Exemplo de resposta:

201 sem body

### DELETE /clientes/:id
Deleta um cliente pelo ID.

#### Parâmetros:
- `id` - O ID do cliente a ser deletado.

#### Exemplo de resposta:

201 sem body

## Estrutura do Banco de Dados

A coleção `clientes` no MongoDB utiliza a seguinte validação de schema JSON:

```js
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
```

Esta estrutura assegura que todos os documentos na coleção `clientes` contenham as propriedades `nome_pet`, `nome_tutor`, `sexo_pet` e `endereco`, todas do tipo string, sendo `sexo_pet` restrito aos valores "M" ou "F".