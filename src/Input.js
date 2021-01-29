

const Input = ({type,value,Changes}) =>{
    return (
        <div>
         <input type={type} value={value} onChange={Changes} />
        </div>
      );
    }
    
    export default Input;