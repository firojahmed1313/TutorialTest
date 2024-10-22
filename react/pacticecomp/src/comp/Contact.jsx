import React from 'react'
import Pic from "../pic.png";

const Contact = () => {
    return (
        <div className='main'>
            <div className='imgDiv'>
                <img src={Pic} alt="Image" className="imgd"/>
            </div>
            <div  className='fromDiv'>
                <div className='fromSubDiv'>
                    <h1>Create Account</h1>
                    <p>For business</p>
                    <div className='from'>
                        <div className='inputPart'>
                            <level>First Name</level>
                            <input type="text" />
                        </div>
                        <div className='inputPart'>
                            <level>Last Name</level>
                            <input type="text" />
                        </div>
                        <div className='inputPart'>
                            <level>Email</level>
                            <input type="text" />
                        </div>
                        <div className='inputPart'>
                            <level>Date Of Birth</level>
                            <input type="text" />
                        </div>
                        <div className='inputPart'>
                            <level>Password</level>
                            <input type="text" />
                        </div>
                        <div className='inputPart'>
                            <level>Confrom Password</level>
                            <input type="text" />
                        </div>
                
                        <div className='buttonDiv'>
                            <button className='btn1'>Create Account</button>
                            <button className='btn2'>Sign in With Google</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact