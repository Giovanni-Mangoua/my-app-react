import { Component, useEffect, useState } from 'react';
import './dist/css/bootstrap.css';

function useIncrementer(initial) {
    const [number , setNumber] = useState(initial)
    const increment = function () {
        setNumber(n => n + 1)
    }
    return [number , increment]
}

function Compteur (){
    const [number,increment] = useIncrementer(10)

    return <button type="submit" onClick={increment} className="btn btn-primary">Incrementer : {number}</button>
}

function useChecked(initial){
    const [check,setCheck] = useState(initial)
    const toggleCompteur = () => {
        setCheck(v => !v)
    }
    return [check,toggleCompteur]
}

function Home(){

    const [compteurVisible,toggleCompteur] = useChecked(false)

    return <>
       <div className="form-group">
       Afficher le compteur <input type="checkbox" onChange={toggleCompteur} checked={compteurVisible} name="chech" id="chech" /><br/>
       </div>
       <Compteur />
    </>
}

export class MyApp extends Component{
    render () {
        return <Home />
    }
}