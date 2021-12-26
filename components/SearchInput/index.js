import React, {useState} from "react";
import styles from './style.module.scss';

const SearchInput = ({ onSubmit, error }) => {
    const [search, setSearch] = useState("");

    return (
        <div className={styles.searchInputWrapper}>
            <img className={styles.searchIcon}
                 src={'/img/icon-search.svg'}
                 alt={''}
            />
            <input className={styles.searchInput}
                   type={'text'}
                   placeholder={'Search GitHub username...'}
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
            >
            </input>
            {error && (
                <span className={styles.warningMessage}>
                    No results
                </span>
            )}
            <button className={styles.searchButton}
                    onClick={_ => onSubmit(search)}
            >
                Search
            </button>
        </div>
    );
};

export default SearchInput;
