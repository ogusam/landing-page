import React from 'react'

function AuthBox({register}) {
  return (
    <div className='auth'>
        <div className='auth__box'>
            <div className='auth__header'>
                <h1>{register ? "Register" : "Login"}</h1>
                <form>
                    {register && (
                        <div className='auth__field'>
                        <label>First Name</label>
                        <input type="text"/>
                        <label>Last Name</label>
                        <input type="text"/>
                        <label>Telephone:</label>
                        <input typeof="tel"/>
                        </div>
                    )}
                <div className='auth__field'>
                    <label>Email:</label>
                    <input type="text"/>
                    <label>Password:</label>
                    <input type="password"/>
                </div>
                {register && (
                    <div className='auth__field'>
                        <label>Confirm Password</label>
                        <input type="password"/>
                    </div>
                )}
                <div className='auth__footer'>
                    <p className='auth__error'>Something went wrong</p>
                <button className='btn'>{register ? "Register" : "Login"}</button>
                </div>
                </form>
            </div>
        </div>

    </div>
  )
}

export default AuthBox