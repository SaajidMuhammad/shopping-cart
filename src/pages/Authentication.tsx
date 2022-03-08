import { FC, useState } from 'react'
import Login from '../components/Auth/Login'
import Signup from '../components/Auth/Signup'

const Authentication: FC = () => {

  const [componentToShow, setComponentToShow] = useState<string>("signup")

  return (

    <>
      {componentToShow === "login" ? <Login /> : <Signup />}
    </>
  )
}

export default Authentication