import React, { useState, useEffect } from 'react'
import Mapir from 'mapir-react-component';
import axios from 'axios';
import { Spinner } from 'reactstrap'

const Map = Mapir.setToken({
    transformRequest: (url) => {
        return {
            url,
            headers: {
                "x-api-key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI2ZmJkNTk2ODZiOWM1NzI0OWYyMTQ2NTJiOWVhMmExNTNlMGNjNjVmYjMwOWQxNGM0ZjhhM2U5OWU1MjQ5OTUwMzllMmIyY2UzOTIwNTU2In0.eyJhdWQiOiIxMTIxOCIsImp0aSI6ImI2ZmJkNTk2ODZiOWM1NzI0OWYyMTQ2NTJiOWVhMmExNTNlMGNjNjVmYjMwOWQxNGM0ZjhhM2U5OWU1MjQ5OTUwMzllMmIyY2UzOTIwNTU2IiwiaWF0IjoxNjAyODU1MjgxLCJuYmYiOjE2MDI4NTUyODEsImV4cCI6MTYwNTM2MDg4MSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.Wuhxcn9AD01LhCKBCjzzDOWfP4HUVPsY951dywe6wJJTYcpTBPLKdZX62S7nKD3ZX72pqxn0IAL3GR20v1NtZGIN8smTHACWT7cytHQrmXdSPim8he1K2AFqbjPp993K8o0WUO9CxT79dWToAe24MlYhfTiH3EM-2krwgdULu2BXtMWr9GLcXCckPfqe4o-tU9mjtU812bsBEK4DRgvTRhn0p5QMaZqNJpoBwzx5O07_RvYm5X1Xxt-ollC78wrkzUKFxmi-q2sEcrkQWFeB9oMJwedABT0de6XWtjoXZgdbUoYST8FtRpPZo1vPa_l7Pf9jHQFyEUxFF9wDUP8iag", //Mapir api key
                'Mapir-SDK': 'reactjs'
            },
        }
    }
});
function CreateMap({ lngLatProps }) {
    const [lngLat, setLngLat] = useState(lngLatProps)
    const [pending, setPending] = useState(true)
    const [address, setAddress] = useState({})
    const handleClick = (Map, e) => {
        setLngLat([e.lngLat.lng, e.lngLat.lat])
        console.log(e.lngLat);
    }
    useEffect(() => {
        axios.get(`https://map.ir/reverse/fast-reverse?lat=${lngLat[1]}&lon=${lngLat[0]}`, {
            headers: { "x-api-key": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI2ZmJkNTk2ODZiOWM1NzI0OWYyMTQ2NTJiOWVhMmExNTNlMGNjNjVmYjMwOWQxNGM0ZjhhM2U5OWU1MjQ5OTUwMzllMmIyY2UzOTIwNTU2In0.eyJhdWQiOiIxMTIxOCIsImp0aSI6ImI2ZmJkNTk2ODZiOWM1NzI0OWYyMTQ2NTJiOWVhMmExNTNlMGNjNjVmYjMwOWQxNGM0ZjhhM2U5OWU1MjQ5OTUwMzllMmIyY2UzOTIwNTU2IiwiaWF0IjoxNjAyODU1MjgxLCJuYmYiOjE2MDI4NTUyODEsImV4cCI6MTYwNTM2MDg4MSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.Wuhxcn9AD01LhCKBCjzzDOWfP4HUVPsY951dywe6wJJTYcpTBPLKdZX62S7nKD3ZX72pqxn0IAL3GR20v1NtZGIN8smTHACWT7cytHQrmXdSPim8he1K2AFqbjPp993K8o0WUO9CxT79dWToAe24MlYhfTiH3EM-2krwgdULu2BXtMWr9GLcXCckPfqe4o-tU9mjtU812bsBEK4DRgvTRhn0p5QMaZqNJpoBwzx5O07_RvYm5X1Xxt-ollC78wrkzUKFxmi-q2sEcrkQWFeB9oMJwedABT0de6XWtjoXZgdbUoYST8FtRpPZo1vPa_l7Pf9jHQFyEUxFF9wDUP8iag" }
        }).then(res => {
            setAddress(res.data)
            setPending(false)
            console.log("axios :", res.data)

        })
    }, [lngLat])
    return (
        <>
            {
                (pending === true) ?
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <Spinner color="primary" />
                    </div>
                    :
                    <Mapir
                        center={[51.420470, 35.729054]}
                        Map={Map}
                        zoom={[10]}
                        onClick={handleClick}
                        apiKey={"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI2ZmJkNTk2ODZiOWM1NzI0OWYyMTQ2NTJiOWVhMmExNTNlMGNjNjVmYjMwOWQxNGM0ZjhhM2U5OWU1MjQ5OTUwMzllMmIyY2UzOTIwNTU2In0.eyJhdWQiOiIxMTIxOCIsImp0aSI6ImI2ZmJkNTk2ODZiOWM1NzI0OWYyMTQ2NTJiOWVhMmExNTNlMGNjNjVmYjMwOWQxNGM0ZjhhM2U5OWU1MjQ5OTUwMzllMmIyY2UzOTIwNTU2IiwiaWF0IjoxNjAyODU1MjgxLCJuYmYiOjE2MDI4NTUyODEsImV4cCI6MTYwNTM2MDg4MSwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.Wuhxcn9AD01LhCKBCjzzDOWfP4HUVPsY951dywe6wJJTYcpTBPLKdZX62S7nKD3ZX72pqxn0IAL3GR20v1NtZGIN8smTHACWT7cytHQrmXdSPim8he1K2AFqbjPp993K8o0WUO9CxT79dWToAe24MlYhfTiH3EM-2krwgdULu2BXtMWr9GLcXCckPfqe4o-tU9mjtU812bsBEK4DRgvTRhn0p5QMaZqNJpoBwzx5O07_RvYm5X1Xxt-ollC78wrkzUKFxmi-q2sEcrkQWFeB9oMJwedABT0de6XWtjoXZgdbUoYST8FtRpPZo1vPa_l7Pf9jHQFyEUxFF9wDUP8iag"}
                    >
                        <Mapir.Layer
                            type="symbol"
                            layout={{ "icon-image": "harbor-15" }}

                        >
                        </Mapir.Layer>
                        {
                            lngLat[0] !== 51.420470 && lngLat !== 35.729054 &&
                            <Mapir.Popup
                                coordinates={lngLat}
                                offset={{
                                    'bottom-left': [12, -38], 'bottom': [0, -38], 'bottom-right': [-12, -38]
                                }}>
                                <p>
                                    {
                                        address.address
                                    }
                                </p>
                            </Mapir.Popup>
                        }
                        {
                            lngLat[0] !== 51.420470 && lngLat !== 35.729054 &&
                            <Mapir.Marker
                                coordinates={lngLat}
                                anchor="bottom">
                            </Mapir.Marker>
                        }
                    </Mapir>
            }
        </>
    )
}

export default CreateMap

