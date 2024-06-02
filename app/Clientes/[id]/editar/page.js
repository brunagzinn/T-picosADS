/* EDITAR CLIENTES/PETS*/
"use client"
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import styles from '../../clientes.modulo.css'
import Link from 'next/link'

const baseUrl = "http://localhost:3000";


async function buscarCliente(id) {
  const resposta = await fetch(`${baseUrl}/api/clientes/${id}`);
  if (resposta.ok) {
    return resposta.json();
  }
}

export default function Editar({ params: { id } }) {
  const router = useRouter();
  const [cliente, setCliente] = useState({ nome_pet: '' })
  useEffect(() => {
      async function fetchData() {
          const data = await buscarCliente(id)
          setCliente(data)
      }
      fetchData()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setCliente(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resposta = await fetch(`http://localhost:3000/api/clientes/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cliente)
    })
    if (resposta.ok) {
      router.push("/clientes")
    }
    else {
      alert("Erro ao editar cliente")
    }
  }

  return (
    <div className={styles.container}>
      <h1>Editar cliente</h1>
      <div className={styles.principal}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome do pet: </label>
            <input
              value={cliente.nome_pet}
              name="nome_pet"
              onChange={handleChange}
              type="text" />
          </div>
          <div>
            <label>Nome do Tutor: </label>
            <input
              value={cliente.nome_tutor}
              name="nome_tutor"
              onChange={handleChange}
              type="text" />
          </div>
          <div>
            <label>Sexo do pet: </label>
            <input
              value={cliente.sexo_pet}
              name="sexo_pet"
              onChange={handleChange}
              type="text" />
          </div>
          <div>
            <label>Endereco do pet: </label>
            <input
              value={cliente.endereco}
              name="endereco"
              onChange={handleChange}
              type="text" />
          </div>

          <button type="submit">Atualizar</button>
          <Link href="/clientes" className={styles.espacamento}>Voltar</Link>
        </form>
      </div>
    </div>
  );
}
