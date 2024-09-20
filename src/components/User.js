
const User=({name})=>{
use
    console.log(name);
    return (
        <div className="user-card">
            {/* <h1 style="color:blue;">{name}</h1> */}
            <h2>Name: {name}</h2>
            <h3>Location: blr</h3>
            <h4>Contact: 288288</h4>
        </div>
    )
}
export default User;