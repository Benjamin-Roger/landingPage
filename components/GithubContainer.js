
import Head from 'next/head';
import Image from 'next/image';

import useSWR from 'swr';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faGlobeEurope, faFile } from '@fortawesome/free-solid-svg-icons';

library.add({ faGithub, faLinkedin, faWhatsapp, faGlobeEurope, faFile });

import _ from '@/libs/i18n';
import { fetchJSON } from '@/libs/fetch';
import config from '../config.js';

import { GithubItem } from '@/components/GithubItem.js';
import ShadowScrollBar from '@/components/ShadowScrollBar';

const GithubContainer = () => {

    // Fetch data from Github API
    const { data, error } = useSWR(config.githubAPI, fetchJSON);
  
    // Error if Github API returns an error
    if (error) return (
      <>
        <p>Github API has met a problem.</p>
        <p>Visit my Github profile to see all the current repositories.</p>
      </>
    );
  
    // Placeholder while loading
    if (!data) return (
      <ul className="mb-5 mr-4">
       <GithubItem loading={true} />
       <GithubItem loading={true} />
       <GithubItem loading={true} />
      </ul>
    );
  
    // If there is data, sort the project by data
    if (data) {
      data.sort(function (a, b) {
        return new Date(b.created_at) - new Date(a.created_at);
      });
  
      return (<div>
        <ShadowScrollBar style={{ height: 500 }}>
          <ul className="mb-5 mr-4">
            {data.map((repo, key) => <GithubItem key={`git${key}`} {...repo} />)}
          </ul>
        </ShadowScrollBar>
      </div >);
  
    }
  }

  export default GithubContainer;