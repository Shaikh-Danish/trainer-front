/* eslint-disable react/prop-types */
import { useState } from 'react';

import './Table.css'

function Table() {
    const [rows, setRows] = useState([
        { id: 1, link: 'Column Link 1' },
        { id: 2, link: 'Column Link 2' },
        { id: 3, link: 'Column Link 3' },
      ]);
    
      const addRow = () => {
        const newRow = {
          id: rows.length + 1,
          link: `Column Link ${rows.length + 1}`,
        };
        setRows([...rows, newRow]);
      };
    
      const handleEdit = (id) => {
        console.log(id)
        // Handle the edit functionality here (if needed).
      };
    
      const handleDelete = (id) => {
        const updatedRows = rows.filter((row) => row.id !== id);
        setRows(updatedRows);
      }
  return (
    <div className="table-container">
      <button className="add-row-btn" onClick={addRow}>
        Add New Row
      </button>
      <table>
        <thead>
          <tr>
            <th>Column Link</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              row={row}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table


function TableRow({ row, handleEdit, handleDelete }) {
    return (
        <tr key={row.id}>
          <td>
            <a href="#">{row.link}</a>
          </td>
          <td>
            <button className="edit-btn" onClick={() => handleEdit(row.id)}>
              Edit
            </button>
          </td>
          <td>
            <button className="delete-btn" onClick={() => handleDelete(row.id)}>
              Delete
            </button>
          </td>
        </tr>
      );
}