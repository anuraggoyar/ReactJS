const Alert = (props) => {
    return ( 
        <div style={{height : '50px'}}>
            {props.alert && <div style={{padding : '5px'}} className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                {props.alert.msg}
            </div>}
        </div>
     );
}
 
export default Alert;