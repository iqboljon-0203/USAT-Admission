"use client";
import classes from "./page.module.css"
import IconContract from "../../assets/logos/fi-rr-money.svg";
import Cash from '../../assets/logos/cash.svg';
import Check from '../../assets/logos/fi-rr-file-check.svg';
import Tax from '../../assets/logos/receipt-tax.svg';
import Earning from '../../assets/logos/fi-rr-earnings.svg';
import UserGroup from '../../assets/logos/user-group.svg';
import Graduation from '../../assets/logos/fi-rr-graduation-cap.svg';
import Diploma from '../../assets/logos/fi-rr-diploma.svg';
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Slider from "../../components/Slider/Slider"
const Hero: React.FC = () => {
    const {t}=useTranslation();
    return (
        <section id="university" className={classes.about}>
            <ul className={classes.about_list}>
                <Slider></Slider>
            </ul>
        </section>
    );
};

export default Hero;
