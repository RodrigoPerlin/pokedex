import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelectName } from '../../Hooks/useSelectName';
import PokemonDetail from '../../Components/PodekemonDetail/index';
import Button from '../../Components/Button';

const Information = props => {
    const [pokemons, setPokemon] = useState([]);

    const { id } = useParams();
    const datePokemon = useSelectName(id)

    const history = useHistory();
    const goLogin = () => history.push('/');

    useEffect(async () => {
        const information = await datePokemon;
        setPokemon(information)
    }, [id])

    return (
        <div>
            <PokemonDetail pokemon={pokemons} />
            <Button margin={'20px'} onClick={goLogin}> Voltar</Button>

        </div>

    )
}
export default Information