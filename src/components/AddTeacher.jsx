import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddTeacher = () => {
    const [input, setInput] = new useState(
        {
            "name": "",
            "qual": "",
            "dept": "",
            "yrofexp": ""
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3000/api/teacher/add", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Sucessfully added")
                    setInput(
                        {
                            "name": "",
                            "qual": "",
                            "dept": "",
                            "yrofexp": ""
                        }
                    )
                } else {
                    alert("Something went wrong")
                }
            }
        )
    }
    return (
        <div>
            <Navbar/>
            <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Teacher name</label>
                            <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Qualification</label>
                            <input type="text" className="form-control" name='qual' value={input.qual} onChange={inputHandler} />
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Department</label>
                            <input type="text" className="form-control" name='dept' value={input.dept} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Year of experience</label>
                            <input type="text" className="form-control" name='yrofexp' value={input.yrofexp} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValues}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
    )
}

export default AddTeacher