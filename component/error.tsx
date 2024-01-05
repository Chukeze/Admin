'use client'

import { useEffect } from 'react'
import { useAuth } from './context/AuthContext'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
    const { state } = useAuth();

    //checks If the error is a Login error or another error
    if (!state){
        return (
          <div>
            <p>Login Not Available</p>
            <button
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
            >
              Try again
            </button>
          </div>
        )
    }else{
          return (
            <div>
              <h2>Something went wrong!</h2>
              <button
                onClick={
                  // Attempt to recover by trying to re-render the segment
                  () => reset()
                }
              >
                Try again
              </button>
            </div>
          )
    }
}