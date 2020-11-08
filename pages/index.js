import Link from 'next/link'
import Head from 'next/head'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

library.add({ faGithub, faLinkedin, faWhatsapp, faGlobeEurope });


import _ from '@/libs/i18n'

import config from '../config.js';
import { GithubItem } from '@/components/GithubItem.js';


const GithubContainer = ({ dataGitHub, key }) => {

  return <ul className="md:overflow-y-scroll mb-5">
    {dataGitHub.map(repo => <GithubItem key={`git${key}`} {...repo} />)}
  </ul>;

}

export default function IndexPage({ dataGitHub }) {

  const maltContainer = (<>
    <p className="mb-2">{_("maltIntro")}</p>
    <a href={config.maltUrl} title="Malt" alt="Malt" rel="nofollow" className="inline-block duration-150 ease-in-out hover:animate-pulse">
      <img style={{ backgroundColor: '#FF5C57', maxHeight: "80px" }} className="rounded p-5" alt="Malt" title="Malt" src="/images/malt.png" />
    </a>
  </>);


  return (
    <>
      <Head>
        <title>{config.fullName}</title>
      </Head>
      <main className="mx-auto mt-24 p-6 w-full">

        <div className="grid md:grid-cols-2 grid-cols-1">

          <div className="pr-2 mb-8">
            <h1 className="text-4xl font-extrabold">Benjamin Roger</h1>
            <p className="text-2xl">{_("hero")}</p>

            <hr className="border-teal-700 my-3" />

            <p>{_("intro")}</p>

            <ul>
              {config.socialLinks.map((link, key) =>
                <li className="ml-3 hover:ml-5 transition-all ease duration-150 my-1" key={key}>
                  <a href={link.url} title={link.name}>
                    {link.icon ?
                      <FontAwesomeIcon className="text-xl mr-2 text-blue-900" icon={[link.source, link.icon]} />
                      : ''}
                    {link.name}
                  </a>
                </li>)}
              {config.socialLinksTranslate.map((link, key) =>
                <li className="ml-3 hover:ml-5 transition-all ease duration-150 my-1" key={key}>
                  <a href={link.url} title={link.name}>
                    {link.icon ?
                      <FontAwesomeIcon className="text-xl mr-2 text-blue-900" icon={[link.source, link.icon]} />
                      : ''}
                    {_(link.name)}
                  </a>
                </li>)}
            </ul>

            <hr className="border-teal-700 my-3" />

            {maltContainer}



          </div>

          <div className="github__wrapper">

            <h2 className="text-2xl mb-3">{_("githubTitle")}</h2>

            <GithubContainer dataGitHub={dataGitHub} />

          </div>

        </div>

      </main >
    </>
  )
}

export async function getServerSideProps(context) {

  let resGitHub = await fetch(config.githubAPI);

  var dataGitHub = await resGitHub.json();

  dataGitHub.sort(function (a, b) {
    return new Date(b.updated_at) - new Date(a.updated_at);
  });

  return {
    props: {
      dataGitHub
    },
  }
}
