import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const Form = [
    {
      Label: "Email",
      type: "email",
      placeHolder: "Enter your email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
    }
  ];

  const submitHandler = (e) => {
    e.preventDefault();

    if (email === "") {
      alert("Enter your email")
    }

    if (email !== "") {
      setEmail("")
    }

  };
  return (
    <div className="flex justify-center items-center h-[85vh]">
      <div className="w-[450px] rounded-[10px] bg-white px-6 py-10">
        <h1 className='text-center text-3xl mb-4 font-semibold'>Forget Password</h1>
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
          <div className="mb-[2vh]">
            <Link to="/login" className="text-orange-500">
              Back to Login
            </Link>
          </div>

          <button value="submit" className="block p-[10px] w-full bg-orange-500 text-white text-xl ">Send me the OTP</button>
        </form>
      </div>
    </div>
  )
}

export default Login