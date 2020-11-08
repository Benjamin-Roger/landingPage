import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faGlobeEurope, faFile } from '@fortawesome/free-solid-svg-icons';

library.add({ faGithub, faLinkedin, faWhatsapp, faGlobeEurope, faFile });

import _ from '@/libs/i18n'
import config from '../config.js';

import { GithubItem } from '@/components/GithubItem.js';
import ShadowScrollBar from '@/components/ShadowScrollBar';



const GithubContainer = ({ dataGitHub }) => {

  return (<div>
    <ShadowScrollBar style={{ height: 500 }}>
      <ul className="mb-5 mr-4">
        {dataGitHub.map((repo, key) => <GithubItem key={`git${key}`} {...repo} />)}
      </ul>
    </ShadowScrollBar>
  </div >);

}

export default function IndexPage({ dataGitHub }) {

  const iconContainer = (<ul className="social flex justify-around flex-wrap mt-3">
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


  if (dataGitHub) {
    dataGitHub.sort(function (a, b) {
      return new Date(b.updated_at) - new Date(a.updated_at);
    });
  } else {
    dataGitHub = 0
  };


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

            {iconContainer}


          </div>

          <div className="github__wrapper">

            <h2 className="text-2xl mb-3">{_("githubTitle")}</h2>

            {dataGitHub ?
              <GithubContainer dataGitHub={dataGitHub} /> :
              <>
                <p>Github might limit API connections.</p>
                <p>Visit my Github profile to see all the current repositories.</p>
              </>}

          </div>

        </div>

      </main >
    </>
  )
}

export async function getServerSideProps(context) {

  let resGitHub = await fetch(config.githubAPI);

  var dataGitHub = await resGitHub.json();

  return {
    props: {
      dataGitHub
    },
  }
}
