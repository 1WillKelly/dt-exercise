import Styles from './index.module.scss';
import bigShoe from '../../assets/images/big-shoe.png';

const Marquee = () => {

    return (
        <section className={Styles['marquee-banner']}>
            <h1>
                Shop<br/>
                Allbirds
            </h1>
            <img
                className={Styles['big-shoe']}
                src={bigShoe}
                alt={'Allbirds Shoes'}
            />
        </section>
    );
};

export default Marquee;
