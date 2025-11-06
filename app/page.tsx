'use client'
import React, { useEffect } from "react";
import Carousel from "./components/carousel/page";
import ProductSlide from './components/product-slide/page';
import NeedHelp from './components/need-help/page';
import Facilities from './components/facilities/page';
import WhyChooseUs from './components/why-choose-us/page';
import BrandLogos from './components/brand-logos/page';
import AnimatedSection from "./components/animated-section/page";
import AboutHome from "./components/about-home/page";
import { useTranslation } from "react-i18next";
import Head from "next/head";
// import HomePopup from '../modal/HomePopup';

const Home = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Head>
        <title>{`${t("header.home")} | Indo Teknik`}</title>
        <meta
          name="description"
          content="Ini adalah halaman beranda Indo Teknik"
        />
        <meta
          name="keywords"
          content="Spare part diesel berkualitas, Distributor spare part diesel Pekanbaru, Indo Teknik Pekanbaru"
        />
      </Head>
      {/* <HomePopup /> */}
      <AnimatedSection zoomType="zoomIn">
        <Carousel />
      </AnimatedSection>
      <AnimatedSection zoomType="zoomIn">
        <AboutHome />
      </AnimatedSection>
      <AnimatedSection zoomType="zoomIn">
        <Facilities />
      </AnimatedSection>
      <AnimatedSection zoomType="zoomIn">
        <NeedHelp />
      </AnimatedSection>
      <AnimatedSection zoomType="zoomOut">
        <ProductSlide />
      </AnimatedSection>
     <AnimatedSection zoomType="zoomIn">
        <WhyChooseUs />
      </AnimatedSection>
      <AnimatedSection zoomType="zoomOut">
        <BrandLogos />
      </AnimatedSection>
    </>
  );
};

export default Home;