"use client";
import React, { useState } from 'react';
import classes from './page.module.css';
import Image from 'next/image';
import Girl from "../../assets/logos/girl_image.png"
import UsatLogo from "../../assets/logos/usat_logo.svg";
import LanguageSelector from '@/components/LanguageSelectorNew/App';
import Link from 'next/link';
import OpenLock from "../../assets/logos/open.svg"
const SignUp: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleSignUp = (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

       

        // Reset form
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
    };

    return (
        <section className={classes.signup}>
            <div className={classes.signup_left}>
                <Image src={Girl} alt="Girl with book" />
            </div>
            <div className={classes.signup_right}>
                <div className={classes.signup_top}>
                    <Image src={UsatLogo} alt="Usat Logo"></Image>
                    <LanguageSelector></LanguageSelector>
                </div>
                <div className={classes.signup_info}>
                    <h2 className={classes.signup_info_title}>
                        Ro’yxatdan o’tish
                    </h2>
                    <p className={classes.signup_info_text}>
                        Ro’yhatdan o’tish uchun pastdagi formani to’ldiring!
                    </p>
                </div>

                <form className={classes.signup_form}>
                    <label
                        htmlFor="phone-input"
                        className="text-sm font-medium leading-[0.88rem] text-left mb-2 dark:text-white text-stone-300/[1]"
                    >
                        Telefon raqamingizni kiriting:
                    </label>
                    <div className="flex items-center mb-6 g">
                        <button
                            id="dropdown-phone-button"
                            data-dropdown-toggle="dropdown-phone"
                            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200  focus:ring-cyan-900/[1] focus:border-cyan-900/[1] dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                            type="button"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="20"
                                viewBox="0 0 40 30"
                            >
                                <path fill="#fff" d="M1 11H31V21H1z"></path>
                                <path
                                    d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
                                    fill="#4498b3"
                                ></path>
                                <path
                                    d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"
                                    transform="rotate(180 16 24)"
                                    fill="#55b44b"
                                ></path>
                                <path fill="#be2a2c" d="M1 12H31V13H1z"></path>
                                <path fill="#be2a2c" d="M1 19H31V20H1z"></path>
                                <path
                                    d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                                    opacity=".15"
                                ></path>
                                <path
                                    d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                                    fill="#fff"
                                    opacity=".2"
                                ></path>
                                <path
                                    d="M7.417,6.51c-.127-.021-.257-.033-.39-.033-1.291,0-2.338,1.047-2.338,2.338s1.047,2.338,2.338,2.338c.133,0,.263-.012,.39-.033-1.105-.186-1.948-1.146-1.948-2.305s.843-2.119,1.948-2.305Z"
                                    fill="#fff"
                                ></path>
                                <path
                                    fill="#fff"
                                    d="M9.741 10.181L9.564 9.635 9.387 10.181 8.813 10.181 9.277 10.518 9.1 11.063 9.564 10.726 10.028 11.063 9.851 10.518 10.315 10.181 9.741 10.181z"
                                ></path>
                                <path
                                    fill="#fff"
                                    d="M12.899 10.181L12.722 9.635 12.544 10.181 11.971 10.181 12.435 10.518 12.258 11.063 12.722 10.726 13.186 11.063 13.009 10.518 13.473 10.181 12.899 10.181z"
                                ></path>
                                <path
                                    fill="#fff"
                                    d="M12.722 6.477L12.544 7.023 11.971 7.023 12.435 7.36 12.258 7.905 12.722 7.568 13.186 7.905 13.009 7.36 13.473 7.023 12.899 7.023 12.722 6.477z"
                                ></path>
                            </svg>{' '}
                            +998{' '}
                            <svg
                                className="w-2.5 h-2.5 ms-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 4 4 4-4"
                                />
                            </svg>
                        </button>
                        <div
                            id="dropdown-phone"
                            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700"
                        ></div>

                        <div className="relative w-full">
                            <input
                                type="text"
                                id="phone-input"
                                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300  focus:ring-cyan-900/[1] focus:border-cyan-900/[1] dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
                                placeholder="123-45-67"
                                required
                            />
                        </div>
                    </div>
                    <label
                        htmlFor="password"
                        className="text-sm font-medium leading-[0.88rem] text-left mb-2 dark:text-white text-stone-300/[1] "
                    >
                        Parol kiriting
                    </label>
                    <input
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg  border border-gray-300 focus:ring-cyan-900/[1] focus:border-cyan-900/[1] dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 rounded-xl mb-6"
                        placeholder="•••••••••••"
                        type="password"
                        id="password"
                    />
                    <label
                        htmlFor="password"
                        className="text-sm font-medium leading-[0.88rem] text-left mb-2 dark:text-white text-stone-300/[1]"
                    >
                        Parolni takrorlang
                    </label>
                    <Image src={OpenLock} alt="Open Lock" width={100} height={100}></Image>
                    <input
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg  border border-gray-300 focus:ring-rose-500/[1] focus:border-rose-500/[1] dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 rounded-xl mb-10"
                        placeholder="•••••••••••"
                        type="password"
                        id="password"
                    />
                    <button className="pt-5  pr-0  pb-5  ps-0  gap-[0.63rem] rounded-full opacity-[0.00rem] w-full bg-amber-400/[1] text-2xl font-semibold leading-[1.82rem]  text-cyan-900/[1] mb-6">
                        Yuborish
                    </button>
                    <Link
                        className="text-xl font-medium leading-7 text-left text-cyan-900/[1]"
                        href="/login"
                    >
                        Avval ro’yxatdan o’tganmisiz? Shaxsiy kabinetga kirish.
                    </Link>
                </form>
            </div>
        </section>
    );
};

export default SignUp;
