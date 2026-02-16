import "../styling/modal.css"

interface Props {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, content } : Props) => {
    if(!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content">
                <h2>{title}</h2>
                <div className="modal-body">{content}</div>
                <button className="close-btn" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;