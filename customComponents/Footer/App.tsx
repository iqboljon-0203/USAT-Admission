import React from 'react';
import Link from 'next/link';
import Tg from "../../assets/logos/tg.svg";
import Instagram from "../../assets/logos/insta.svg";
import Facebook from '../../assets/logos/facebook.svg';
import Image from 'next/image';
import classes from "./page.module.css"
import { useTranslations} from 'next-intl';
const Footer: React.FC = () => {
    const t  = useTranslations();
    return (
        <footer className={classes.footer}>
            <div className="mx-auto px-4">
                <ul className={classes.list}>
                    <li className={classes.item}>
                        <Link href="https://t.me/usatuzb">
                            <Image
                                src={Tg}
                                alt="Logo"
                                width={100}
                                height={100}
                            ></Image>
                        </Link>
                        <Link href="https://www.instagram.com/usatuz/">
                            <Image
                                src={Instagram}
                                alt="Logo"
                                width={100}
                                height={100}
                            ></Image>
                        </Link>
                        <Link href="https://www.facebook.com/usatuz/">
                            <Image
                                src={Facebook}
                                alt="Logo"
                                width={100}
                                height={100}
                            ></Image>
                        </Link>
                    </li>
                    <li className={classes.item}>
                        <p className={classes.item_manzil}>
                            <Link
                                className="text-center"
                                href={
                                    'https://yandex.uz/maps/10335/tashkent/?ll=69.163080%2C41.261028&mode=whatshere&whatshere%5Bpoint%5D=69.163055%2C41.261021&whatshere%5Bzoom%5D=19.98&z=19'
                                }
                            >
                                {t('manzil')}
                            </Link>
                        </p>
                    </li>
                    <li className={classes.item}>
                        <p className={classes.tel}>
                            <Link
                                className="text-center"
                                href={'tel:+998 78 888 38 88'}
                            >
                                +998 78 888 38 88
                            </Link>
                        </p>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
