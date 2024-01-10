import React, { useState } from "react";

export const OutsideRegister = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [re_pass, setRe_pass] = useState("");
  const [phno, setPhno] = useState("");
  const [college, setCollege] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="bg-yellow-200 p-6 rounded-lg grid grid-cols-1">
      <div
        className="cursor-pointer py-4 bg-red-300 flex justify-center border-blue-200 border-4 text-red-700"
        onClick={() => props.onFormSwitch("CollegeSignup")}
      >
        Go to Inside college 
      </div>
      <div className="text-center p-4 text-white font-bold text-2xl">
        OutsideSignup
      </div>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="Name"
          className="py-2 border border-black px-2"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email-id"
          id="email"
          name="email"
        />
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        <input
          value={re_pass}
          onChange={(e) => setRe_pass(e.target.value)}
          type="password"
          placeholder="Re_enter Password"
          id="re_password"
          name="re_password"
        />
        <input
          value={phno}
          onChange={(e) => setPhno(e.target.value)}
          type="number"
          placeholder="Phone Number"
          id="phNo"
          name="phNo"
        />
        <input
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          type="text"
          placeholder="Your College"
          id="city"
          name="city"
        />

        <button className="bg-red-400 p-2 rounded font-bold text-red-200" type="submit">Signup</button>
      </form>   
    </div>
  );
};
