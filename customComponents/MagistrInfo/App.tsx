"use client";
import Students from "../../assets/logos/students.png"
import Image from "next/image";
import classes from "./page.module.css"
import { useTranslations } from "next-intl";    
import { getCookie } from 'cookies-next';
const MagistrInfo: React.FC = () => {
    const language=getCookie('i18next')||"uz";
    const  t  = useTranslations();
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
                <li className={classes.magistr_info_item + ' ' + classes.magistr_info_item_new}>
                    <div>
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
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default MagistrInfo;
