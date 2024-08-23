import React from 'react';
import { Button } from '@nextui-org/react';
import { UserIcon } from './UserIcon';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
export default function App() {
    const { t } = useTranslation();
    return (
        <Link href="https://qabul.usat.uz/?phone=null">
            <Button
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
