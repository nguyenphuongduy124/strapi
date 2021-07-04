import { NextSeo } from "next-seo";

function About() {
  const SEO = {
    title: "Abou Page",
    description: "This is description of About Page",
    openGraph: {
        title: "Abou Page",
        description: "This is description of About Page",
      },
  };
  return (
    <>
      <NextSeo {...SEO}/>
      <h1>About page</h1>
    </>
  );
}

export default About;
