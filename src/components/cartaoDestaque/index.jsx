import './index.scss'

export default function CartaoDestaque( { imagem, titulo, descricao, mostrarBotao, imagemDireita, link } ) {
    return(
        <div className='cartaoDestaque'>
            <div className={`imagem ${imagemDireita ? "direita" : ""}`}>
                <img src= {imagem}  />
            </div>
            <div className='info'>
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <a href={link}>Clique Aqui</a>                
            </div>

            { mostrarBotao && 
                <button>Clique Aqui</button>
            }

        </div>
    )
}