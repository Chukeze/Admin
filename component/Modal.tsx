
type ModalProps = {
    onClose: () => void;
}
function Modal( {onClose}: ModalProps) {
  return (
    <dialog className="modal">
        <button autoFocus onClick={onClose}>X</button>
        <p>Not Authorize</p>
    </dialog>
  )
}
export default Modal