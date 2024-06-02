"use client"
import { useEffect, useState } from "react";
import styles from "./clientes.modulo.css"
import Link from 'next/link'

async function buscarClientes() {
    const resposta = await fetch("http://localhost:3000/api/clientes", {
        cache: "no-store"
    });
    return await resposta.json();
}
export default function Page() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        buscarClientes().then(results => {
            setClientes(results);
        })
    }, [])

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
                            <tr key={cliente._id}>
                                <td><Link href={`/clientes/${cliente._id}/editar`}>Editar</Link> | <Link href={`/clientes/${cliente._id}/excluir`}>Excluir</Link></td>
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