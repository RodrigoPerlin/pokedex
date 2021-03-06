import React, { useEffect } from 'react'
import usePagination from '../../Hooks/usePagination/usePagination';
import usePokemon from '../../Hooks/usePokemon/usePokemon';
import { Link } from 'react-router-dom';
import * as S from './Home.styles';
import Footer from '../../Components/Footer';
import ButtonDesktop from '../../Components/ButtonDesktop';
import ButtonMobile from '../../Components/ButtonMobile';
import LogoSrc from '../../Img/pokemon.png';
import Loading from './../../Components/Loading'

const Home = () => {

  const { pokemons, ListPokemon } = usePokemon(19);
  const { statePage, setStatePage } = usePagination();

  useEffect(() => {
    ListPokemon(statePage)
  }, [statePage])

  if (pokemons === undefined)
    return (
      <Loading >
        <div className="loading" data-testid="loading">
          Carregando Lista
            </div>
      </Loading >
    );
  else
    return (
      <S.HomeStyle>
        <div className='home'>
          <div className='header'>
            <img src={LogoSrc} height="170" alt="soon" />
          </div>
          <div className='contents'>
            <div className='highlights'>
              <div className="highlights__main box">
                <ButtonMobile
                  statePage={statePage}
                  setStatePage={setStatePage}
                />
                {pokemons.map((pokemon) => (
                  <div className="highlights__main" key={pokemon.name}>
                    <Link className="link" to={`/${pokemon.name}`}>
                      <S.Item key={pokemon.name}>
                        {pokemon.name}
                      </S.Item>
                    </Link>
                  </div>
                ))}
                <ButtonDesktop
                  statePage={statePage}
                  setStatePage={setStatePage}
                />
              </div>
            </div >
          </div>
          <Footer className="rodape">Desenvolvido por Rodrigo Perlin &copy;</Footer>
        </div>
      </S.HomeStyle>
    );
}
export default Home;
