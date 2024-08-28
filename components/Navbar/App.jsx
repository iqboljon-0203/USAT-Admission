'use client';
import React from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
} from '@nextui-org/react';
import UsatLogo from '../../assets/logos/usatLogo.svg';
import Image from 'next/image';
import LanguageSelector from '../LanguageSelector/App';
import classes from './page.module.css';
import { useTranslations } from 'next-intl';
export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const  t = useTranslations();
    const scrollToSection = sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false); // Menu yopish
        }
    };

    const menuItems = [
        { label: t('universitet_haqida'), section: 'info' },
        { label: t('bakalavriat'), section: 'bachelor' },
        { label: t('magistratura'), section: 'contract' },
        { label: t('afzalliklar'), section: 'university' },
        { label: t('qulayliklar'), section: 'magistr' },
        { label: t('savol-javob'), section: 'answers' },
    ];

    return (
        <Navbar
            className={classes.navbar}
            isBordered
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent justify="end">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                />
            </NavbarContent>
            <NavbarContent justify="start">
                <NavbarBrand>
                    <Image
                        src={UsatLogo}
                        width={353}
                        height={353}
                        alt="Usat logo"
                    ></Image>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex" justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link
                            onClick={() => scrollToSection(item.section)}
                            className="text-xl px-6 font-Inter  font-medium hover:cursor-pointer text-white leading-[1.82rem] text-center"
                            color="foreground"
                        >
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <LanguageSelector></LanguageSelector>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className='pt-10'>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.label}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 0
                                    ? 'warning'
                                    : index === menuItems.length - 1
                                      ? 'danger'
                                      : 'foreground'
                            }
                            href="#"
                            size="lg"
                            onClick={() => scrollToSection(item.section)}
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
