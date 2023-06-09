import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ServiceHistory({appointments, setAppointments}) {
    const [searchVin, setSearchVin] = useState('')

    const handleSearch = async (event) => {
        if (searchVin.length !== 0) {
            event.preventDefault();
        }
        const filteredAppointments = appointments.filter((appointment) =>
            appointment.vin.includes(searchVin)
        );
        setAppointments(filteredAppointments);
    }

    const handleInputChange = async (event) => {
        const value = event.target.value;
        setSearchVin(value);
    };

    const handleStatusChange = async (id) => {
        const updatedAppointments = appointments.map(appointment => {
            if (appointment.id === id) {
                appointment.completed = !appointment.completed;
            }
            return appointment;
        });
        setAppointments(updatedAppointments);

        const appointment = appointments.find(appointment => appointment.id === id);
        const url = `http://localhost:8080/api/appointments/${id}/`
        const fetchConfig = {
            method: 'put',
            body: JSON.stringify({ completed: appointment.completed }),
            headers: {
                "Content-Type": "application/json"
            }
        }
        await fetch(url, fetchConfig);
    }

    return (
        <>
        <div className="container">
            <form onSubmit={handleSearch} className="input-group mb-0 mt-5">
                <input onChange={handleInputChange} type="search" className="form-control rounded" placeholder="Search by VIN" aria-label="Search" aria-describedby="search-addon" />
                <button type="submit" className="btn btn-outline-secondary">Search</button>
            </form>
            <div className='p-5 text-center'>
                <h1 className='mb-3'>Service Appointment History</h1>
            </div>
            <div className="add-appointments-history-container d-flex justify-content-end">
                <Link to="/appointments/">
                <button className="btn btn-outline-secondary">See Active Appointments</button>
                </Link>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr className='text-center'>
                        <th>VIN</th>
                        <th>Customer Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason</th>
                        <th>VIP</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => {
                        return (
                            <tr key={appointment.id} className='text-center'>
                                <td>{ appointment.vin }</td>
                                <td>{ appointment.customer_name }</td>
                                <td>{ new Date(appointment.date_time).toLocaleDateString("en-US") }</td>
                                <td>{ new Date(appointment.date_time).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                }) }
                                </td>
                                <td>{ appointment.technician.name }</td>
                                <td>{ appointment.reason }</td>
                                <td>{ appointment.vip ?
                                    <img
                                        src='https://cdn-icons-png.flaticon.com/512/5983/5983922.png'
                                        alt=""
                                        width="25px"
                                        height="25px"/> :
                                    ""
                                    }
                                </td>
                                <td>{ appointment.completed ?
                                    <img
                                        src='https://cdn-icons-png.flaticon.com/512/5610/5610944.png'
                                        alt=""
                                        width="25px"
                                        height="25px"
                                        onClick={() => handleStatusChange(appointment.id)}
                                    /> :
                                    <img
                                        src='https://cdn-icons-png.flaticon.com/512/463/463575.png'
                                        alt=""
                                        width="25px"
                                        height="25px"
                                        onClick={() => handleStatusChange(appointment.id)}
                                    />
                                    }
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default ServiceHistory;
