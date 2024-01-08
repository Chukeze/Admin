'use client'

import { UserRole } from '@/types/roles'

import {
  createContext,
  useReducer,
  useContext,
  Dispatch,
  ReactNode,
} from 'react'

type AuthState = {
  isAuthenticated: boolean
  user: null | { id: string; email: string; name: string }
  role: UserRole
}

type AuthAction =
  {
    type: 'LOGIN'
    user: { id: string; email: string; name: string }
    role: UserRole
  }
| { type: 'LOGOUT' }

export const AuthContext = createContext<{
  state: AuthState
  dispatch: Dispatch<AuthAction>
}>({
  state: { isAuthenticated: false, user: null, role: UserRole.DEFAULT },
  dispatch: () => null,
})

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
        role: action.role,
      }
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        role: 0,
      }
    default:
      return state
  }
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: null,
    role: 0,
  })
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

//export { AuthProvider, useAuth }
//export {AuthContext}
