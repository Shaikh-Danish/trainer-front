/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { MdEdit, MdDelete } from "react-icons/md";

import "./Table.css";

import EditModal from "./../Modal/EditModal";
import DeleteModal from "./../Modal/DeleteModal";
import AddNewModal from "./../Modal/AddNewModal";

import { getUniqueKey } from "./../utils/utils";

function Table({ data }) {
  data = data.map((dt) => {
    return { id: getUniqueKey(), link: dt };
  });

  const [rows, setRows] = useState(data);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isNew, setIsNew] = useState(false);

  const linkRef = useRef();

  const addRow = () => {
    setIsNew(true);
  };

  const handleEdit = (row) => {
    linkRef.current = row;
    setIsEdit(true);
  };

  const handleDelete = (row) => {
    linkRef.current = row;
    setIsDelete(true);
  };
  return (
    <>
      <div className="table-container">
        <button className="add-row-btn" onClick={addRow}>
          Add New Row
        </button>
        <table>
          <thead>
            <tr>
              <th>Column Link</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const uniqueKey = getUniqueKey()
              return <TableRow
                key={uniqueKey}
                row={row}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            }
            )}
          </tbody>
        </table>
      </div>

      {isEdit && (
        <EditModal 
          link={linkRef} 
          closeModal={() => setIsEdit(false)} 
          updateLinks={setRows}
          rows={rows} />
      )}
      {isDelete && (
        <DeleteModal 
          link={linkRef} 
          closeModal={() => setIsDelete(false)} 
          updateLinks={setRows}
          rows={rows} />
      )}
      {isNew && (
        <AddNewModal
        closeModal={() => setIsNew(false)} 
        updateLinks={setRows}
        rows={rows} />
      )}
    </>
  );
}

export default Table;

function TableRow({ row, handleEdit, handleDelete }) {
  return (
    <tr key={row.id}>
      <td>
        <a href="#">{row.link}</a>
      </td>
      <td>
        <button className="edit-btn" onClick={() => handleEdit(row)}>
          <MdEdit />
        </button>
        <button className="delete-btn" onClick={() => handleDelete(row)}>
          <MdDelete />
        </button>
      </td>
    </tr>
  );
}

