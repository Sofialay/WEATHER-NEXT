import '../styles/globals.css';
import store from '../store/configStore';
import { createWrapper } from 'next-redux-wrapper'
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

const makeStore = () => store
export const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp);
