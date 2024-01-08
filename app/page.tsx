'use client'

import { useAuth } from '@/component/hooks/context/AuthContext'
import Dashboard from './ui/(dashboard)/page'
import LoginForm from './ui/(auth)/sign-in/page'
import Error from '@/component/error'
import { JSX } from 'react'

export default function Home(
  props: JSX.IntrinsicAttributes & {
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
        <Error {...props} />
      )}
    </>
  )
}
