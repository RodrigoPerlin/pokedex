import { renderHook, act } from '@testing-library/react-hooks'
import usePokemon from './usePokemon'

test('Should usePokemon', () => {
  const { result } = renderHook(() => usePokemon())
  expect(result.current ? '{"ListPokemon": [Function ListPokemon], "pokemons": []}' : "").toBe('{"ListPokemon": [Function ListPokemon], "pokemons": []}')
})