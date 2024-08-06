import User from "./User";
import UserClass from "./UserClass";
const About=()=>{
    return (
        <div>
           """ We are Avengers Hotel,
           Servicing all over the World"""
           <User name={"navin from function component"}/>
           {/* <UserClass name={"sudhakaran"} location={"from Bengaluru"} /> */}
        </div>
    )
}
export default About;