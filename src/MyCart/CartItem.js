const CartItem=(props)=>{
    return(
        <div style={{display:"flex"}}>
            <div>
            <h5>{props.data[0].name}</h5>
            </div>
            <div style={{marginLeft:"60%"}}>
            <h4>Rs.{props.data[0].Price}/-</h4>
            </div>
        </div>
        
    );
};
export default CartItem;