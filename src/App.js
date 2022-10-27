import { useState } from "react";

const App = () => {
    const [ayam,setAyam] = useState([
    // var ayam = [
        {aid:1, name:'goreng'},
        {aid:2, name:'bakar'},
        {aid:3, name:'rebus'},
        {aid:4, name:'gulai'}
    ])

    console.log('sebelum tombol')
    console.log(ayam)
    
    function Handler(){
        ayam.map((isi_ayam) => {
            if (isi_ayam.aid === 3){
                console.log(isi_ayam.name)
            }return setAyam(ayam);
        }
        )
    }
    



    return (
        <div>
            <button onClick={() =>Handler()}>
                Satein ayamnya
            </button>
        </div>
    )
}

export default App