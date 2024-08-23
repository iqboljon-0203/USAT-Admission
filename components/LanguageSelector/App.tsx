"use client";
// src/components/LanguageSelector.tsx
import React, { useState, useRef, useEffect } from 'react';
import 'flag-icons/css/flag-icons.min.css';
import classes from "./page.module.css"
interface Language {
  code: string;
  label: string;
  flag: string;
}
import { useTranslation } from 'react-i18next';

const languages: Language[] = [
    { code: 'uz', label: 'UZ', flag: 'uz' },
    { code: 'ru', label: 'RU', flag: 'ru' },
    { code: 'en', label: 'ENG', flag: 'gb' },
];

const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {i18n}=useTranslation();
  const newlanguage = localStorage.getItem('i18nextLng')||"uz";
  
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language.code);
    setIsOpen(false);
  };

  return (
      <div className="relative inline-block w-30" ref={dropdownRef}>
          <button
              id={classes.button}
              type="button"
              className="w-full 2xl:py-4 xl:py-2 lg:py-2 md:py-3 sm:py-3 py-2 2xl:px-4 xl:px-4 lg:px-4 md:px-3 sm:px-3 px-2  text-white  ps-4 bg-transparent gap-[0.13rem] rounded-3xl opacity-[0.00rem]  border-2 border-white  hover:border-white-500  shadow leading-tight focus:outline-none focus:shadow-outline flex items-center justify-between"
              onClick={toggleDropdown}
          >
              <span
                  className={`fi fi-${newlanguage === 'uz' ? 'uz' : newlanguage === 'ru' ? 'ru' : 'gb'} mr-2`}
              ></span>
              {newlanguage.toUpperCase() === selectedLanguage.label
                  ? selectedLanguage.label
                  : i18n.language.toUpperCase()}
              <svg
                  className="fill-current h-4 w-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
              >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
          </button>
          {isOpen && (
              <ul className="absolute mt-1 w-full bg-white border border-gray-400 rounded shadow-lg z-10">
                  {languages.map(language => (
                      <li
                          key={newlanguage}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                          onClick={() => handleLanguageChange(language)}
                      >
                          <span
                              className={`fi fi-${language.flag} mr-2`}
                          ></span>
                          {language.label}
                      </li>
                  ))}
              </ul>
          )}
      </div>
  );
};

export default LanguageSelector;
