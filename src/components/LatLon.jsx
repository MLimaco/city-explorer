import Card from 'react-bootstrap/Card';

function LatLon(props) {
    return (
        <Card>
            <Card.Header>Información</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>
                        {props.city}
                    </p>
                </blockquote>
                <p>
                    Latitud:{props.lat}
                </p>
                <p>
                    Longitud:{props.lon}
                </p>
                <p>
                    Tipo de Via:{props.type}
                </p>
            </Card.Body>
        </Card>
    )
}
export default LatLon;