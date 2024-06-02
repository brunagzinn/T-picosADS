/* EXCLUIR CLIENTES/PETS*/
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
  throw new Error('Erro ao buscar cliente');
}

export default function Page({ params: { id } }) {
  const router = useRouter();
  const [cliente, setCliente] = useState({ nome_pet: '', nome_tutor: '', sexo_pet: '', endereco: '' });
  useEffect(() => {
    async function fetchData() {
      const data = await buscarCliente(id);
      setCliente(data);
    }
    fetchData()
  }, [id])

  const handleDelete = async () => {
    const confirmation = window.confirm("Tem certeza que deseja excluir?")
    if (confirmation) {
      const resposta = await fetch(`http://localhost:3000/api/clientes/${id}`, {
        method: "DELETE",
      })
      if (resposta.ok) {
        router.push("/clientes")
      }
      else {
        alert("Erro ao excluir cliente")
      }
    }
  }

  return (
    <div className={styles.container}>
      <h1>Excluir cliente</h1>
      <div>
        <p><strong>Nome pet</strong>: {cliente.nome_pet}</p>
        <p><strong>Nome tutor</strong>: {cliente.nome_tutor}</p>
        <p><strong>Sexo pet</strong>: {cliente.sexo_pet}</p>
        <p><strong>Endereço</strong>: {cliente.nome_pet}</p>
      </div>
      <div className={styles.principal}>
        <button onClick={handleDelete}>Excluir</button>
        <Link href="/clientes" className={styles.espacamento}>Voltar</Link>
      </div>
    </div>
  );
}
