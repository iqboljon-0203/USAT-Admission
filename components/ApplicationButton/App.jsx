import React from 'react';
import { Button } from '@nextui-org/react';
import { FileIcon } from './FileIcon';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import classses from './page.module.css'
export default function App() {
    const  t  = useTranslations();
    return (
        <Link href="https://qabul.usat.uz/sign-up
        ">
            <Button
                id={classses.button}
                size="lg"
                color="default"
                variant="flat"
                startContent={<FileIcon />}
                className="text-cyan-900/[1] px-10 py-8 text-2xl font-medium leading-[1.27rem] text-left rounded-full "
                style={{
                    backgroundColor: 'white'
                }}
            >
                {t('ariza')}
            </Button>
        </Link>
    );
}
