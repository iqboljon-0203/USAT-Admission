"use client";
import Students from "../../assets/logos/students.png"
import Image from "next/image";
import classes from "./page.module.css"
import { useTranslation } from "next-i18next";
const MagistrInfo: React.FC = () => {
    const language=localStorage.getItem("i18nextLng");
    const { t } = useTranslation();
    return (
        <div id="magistr" className={classes.magistr_info}>
            <ul className={classes.magistr_info_list}>
                <li className={classes.magistr_info_item}>
                    <Image
                        className={classes.magistr_info_item_img}
                        src={Students}
                        alt="Students"
                    ></Image>
                </li>
                <li className={classes.magistr_info_item_new}>
                    <h2 className={classes.magistr_info_item_title}>
                        {language === 'uz' ? (
                            <p>
                                <span
                                    className={
                                        classes.magistr_info_item_title_span
                                    }
                                >
                                    {t('suzqulaylik')}
                                </span>{' '}
                                {t('qulayliktitle')}
                            </p>
                        ) : (
                            <p>
                                {t('qulayliktitle')}{' '}
                                <span
                                    className={
                                        classes.magistr_info_item_title_span
                                    }
                                >
                                    {t('suzqulaylik')}
                                </span>
                            </p>
                        )}
                    </h2>
                    <p className={classes.magistr_info_item_text}>
                        {t('qulaylikinfo')}
                    </p>
                </li>
            </ul>
        </div>
    );
};

export default MagistrInfo;
