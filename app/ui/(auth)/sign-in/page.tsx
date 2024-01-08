import { create } from '@/component/actions/action'
import {arima} from '@/component/fonts/fonts'
import { AuthContext } from '@/component/hooks/context/AuthContext'
import { useContext } from 'react'
//import * as stylex from '@stylexjs/stylex'
import { useEffect, useState } from 'react'

/*const formStyles = stylex.create({
    root: {
        backgroundColor: {
            default: 'grey',
            ':hover':'darkviolet',
        },
        color: 'black',
    },
    inputs: {
        border: '2rem',
        color: 'x1e2nbdu',
        backgroundColor:'green',
        $$css: true,
    },
});
{/*...stylex.props(formStyles.root, formStyles.inputs)}*/

function LoginForm() {
    const [userName, setUserName] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const {dispatch}= useContext(AuthContext);
    
    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            userName,
            password,
            }),
        })
        const data = await response.json();
        if (data.success) {
            dispatch({ type: 'LOGIN', user: data.user, role: data.role });
        } else {

        }

    }
    const handleForgotPassword = (e:event) => {
        
    }
  return (
    <section
      className={`${arima.className} flex flex-col items-center  text-xl text-black-400 md:text-3xl md:leading-normal`}
    >
      <header>Login</header>
      <form
        action={create}
        onSubmit={handleSubmit}
        className="grid grid-row-3 grid-col-2 gap-4"
      >
        <div className="flex flex-row gap-2">
          <label htmlFor="username">user: </label>
          <input
            type="text"
            name="user"
            id="username"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            className='px-2'
          />
        </div>
        <div className="flex flex-row gap-2">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='*******'
            className='shadow px-4 text-md appearance-outline border border-red-500 leading-tight focus:outline-none focus:shadow-outline mb-3'
          />
        </div>
        <div className="flex flex-row justify-between">
          <input
            type="submit"
            value="Sign-in"
            className="bg-slate-300 rounded-md py-1 px-4 hover:bg-blue-700 text-black font-bold focus:shadow-outline"
          />
          <button
            type="button"
            className="shadow bg-purple-500 hover:bg-purple-400 font-bold text-sm focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            onClick={handleForgotPassword}
          >
            Forgot Password
          </button>
        </div>
      </form>
    </section>
  )
}
export default LoginForm