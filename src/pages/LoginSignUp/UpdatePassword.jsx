import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const Form = [
    {
      Label: "Password",
      type: "password",
      placeHolder: "Password here",
      value: oldPassword,
      onChange: (e) => setOldPassword(e.target.value),
    },
    {
      Label: "New Password",
      type: "text",
      placeHolder: "Password here",
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
    {
      Label: "Confirm New Password",
      type: "password",
      placeHolder: "Re-enter new password here",
      value: cpassword,
      onChange: (e) => setCpassword(e.target.value),
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== cpassword)
      toast.error('Password does not match');

    if (oldPassword === "") {
      toast.error('Please enter your password');

    }
    else if (password === "") {
      toast.error('Please enter your password');

    }
    else if (oldPassword !== "" && password !== "") {
      setOldPassword("")
      setPassword("")
      setCpassword("")
    }

  };
  return (
    <div className="flex justify-center items-center h-[85vh]">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="w-[450px] rounded-[10px] bg-white px-6 py-8">
        <h1 className='text-center text-3xl mb-2 font-semibold'>Update Password</h1>
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
          <div className="flex justify-between items-center mb-[2vh]">
            <Link to="/login" className="text-orange-500 b">
              back
            </Link>
          </div>
          <button value="submit" className="block p-[10px] w-full bg-orange-500 text-white text-xl ">Update</button>
        </form>
      </div>
    </div>
  )
}

export default UpdatePassword