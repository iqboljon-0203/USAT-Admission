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
import { useTranslation } from 'next-i18next';
export default function App() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { t } = useTranslation();
     const scrollToSectionAfzal = () => {
         const section = document.getElementById('university');
         if (section) {
             section.scrollIntoView({ behavior: 'smooth' });
         }
     };
      const scrollToSectionUniver = () => {
          const section = document.getElementById('info');
          if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
          }
      };
       const scrollToSectionBakalavr = () => {
           const section = document.getElementById('bachelor');
           if (section) {
               section.scrollIntoView({ behavior: 'smooth' });
           }
       };
        const scrollToSectionQulay = () => {
            const section = document.getElementById('magistr');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        };
        const scrollToSectionMagistr = () => {
            const section = document.getElementById('contract');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        };
         const scrollToSectionQuestion = () => {
             const section = document.getElementById('answers');
             if (section) {
                 section.scrollIntoView({ behavior: 'smooth' });
             }
         };
    const menuItems = [
        t('afzalliklar'),
        t('universitet_haqida'),
        t('bakalavriat'),
        t('qulayliklar'),
        t('magistratura'),
        t('savol-javob'),
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
                <NavbarItem>
                    <Link
                        onClick={scrollToSectionAfzal}
                        className="text-xl px-6 font-Inter font-medium hover:cursor-pointer text-white leading-[1.82rem] text-center"
                        color="foreground"
                    >
                        {t('afzalliklar')}
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        onClick={scrollToSectionUniver}
                        className="text-xl px-6 font-Inter font-medium hover:cursor-pointer text-white leading-[1.82rem] text-center"
                        color="foreground"
                    >
                        {t('universitet_haqida')}
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        onClick={scrollToSectionBakalavr}
                        className="text-xl px-6 font-Inter font-medium hover:cursor-pointer text-white leading-[1.82rem] text-center"
                        color="foreground"
                    >
                        {t('bakalavriat')}
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        onClick={scrollToSectionQulay}
                        className="text-xl px-6 font-Inter font-medium hover:cursor-pointer text-white leading-[1.82rem] text-center"
                        color="foreground"
                    >
                        {t('qulayliklar')}
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link
                        onClick={scrollToSectionMagistr}
                        className="text-xl px-6 font-Inter font-medium hover:cursor-pointer text-white leading-[1.82rem] text-center"
                        color="foreground"
                    >
                        {t('magistratura')}
                    </Link>
                </NavbarItem>

                <NavbarItem>
                    <Link
                        onClick={scrollToSectionQuestion}
                        className="text-xl px-6 font-Inter font-medium text-white leading-[1.82rem] text-center"
                        color="foreground"
                    >
                        {t('savol-javob')}
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <LanguageSelector></LanguageSelector>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2
                                    ? 'warning'
                                    : index === menuItems.length - 1
                                      ? 'danger'
                                      : 'foreground'
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
