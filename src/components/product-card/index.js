import Button from '../button';
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
    return (
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
            <Button
                text="View Details"
            />
        </div>
    );
};

export default ProductCard;
