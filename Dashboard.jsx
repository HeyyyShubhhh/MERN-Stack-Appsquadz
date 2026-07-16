import React from 'react'
import Add from './Add'

const Dashboard = () => {
  return (
    <>
    <Add/>
    <div className="container">
        <table className='table text-center'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TASK NAME</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Learn HTML</td>
                    <td>
                        <button className='btn btn-warning'>Edit</button>
                        <button className='btn btn-danger mx-4'>Delete</button>

                    </td>
                </tr>
            </tbody>
            </table>
    </div>
    </>
  )
}

export default Dashboard