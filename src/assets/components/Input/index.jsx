import './Input.css'

export const Input = (props) =>{
    
    return(
        <input type='text' onChange={(event) =>{      
           props.alterado(event.target.value)
        }} value={props.valor} placeholder={props.placeholder} required/>
    )
}