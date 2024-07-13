import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Form = [
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
      placeHolder: "Password Here",
      value: password,
      onChange: (e) => setPassword(e.target.value),
    }
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error('Please enter your email');

    }
    else if (password === "") {
      toast.error('Please enter your password');

    }
    else if (email !== "" && password !== "") {
      setEmail("")
      setPassword("")
    }

  };
  return (
    <div className="flex justify-center items-center h-[85vh]">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="w-[450px] h-[450px] rounded-[10px] bg-white px-6 py-4">
        <h1 className='text-center text-3xl mb-4 font-semibold text-headingColor'>Login</h1>
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
                  className="text-lg input outline-none border border-orange-500 rounded px-[10px] py-[8px] w-[100%] mb-1"
                />
              </div>
            ))}
          <div className="flex flex-col lg:flex-row lg:justify-between justify-start lg:items-center mb-[2vh]">
            <div>
              <input type="checkbox" className="lg:my-4 mt-4" /> Remember me!
            </div>
            <div>
              <Link to="/forgetpassword" className="">
                Forget password Click Here
              </Link>
            </div>
          </div>
          <button value="submit" className="block p-[10px] w-full bg-orange-500 text-white text-xl ">Login</button>
        </form>
        <div className="text-center my-4 text-orange-500 hover:text-orange-600"><Link to="/signup">New Here Click me</Link></div>
      </div>
    </div>
  )
}

export default Login