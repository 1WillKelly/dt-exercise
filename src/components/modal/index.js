import React from 'react';
import Styles from './index.module.scss';
import FGSize from '../filters/filter-groups/fg-size';
import FGColor from '../filters/filter-groups/fg-color';
import CloseX from '../../assets/images/close-x.svg';

const Modal = (props) => {

    const {
        isOpen,
        closeHandler,
        modalConfig,
        modal_product_image,
        modal_category,
        modal_title,
        modal_price,
        modal_rating,
    } = props;

    if (!isOpen) return null;

    return (
        <div className={Styles['modal-container']} onClick={() => modalConfig ? closeHandler() : null}>
            <div className={Styles['modal-box']} onClick={(e) => e.stopPropagation()}>
                <div className={Styles['modal-close']} onClick={closeHandler}>
                    <img src={CloseX} />
                </div>
                <div className={Styles['product-image']}>
                    <img src={modal_product_image} />
                </div>
                <div className={Styles['product-info']}>
                    <div className={Styles['product-metadata']}>
                        <p className={Styles.category}>{modal_category}</p>
                        <h4>{modal_title}</h4>
                        <p className={Styles.price}><span>$</span>{modal_price}</p>
                        <div className={modal_rating}>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                        </div>
                    </div>
                    <button className={Styles['cart-button']} onClick={closeHandler} title="Add to Cart">Add to Cart</button>
                    <div className={Styles['product-selections']}>
                        <div className={Styles.size}>
                            <FGSize
                                title="Select Size:"
                            />
                        </div>
                        <div className={Styles.color}>
                            <FGColor
                                title="Select Color:"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
