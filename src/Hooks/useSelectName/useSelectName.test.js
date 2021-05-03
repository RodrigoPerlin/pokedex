import { renderHook, act } from '@testing-library/react-hooks'
import useSelectName from './useSelectName'

test('Should useSelectName', () => {
  renderHook(() => useSelectName())
})