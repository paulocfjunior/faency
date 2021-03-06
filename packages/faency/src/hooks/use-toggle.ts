import { useState, useCallback } from 'react'

type UseToggle = {
  value: boolean
  toggle: () => void
  setTrue: () => void
  setFalse: () => void
}

/**
 * Returns a stateful value, and a set of memoized functions to toggle it,
 * set it to true and set it to false
 */
const useToggle = (initialState: boolean): UseToggle => {
  const [value, setState] = useState(initialState)

  return {
    value,
    toggle: useCallback(() => setState(state => !state), []),
    setTrue: useCallback(() => setState(true), []),
    setFalse: useCallback(() => setState(false), []),
  }
}

export default useToggle
