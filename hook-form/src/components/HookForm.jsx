import React, {useState}  from "react";
import "./HookForm.css"
const HookForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const createUser = (e) => {

    e.preventDefault();

    const newUser = {firstName, lastName, email, password, confPassword};
  }
  return (
    <form onSubmit={createUser}>
      <div className="border">
        <label>First Name</label>
        <input type="text" onChange={ (e) => setFirstName(e.target.value)} />
      </div>
      <div className="border">
        <label>Last Name</label>
        <input type="text" onChange={ (e) => setLastName(e.target.value)} />
      </div>
      <div className="border">
        <label>Email</label>
        <input type="email" onChange={ (e) => setEmail(e.target.value)} />
      </div>
      <div className="border">
        <label>Password</label>
        <input type="password" onChange={ (e) => setPassword(e.target.value)} />
      </div>
      <div className="border">
        <label>Confirm Password</label>
        <input type="password" onChange={ (e) => setConfPassword(e.target.value)} />
      </div>
      <p>Your Form Data</p>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm Password: {confPassword}</p>
    </form>
  )
}

export default HookForm;