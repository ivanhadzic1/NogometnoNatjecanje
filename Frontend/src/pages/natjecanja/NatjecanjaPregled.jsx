import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";
import NatjecanjeService from "../../services/NatjecanjeService";


export default function NatjecanjaPregled(){

    const[natjecanja, setNatjecanja] = useState([]);
    const navigate = useNavigate();


    async function dohvatiNatjecanja() {
       const odgovor = await NatjecanjeService.get()
       setNatjecanja(odgovor)
    }

    useEffect(()=>{
        dohvatiNatjecanja();
    },[])

    function obrisi(sifra){
        if(!confirm('Sigurno obrisati?')){
            return;
        }
        brisanje(sifra)
    }

    async function brisanje(sifra) {
        const odgovor = await NatjecanjeService.obrisi(sifra);
        dohvatiNatjecanja();
    }

    return(
        <>
        <Link 
        className="btn btn-success"
        to={RouteNames.NATJECANJE_DODAJ} >Dodavanje novog natjecanja</Link>

        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Naziv</th>
                    <th>Mjesto</th>
                    <th>Akcija</th>
                </tr>
            </thead>
            <tbody>
                {natjecanja && natjecanja.map((natjecanje,index)=>(
                    <tr key={index}>
                        <td>{natjecanje.naziv}</td>
                        <td>{natjecanje.mjesto}</td>
                        <td>
                            <Button 
                            onClick={()=>navigate(`/natjecanja/${natjecanje.sifra}`)}>
                                Promjena
                            </Button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Button variant="danger"
                            onClick={()=>obrisi(natjecanje.sifra)}>
                                Obriši
                            </Button>                        
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    )
}