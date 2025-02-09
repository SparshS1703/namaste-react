import { useState } from "react";

const User=({name})=>{
    const {count}=useState(0);
    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: Jaipur</h3>
            <h4>Contact: 1711sparsh@gmail.com</h4>
            <p>Count:{count}</p>

        </div>
    )
}
export default User;