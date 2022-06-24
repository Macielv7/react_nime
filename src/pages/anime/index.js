import axios from "axios"
import { useState } from "react";
import './index.css'


export default function Index() {

    const [anime, setAnime] = useState('');
    const [resposta, setResposta] = useState ('');

    async function verficarAnime(){
       const resp = await axios.get('');
       if(resp.data.anime == true){
           setResposta('SIM');
       }
       else{
           setResposta('NAO');
       }

    }

    return(
        <main className="tudo">
            <h1>ANIME</h1>

            <div> 
                ANIME: <input type='text' value={anime} onChange={e => setAnime(e.target.value)}/>
                                        
                <button  onClick={verficarAnime}>verificar</button>
                 </div>

                 <div>
                     

                 </div>
               

                 <br/>

    <table border="3">{resposta}
    <tr>
        <td>ID</td>
        <td>NOME DO ANIME</td>
        
    </tr>
    <tr>
        <td>1</td>
        <td>Dragon Ball Z.</td>
    </tr>
   
</table>
                 
                 <div>
                     
                 </div>
        </main>
    )
}