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