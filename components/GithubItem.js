import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import _ from '@/libs/i18n';


export const GithubItem = ({ name, html_url, description, homepage }) => (
    <li className="github__item block shadow my-2 p-4 rounded hover:ml-3 transition-all ease duration-150 hover:bg-teal-100">
        <h3 className="font-extrabold text-teal-700"><a href={html_url} title={name} rel="nofollow">{name}</a></h3>
        <p>{description}</p>
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