import Styles from './index.module.scss';
import shoe_1 from '../../assets/images/banner-images/shoe-1.jpg';
import shoe_2 from '../../assets/images/banner-images/shoe-2.jpg';
import shoe_3 from '../../assets/images/banner-images/shoe-3.jpg';
import shoe_4 from '../../assets/images/banner-images/shoe-4.jpg';
import shoe_5 from '../../assets/images/banner-images/shoe-5.jpg';
import shoe_6 from '../../assets/images/banner-images/shoe-6.jpg';
import shoe_7 from '../../assets/images/banner-images/shoe-7.jpg';
import shoe_8 from '../../assets/images/banner-images/shoe-8.jpg';

const Marquee = () => {

    return (
        <section className={Styles['marquee-banner']}>
            <h1>
                Shop<br/>
                Allbirds
            </h1>
            <div className={Styles['fading-shoes']}>
                <div className={Styles['shoe-box']}>
                    <img src={shoe_1} alt="Allbirds Shoe Display"/>
                    <img src={shoe_2} alt="Allbirds Shoe Display"/>
                    <img src={shoe_3} alt="Allbirds Shoe Display"/>
                    <img src={shoe_4} alt="Allbirds Shoe Display"/>
                    <img src={shoe_5} alt="Allbirds Shoe Display"/>
                    <img src={shoe_6} alt="Allbirds Shoe Display"/>
                    <img src={shoe_7} alt="Allbirds Shoe Display"/>
                    <img src={shoe_8} alt="Allbirds Shoe Display"/>
                </div>
                <div className={Styles['shoe-box']}>
                    <img src={shoe_3} alt="Allbirds Shoe Display"/>
                    <img src={shoe_4} alt="Allbirds Shoe Display"/>
                    <img src={shoe_5} alt="Allbirds Shoe Display"/>
                    <img src={shoe_6} alt="Allbirds Shoe Display"/>
                    <img src={shoe_7} alt="Allbirds Shoe Display"/>
                    <img src={shoe_8} alt="Allbirds Shoe Display"/>
                    <img src={shoe_1} alt="Allbirds Shoe Display"/>
                    <img src={shoe_2} alt="Allbirds Shoe Display"/>
                </div>
                <div className={Styles['shoe-box']}>
                    <img src={shoe_5} alt="Allbirds Shoe Display"/>
                    <img src={shoe_6} alt="Allbirds Shoe Display"/>
                    <img src={shoe_7} alt="Allbirds Shoe Display"/>
                    <img src={shoe_8} alt="Allbirds Shoe Display"/>
                    <img src={shoe_1} alt="Allbirds Shoe Display"/>
                    <img src={shoe_2} alt="Allbirds Shoe Display"/>
                    <img src={shoe_3} alt="Allbirds Shoe Display"/>
                    <img src={shoe_4} alt="Allbirds Shoe Display"/>
                </div>
                <div className={Styles['shoe-box']}>
                    <img src={shoe_7} alt="Allbirds Shoe Display"/>
                    <img src={shoe_8} alt="Allbirds Shoe Display"/>
                    <img src={shoe_1} alt="Allbirds Shoe Display"/>
                    <img src={shoe_2} alt="Allbirds Shoe Display"/>
                    <img src={shoe_3} alt="Allbirds Shoe Display"/>
                    <img src={shoe_4} alt="Allbirds Shoe Display"/>
                    <img src={shoe_5} alt="Allbirds Shoe Display"/>
                    <img src={shoe_6} alt="Allbirds Shoe Display"/>
                </div>
            </div>
        </section>
    );
};

export default Marquee;
