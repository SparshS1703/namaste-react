import User from "./user";
import UserClass from "./UseClass";
import { Component } from "react";

class About extends Component{
    constructor(props){
    super(props);
    // console.log("Parent Constructor");
    
    }
    




    render(){
        // console.log("Parent render");
        return (
            
                    <div className="About">
                        <h1>this is me!!</h1>
                        <User name={"SPARSH SRIVASTAVA"} />
                        <UserClass name={"SPARSH (class)"} />
                    </div>
            
                )
    }
}


// const About=()=>{
//     return (
//         <div className="About">
//             <h1>this is me!!</h1>
//             <User name={"SPARSH SRIVASTAVA"} />
//             <UserClass name={"SPARSH (class)"} />
//         </div>

//     )
// }
export default About;