import React from 'react';
import "./index.css";

function AutomobilesList({automobiles, getAutomobiles}) {

    const deleteAutomobile = async (automobile) => {
        const url = `http://localhost:8100/api/automobiles/${automobile.id}/`
        const fetchConfig = {
            method: 'delete'
        }
    const response = await fetch(url, fetchConfig);
    if (response.ok) {
        getAutomobiles()
    }
    }

    return (
        <>
        <div className='p-5 text-center'>
            <h1 className='mb-3'>List of Automobiles</h1>
        </div>
        <table className="table table-striped">
        <thead>
            <tr>
                <th>VIN</th>
                <th>Color</th>
                <th>Year</th>
                <th>Model</th>
                <th>Manufacturer</th>
            </tr>
        </thead>
        <tbody>
            {automobiles.map(automobile => {
                return (
                    <tr key={automobile.id}>
                        <td>{ automobile.vin }</td>
                        <td>{ automobile.color }</td>
                        <td>{ automobile.year }</td>
                        <td>{ automobile.model.name }</td>
                        <td>{ automobile.manufacturer.name }</td>
                        <td>
                            <button id={ automobile.id } onClick={() => deleteAutomobile(automobile)}
                            type="button" className="btn btn-danger">Cancel</button>
                        </td>
                    </tr>
                    );
            })}
            </tbody>
        </table>
    </>
    );
}
export default AutomobilesList;
