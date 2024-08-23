import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./styles.css";

// import required modules

import CardMagistr from '../CardMagistr/App';
export default function App() {
    const Languagemag = localStorage.getItem('i18nextLng');
    const CONTRACT_INFO_MAGISTR_UZ = {
        "Ijtimoiy-gumanitar fanlarni o'qitish metodikasi (tarix)": {
            Kunduzgi: '21.8',
        },
        "Ta'lim tarbiya nazariyasi va metodikasi (boshlang'ich ta'lim)": {
            Kunduzgi: '21.8',
        },

        "Ta'limda axborot texnalogiyalari": {
            Kunduzgi: '21.8',
        },
        'Buxgalteriya hisobi': {
            Kunduzgi: '21.8',
        },
        Iqtisodiyot: {
            Kunduzgi: '22.8',
        },
        'Bank ishi': {
            Kunduzgi: '22.8',
        },
    };
    const CONTRACT_INFO_MAGISTR_RU = {
        'Методика преподавания социально-гуманитарных наук (История)': {
            Дневное: '21.8',
        },
        'Теория и методика воспитания и обучения (Начальное образование)': {
            Дневное: '21.8',
        },

        'Информационные технологии в образовании': {
            Дневное: '21.8',
        },
        'Бухгалтерский учет': {
            Дневное: '21.8',
        },
        Экономика: {
            Дневное: '22.8',
        },
        'Банковское дело': {
            Дневное: '22.8',
        },
    };
    const CONTRACT_INFO_MAGISTR_EN = {
        'Methodology of Teaching Social and Humanitarian Sciences (History)': {
            FullTime: '21.8',
        },
        'Theory and Methodology of Education and Training (Primary Education)': {
            FullTime: '21.8',
        },

        'Information Technologies in Education': {
            FullTime: '21.8',
        },
        Accounting: {
            FullTime: '21.8',
        },
        Economics: {
            FullTime: '22.8',
        },
        Banking: {
            FullTime: '22.8',
        },
    };


    return (
        <>
            <Swiper
                slidesPerView={1.5}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                className="mySwiper"
            >
                {Languagemag === 'uz'
                    ? Object.keys(CONTRACT_INFO_MAGISTR_UZ).map((key, index) => (
                    <SwiperSlide key={index}>
                        <CardMagistr
                            title={key}
                            priceKun={CONTRACT_INFO_MAGISTR_UZ[key].Kunduzgi}
                            style={{ height: '100%' }}
                        />
                    </SwiperSlide>
                ))
                    : Languagemag === 'ru'
                      ?Object.keys(CONTRACT_INFO_MAGISTR_RU).map((key, index) => (
                    <SwiperSlide key={index}>
                        <CardMagistr
                            title={key}
                            priceKun={CONTRACT_INFO_MAGISTR_RU[key].Дневное}
                            style={{ height: '100%' }}
                        />
                    </SwiperSlide>
                ))
                      : Object.keys(CONTRACT_INFO_MAGISTR_EN).map((key, index) => (
                    <SwiperSlide key={index}>
                        <CardMagistr
                            title={key}
                            priceKun={CONTRACT_INFO_MAGISTR_EN[key].FullTime}
                            style={{ height: '100%' }}
                        />
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </>
    );
}
