/* eslint-disable react/prop-types */
import { Formik, Form } from "formik";

import Modal from "./Modal";
import "./Modal.css";


function DeleteModal({ link , closeModal, updateLinks, rows }) {
  const initialValues = {
    id: "",
    link: ""
  };

//   console.log(link)
  
  const handleSubmit = async () => {
    const url = "https://trainer-portal.surajmehta6.repl.co/delete"
    
    const data = {
      link: link.current.link,
    }

    const res = await fetch(url, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });
    const {status} = await res.json();

    console.log(status);
    
    if (status === 200) {
      rows = rows.filter(row => row.id !== link.current.id)
      updateLinks(rows)

      closeModal()
    } 
  };

  return (
    <Modal>
      <h3>Are you sure you want to delete the link?</h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <button type="submit">Yes</button>
          <button onClick={closeModal}>No</button>
        </Form>
      </Formik>
    </Modal>
  );
}

export default DeleteModal;
