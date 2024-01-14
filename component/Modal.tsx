
type ModalProps = {
    onClose: () => void;
}
function Modal( {onClose}: ModalProps) {
  return (
    <dialog className="modal" aria-modal>
        <button autoFocus onClick={onClose}>X</button>
        <p>Not Authorize</p>
    </dialog>
  )
}
export default Modal