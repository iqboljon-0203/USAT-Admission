// src/components/LanguageSelector.tsx
import React, { useState, useRef, useEffect } from 'react';
import 'flag-icons/css/flag-icons.min.css';

interface Language {
  code: string;
  label: string;
  flag: string;
}

const languages: Language[] = [
    { code: 'uz', label: 'UZ', flag: 'fi-uz' },
    { code: 'ru', label: 'RU', flag: 'fi-ru' },
    { code: 'eng', label: 'ENG', flag: 'fi-gb' },
];

const LanguageSelector: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    setIsOpen(false);
  };

  return (
      <div className="relative inline-block w-30" ref={dropdownRef}>
          <button
              type="button"
              className="w-full py-2 text-cyan-900/[1] text-xl font-normal leading-[1.51rem] text-left ps-3 bg-transparent gap-[0.13rem] rounded-3xl opacity-[0.00rem]  border-3 border-cyan-900/[1]  hover:border-blue-900 px-2   shadow  focus:outline-none focus:shadow-outline flex items-center justify-between"
              onClick={toggleDropdown}
          >
              <span className={`fi ${selectedLanguage.flag} mr-2`}></span>
              {selectedLanguage.label}
              <svg
                  className="fill-current h-4 w-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
              >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
          </button>
          {isOpen && (
              <ul className="absolute mt-1 w-full text-white bg-cyan-900/[1] border border-gray-400 rounded shadow-lg z-10">
                  {languages.map(language => (
                      <li
                          key={language.code}
                          className="px-4 py-2 hover:bg-gray-800 hover:text-white cursor-pointer flex items-center"
                          onClick={() => handleLanguageChange(language)}
                      >
                          <span className={`fi ${language.flag} mr-2`}></span>
                          {language.label}
                      </li>
                  ))}
              </ul>
          )}
      </div>
  );
};

export default LanguageSelector;
