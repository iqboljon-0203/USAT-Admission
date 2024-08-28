import Head from "next/head";
// import Hero from "@/customComponents/Hero/App";
// import About from "@/customComponents/About/App";
import Info from "@/customComponents/Info/App";
// import Bachelor from "@/customComponents/Bachelor/App";
// import MagistrInfo from "@/customComponents/MagistrInfo/App";
// import Magistr from "@/customComponents/Magistr/App";
import Questions from "@/customComponents/Questions/App";
import dynamic from "next/dynamic";
 function Home() {
    const Hero = dynamic(() => import("@/customComponents/Hero/App"), { ssr: false });
    const About = dynamic(() => import("@/customComponents/About/App"), { ssr: false });
    // const Info = dynamic(() => import("@/customComponents/Info/App"), { ssr: false });
    const Bachelor = dynamic(() => import("@/customComponents/Bachelor/App"), { ssr: false });
    const MagistrInfo = dynamic(() => import("@/customComponents/MagistrInfo/App"), { ssr: false });
    const Magistr = dynamic(() => import("@/customComponents/Magistr/App"), { ssr: false });
    // const Questions = dynamic(() => import("@/customComponents/Questions/App"), { ssr: false });
  return (
      <main>
          <Head>
              <script type="application/ld+json">
                  {JSON.stringify({
                      '@context': 'https://schema.org',
                      '@type': 'Organization',
                      name: 'Fan va texnalogiyalar universiteti',
                      url: 'https://usat.uz/',
                      logo: 'https://usat.uz/assets/logos/usatLogo.svg',
                      description:
                          "Fan va texnologiyalar universiteti - fan va zamonaviy texnologiyalar mujassam bo'lgan universitet!",
                      sameAs: [
                          'https://www.facebook.com/usatuz',
                          'https://www.instagram.com/usatuz/',
                          'https://t.me/usatuzb',
                          'https://www.youtube.com/@usatuz',
                      ],
                      contactPoint: {
                          '@type': 'ContactPoint',
                          telephone: '+998-78-88-3888',
                          contactType: 'Admissions',
                          areaServed: 'UZ',
                          availableLanguage: ['Uzbek', 'Russian', 'English'],
                      },
                      address: {
                          '@type': 'PostalAddress',
                          streetAddress: 'Diydor street, house 71',
                          addressLocality: 'Chilonzor district',
                          addressRegion: 'Tashkent city',
                          postalCode: '100000',
                          addressCountry: 'UZ',
                      },
                  })}
              </script>
          </Head>
          <Hero></Hero>
          <About></About>
          <Info></Info>
          <Bachelor></Bachelor>
          <MagistrInfo></MagistrInfo>
          <Magistr></Magistr>
          <Questions></Questions>
      </main>
  );
}
export default Home;