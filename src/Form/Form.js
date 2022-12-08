
const Form=()=>{
    const contactSubmitHandler=(event)=>{
        event.preventDefault();
    }
    return(
        <div>
        <form onSubmit={contactSubmitHandler} style={{display:"flex",flexDirection:"column",flexWrap:"wrap",paddingTop:"30%"}}>
            <label><h2>First Name</h2></label>
            <input type="text" placeholder="First Name" required style={{height:"2.5rem"}}></input>
            <label><h2>Last Name</h2></label>
            <input type="text" placeholder="Last Name" required style={{height:"2.5rem"}}></input>
            <label><h2>Email</h2></label>
            <input type="email" placeholder="smart_assist@gmail.com" required style={{height:"2.5rem"}}></input>
            <label><h2>What can we help with?</h2></label>
            <textarea required style={{height:"10rem"}}></textarea>
            <br></br>
            <button className="btn btn-primary">Submit</button>
        </form>
        </div>
    );
};
export default Form;