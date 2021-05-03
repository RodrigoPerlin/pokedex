import { renderHook, act } from '@testing-library/react-hooks'
import usePagination from './usePagination'

test('Should usePagination', () => {
  renderHook(() => usePagination())

})