import React, { useState } from "react";
import Modal from '../modal';
import Styles from './index.module.scss';

const ProductCard = (props) => {
    const {
        product_image,
        category,
        title,
        price,
    } = props;
    const rating = props.className
        ? Styles.stars + " " + props.className
        : Styles.stars;

    const [modalOpened, setModalOpened] = useState(false);

    return (
        <>
            <div className={Styles['product-card']}>
                <div className={Styles['product-card-upper']}>
                    <div className={Styles['image-wrapper']}>
                        <img src={product_image} />
                    </div>
                    <div className={Styles['product-info']}>
                        <p className={Styles.category}>{category}</p>
                        <h4>{title}</h4>
                        <p className={Styles.price}><span>$</span>{price}</p>
                        <div className={rating}>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                        </div>
                    </div>
                </div>
                {/* <span>{id}</span> */}
                <button onClick={() => setModalOpened(true)}>View Details</button>
            </div>
            <Modal
                closeHandler={() => setModalOpened(false)}
                isOpen={modalOpened}
                modalContent={price}
            />
        </>
    );
};

export default ProductCard;
