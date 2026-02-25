import React from 'react'
import './Table.css'
const Table = () => {
  return (
  <div className="tableWrapper">
  <table className="customTable">
    <thead>
      <tr>
        <th colSpan="3" className="title">Table</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Name</td>
        <td>Phone</td>
        <td>Age</td>
      </tr>
      <tr>
        <td>Jamshidbek</td>
        <td>123456789</td>
        <td>25</td>
      </tr>
      <tr>
        <td>Akbar</td>
        <td>987654321</td>
        <td>30</td>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default Table
