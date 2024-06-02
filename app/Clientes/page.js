/* LISTAGEM DE CLIENTES/PETS */
import styles from "./clientes.modulo.css"
import Link from 'next/link'

async function buscarClientes() {
    const resposta = await fetch("http://localhost:3000/api/clientes");
    return await resposta.json();
}
export default async function Page() {
    const clientes = await buscarClientes();
    return (
        <>
            <h1>Loja Pets</h1>
            <Link href="/clientes/criar">Adicionar</Link>
            <table className={styles.customers}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Nome do pet</th>
                        <th>Nome do tutor</th>
                        <th>sexo do pet</th>
                        <th>Endereço</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientes.map((cliente) =>
                            <tr key={cliente.id}>
                                <td><Link href={`/clientes/${cliente.id}/editar`}>Editar</Link> | <Link href={`/clientes/${cliente.id}/excluir`}>Excluir</Link></td>
                                <td>{cliente.nome_pet}</td>
                                <td>{cliente.nome_tutor}</td>
                                <td>{cliente.sexo_pet}</td>
                                <td>{cliente.endereco}</td>
                            </tr>
                        )
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>Total clientes: 3</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}