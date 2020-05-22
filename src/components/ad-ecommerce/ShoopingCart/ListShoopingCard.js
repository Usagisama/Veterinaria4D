import React, { useState, useEffect } from 'react'
import { Container, CardDeck, Card, Button } from 'react-bootstrap'

export default function ListShoopingCard() {

    const DeliveryProducts = [
        { dateship: "2020-05-20T02:12:12.805Z", _id: "5ec4a30b8559172008de35aa", knt: "1", title: "Balance Gato Kitten", details: "Balance" },
        { dateship: "2020-05-20T02:12:12.805Z", _id: "5ec4a30b8559172008de35ab", knt: "1", title: "Excelent Adulto", details: "Adulto"},
        { dateship: "2020-05-20T23:25:22.401Z", _id: "5ec5c051cffd3a1060933ea5", knt: "1", title: "DogChow", details: "Alimentos"},
        { dateship: "2020-05-20T23:25:22.401Z", _id: "5ec5c051cffd3a1060933ea6", knt: "2", title: "Balance Gato Kitten", details: "Balance" },
    ]

    const [carproducts, setCarproducts] = useState([]);


    const getShoopingCarts = async () => {
        /*const solicitud = await fetch(process.env.REACT_APP_BACKEND_URL + "/CardProducts", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const respuesta = await solicitud.json();
        setCarproducts(respuesta.carproducts); */
        setCarproducts(DeliveryProducts);
    }

    const deleteShoppingCards = async (id) => {

        /*const solicitud = await fetch(process.env.REACT_APP_BACKEND_URL + "/" + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const respuesta = await solicitud.json();
        getShoopingCarts(); */
    }


    useEffect(() => {
        getShoopingCarts();
    }, []);


    return (
        <Container>
            <h1> Entregas </h1>
            <CardDeck>
                {
                    carproducts.map(carproducts => (
                        <Card key={carproducts._id}>
                            <Card.Body>
                                <Card.Title>{carproducts.title}</Card.Title>
                                <Card.Text>
                                    {carproducts.details}
                                    {carproducts.price}

                                   Cantidad : {carproducts.knt}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="danger" onClick={() => { deleteShoppingCards(carproducts._id) }}>Eliminar </Button>
                            </Card.Footer>
                        </Card>
                    ))
                }
            </CardDeck>
        </Container>
    )
}