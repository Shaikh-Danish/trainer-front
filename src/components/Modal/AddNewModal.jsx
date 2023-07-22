/* eslint-disable react/prop-types */
import { Formik, Form, Field } from "formik";

import Modal from "./Modal";
import "./Modal.css";
import { getUniqueKey } from "../utils/utils";


function AddNewModal({ closeModal, updateLinks, rows }) {
  const initialValues = {
    link: ""
  };
  
  const handleSubmit = async (values) => {
    const url = "https://trainer-portal.surajmehta6.repl.co/dashboard";
    
    const data = {
      link: values.link
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    const {status} = await res.json();
    
    if (status === 201) {
      rows.push({id: getUniqueKey(), link: values.link})
      updateLinks(rows)

      closeModal()
    } 
  };

  return (
    <Modal>
      <h3>Add New Link</h3>
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

export default AddNewModal;
