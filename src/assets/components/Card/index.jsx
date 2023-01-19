import './Card.css'
import { AiFillDelete } from "react-icons/ai";

export const Card = ({deletarCard, id, imagem, titulo, periodo}) => {
    return(
        <div className='card'>
            <AiFillDelete className='deleteIcon' onClick={() => deletarCard(id)}/>
            <img src={imagem} alt="Imagem do Anime" />
            <h2>{titulo}</h2>
            <p>{periodo}</p>
        </div>
    )
}