import React from "react";

const Teksti = ({ texti }) => {
  return (
    <div className={texti}>
      <h2>CSS (Cascading Style Sheets)</h2>
      <p>
        CSS (Cascading Style Sheets) on kieli, jolla määritellään
        verkkodokumenttien ulkoasua. CSS-määritykset ovat www-selaimelle
        annettuja ohjeita dokumentin eri elementtien ulkoasun esittämiseen. CSS
        mahdollistaa dokumentin rakenteen ja ulkoasun määritysten erottamisen
        toisistaan. Ulkoasumääritykset voidaan tehdä erilliseen CSS-tiedostoon,
        johon voidaan viitata kaikilta verkkosivuston yksittäisiltä sivuilta.
      </p>
      <h2>Mikä on SASS?</h2>
      <p>
        SASS on tyylisivun kieli, jonka on suunnitellut Hampton Catlin. Se on
        lyhenne sanoista Syntaktically Awesome Style Sheets. Se on
        esikäsittelyohjelman skriptikieli, joka voidaan tulkita tai kääntää
        Cascading-tyylisivuiksi. Se on CSS: n stabiilimpi ja tehokkaampi versio,
        joka kuvaa rakenteellisesti minkä tahansa asiakirjan tyyliä. SASS on
        vain CSS: n jatko. Se sisältää uusia ominaisuuksia, kuten muuttujia,
        sisäkkäisiä sääntöjä, miksauksia, sisäistä tuontia, sisäänrakennettuja
        toimintoja, jotka auttavat manipuloimaan väriä ja muita arvoja. Kaikki
        nämä ovat täysin yhteensopivia CSS: n kanssa. Se on CSS-esiprosessori,
        joka auttaa vähentämään toistoa CSS: llä ja säästää puolestaan aikaa.
        Sitä pidetään vakaampana ja tehokkaampana CSS: ään verrattuna. Se kuvaa
        asiakirjan tyyliä hyvin selvästi ja rakenteellisesti. Se auttaa saamaan
        työn suorittamaan nopeammin ja paremmin. Kaikilla ominaisuuksillaan se
        on enimmäkseen parempi kuin CSS. Sen avulla voidaan määritellä
        muuttujat, jotka voivat alkaa merkillä $. Muuttujan määritys voidaan
        suorittaa kaksoispisteellä. Se tukee myös loogista pesää, jota CSS ei
        tee. SASS antaa käyttäjälle mahdollisuuden sisäkkäiseen koodiin, joka
        voidaan lisätä toisiinsa.
      </p>
      <h2>Selkeyttä ja rakennetta tyylitiedostoihin? LESS</h2>
      <p>
        CSS-kielellä saa aikaan hienoja ulkoasuja, mutta siinä on huomattavia
        puutteita, jotka ilmenevät etenkin kuin tyylien määrä kasvaa. Ongelmaan
        on kehitetty viime vuosina monia laajennuksia, jotka lisäävät
        CSS-kieleen lukuisia toimintoja, kuten muuttujia, funktiota ja
        sisäkkäisiä valitsimia. Kaikki laajennukset toimivat käynnössä samalla
        tavalla, niillä on oma syntaksinsa, mutta lopulta kaikki niistä
        käännetään omalla kääntäjällään CSS-kielelle. Suosituinpia CSS-kielen
        laajennuksia ovat Less ja Sass, joiden syntaksi muistuttaa hyvin paljon
        toisiaan ja tarjoat käytännössä samat toiminnot. Less:llä on ollut viime
        vuosina paljon nostetta. Lessin ominaisuudet Kuten jo mainittiin, Less
        lisää CSS-kieleen useita ominaisuuksia, jotka tekevät tyylitiedoista
        selkeämpiä ja ylläpidettävämpiä. Tutustutaan seuraavaksi sen tärkeimpiin
        ominaisuuksiin.
        <b>Muuttujat</b> on Lessin ehkä paras ominaisuus on muuttujien käyttö.
        Muuttujiin voi tallentaa oikeastaan mitä vain, värejä, taustakuvien
        polkuja, fontin kokoja ja jopa valitsimia. Muuttujat määritellään
        @-merkillä.
        <b>Funktiot</b> Lessissä pystyy määrittelemään yksinkertaisia funktiota,
        joita voi kutsua eri parametreilla. Funktiot ovat yksi Lessin parhaista
        ominaisuuksista, koska niiden avulla pystyy luomaan todella paljon
        uudelleenkäytettäviä tyylejä. Muita ominaisuuksia
        <b>Miksaus ja Valitsemet.</b>
      </p>
    </div>
  );
};
export default Teksti;
