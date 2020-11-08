import '../assets/styles/index.css';

import '../assets/styles/styles.scss';


import { Layout } from '@/components/Layout';

export default function MyApp({ Component, pageProps }) {
    return <Layout>
        <Component {...pageProps} />
    </Layout>;
}

