/* eslint-disable react/prop-types */
import { Formik, Form, Field } from "formik";

import Modal from "./Modal";
import "./Modal.css";
import { getUniqueKey } from "./../utils/utils";


function EditModal({ link , closeModal, updateLinks, rows }) {
  const initialValues = {
    id: "",
    link: ""
  };
  
  const handleSubmit = async (values) => {
    const url = "https://trainer-portal.surajmehta6.repl.co/edit"
    
    const data = {
      oldLink: link.current.link,
      newLink: values.link
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    const {status } = await res.json();
    
    if (status === 200) {
      rows.push({id: getUniqueKey(), link: values.link})
      rows = rows.filter(row => row.id !== link.current.id)
      updateLinks(rows)

      closeModal()
    } 
  };

  return (
    <Modal>
      <h3>Edit Link</h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div className="form-group">
            <label>Link</label>
            <Field type="text" name="link"></Field>
          </div>
          <button type="submit">Submit</button>
          <button onClick={closeModal}>Cancel</button>
        </Form>
      </Formik>
    </Modal>
  );
}

export default EditModal;
