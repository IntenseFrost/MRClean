import Banner from '../componentes/Banner';
import LogoGira from '../componentes/LogoGira';
import estilo from './Home.module.css'
import muitosPotes from '../img/foldB.png'
import sorveteColher from '../img/foldA.png'
import logoTransp from '../img/logoFrente.PNG'
import whats from '../img/whats.png'
import foldC from '../img/foldC.png'
import cristalizacao from '../img/cristalizacao.jpg'
import hipermeabilizacao from '../img/impermeabilizacao.jpg'
import lavagem from '../img/lavagem.jpg'
import lavagemGranito from '../img/lavagemGranito.jpg'
import lavMosaico from '../img/lavMosaico.jpg'
import polimentoBanheiro from '../img/polimentoBanheiro.jpeg'
import polimentoMarmore from '../img/polimentoMarmore.jpg'
import polimentoPor from '../img/polimentoPor.jpg'
import raspagem from '../img/raspagem.jpg'
import restauracaoPmadeira from '../img/restauracaoPmadeira.jpg'
import travertino from '../img/travertino.jpg'
import travraspagem from '../img/travraspagem.jpg'
import poliPisos from '../img/poliPisos.jpg'


function Home(){
    return(
        <div>
       
        <div className={estilo.boxGeral}>
            <LogoGira />
        
        </div>
        <div className={estilo.boxInf}>
                <h1>Tratamento de Superfícies</h1><br/>
   
        </div>

        <div className={estilo.boxInf}>
                <h2>[ AMOSTRA GRÁTIS ]</h2><br/>
                <p>Realizamos um teste demonstrativo no local desejado e você só contrata nossos serviços se gostar do resultado.</p>
        </div>

        <br/>
        <br/>
        
        <div className={estilo.boxInf}>

            <img className={estilo.fotosProp1} src={logoTransp} alta="img sorvete"/>
            
        </div>

         <div className={estilo.boxInf}>

            <img className={estilo.fotosProp} src={poliPisos} alta="img sorvete"/>
            
        </div>

        <div className={estilo.boxInf}>

            <img className={estilo.fotosProp} src={muitosPotes} alta="img sorvete"/>
            
        </div>
        <div className={estilo.boxInf}>

            <img className={estilo.fotosProp} src={sorveteColher} alta="img sorvete"/>
            
        </div>

        <div className={estilo.boxInf}>

            <img className={estilo.fotosProp} src={foldC} alta="img sorvete"/>

        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <div className={estilo.boxInf}>
            <h1 className={estilo.legend}>CRISTALIZAÇÃO</h1>
            <img className={estilo.fotosProp} src={cristalizacao} alta="img sorvete"/>

        </div>

        
        <br/>
        <br/>
        <br/>
        <br/>

        <div className={estilo.boxInf}>
        <h1 className={estilo.legend}>hipermeabilizacao</h1>
            <img className={estilo.fotosProp} src={hipermeabilizacao} alta="img sorvete"/>

        </div>

        
        <br/>
        <br/>
        <br/>
        <br/>


        <div className={estilo.boxInf}>
            <h1 className={estilo.legend}>LAVAGEM</h1>
            <img className={estilo.fotosProp} src={lavagem} alta="img sorvete"/>

        </div>
        
        <br/>
        <br/>
        <br/>
        <br/>
        <div className={estilo.boxInf}>
            <h1 className={estilo.legend}>LAVAGEM GRANITO</h1>
            <img className={estilo.fotosProp} src={lavagemGranito} alta="img sorvete"/>

        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <div className={estilo.boxInf}>
            <h1 className={estilo.legend}>LAVAGEM MOSAICO</h1>
            <img className={estilo.fotosProp} src={lavMosaico} alta="img sorvete"/>

        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <div className={estilo.boxInf}>
            <h1 className={estilo.legend}>POLIMENTO BANHEIRO</h1>
            <img className={estilo.fotosProp} src={polimentoBanheiro} alta="img sorvete"/>

        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <div className={estilo.boxInf}>
            <h1 className={estilo.legend}>POLIMENTO MARMORE</h1>
            <img className={estilo.fotosProp} src={polimentoMarmore} alta="img sorvete"/>

        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <div className={estilo.boxInf}>
            <h1 className={estilo.legend}>POLIMENTO PORCELANATO</h1>
            <img className={estilo.fotosProp} src={polimentoPor} alta="img sorvete"/>

        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <div className={estilo.boxInf}>
            <h1 className={estilo.legend}>RASPAGEM</h1>
            <img className={estilo.fotosProp} src={raspagem} alta="img sorvete"/>

        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <div className={estilo.boxInf}>
            <h1 className={estilo.legend}>RESTAURACAO MADEIRA</h1>
            <img className={estilo.fotosProp} src={restauracaoPmadeira} alta="img sorvete"/>

        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <div className={estilo.boxInf}>
            <h1 className={estilo.legend}>TRAVERTINO</h1>
            <img className={estilo.fotosProp} src={travertino} alta="img sorvete"/>

        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <div className={estilo.boxInf}>
            <h1 className={estilo.legend}>RASPAGEM TRAVERTINO</h1>
            <img className={estilo.fotosProp} src={travraspagem} alta="img sorvete"/>

        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className={estilo.boxInf}>
            <h1 >SOBRE NÓS</h1>
           <p className={estilo.legends}>
           Seu ambiente com superfícies de alto brilho
Com mais de 10 anos de experiência, a M.A clean Polimentos vem trazendo de volta o brilho de superfícies como pisos, bancadas, escadas e soleiras em toda a Grande São Paulo.<br/><br/>

Produtos em mármore, granito, porcelanato, e outros, precisam ser submetidos à manutenções periódicas para manterem as suas características originais, beleza e durabilidade. Já realizamos mais de 2.000m2 em polimentos, manutenções e restaurações.<br/><br/>

Solicite um orçamento agora mesmo, será um prazer atendê-lo.<br/><br/>

Atendimento Rápido<br/>
Seriedade<br/>
Cumprimos O Prazo<br/>
Nossos Serviços<br/>
<br/>
<br/>

           </p>

        </div>

        
        <a className={estilo.btnWhats} href="https://wa.me/5511983940948text=quero%20solicitar%20orçamento" ><img src={whats} alta="img sorvete"/></a>

       
        </div>
        
        
    )
}

export default Home
