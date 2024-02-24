import { Component} from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import './dist/css/bootstrap.css';

function Div (){

    const [tache,setTache] = useState("")
    const [message,setMessage] = useState("")

    const handlerText = function (e){
        setTache(e.target.value)
    }

    const HandlerSubmit = async (event) => {
        event.preventDefault();
        try {
            const resp = await axios.post("http://localhost:5000/form",{tache})
            setMessage("Insertion avec success")
        } catch (error) {
            setMessage("Une erreur s'est produite lors de l'envoie des donnees")   
        }
    }

    return <form onSubmit={HandlerSubmit}>
            <div className="form-group">
                <label htmlFor="tache">Vos Taches:</label>
                <input type="text" name="tache" value={tache} onChange={handlerText} id="tache" className="form-control" />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Ajouter</button>
            </div>
        </form>
}

function Row ({line}){

    return <tr key={line.id}>
        <td>{line.id}</td>
        <td>{line.tache}</td>
        <td><a href={"http://localhost:5000/effacer/data/"+line.id} className="btn btn-danger">Supprimer</a></td>
    </tr>
}

function Table (){

    const [data, setData] = useState([]);

    useEffect(() => {
        // Appel de l'API côté serveur lors du montage du composant
        axios.get('http://localhost:5000/send/data')
            .then(response => setData(response.data))
        .catch(error => console.error('Erreur lors de l\'appel de l\'API', error));
    }, []);

    var rows = []

    data.map(item => {
        rows.push(<Row line={item}/>)
    })

    return <>{JSON.stringify(data)}
       <table className="table">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Tache</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    </>
}


export class Section extends Component{
    render (){
        return <>
          <Div />
          <Table />
        </>
    }
}