import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function CitySearch(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
        props.displayLatLon();
    };

    return (
        <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control onChange={props.updateCity} type="text" rows={3} placeholder='Ingresa tu Ciudad Aquí' />
            </Form.Group>
            <>
                <Button type="submit" variant="primary">Buscar</Button>
            </>
        </Form>
    )
}
export default CitySearch;