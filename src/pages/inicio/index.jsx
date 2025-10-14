import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";
import CartaoDestaque from "../../components/cartaoDestaque";
import './index.scss';

export default function Inicio() {
    return(
        <div className="container-inicio">
            <Cabecalho />

            <div className="main-inicio">
                <p className="textao">
                Seja bem-vindo à nossa livraria! Aqui, a paixão pela leitura ganha vida. Nossa missão é espalhar o amor pelos livros e criar um espaço acolhedor para todos os amantes da literatura. Conheça nossa equipe dedicada e fique por dentro dos eventos emocionantes que promovemos. Venha explorar um mundo de histórias e conhecimento!
                </p>
            </div>
            <br />

            <CartaoDestaque
                imagem="https://s3.amazonaws.com/blog.dentrodahistoria.com.br/wp-content/uploads/2021/06/01095905/imagem-post-herois-horizontal-1024x559.png"
                titulo="Livro de super heróis"
                descricao="Em nossa livraria você vai encontrar livros de diversos heróis" 
            />

            <CartaoDestaque 
                imagem="https://occ-0-630-420.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRKpOrZo4x1NmB8Ry0a9zaPkxJNzEg9kghre7J9WAtKQ36O3FGac1--uGgMnxZS6df1Yjz3VRryhqBDsBVDwnru3qTw-ncbK3EwB.webp?r=e24"
                titulo="Livro de Animes"
                descricao="Aqui temos diversos livros relacionados a animes também"
                mostrarBotao
                imagemDireita
                link="https://myanimelist.net/anime/52991/Sousou_no_Frieren/reviews?filter_check=3"
            />

            <br />
            <Rodape />
        </div>
    );
}