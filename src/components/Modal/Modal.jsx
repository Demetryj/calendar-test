import { AiOutlineCloseCircle } from 'react-icons/ai';

import './Modal.scss';

export const Modal = ({ closeModal, modalPosition, children }) => {
  const { top, left } = modalPosition;

  return (
    <div className="modal" style={{ top: top, left: left }}>
      <div className="modal__close-button" role="button" onClick={closeModal}>
        <AiOutlineCloseCircle />
      </div>

      {children}
    </div>
  );
};
