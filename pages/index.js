import Head from 'next/head';
import styles from './style.module.scss';
import SearchInput from "../components/SearchInput";
import GitHubProfile from "../components/GitHubProfile";
import Header from "../components/Header";
import {useCallback, useEffect, useState} from "react";
import {useTheme} from "next-themes";
import data from '../data/data.json';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const [profile, setProfile] = useState(data);
  const [error, setError] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    document.querySelector("body").classList.remove(theme === 'light' ? 'dark' : 'light');
    document.querySelector("body").classList.add(theme);
  }, [theme]);

  const onThemeChange = useCallback((theme) => {
    setTheme(theme);
  }, []);

  const onSubmit = useCallback(async (search) => {
    const data = await fetcher(`https://api.github.com/users/${search}`);
    if (data?.message === "Not Found") {
      setError(true);
    } else {
      setProfile(data);
      setError(false);
    }
  }, []);

  return (
      <div className={styles.container}>
        <div className={styles.centeredContainer}>
          <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport"
                  content="width=device-width, initial-scale=1.0"
            />

            <title>{process.env.NEXT_PUBLIC_TITLE}</title>
            <meta name="description"
                  content={process.env.NEXT_PUBLIC_DESCRIPTION}
            />

            <meta name="description"
                  content={process.env.NEXT_PUBLIC_DESCRIPTION}
            />

            <meta property="og:url"
                  content={process.env.NEXT_PUBLIC_URL}
            />
            <meta property="og:type"
                  content="website"
            />
            <meta property="og:title"
                  content={process.env.NEXT_PUBLIC_TITLE}
            />
            <meta property="og:description"
                  content={process.env.NEXT_PUBLIC_DESCRIPTION}
            />
            <meta property="og:image"
                  content={process.env.NEXT_PUBLIC_OG_IMAGE}
            />

            <meta name="twitter:card"
                  content="summary_large_image"
            />
            <meta property="twitter:url"
                  content={process.env.NEXT_PUBLIC_URL}
            />
            <meta name="twitter:title"
                  content={process.env.NEXT_PUBLIC_TITLE}
            />
            <meta name="twitter:description"
                  content={process.env.NEXT_PUBLIC_DESCRIPTION}
            />
            <meta name="twitter:image"
                  content={process.env.NEXT_PUBLIC_OG_IMAGE}
            />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
          </Head>

          <Header theme={theme}
                  onThemeChange={onThemeChange}
          />

          <main>
            <div className={styles.githubSearchContainer}>
              <SearchInput onSubmit={onSubmit}
                           error={error}
              />
              <GitHubProfile profile={profile} />
            </div>
          </main>
        </div>
      </div>
  );
};
