import { useAuth } from '@/component/context/AuthContext'
import Dashboard from './ui/(dashboard)/page';
import LoginForm from './ui/(auth)/sign-in/page';
import Error from '@/component/error';
import { JSX } from 'react';


console.log(useAuth);

export default function Home(props: JSX.IntrinsicAttributes & { error: Error & { digest?: string | undefined; }; reset: () => void; }) {

  const {state} = useAuth();
  return (
    <>
      {state ? (state.isAuthenticated ? <Dashboard/> : <LoginForm />): <Error {...props} />}     
    </>
  )
}
