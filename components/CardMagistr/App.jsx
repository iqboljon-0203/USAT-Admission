"use client";
import React from 'react';
import File from '../../assets/logos/filenew.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import classes from './page.module.css';
const FinancialTechnologies = ({ title, priceKun }) => {
    const t=useTranslations();
    return (
        <div id={classes.card} className="w-full flex flex-col justify-center  bg-white rounded-3xl  px-8 pt-12 h-full">
            <div className="text-start">
                <h1 id={classes.card_title} className="text-5xl font-bold leading-[2.90rem] text-left text-cyan-900/[1] mb-4 uppercase">
                    {title}
                </h1>
            </div>
            <div className="space-y-2 mb-2">
                <div className="py-4 mb-2">
                    <h2 id={classes.card_subtitle} className="text-4xl font-bold leading-[1.70rem] text-left uppercase text-cyan-900/[0.35] mb-4">
                        {t('kunduzgi')}
                    </h2>
                    <div className="flex justify-between items-center">
                        <p id={classes.card_contract} className="text-2xl font-normal leading-[1.27rem] text-left text-cyan-900/[1]">
                            {t('contract')}
                        </p>
                        <h3 id={classes.card_money} className="text-xl font-normal leading-5 text-left  text-cyan-900/[0.35]">
                            <span id={classes.card_price} className="text-5xl font-bold leading-[3.00rem] text-right text-cyan-900/[1]">
                                {priceKun}
                            </span>{' '}
                           {t('money')}
                        </h3>
                    </div>
                </div>
            </div>
            <div className="text-center mt-2 mb-4">
                <Link href="https://qabul.usat.uz/sign-up?phone=">
                    <button type="button" className="group w-full flex  items-center bg-amber-400/[1] pt-2  pr-8  pb-2  ps-2  gap-[0.63rem] rounded-full opacity-[0.00rem] hover:bg-yellow-600  transition-colors duration-300">
                        <Image
                            id={classes.card_button_icon}
                            
                            src={File}
                            alt="File icon"
                        ></Image>{' '}
                        <p id={classes.card_button_text} className="text-2xl font-medium leading-[1.27rem] text-left mx-auto  text-cyan-900/[1] group-hover:text-white transition-colors duration-300">
                            {t('ariza')}
                        </p>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FinancialTechnologies;
