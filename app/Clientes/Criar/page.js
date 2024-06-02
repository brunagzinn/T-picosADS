"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../clientes.modulo.css"

export default function Criar() {
    const router = useRouter();

    const [nome_pet, setNome_Pet] = useState("");
    const [nome_tutor, setNome_Tutor] = useState("");
    const [sexo_pet, setSexo_Pet] = useState("");
    const [endereco, setEndereco] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const cliente = {
            nome_pet, nome_tutor, sexo_pet, endereco
        }

        const resposta = await fetch("http://localhost:3000/api/clientes", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        })
        if (resposta.ok) {
            router.push("/clientes")
        }
        else {
            alert("Erro ao adicionar cliente")
        }
    }

    return (
        <div className={styles.container}>
            <h1>Adicionar cliente</h1>
            <div className={styles.principal}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nome do Pet: </label>
                        <input
                            value={nome_pet}
                            onChange={(event) => setNome_Pet(event.target.value)}
                            type="text" />
                    </div>
                    <div>
                        <label>Nome do Tutor: </label>
                        <input
                            value={nome_tutor}
                            onChange={(event) => setNome_Tutor(event.target.value)}
                            type="text" />
                    </div>
                    <div>
                        <label>Sexo do Pet:</label>
                        <input
                            value={sexo_pet}
                            onChange={(event) => setSexo_Pet(event.target.value)}
                            type="text" />
                    </div>
                    <div>
                        <label>Endereco: </label>
                        <input
                            value={endereco}
                            onChange={(event) => setEndereco(event.target.value)}
                            type="text" />
                    </div>

                    <button type="submit">Adicionar</button>
                    <Link href="/clientes" className={styles.espacamento}>Voltar</Link>
                </form>
            </div>
        </div>
    );
}