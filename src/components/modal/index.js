import React from 'react';
import Styles from './index.module.scss';

const Modal = ({ isOpen, closeHandler, modalConfig, modalContent }) => {
  if (!isOpen) return null;

  return (
      <div className={Styles['modal__container']} onClick={() => modalConfig ? closeHandler() : null}>
        <div className={Styles['modal__box']} onClick={(e) => e.stopPropagation()}>
          <div className={Styles['modal__header']}>
            <div className={Styles['modal__header-title']}>title</div>
            <div className={Styles['modal__header-close']} onClick={closeHandler}>X</div>
          </div>
          <div className={Styles['modal__content']}>
            {modalContent}
          </div>
        </div>
      </div>
  )
}

export default Modal;
