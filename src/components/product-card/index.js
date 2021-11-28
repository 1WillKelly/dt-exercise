import React, { useState } from "react";
import Modal from '../modal';
import Styles from './index.module.scss';

const ProductCard = (props) => {
    const {
        product_image,
        category,
        title,
        price,
        id,
    } = props;
    const rating = props.className
        ? Styles.stars + " " + props.className
        : Styles.stars;

    const [modalOpened, setModalOpened] = useState(false);

    return (
        <>
            <div role="listitem" className={Styles['product-card']}>
                <div className={Styles['product-card-upper']}>
                    <div className={Styles['image-wrapper']}>
                        <img src={product_image} alt={'Product image for ' + title}/>
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
                        <span className={Styles.id}>#{id}</span>
                    </div>
                </div>
                <button onClick={() => setModalOpened(true)} title="View Details">View Details</button>
            </div>
            <Modal
                closeHandler={() => setModalOpened(false)}
                isOpen={modalOpened}
                modal_product_image={product_image}
                modal_category={category}
                modal_title={title}
                modal_price={price}
                modal_rating={rating}
            />
        </>
    );
};

export default ProductCard;
