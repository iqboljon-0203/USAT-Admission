'use client';
import classes from './page.module.css';
import Usat from '../../assets/logos/usat.png';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
const Info: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section id="info" className={classes.info}>
            <ul className={classes.info_list}>
                <li className={classes.info_item}>
                    <Image
                        src={Usat}
                        alt="Usat"
                        style={{ maxWidth: '100%' }}
                    ></Image>
                </li>
                <li className={classes.info_item + ' ' + classes.info_item_new}>
                    <div>
                        <h2 className={classes.info_item_title}>
                            <span className={classes.info_item_title_span}>{t("suzuniver")}</span>
                            {" "}
                            {t('univertitle')}
                        </h2>
                        <p className={classes.info_item_text}>
                            {t('univerinfo')}
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default Info;
