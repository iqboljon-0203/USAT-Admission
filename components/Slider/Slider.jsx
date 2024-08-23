import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, li } from 'swiper/react';
import classes from "./page.module.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import IconContract from '../../assets/logos/fi-rr-money.svg';
import Cash from '../../assets/logos/cash.svg';
import Check from '../../assets/logos/fi-rr-file-check.svg';
import Tax from '../../assets/logos/receipt-tax.svg';
import Earning from '../../assets/logos/fi-rr-earnings.svg';
import UserGroup from '../../assets/logos/user-group.svg';
import Graduation from '../../assets/logos/fi-rr-graduation-cap.svg';
import Diploma from '../../assets/logos/fi-rr-diploma.svg';
import { useTranslation } from 'next-i18next';
import Image from "next/image"
// import required modules
import { Pagination } from 'swiper/modules';
export default function App() {
    const { t } = useTranslation();

    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <li className={classes.about_item}>
                        <div className={classes.about_img}>
                            <Image
                                src={IconContract}
                                width={70}
                                height={70}
                                alt="Usat"
                            ></Image>
                        </div>
                        <div className={classes.about_info}>
                            <h1 className={classes.about_info_title}>
                                {t('afzaltitle1')}
                            </h1>
                            <p className={classes.about_info_text}>
                                {t('afzalinfo1')}
                            </p>
                        </div>
                    </li>
                </SwiperSlide>

                <SwiperSlide>
                    <li className={classes.about_item}>
                        <div className={classes.about_img}>
                            <Image
                                src={Cash}
                                width={70}
                                height={70}
                                alt="Usat"
                            ></Image>
                        </div>
                        <div className={classes.about_info}>
                            <h1 className={classes.about_info_title}>
                                {t('afzaltitle2')}
                            </h1>
                            <p className={classes.about_info_text}>
                                {t('afzalinfo2')}
                            </p>
                        </div>
                    </li>
                </SwiperSlide>

                <SwiperSlide>
                    <li className={classes.about_item}>
                        <div className={classes.about_img}>
                            <Image
                                src={Check}
                                width={70}
                                height={70}
                                alt="Usat"
                            ></Image>
                        </div>
                        <div className={classes.about_info}>
                            <h1 className={classes.about_info_title}>
                                {t('afzaltitle3')}
                            </h1>
                            <p className={classes.about_info_text}>
                                {t('afzalinfo3')}
                            </p>
                        </div>
                    </li>
                </SwiperSlide>

                <SwiperSlide>
                    <li className={classes.about_item}>
                        <div className={classes.about_img}>
                            <Image
                                src={Tax}
                                width={70}
                                height={70}
                                alt="Usat"
                            ></Image>
                        </div>
                        <div className={classes.about_info}>
                            <h1 className={classes.about_info_title}>
                                {t('afzaltitle4')}
                            </h1>
                            <p className={classes.about_info_text}>
                                {t('afzalinfo4')}
                            </p>
                        </div>
                    </li>
                </SwiperSlide>

                <SwiperSlide>
                    <li className={classes.about_item}>
                        <div className={classes.about_img}>
                            <Image
                                src={Earning}
                                width={70}
                                height={70}
                                alt="Usat"
                            ></Image>
                        </div>
                        <div className={classes.about_info}>
                            <h1 className={classes.about_info_title}>
                                {t('afzaltitle5')}
                            </h1>
                            <p className={classes.about_info_text}>
                                {t('afzalinfo5')}
                            </p>
                        </div>
                    </li>
                </SwiperSlide>

                <SwiperSlide>
                    <li className={classes.about_item}>
                        <div className={classes.about_img}>
                            <Image
                                src={UserGroup}
                                width={70}
                                height={70}
                                alt="Usat"
                            ></Image>
                        </div>
                        <div className={classes.about_info}>
                            <h1 className={classes.about_info_title}>
                                {t('afzaltitle6')}
                            </h1>
                            <p className={classes.about_info_text}>
                                {t('afzalinfo6')}
                            </p>
                        </div>
                    </li>
                </SwiperSlide>

                <SwiperSlide>
                    <li className={classes.about_item}>
                        <div className={classes.about_img}>
                            <Image
                                src={Graduation}
                                width={70}
                                height={70}
                                alt="Usat"
                            ></Image>
                        </div>
                        <div className={classes.about_info}>
                            <h1 className={classes.about_info_title}>
                                {t('afzaltitle7')}
                            </h1>
                            <p className={classes.about_info_text}>
                                {t('afzalinfo7')}
                            </p>
                        </div>
                    </li>
                </SwiperSlide>

                <SwiperSlide>
                    <li className={classes.about_item}>
                        <div className={classes.about_img}>
                            <Image
                                src={Diploma}
                                width={70}
                                height={70}
                                alt="Usat"
                            ></Image>
                        </div>
                        <div className={classes.about_info}>
                            <h1 className={classes.about_info_title}>
                                {t('afzaltitle8')}
                            </h1>
                            <p className={classes.about_info_text}>
                                {t('afzalinfo8')}
                            </p>
                        </div>
                    </li>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
