import React from 'react';
import { Button } from '@nextui-org/react';
import { UserIcon } from './UserIcon';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import classses from './page.module.css'
export default function App() {
    const  t  = useTranslations();
    return (
        <Link href="https://qabul.usat.uz/?phone=null">
            <Button
            id={classses.button}
                color="default"
                variant="flat"
                size="lg"
                startContent={<UserIcon />}
                className="text-white  px-10 py-8 text-2xl font-medium leading-[1.27rem] text-left rounded-full"
                style={{ border:"2px solid white" }}
            >
                {t('cabinet')}
            </Button>
        </Link>
    );
}
