import React from 'react'
import { Container } from 'reactstrap'
import CreateMap from '../../Component/CreateMap/CreateMap'

function ShowMap() {
    return (
        <Container fluid className="handle-w-h">
            <CreateMap lngLatProps={[51.420470, 35.729054]} />
        </Container>
    )
}

export default ShowMap
