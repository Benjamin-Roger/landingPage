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

  const { data, error } = useSWR(config.githubAPI, fetchJSON);

  if (error) return (
    <>
      <p>Github API has met a problem.</p>
      <p>Visit my Github profile to see all the current repositories.</p>
    </>
  );

  // if (!data) return (
  //   <p className="mt-3 flex">
  //     <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
  //       <circle class="opacity-25" cx="12" cy="12" r="10" stroke="teal" fill="none" stroke-width="4"></circle>
  //       <path class="opacity-75" fill="teal" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  //     </svg>
  //     Loading...
  //   </p>
  // );

  if (!data) return (
    <ul className="mb-5 mr-4">
     <GithubItem loading={true} />
     <GithubItem loading={true} />
     <GithubItem loading={true} />
    </ul>
  );

  if (data) {
    data.sort(function (a, b) {
      return new Date(b.updated_at) - new Date(a.updated_at);
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

const IconContainer = () => (<ul className="social flex justify-around flex-wrap mt-3">
  {config.socialLinks.map((link, key) =>
    <li
      style={{
        background: link.color
      }}
      key={`link-${key}`}
      className="social__item block rounded mx-3 my-2 hover:animate-pulse flex-grow">

      <a href={link.url} title={link.name} alt={link.name} target="_blank" className="block w-full h-full p-5 text-center ">
        {link.icon ?
          <FontAwesomeIcon className="text-5xl text-white" icon={[link.source, link.icon]} />
          : ''}
        {link.source === 'img' ?
          <Image width="130" height="40" className="mt-4 mx-auto" alt="Malt" title="Malt" src={link.img} />
          : ''}
        <p className="text-white mt-2 mb-1">
          {link.name || _(link.translatableString)}
        </p>
      </a>

    </li>
  )}

</ul>);


// export async function getServerSideProps(context) {

//   let resGitHub = await fetch(config.githubAPI);

//   var dataGitHub = [];

//   if (resGitHub.status === 403) {
//     dataGitHub = false;
//   } else {
//     dataGitHub = await resGitHub.json();
//   }

//   return {
//     props: {
//       dataGitHub,
//       resGitHub: resGitHub.status
//     },
//   }
// }

export default function IndexPage({ dataGitHub, resGitHub }) {

  return (
    <>
      <Head>
        <title>{config.fullName}</title>
      </Head>
      <main className="mx-auto mt-3 lg:mt-24 p-6 w-full">

        <div className="grid md:grid-cols-2 grid-cols-1">

          <div className="pr-2 mb-8">
            <h1 className="text-4xl font-extrabold">Benjamin Roger</h1>
            <p className="text-2xl">{_("hero")}</p>

            <hr className="border-teal-700 my-3" />

            <p>{_("intro")}</p>

            <IconContainer />


          </div>

          <div className="github__wrapper">

            <h2 className="text-2xl mb-3">{_("githubTitle")}</h2>

            <GithubContainer />

          </div>

        </div>

      </main >
    </>
  )
}

