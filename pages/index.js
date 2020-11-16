import Head from 'next/head';

import _ from '@/libs/i18n';
import config from '../config.js';

import IconContainer from '@/components/IconContainer';
import GithubContainer from '@/components/GithubContainer';


export default function IndexPage() {

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

            <IconContainer {...config} />


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

