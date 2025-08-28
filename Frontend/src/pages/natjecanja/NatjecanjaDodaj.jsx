import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";
import NatjecanjeService from "../../services/NatjecanjeService";


export default function NatjecanjaDodaj(){

    const navigate  = useNavigate();

    async function dodaj(natjecanje){
        const odgovor = await NatjecanjeService.dodaj(natjecanje);
        navigate(RouteNames.NATJECANJE_PREGLED);
    }


    function odradiSubmit(e){
        e.preventDefault();

        let podaci = new FormData(e.target);

        dodaj(
            {
            naziv: podaci.get('naziv'),
            mjesto: podaci.get('mjesto')
            }
        )


    }


    return (
        <>
        Dodavanje natjecanja
        <Form onSubmit={odradiSubmit}>

            <Form.Group controlId="naziv">
                <Form.Label>Naziv</Form.Label>
                <Form.Control type="text" name="naziv" required />
            </Form.Group>

            <Form.Group controlId="mjesto">
                <Form.Label>Mjesto</Form.Label>
                <Form.Control type="text" name="mjesto" />
            </Form.Group>

            <hr style={{marginTop: '50px'}} />

            <Row>
                <Col xs={6} sm={6} md={3} lg={2} xl={6} xxl={6}>
                    <Link to={RouteNames.NATJECANJE_PREGLED}
                    className="btn btn-danger">Odustani</Link>
                </Col>
                <Col xs={6} sm={6} md={9} lg={10} xl={6} xxl={6}>
                    <Button variant="success" type="submit">
                        Dodaj natjecanje
                    </Button>
                </Col>
            </Row>

        </Form>



        

        </>
    )
}