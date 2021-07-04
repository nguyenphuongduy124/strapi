import "../styles/globals.css";
import Header from "components/Header";
import { ThemeProvider } from "emotion-theming";
import GlobalStyles from "components/GlobalStyles/GlobalStyles";
import theme from "../theme/theme";
import getConfig from "next/config";
import fetch from "isomorphic-unfetch";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import ContextWrapper from "components/ContextWrapper";

function MyApp({ Component, pageProps, navigation }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ContextWrapper navigation={navigation}>
          <Header></Header>
        </ContextWrapper>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

const { publicRuntimeConfig } = getConfig();

MyApp.getInitialProps = async () => {
  const res = await fetch(publicRuntimeConfig.API_URL + "/navigations");
  const data = await res.json();

  return { navigation: data };
};

export default MyApp;
