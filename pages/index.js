import Link from 'next/link'
import { useRouter } from 'next/router'

import _ from '../lib/i18n'

export default function IndexPage({locale, locales, defaultLocale }) {


  return (
    <div>
      <h1>Index page</h1>

      <p>i18n function tr: {_("testString")}</p>
      <p>i18n function no tr: {_("errorString")}</p>
      <p>i18n function missing: {_("errorStrin")}</p>

      <p>Current locale: {locale}</p>
      <p>Default locale: {defaultLocale}</p>
      <p>Configured locales: {JSON.stringify(locales)}</p>

      <Link href="/gsp">
        <a>To getStaticProps page</a>
      </Link>
      <br />

      <Link href="/gsp/first">
        <a>To dynamic getStaticProps page</a>
      </Link>
      <br />

      <Link href="/gssp">
        <a>To getServerSideProps page</a>
      </Link>
      <br />
    </div>
  )
}

export const getStaticProps = ({ locale, locales, defaultLocale }) => {
  return {
    props: {
      locale,
      locales,
    },
  }
}