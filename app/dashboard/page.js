async function buscarDashboard() {
    const resposta = await fetch("http://localhost:3000/api/clientes/dashboard");
    return await resposta.json();
}
export default async function Dashboard() {
    const clientes = await buscarDashboard();
    console.log(clientes)
    return (
        <>
            <h1>Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>
                            Pets
                        </th>
                        <th>
                            Sexo
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientes.map((cliente) =>
                            <tr key={cliente.sexo_pet}>
                                <td>
                                    {cliente.pets}
                                </td>
                                <td>
                                    {cliente.sexo_pet}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
