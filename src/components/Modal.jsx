function Modal({ children }) {
  return (
    <div className="modal-container">
      <div className="modal">{children}</div>
    </div>
  );
}

export default Modal;
