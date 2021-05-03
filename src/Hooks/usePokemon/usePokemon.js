import { useState } from 'react';
import api from "../../services/api";

export default function usePokemon(pageLimit) {
    const [pokemons, setPokemons] = useState([]);

    async function ListPokemon(page) {
        const virtualPage = ((page - 1) * pageLimit) <= 0 ? 0 : ((page - 1) * pageLimit)
        try {
            const { data } = await api.get(`pokemon?limit=${pageLimit}&offset=${virtualPage}`);
            setPokemons(data.results);
        } catch (error) {
            alert("Ocorreu um erro ao buscar os pokemons");
        }
    }


    return {
        ListPokemon,
        pokemons
    }
}