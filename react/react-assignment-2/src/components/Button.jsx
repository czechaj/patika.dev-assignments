import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

function Button() {
  console.log("button rerendered");
    const {theme, setTheme} = useContext(ThemeContext)
    const changeTheme = () => {
        setTheme(theme === "light" ? "primary": "light");
        localStorage.setItem("theme", theme)
    }
  return (
    <div className='text-end'>
        <button className='btn btn-outline-dark' onClick={changeTheme}>Change theme</button>
    </div>
  )
}

export default Button