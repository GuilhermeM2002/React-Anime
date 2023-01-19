import './Select.css'

export const Select = (props) => {
    return(
        <select onChange={(event) => props.alterado(event.target.value)} value={props.value} required>
            <option>Categoria</option>
            <option>Shonen</option>
            <option>Shoujo</option>
            <option>Sheinen</option>
            <option>Josei</option>
        </select>
    )
}