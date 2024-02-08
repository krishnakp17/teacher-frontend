import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewTeacher = () => {
    const [data, setData] = new useState([])
    const getData = () => {
        axios.get("http://localhost:3000/api/teacher/viewall").then(
            (response) => {
                setData(response.data)

            }
        )
    }
    useEffect(() => { getData() }, [])
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Teacher name</th>
                                    <th scope="col">Qualification</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Year of experience</th>


                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return <tr>

                                                <td>{value.name}</td>
                                                <td>{value.qual}</td>
                                                <td>{value.dept}</td>
                                                <td>{value.yrofexp}</td>
                                               
                                            </tr>
                                        }
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ViewTeacher