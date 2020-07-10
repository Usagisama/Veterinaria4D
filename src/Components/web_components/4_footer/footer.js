import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import Back from '../../resources/backfooter.jpg'

export default function footer() {

    let imgUrl = Back ; 

    return (

        <Container fluid  style={{
            backgroundImage: `url(${ imgUrl })` , 
            backgroundRepeat  : 'repeat',
            backgroundPosition: 'center',
        }}>

            <Row >
                <Col className="mt-3">
                    <Row>
                        <Image fluid width='50px' src="https://buenosaires.aupe-sa.com.ar/wp-content/plugins/wp-google-maps/images/icons8-google-maps-500.png" rounded />
                    </Row>
                    <Row>
                        <h5>Tucuman 4000 , Argentina</h5>
                    </Row>
                    <Row>
                        <h5>-Contacto : 155699049</h5>
                    </Row>
                    <Row>
                        <h5>Lun a Vie de 08:00 a 17:00</h5>
                    </Row>
                </Col>

                <Col className="mt-3"  xs lg="3" >
                    <Row>
                        <h5 className="text-gray text-center">Buscanos en Nuestras Redes Sociales</h5>
                    </Row>
                    <Row>
                        <Col> <Image fluid width='100px' src="https://w7.pngwing.com/pngs/739/443/png-transparent-social-media-facebook-logo-computer-icons-facebook-icon-blue-internet-facebook-icon.png" roundedCircle /></Col>
                        <Col> <Image fluid width='100px' src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-1-1.png" roundedCircle /></Col>
                        <Col> <Image fluid width='100px' src="data:image/jpeg;base64,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" roundedCircle /></Col>

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}