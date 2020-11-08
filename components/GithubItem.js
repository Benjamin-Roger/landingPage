import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import _ from '@/libs/i18n';

const placeholder = (width) => (
    <span className={`h-6 w-${width || 32} block bg-teal-700 animate-pulse rounded my-2`} ></span>
);

export const GithubItem = ({ name, html_url, description, homepage, loading }) => (

    <li className="github__item block shadow my-2 p-4 rounded hover:ml-3 transition-all ease duration-150 hover:bg-teal-100">
        {!loading ?
            <h3 className="font-extrabold text-teal-700"><a href={html_url} title={name} rel="nofollow">{name}</a></h3>
            : placeholder()
        }
        <p>{!loading ? description : <>{placeholder(72)}</>}</p>
        {homepage ? <p className="text-right mt-3">
            <a
                className="github__homepage font-semibold text-teal-700 "
                rel="nofollow"
                href={homepage}
                title={name}>
                <span>
                    <FontAwesomeIcon className="mr-2" icon={faChevronRight} />{_("seeProject")}
                </span>
            </a>
        </p> : ''}
    </li>
)
