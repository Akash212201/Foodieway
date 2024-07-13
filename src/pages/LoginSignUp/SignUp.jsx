import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import toast, { Toaster } from 'react-hot-toast'

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Form = [
    {
      Label: "Your Name",
      type: "text",
      placeHolder: "Enter your name",
      value: name,
      onChange: (e) => setName(e.target.value),
    },
    {
      Label: "Email",
      type: "email",
      placeHolder: "Enter your email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      Label: "Password",
      type: "password",
      placeHolder: "Password here",
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
  ];

  const submitHandler = async (e) => {
    e.preventDefault();

    if (email === "") {
      toast.error('Please enter your email');
      return;
    }
    if (password === "") {
      toast.error('Please enter your password');
      return;
    }
    if (password.length < 6) {
      toast.error('Minimum password length is 6');
      return;
    }
    setName("")
    setEmail("")
    setPassword("")


  };
  return (
    <div className="flex justify-center items-center h-[85vh]">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="w-[450px] rounded-[10px] bg-white px-6 py-8">
        <h1 className='text-center text-3xl mb-2 font-semibold'>Sign Up</h1>
        <form action="" onSubmit={submitHandler}>
          {
            Form.map((item, index) => (
              <div key={index} className="mb-4">
                <label htmlFor={item.Label}>{item.Label}</label>
                <input
                  type={item.type}
                  placeholder={item.placeHolder}
                  value={item.value}
                  onChange={item.onChange}
                  className="text-lg input outline-none border border-primary rounded px-[10px] py-[8px] w-[100%] mb-1"
                />
              </div>
            ))}
          <div className="flex justify-between items-center mb-[2vh]">
            <Link to="/login" className="text-orange-500">
              Login here
            </Link>
          </div>
          <button value="submit" className="block p-[10px] w-full bg-orange-500 text-white text-xl ">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp