import Head from "next/head";
import Hero from "@/customComponents/Hero/App";
import About from "@/customComponents/About/App";
import Info from "@/customComponents/Info/App";
import Bachelor from "@/customComponents/Bachelor/App";
import MagistrInfo from "@/customComponents/MagistrInfo/App";
import Magistr from "@/customComponents/Magistr/App";
import Questions from "@/customComponents/Questions/App";
 function Home() {
  return (
      <main>
          <Head>
              <script type="application/ld+json">
                  {JSON.stringify({
                      '@context': 'https://schema.org',
                      '@type': 'Organization',
                      name: 'University of Science and Technology',
                      url: 'https://qabul.usat.uz/',
                      logo: 'https://qabul.usat.uz/assets/logos/usatLogo.svg',
                      sameAs: [
                          'https://www.facebook.com/usat.uz',
                          'https://www.twitter.com/usat.uz',
                          'https://www.linkedin.com/company/usat.uz',
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
                          streetAddress: '123 Main St',
                          addressLocality: 'Tashkent',
                          addressRegion: 'Tashkent Region',
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