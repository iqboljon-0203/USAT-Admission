"use client"
import classes from "./page.module.css"
import Swiper from '../../components/Swiper/App';
import { useTranslations } from "next-intl";
const Bachelor: React.FC = () => {
    const t  = useTranslations();
    return (
        <section id="bachelor" className={classes.bachelor}>
            <ul className={classes.bachelor_list}>
                <li
                    className={
                        classes.bachelor_item +
                        ' ' +
                        classes.bachelor_item_first
                    }
                >
                    <div>
                        <h2 className={classes.bachelor_item_title}>

                            {t("bakalavrtitle")}{" "}<span className={classes.bachelor_item_span}>{t("suzbakalavr")}</span>{" "}{t("davomibakalavr")}
                        </h2>
                        <p className={classes.bachelor_item_text}>
                           {t("bakalavrinfo")}
                        </p>
                    </div>
                </li>
                <li className={classes.bachelor_item}>
                    <Swiper></Swiper>
                </li>
            </ul>
        </section>
    );
};

export default Bachelor;
