"use client";
import classes from "./page.module.css"
import SwiperMagistr from '../../components/SwiperMagistr/App';
import { useTranslations } from "next-intl";
const Magistr: React.FC = () => {
    const t  = useTranslations();
    return (
        <section id="contract" className={classes.magistr}>
            <ul className={classes.magistr_list}>
                <li
                    className={
                        classes.magistr_item + ' ' + classes.magistr_item_first
                    }
                >
                    <div className={classes.inner_item}>
                        <h2 className={classes.magistr_item_title}>
                            {t('magistrtitle')}{' '}
                            <span className={classes.bachelor_item_span}>
                                {t('suzmagistr')}
                            </span>{' '}
                            {t('davomimagistr')}
                        </h2>
                        <p className={classes.magistr_item_text}>
                            {t('magistrinfo')}
                        </p>
                    </div>
                </li>
                <li className={classes.magistr_item}>
                    <SwiperMagistr></SwiperMagistr>
                </li>
            </ul>
        </section>
    );
};

export default Magistr;
