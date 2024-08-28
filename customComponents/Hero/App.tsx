"use client";
import React from 'react';
import Navbar from "../../components/Navbar/App"
import classes from "./page.module.css"
import AppButton from "../../components/ApplicationButton/App";
import CabinetButton from "../../components/CabinetButton/App";
import Footer from '../Footer/App';
import { useTranslations } from "next-intl";
const Hero: React.FC = () => {
    const  t = useTranslations();
    return (
        <div className={classes.hero}>
            <Navbar></Navbar>
            <div className="flex flex-col items-center justify-center">
                <h1 className={classes.title}>
                    {t('muvaffaqiyatli_kelajak_shu_yerdan_boshlanadi')}
                </h1>
                <p className={classes.info}>
                    {t('hero_text')}
                </p>
                <div className={classes.buttons}>
                    <AppButton></AppButton>
                    <CabinetButton></CabinetButton> 
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Hero;
