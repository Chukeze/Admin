'use client'

import { useAuth } from '@/component/hooks/context/AuthContext'
import Dashboard from './ui/(dashboard)/page'
import LoginForm from './ui/(auth)/sign-in/page'
import ErrorComponent from '@/component/error'

export default function Home(
  props: {
    error: Error & { digest?: string | undefined }
    reset: () => void
  }
) {
  const { state } = useAuth()
  return (
    <>
      {state ? (
        state.isAuthenticated ? (
          <Dashboard />
        ) : (
          <LoginForm />
        )
      ) : (
        <ErrorComponent {...props} />
      )}
    </>
  )
}
