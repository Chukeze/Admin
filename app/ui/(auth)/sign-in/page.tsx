"use client"
import { create } from '@/component/actions/action'
import InputField from '@/component/field/InputField'
import {arima} from '@/component/fonts/fonts'
import { AuthContext } from '@/component/hooks/context/AuthContext'
import { FormEvent, useCallback, useContext, useMemo } from 'react'
import { useState } from 'react'

const generateSpecifier = (length: number) => {
  let result = ''
  const char =
    '0123456789'
  const charLength = char.length
  let counter = 0
  while (counter < length) {
    result += char.charAt(Math.floor(Math.random() * charLength))
    counter += 1
  }
  return `${Math.floor(Math.random() * 100)}${result}`
}

function LoginForm() {
  const [userName, setUserName] = useState<string>('')

  const [password,setPassword] = useState<string>('')

  const [employeeId, setEmployeeId] = useState({
    part_one: 0,
    part_two: 0,
    employeeSpecifier: useMemo(() => generateSpecifier(4), [])
  })

  const [specifierError, setSpecifierError] = useState(false)

  const regenerateSpecifier = useCallback(() => {
    if (specifierError) {
      setEmployeeId(prevState => ({
        ...prevState,
        employeeSpecifier: generateSpecifier(4)
      }))
    }
  }, [specifierError])

  const {dispatch}= useContext(AuthContext);


  const validateInputs = useCallback(
    ({
      field,
      value,
    }: {
      field: any
      value: string | number
    }): string | null => {
      const numberRegex = /\d/

      const uppercaseRegex = /[A-Z]/

      const symbolRegex = /[!@#$%^&*()]/
      
      let rules = `
          1: Minimum one number
          2: Minimum one Capital letter
          3: One symbol [!@#$%^&*()]
      `

      if (
        !userName ||
        !password ||
        !employeeId.part_one ||
        !employeeId.part_two ||
        !employeeId.employeeSpecifier
      ) {
        return 'All fields are required'
      }

      if (field === 'username') {
        if (numberRegex.test(String(value))) {
          return 'Username can only include letters'
        }
        if (String(value).length < 4) {
          return 'Username is too short'
        }
      }

      if (field === 'password') {
        if (password.length < 5) {
          return 'Password is too short'
        }
        if (
          !numberRegex.test(password) ||
          !uppercaseRegex.test(password) ||
          !symbolRegex.test(password)
        ) {
          return "Password doesn't Match the following Pattern:" + rules
        }
      }

      if (field === 'one') {
        if (Number(value) <= 100 && Number(value) >= 499) {
          return 'The first part of your employee id does not fall within the range of 100 - 499'
        }
      }
      if (field === 'two') {
        if (Number(value) <= 500 && Number(value) >= 999) {
          return 'The Second part of your employee id does not fall within the range of 500 - 999'
        }
      }
      if (field === 'specifier') {
        if (
          !numberRegex.test(String(value)) &&
          !uppercaseRegex.test(String(value))
        ) {
          return 'error loading specifier'
        }
      }
      return null
    },
    [userName, password, employeeId]
  )
  
  const handleSubmit = async (event:FormEvent<HTMLFormElement> ) => {
      event.preventDefault();

      const userNameError = validateInputs({field:'username', value: userName})

      const passwordError = validateInputs({field:'password', value:password})

      const eIDPone = validateInputs({ field: 'one', value: employeeId.part_one })

      const eIDPtwo = validateInputs({
        field: 'two',
        value: employeeId.part_two,
      })

      const eIDPthree = validateInputs({
        field: 'specifier',
        value: employeeId.employeeSpecifier,
      })

      if (!eIDPthree){
        setSpecifierError(true)
        regenerateSpecifier
      }

      if(userNameError || passwordError || eIDPone || eIDPtwo || eIDPthree){
        setSpecifierError(true)
        return
      }

      const combinedEmployeeId = `${employeeId.part_one}-${employeeId.part_two}-${employeeId.employeeSpecifier}`

      const sendUserResponse = await fetch('/api/login', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          userName,
          password,
          combinedEmployeeId
          }),
      })

      const data = await sendUserResponse.json();

      if (data.success) {
          dispatch({ type: 'LOGIN', user: data.user, role: data.role });
      } else {

      }

  }

  const handleForgotPassword = (e) => {
      
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmployeeId({...employeeId, [e.target.name]: e.target.value});
  }

  const findHtmlInputIdForLabel=(): string => {
    let id=''
    if (id.includes('first-triad')) {
      return 'first-triad'
    } else if (id === 'second-triad') {
      return 'second-triad'
    } else if (id === 'third-triad') {
      return 'third-triad'
    } else {
      return '';
    }
  }

  console.log(employeeId)

  return (
    <section
      className={`${arima.className} flex flex-col items-center self-center p-12 text-xl text-black-400 md:text-3xl md:leading-normal`}
    >
      <header>Login</header>
      <form
        action={create}
        onSubmit={handleSubmit}
        className="grid grid-row-3 grid-col-1 gap-4"
      >
        <InputField
          label="User:"
          type="text"
          name="user"
          id="username"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          className="px-2"
          message={validateInputs({field:'username',value:userName})}
          minLength={4}
        />
        <InputField
          label="Password:"
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="*******"
          message={validateInputs({field:'password',value:password})}
          className="shadow px-4 text-md appearance-outline border leading-tight focus:outline-none focus:shadow-outline mb-3"
        />
        <div className="flex flex-row gap-2">
          <label htmlFor={findHtmlInputIdForLabel()} aria-label="Employee Id">
            EmployeeId :
          </label>
          <InputField
            type="number"
            name="part_one"
            id="first-triad"
            min={100}
            max={499}
            placeholder="299"
            message={validateInputs({field:'one',value:employeeId.part_one})}
            onChange={handleChange}
            style={{
              paddingLeft: '1rem',
              width: '100%',
              fontSize: '1.5rem',
              height: '100%',
            }}
            value={String(employeeId.part_one)}
          />
          <InputField
            type="number"
            name="part_two"
            id="second-triad"
            min={500}
            max={999}
            placeholder="299"
            onChange={handleChange}
            message={validateInputs({field:'two',value:employeeId.part_two})}
            style={{
              paddingLeft: '1rem',
              width: '100%',
              fontSize: '1.5rem',
              height: '100%',
            }}
            value={String(employeeId.part_two)}
          />
          <InputField
            type="text"
            name="part_three"
            id="third-triad"
            minLength={3}
            maxLength={4}
            value={employeeId.employeeSpecifier}
            message={validateInputs({field:'specifier',value:employeeId.employeeSpecifier})}
            style={{
              width: '100%',
              textAlign: 'center',
            }}
            readOnly={true}
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