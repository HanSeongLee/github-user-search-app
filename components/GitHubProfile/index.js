import React from "react";
import styles from './style.module.scss';
import moment from "moment";
import cn from 'classnames';
import LocationIcon from '../../public/img/icon-location.svg';
import BlogIcon from '../../public/img/icon-website.svg';
import TwitterIcon from '../../public/img/icon-twitter.svg';
import CompanyIcon from '../../public/img/icon-company.svg';

const GitHubProfile = ({profile}) => {
    const {
        avatar_url, name, login, created_at,
        bio, public_repos, followers, following,
        location, blog, twitter_username, company,
    } = profile;

    return (
        <div className={styles.githubProfileCard}>
            <img className={cn(styles.profileImage, styles.desktop)}
                 src={avatar_url}
                 alt={name}
            />
            <div className={styles.cardBody}>
                <div className={styles.profileBox}>
                    <img className={styles.profileImage}
                         src={avatar_url}
                         alt={name}
                    />
                    <div className={styles.rightSide}>
                        <div className={styles.userInfo}>
                            <h1>
                                {name}
                            </h1>
                            <h3>
                                @{login}
                            </h3>
                        </div>
                        <h4>
                            Joined {moment(created_at)?.format("D MMM YYYY")}
                        </h4>
                    </div>
                </div>

                <p className={styles.description}>
                    {bio || 'This profile has no bio'}
                </p>

                <div className={styles.indicatorBox}>
                    <div className={styles.indicatorItem}>
                        <div className={styles.indicatorItemText}>
                            Repos
                        </div>
                        <h1>{public_repos}</h1>
                    </div>
                    <div className={styles.indicatorItem}>
                        <div className={styles.indicatorItemText}>
                            Followers
                        </div>
                        <h1>{followers}</h1>
                    </div>
                    <div className={styles.indicatorItem}>
                        <div className={styles.indicatorItemText}>
                            Following
                        </div>
                        <h1>{following}</h1>
                    </div>
                </div>

                <div className={styles.infoItemContainer}>
                    <div className={styles.infoItemPartionContainer}>
                        <div className={cn(styles.infoItem, {
                            [styles.disabled]: !location,
                        })}>
                            <div className={styles.iconWrapper}>
                                <LocationIcon/>
                            </div>
                            <h4>
                                {location || "Not Available"}
                            </h4>
                        </div>
                        <div className={cn(styles.infoItem, {
                            [styles.disabled]: !blog,
                        })}>
                            <div className={styles.iconWrapper}>
                                <BlogIcon/>
                            </div>
                            <a href={blog}
                               target={'_blank'}
                            >
                                <h4>
                                    {blog || "Not Available"}
                                </h4>
                            </a>
                        </div>
                    </div>
                    <div className={styles.infoItemPartionContainer}>
                        <div className={cn(styles.infoItem, {
                            [styles.disabled]: !twitter_username,
                        })}>
                            <div className={styles.iconWrapper}>
                                <TwitterIcon/>
                            </div>
                            <h4>
                                {twitter_username || "Not Available"}
                            </h4>
                        </div>
                        <div className={cn(styles.infoItem, {
                            [styles.disabled]: !company,
                        })}>
                            <div className={styles.iconWrapper}>
                                <CompanyIcon/>
                            </div>
                            <h4>
                                {company || "Not Available"}
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GitHubProfile;
