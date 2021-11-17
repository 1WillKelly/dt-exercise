import ProductCard from '../../product-card';
import Styles from './index.module.scss';
import allbirds1 from '../../../assets/images/product-images/allbirds1.png';
import allbirds2 from '../../../assets/images/product-images/allbirds2.png';
import allbirds3 from '../../../assets/images/product-images/allbirds3.png';
import allbirds4 from '../../../assets/images/product-images/allbirds4.png';
import allbirds5 from '../../../assets/images/product-images/allbirds5.png';
import allbirds6 from '../../../assets/images/product-images/allbirds6.png';
import allbirds7 from '../../../assets/images/product-images/allbirds7.png';
import allbirds8 from '../../../assets/images/product-images/allbirds8.png';
import allbirds9 from '../../../assets/images/product-images/allbirds9.png';
import allbirds10 from '../../../assets/images/product-images/allbirds10.png';
import allbirds11 from '../../../assets/images/product-images/allbirds11.png';
import allbirds12 from '../../../assets/images/product-images/allbirds12.png';

const ResultsGrid = () => {

    return (
        <div className={Styles['results-grid-wrapper']}>
            <div className={Styles['results-grid']}>
                <ProductCard
                    product_image={allbirds1}
                    category="Running Shoes"
                    title="Men's Tree Dashers"
                    price="85"
                    className={Styles['stars_4']}
                />
                <ProductCard
                    product_image={allbirds6}
                    category="Everyday Shoes"
                    title="Men's Wool Runner Casual"
                    price="110"
                    className={Styles['stars_5']}
                />
                <ProductCard
                    product_image={allbirds3}
                    category="Running Shoes"
                    title="Men's Trail Runners SWT"
                    price="85"
                    className={Styles['stars_5']}
                />
                <ProductCard
                    product_image={allbirds4}
                    category="Running Shoes"
                    title="Men’s Wool Dasher Fluffs"
                    price="100"
                    className={Styles['stars_4']}
                />
                <ProductCard
                    product_image={allbirds5}
                    category="Everyday Shoes"
                    title="Men's Wool Runners"
                    price="90"
                    className={Styles['stars_4-5']}
                />
                <ProductCard
                    product_image={allbirds8}
                    category="Everyday Shoes"
                    title="Men's Wool Pipers"
                    price="75"
                    className={Styles['stars_4-5']}
                />
                <ProductCard
                    product_image={allbirds9}
                    category="Slip-Ons"
                    title="Men's Tree Loungers"
                    price="75"
                    className={Styles['stars_5']}
                />
                <ProductCard
                    product_image={allbirds10}
                    category="Slip-Ons"
                    title="Men's Wool Loungers"
                    price="90"
                    className={Styles['stars_4']}
                />
                <ProductCard
                    product_image={allbirds2}
                    category="Running Shoes"
                    title="Men's Wool Dasher Mizzles"
                    price="100"
                    className={Styles['stars_4-5']}
                />
                <ProductCard
                    product_image={allbirds11}
                    category="Slip-Ons"
                    title="Men's Wool Lounger Fluffs"
                    price="105"
                    className={Styles['stars_4-5']}
                />
                <ProductCard
                    product_image={allbirds12}
                    category="High-Tops"
                    title="Men's Wool Piper Mids"
                    price="120"
                    className={Styles['stars_5']}
                />
                <ProductCard
                    product_image={allbirds7}
                    category="Everyday Shoes"
                    title="Men's Tree Runners Casual"
                    price="105"
                    className={Styles['stars_4']}
                />
            </div>
        </div>
    );
};

export default ResultsGrid;
