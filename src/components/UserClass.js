import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        
    }
    componentDidMount(){
        console.log("component did mount");
    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate")
    }
    componentWillUnmount(){
        console.log("ComponentWillUnmount")
    }
    render(){
        return (
            <div className="user-card">
                <h1>Class based component</h1>
                {/* {this.setState({
                    count:this.state.count+1
                })} */}
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Increment</button>
                <h2>{this.state.count}</h2>
                {/* <h2>Name: navin</h2> */}
                <h3>Location: blr</h3>
                <h4>Contact: 288288</h4>
                <h5>{this.props.name} from {this.props.location}</h5>
            </div>
        )
    }
}
export default UserClass;