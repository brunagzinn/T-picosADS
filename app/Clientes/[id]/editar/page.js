import styles from './clientes.module.css'
import Link from 'next/link'

const baseUrl =
  (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000");

async function buscarClientes() {
  try {
    const resposta = await fetch(`${baseUrl}/api/clientes`, { cache: 'no-store' });
    return await resposta.json();
  } catch (erro) {
    console.error(erro);
    return [];
  }
}

export default async function Page() {
  const clientes = await buscarClientes();
  return (
    <div className={styles.container}>
      <h1>Loja Pet</h1>
      <Link href="/clientes/Editar">Editar</Link>
      <div className={styles.principal}>
        <table className={styles.clientes}>
          <thead>
            <tr>
              <th></th>
              <th>Nome do Pet</th>
              <th>Nome do Tutor</th>
              <th>Sexo do Pet</th>
              <th>Endereço</th>
            </tr>
          </thead>
          <tbody>
            {
              clientes.map((cliente) =>
                <tr key={cliente.id}>
                  <td>
                    <Link href={`/clientes/${cliente.id}/editar`}>Editar</Link> | <Link href={`/clientes/${cliente.id}/excluir`}>Excluir</Link>
                  </td>
                  <td>{cliente.nome_pet}</td>
                  <td>{cliente.nome_tutor}</td>
                  <td>{cliente.sexo_pet}</td>
                  <td>{contato.endereco}</td>
                </tr>
              )
            }
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">Total clientes: {clientes.length}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}