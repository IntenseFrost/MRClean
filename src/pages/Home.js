import Banner from '../componentes/Banner';
import LogoGira from '../componentes/LogoGira';
import estilo from './Home.module.css'
import muitosPotes from '../img/foldB.png'
import sorveteColher from '../img/foldA.png'
import logoTransp from '../img/logoFrente.PNG'
import whats from '../img/whats.png'
import foldC from '../img/foldC.png'

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

            <img className={estilo.fotosProp} src={muitosPotes} alta="img sorvete"/>
            
        </div>
        <div className={estilo.boxInf}>

            <img className={estilo.fotosProp} src={sorveteColher} alta="img sorvete"/>
            
        </div>

        <div className={estilo.boxInf}>

            <img className={estilo.fotosProp} src={foldC} alta="img sorvete"/>

        </div>

        
        <a className={estilo.btnWhats} href="https://wa.me/5511983940948text=quero%20solicitar%20orçamento" ><img src={whats} alta="img sorvete"/></a>

       
        </div>
        
        
    )
}

export default Home
