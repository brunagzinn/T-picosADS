"use client";
import {
    Chart as ChartJS,  
    BarElement, 
    CategoryScale,
    LinearScale
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    BarElement,
    LinearScale
);

async function buscarDashboard() {
    const resposta = await fetch("http://localhost:3000/api/clientes/dashboard");
    return await resposta.json();
}
export default function Dashboard() {
    const [clientes, setClientes] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const data = await buscarDashboard();
            setClientes(data);
        }
        fetchData()
    }, [])

    const data = {
        labels: clientes.map((cliente) => cliente._id),
        datasets: [
          {
            label: "Pets por sexo",
            data: clientes.map((cliente) => cliente.pets),
            borderColor: "orange",
            borderWidth: 2,
            pointRadius: 4,
          },
        ],
      };

    return (
        <>
            <h1>Dashboard</h1>
            <Bar data={data} />
        </>
    )
}
