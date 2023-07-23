import {Formik, Form} from 'formik';
import { useNavigate } from 'react-router-dom';

import Modal from './Modal';

function LogoutModal({closeModal}) {
    const navigate = useNavigate()

    const handleSubmit = async () => {
        const url = "https://trainer-portal.surajmehta6.repl.co/api/v1/signout"

        const res = await fetch(url, {
            method: 'POST',
            credentials: 'include',
        })

        if (res.status === 200) {
            await setIsLoggedIn(false)
            navigate("/login")
        }
    }

  return (
    <Modal>
      <h3>Are you sure you want to Log out?</h3>
      <Formik onSubmit={handleSubmit}>
        <Form>
          <button type="submit">Yes</button>
          <button onClick={closeModal}>No</button>
        </Form>
      </Formik>
    </Modal>
  )
}

export default LogoutModal