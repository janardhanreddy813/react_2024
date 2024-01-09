import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    //console.log(data);
    setFormData([...formData, data]);
    setData({ name: "", email: "", password: "" });
  };
 // console.log(data, formData);
  //console.log(data);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          {" "}
          <input
            type="text"
            name="name"
            value={name}
            onChange={changeHandler}
            placeholder="name"
          />
        </div>
        <div>
          {" "}
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeHandler}
            placeholder="Email"
          />
        </div>
        <div>
          {" "}
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
            placeholder="pasword"
          />
        </div>
        <div>
        
          {" "}
          <input type="submit" />
        </div>
      </form>
      <hr />
     
     <table className="table table-bordered table-dark">
      <thead>
        <tr>
          <td>Name</td>
          <td> Email</td>
          <td> Password</td>
        </tr>
      </thead>
      <tbody>
       {formData.map((eachItem)=>{   
        
            return  <tr key={eachItem.name}>
             <td> {eachItem.name}</td>
             <td> {eachItem.email}</td>
             <td> {eachItem.password}</td>
            
            </tr>
            
           
          })}
      </tbody>
     </table>
    </div>
  );
};

export default Form;
