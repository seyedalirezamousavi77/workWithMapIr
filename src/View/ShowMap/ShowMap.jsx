import React from 'react'
import { Container } from 'reactstrap'
import CreateMap from '../../Component/CreateMap/CreateMap'

function ShowMap() {
    return (
        <Container fluid className="handle-w-h">
            <CreateMap lngLatProps={[]} />
        </Container>
    )
}

export default ShowMap
