import React from "react";
import styles from './style.module.scss';
import Link from 'next/link';
import cn from "classnames";
import DarkIcon from '../../public/img/icon-moon.svg';
import LightIcon from '../../public/img/icon-sun.svg';
import {useTheme} from "next-themes";

const Header = () => {
    const {theme, setTheme} = useTheme();

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    return (
        <header className={styles.header}>
            <Link href={'/'}>
                <a>
                    <h1 className={styles.logo}>
                        devfinder
                    </h1>
                </a>
            </Link>

            <button className={cn(styles.darkModeButton, {
                [styles.dark]: theme === 'light',
                [styles.light]: theme === 'dark',
            })}
                    onClick={switchTheme}
            >
                {theme === 'light' ? 'dark' : 'light'}
                {theme === 'light' ? (
                    <DarkIcon/>
                ) : (<LightIcon/>)}
            </button>
        </header>
    );
};

export default Header;
