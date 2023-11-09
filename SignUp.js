import React, { useState } from "react";
import UserPool from "./UserPool";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        UserPool.signUp(email, password, [], null, (err, data) => {
            if (err) {
              console.error(err);
            }
            console.log(data);
          });
    };


    return ( 
        <div className="sign-up">
      <form onSubmit={onSubmit}>
        <label htmlFor="email" >Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>

        <button type="submit" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>Signup</button>
      </form>
    </div>
     );
    };

 
export default SignUp;