import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:
            {
            name:"Dummy",
            location:"US",
            avatar_url:"",
            },

        }
        // console.log("child Constructor");
    }
    async componentDidMount(){
        // console.log("child CDM ");
        // API call
        const data=await fetch("https://api.github.com/users/SparshS1703");
        const json=await data.json();
        // console.log(json);
        this.setState({
            userInfo: json
        })

    }
    render(){
        // console.log("child render");
        const {name, location, avatar_url}=this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: 1711sparsh@gmail.com</h4>
                {/* <p>Count:{this.state.count}</p>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }}>Count Increase</button> */}
    
            </div>
        )
    }

}
export default UserClass;