import React, { useState, useEffect } from 'react'
import { Container, FormGroup, Input, Modal, ModalBody, Row, Col } from 'reactstrap'
import axios from 'axios';

import CreateMap from '../../Component/CreateMap/CreateMap'
import './Search.css'
import searchIcon from '../../images/search.svg'

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function Search() {
    const [search, setSearch] = useState("")
    const [responseSearch, setResponseSearch] = useState([])
    const [pending, setPending] = useState(true)
    const [modal, setModal] = useState(false);
    const [modalItem, setModalItem] = useState({})

    const toggle = () => setModal(!modal);

    useEffect(() => {
        search.length !== 0 &&
        axios.post("https://map.ir/search/v2",{text: search},{
            headers: {
                "Content-Type": "application/json",
                'x-api-key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI2ZmJkNTk2ODZiOWM1NzI0OWYyMTQ2NTJiOWVhMmExNTNlMGNjNjVmYjMwOWQxNGM0ZjhhM2U5OWU1MjQ5OTUwMzllMmIyY2UzOTIwNTU2In0.eyJhdWQiOiIxMTIxOCIsImp0aSI6ImI2ZmJkNTk2ODZiOWM1NzI0OWYyMTQ2NTJiOWVhMmExNTNlMGNjNjVmYjMwOWQxNGM0ZjhhM2U5OWU1MjQ5OTUwMzllMmIyY2UzOTIwNTU2IiwiaWF0IjoxNjAyODU1MjgxLCJuYmYiOjE2MDI4NTUyODEsImV4cCI6MTYwNTM2MDg4MSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.Wuhxcn9AD01LhCKBCjzzDOWfP4HUVPsY951dywe6wJJTYcpTBPLKdZX62S7nKD3ZX72pqxn0IAL3GR20v1NtZGIN8smTHACWT7cytHQrmXdSPim8he1K2AFqbjPp993K8o0WUO9CxT79dWToAe24MlYhfTiH3EM-2krwgdULu2BXtMWr9GLcXCckPfqe4o-tU9mjtU812bsBEK4DRgvTRhn0p5QMaZqNJpoBwzx5O07_RvYm5X1Xxt-ollC78wrkzUKFxmi-q2sEcrkQWFeB9oMJwedABT0de6XWtjoXZgdbUoYST8FtRpPZo1vPa_l7Pf9jHQFyEUxFF9wDUP8iag',
            },
        })
            .then((response) => {
                setResponseSearch(response.data.value)
                setPending(false)
            }).catch(error => {
                setResponseSearch([])
            })
    }, [search])
    const handleChange = (event) => {
        setSearch(event.target.value)
    }
    const handleModal = (item) => {
        toggle();
        setModalItem(item)
    }
    return (
        <Container fluid className="p-0 bg-search">
            <div className="with-search mx-auto">
                <FormGroup className="pt-5">
                    <Input
                        className="mx-auto input-search"
                        type="search"
                        name="search"
                        value={search}
                        onChange={handleChange}
                        id="search"
                        placeholder="لطفا نشانی محل مورد نظر را جستجو نمایید"
                    />
                    <img src={searchIcon} alt="" className={search === "" ? "icon-search" : "d-none"} />
                </FormGroup>
                <div className="py-3">
                    {
                        responseSearch.length !== 0 &&
                        responseSearch.map((item, index) =>
                            <div key={index} className="mx-auto text-right px-3 py-2 box-response-search" onClick={() => handleModal(item)}>
                                <h4 className="title-response-search">
                                    {item.title}
                                </h4>
                                <p className="address-response-search">
                                    {item.address}
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>
            {
                !isEmpty(modalItem) &&
                <Modal isOpen={modal} size="xl" toggle={toggle} className="mx-auto my-auto d-flex align-items-center h-100">
                    <ModalBody>
                        <Row>
                            <Col xs="12" lg="6" className="modal-content-search">
                                <h4 className="title-response-search">محل جستجو شده : {modalItem.title}</h4>
                                <p className="my-4">استان : {modalItem.province}</p>
                                <p className="my-4">شهرستان : {modalItem.county}</p>
                                <p className="my-4">آدرس محل : {modalItem.address}</p>
                            </Col>
                            <Col xs="12" lg="6">
                                <CreateMap lngLatProps={modalItem.geom.coordinates} />
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>

            }

        </Container>
    )
}

export default Search

