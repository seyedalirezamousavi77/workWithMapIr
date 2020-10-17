import React, { useState, useEffect } from 'react'
import { Container, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import axios from 'axios';

function Search() {
    const [search, setSearch] = useState("")
    const [responseSearch, setResponseSearch] = useState([])
    const [pending, setPending] = useState(true)
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    useEffect(() => {
        axios({
            method: 'POST',
            url: "https://map.ir/search/v2",
            headers: {
                "Content-Type": "application/json",
                'x-api-key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI2ZmJkNTk2ODZiOWM1NzI0OWYyMTQ2NTJiOWVhMmExNTNlMGNjNjVmYjMwOWQxNGM0ZjhhM2U5OWU1MjQ5OTUwMzllMmIyY2UzOTIwNTU2In0.eyJhdWQiOiIxMTIxOCIsImp0aSI6ImI2ZmJkNTk2ODZiOWM1NzI0OWYyMTQ2NTJiOWVhMmExNTNlMGNjNjVmYjMwOWQxNGM0ZjhhM2U5OWU1MjQ5OTUwMzllMmIyY2UzOTIwNTU2IiwiaWF0IjoxNjAyODU1MjgxLCJuYmYiOjE2MDI4NTUyODEsImV4cCI6MTYwNTM2MDg4MSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.Wuhxcn9AD01LhCKBCjzzDOWfP4HUVPsY951dywe6wJJTYcpTBPLKdZX62S7nKD3ZX72pqxn0IAL3GR20v1NtZGIN8smTHACWT7cytHQrmXdSPim8he1K2AFqbjPp993K8o0WUO9CxT79dWToAe24MlYhfTiH3EM-2krwgdULu2BXtMWr9GLcXCckPfqe4o-tU9mjtU812bsBEK4DRgvTRhn0p5QMaZqNJpoBwzx5O07_RvYm5X1Xxt-ollC78wrkzUKFxmi-q2sEcrkQWFeB9oMJwedABT0de6XWtjoXZgdbUoYST8FtRpPZo1vPa_l7Pf9jHQFyEUxFF9wDUP8iag',
            },
            data: JSON.stringify({ "text": search })
        })
            .then((response) => {
                setResponseSearch(response.data.value)
                setPending(false)
                console.log(responseSearch)
            }).catch(error => {
                console.log(error)
            })
    }, [search])
    const handleChange = (event) => {
        setSearch(event.target.value)
    }
    return (
        <Container>
            <FormGroup>
                <Label for="exampleSearch">Search</Label>
                <Input
                    type="search"
                    name="search"
                    value={search}
                    onChange={handleChange}
                    id="search"
                    placeholder="search placeholder"
                />
            </FormGroup>
            {
                responseSearch.length !== 0 &&
                responseSearch.map((item, index) =>
                    <div key={index} onClick={toggle}>
                        <h4>
                            {item.address}
                        </h4>
                        <p>
                            {item.title}
                        </p>
                    </div>
                )
            }
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Container>
    )
}

export default Search

