"use client";
import React, { useEffect, useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';
import { IoMdClose } from 'react-icons/io';
import { MdArrowForwardIos } from 'react-icons/md';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarMobile = ({ isOpen, onClose }) => {
    const [servicesOpen, setServicesOpen] = useState(false);
    const [conventionalOpen, setConventionalOpen] = useState(false);
    const [commonRailOpen, setCommonRailOpen] = useState(false);
    const [vp44Open, setVp44Open] = useState(false);
    const [electricOpen, setElectricOpen] = useState(false);
    const [fabricationOpen, setFabricationOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [productTypeOpen, setProductTypeOpen] = useState('');
    const { t, i18n } = useTranslation();
    const pathname = usePathname();
    const [activeLink, setActiveLink] = useState(pathname || '/');

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const toggleServices = () => {
        setServicesOpen(!servicesOpen);
        setProductsOpen(false);
    };

    const toggleConventional = () => {
        setConventionalOpen(!conventionalOpen);
        setCommonRailOpen(false);
        setVp44Open(false);
        setElectricOpen(false);
        setFabricationOpen(false);
    };

    const toggleCommonRail = () => {
        setCommonRailOpen(!commonRailOpen);
        setConventionalOpen(false);
        setVp44Open(false);
        setElectricOpen(false);
        setFabricationOpen(false);
    };

    const toggleVp44 = () => {
        setVp44Open(!vp44Open);
        setConventionalOpen(false);
        setCommonRailOpen(false);
        setElectricOpen(false);
        setFabricationOpen(false);
    };

    const toggleElectric = () => {
        setElectricOpen(!electricOpen);
        setConventionalOpen(false);
        setCommonRailOpen(false);
        setVp44Open(false);
        setFabricationOpen(false);
    };

    const toggleFabrication = () => {
        setFabricationOpen(!fabricationOpen);
        setConventionalOpen(false);
        setCommonRailOpen(false);
        setVp44Open(false);
        setElectricOpen(false);
    };

    const toggleProducts = () => {
        setProductsOpen(!productsOpen);
        setServicesOpen(false);
    };

    const toggleProductType = (type) => {
        setProductTypeOpen(productTypeOpen === type ? '' : type);
        setProductsOpen(true);
    };

     useEffect(() => {
         setActiveLink(pathname || '/');
     }, [pathname]);

    return (
        <div
            className={`fixed z-[2147483647] inset-0 bg-gradient-to-bl from-neutral-50 to-blue-200 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}
        >
            <div className='w-full h-full  p-4 '>
                <button
                    className='text-gray-900 float-right p-4'
                    onClick={onClose}
                >
                    <IoMdClose />
                </button>
                <ul className='space-y-4 shadow-lg bg-white p-4 rounded-xl'>
                    <li>
                        <a
                            href='/'
                            className={`${activeLink === '/' ? 'text-blue-900 font-semibold' : 'text-blue-900'} text-blue-900 font-normal hover:text-red-500 `}
                        >
                            {t('Home')}
                        </a>
                    </li>
                    <li>
                        <button
                            className={`${activeLink.startsWith('/services') ? 'text-blue-900 font-semibold' : 'text-blue-900'} text-blue-900 font-normal hover:text-red-500 w-full text-left flex items-center justify-between`}
                            onClick={toggleServices}
                        >
                            {t('Services')}
                            <MdArrowForwardIos
                                className={`transition-transform ${servicesOpen ? 'rotate-90' : ''}`}
                            />
                        </button>
                        {servicesOpen && (
                            <ul className='pl-4 mt-2 space-y-2 bg-gradient-to-bl from-neutral-50 to-blue-100 rounded-xl p-2'>
                                <li>
                                    <button
                                        className='w-full text-left flex items-center justify-between'
                                        onClick={toggleConventional}
                                    >
                                        {t('Conventional')}
                                        <MdArrowForwardIos
                                            className={`transition-transform ${conventionalOpen ? 'rotate-90' : ''}`}
                                        />
                                    </button>
                                    {conventionalOpen && (
                                        <ul className='pl-4 mt-2 space-y-2'>
                                            <li>
                                                <a href='/services/conventional/fuel-injection-pump'>
                                                    Fuel Injection Pump
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/services/conventional/nozzle'>
                                                    Nozzle
                                                </a>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <button
                                        className='w-full text-left flex items-center justify-between'
                                        onClick={toggleCommonRail}
                                    >
                                        Common Rail
                                        <MdArrowForwardIos
                                            className={`transition-transform ${commonRailOpen ? 'rotate-90' : ''}`}
                                        />
                                    </button>
                                    {commonRailOpen && (
                                        <ul className='pl-4 mt-2 space-y-2'>
                                            <li>
                                                <a href='/services/common-rail/supply-pump'>
                                                    Supply Pump
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/services/common-rail/injector'>
                                                    Injector
                                                </a>
                                            </li>
                                            
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <button
                                        className='w-full text-left flex items-center justify-between'
                                        onClick={toggleElectric}
                                    >
                                        Electric
                                        <MdArrowForwardIos
                                            className={`transition-transform ${electricOpen ? 'rotate-90' : ''}`}
                                        />
                                    </button>
                                    {electricOpen && (
                                        <ul className='pl-4 mt-2 space-y-2'>
                                            <li>
                                                <a href='/services/electric/eui'>
                                                    EUI
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/services/electric/unit-pump'>
                                                    Unit Pump
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/services/electric/tics'>
                                                    TICS
                                                </a>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <button
                                        className='w-full text-left flex items-center justify-between'
                                        onClick={toggleFabrication}
                                    >
                                        {t('Fabrication')}
                                        <MdArrowForwardIos
                                            className={`transition-transform ${fabricationOpen ? 'rotate-90' : ''}`}
                                        />
                                    </button>
                                    {fabricationOpen && (
                                        <ul className='pl-4 mt-2 space-y-2'>
                                            <li>
                                                <a href='/services/fabrication/fabrication'>
                                                    {t('Fabrication')}
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/services/fabrication/welding'>
                                                    {t('Welding')}
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/services/fabrication/lathe'>
                                                    {t('Lathe')}
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/services/fabrication/press'>
                                                    {t('Press')}
                                                </a>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <button
                            className={`${activeLink.startsWith('/products') ? 'text-blue-900 font-semibold' : 'text-blue-900'} text-blue-900 font-normal hover:text-red-500 w-full text-left flex items-center justify-between`}
                            onClick={toggleProducts}
                        >
                            {t('Products')}
                            <MdArrowForwardIos
                                className={`transition-transform ${productsOpen ? 'rotate-90' : ''}`}
                            />
                        </button>
                        {productsOpen && (
                            <ul className='pl-4 mt-2 space-y-2 bg-gradient-to-bl from-neutral-50 to-blue-100 rounded-xl p-2'>
                                <li>
                                    <button
                                        className='w-full text-left flex items-center justify-between'
                                        onClick={() =>
                                            toggleProductType('FuelInjection')
                                        }
                                    >
                                        {t('Fuel Injection Systems')}
                                        <MdArrowForwardIos
                                            className={`transition-transform ${productTypeOpen === 'FuelInjection' ? 'rotate-90' : ''}`}
                                        />
                                    </button>
                                    {productTypeOpen === 'FuelInjection' && (
                                        <ul className='pl-4 mt-2 space-y-2'>
                                            <li>
                                                <button
                                                    className='w-full text-left flex items-center justify-between'
                                                    onClick={toggleConventional}
                                                >
                                                    {t('Conventional')}
                                                    <MdArrowForwardIos
                                                        className={`transition-transform ${conventionalOpen ? 'rotate-90' : ''}`}
                                                    />
                                                </button>
                                                {conventionalOpen && (
                                                    <ul className='pl-4 mt-2 space-y-2'>
                                                        <li>
                                                            <a href='/products/fuel-injection-systems/conventional/fuel-injection-pump'>
                                                                Fuel Injection
                                                                Pump
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='/products/fuel-injection-systems/conventional/nozzle'>
                                                                Nozzle
                                                            </a>
                                                        </li>
                                                    </ul>
                                                )}
                                            </li>
                                            <li>
                                                <button
                                                    className='w-full text-left flex items-center justify-between'
                                                    onClick={toggleCommonRail}
                                                >
                                                    Common Rail
                                                    <MdArrowForwardIos
                                                        className={`transition-transform ${commonRailOpen ? 'rotate-90' : ''}`}
                                                    />
                                                </button>
                                                {commonRailOpen && (
                                                    <ul className='pl-4 mt-2 space-y-2'>
                                                        <li>
                                                            <a href='/products/fuel-injection-systems/common-rail/supply-pump'>
                                                                Supply Pump
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='/products/fuel-injection-systems/common-rail/injector'>
                                                                Injector
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='/products/fuel-injection-systems/common-rail/common-rail-pipe'>
                                                                {t('Common Rail Pipe')}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                )}
                                            </li>
                                            <li>
                                                <button
                                                    className='w-full text-left flex items-center justify-between'
                                                    onClick={toggleVp44}
                                                >
                                                    VP44
                                                    <MdArrowForwardIos
                                                        className={`transition-transform ${vp44Open ? 'rotate-90' : ''}`}
                                                    />
                                                </button>
                                                {vp44Open && (
                                                    <ul className='pl-4 mt-2 space-y-2'>
                                                        <li>
                                                            <a href='/products/fuel-injection-systems/vp44/distributor-pump'>
                                                                Distributor Pump
                                                            </a>
                                                        </li>
                                                    </ul>
                                                )}
                                            </li>
                                            <li>
                                                <button
                                                    className='w-full text-left flex items-center justify-between'
                                                    onClick={toggleElectric}
                                                >
                                                    Electric
                                                    <MdArrowForwardIos
                                                        className={`transition-transform ${electricOpen ? 'rotate-90' : ''}`}
                                                    />
                                                </button>
                                                {electricOpen && (
                                                    <ul className='pl-4 mt-2 space-y-2'>
                                                        <li>
                                                            <a href='/products/fuel-injection-systems/electric/eui'>
                                                                EUI
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href='/products/fuel-injection-systems/electric/unit-pump'>
                                                                Unit Pump
                                                            </a>
                                                        </li>
                                                    </ul>
                                                )}
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <button
                                        className='w-full text-left flex items-center justify-between'
                                        onClick={() =>
                                            toggleProductType('Aftermarket')
                                        }
                                    >
                                        Automotive Aftermarket
                                        <MdArrowForwardIos
                                            className={`transition-transform ${productTypeOpen === 'Aftermarket' ? 'rotate-90' : ''}`}
                                        />
                                    </button>
                                    {productTypeOpen === 'Aftermarket' && (
                                        <ul className='pl-4 mt-2 space-y-2'>
                                            <li>
                                                <a href='/products/automotive-aftermarket/battery'>
                                                    {t('Battery')}
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/products/automotive-aftermarket/brake'>
                                                    {t('Brake')}
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/products/automotive-aftermarket/bulb-lighting'>
                                                    {t('Bulb and Lighting')}
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/products/automotive-aftermarket/filter'>
                                                    Filter
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/products/automotive-aftermarket/gasoline-system'>
                                                    Gasoline System
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/products/automotive-aftermarket/horn'>
                                                    {t('Horn')}
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/products/automotive-aftermarket/relay'>
                                                    Relay
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/products/automotive-aftermarket/spark-plug'>
                                                    {t('Spark Plug')}
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/products/automotive-aftermarket/wiper'>
                                                    Wiper
                                                </a>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li>
                                    <button
                                        className='w-full text-left flex items-center justify-between'
                                        onClick={() =>
                                            toggleProductType('Other')
                                        }
                                    >
                                        {t('Other Products')}
                                        <MdArrowForwardIos
                                            className={`transition-transform ${productTypeOpen === 'Other' ? 'rotate-90' : ''}`}
                                        />
                                    </button>
                                    {productTypeOpen === 'Other' && (
                                        <ul className='pl-4 mt-2 space-y-2'>
                                            <li>
                                                <a href='/products/other-products/ecu'>
                                                    ECU
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/products/other-products/sensor'>
                                                    Sensor
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/products/other-products/starter-alternator'>
                                                    {t(
                                                        'Starter and Alternator',
                                                    )}
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/products/other-products/tools'>
                                                    Tools
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/products/other-products/turbo-charger'>
                                                    Turbo Charger
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/products/other-products/power-tool'>
                                                    Power Tool
                                                </a>
                                            </li>
                                            <li>
                                                <a href='/products/other-products/socket'>
                                                    Socket
                                                </a>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <a
                            href='/about'
                            className={`${activeLink === '/about' ? 'text-blue-900 font-semibold' : 'text-blue-900'} text-blue-900 font-normal hover:text-red-500 `}
                        >
                            {t('About')}
                        </a>
                    </li>
                    <li>
                        <a
                            href='/contact'
                            className={`${activeLink === '/contact' ? 'text-blue-900 font-semibold' : 'text-blue-900'} text-blue-900 font-normal hover:text-red-500 `}
                        >
                            {t('Contact')}
                        </a>
                    </li>
                    <li>
                        <a
                            href='/blog'
                            className={`${activeLink.startsWith('/blog') ? 'text-blue-900 font-semibold' : 'text-blue-900'} text-blue-900 font-normal hover:text-red-500 `}
                        >
                            Blog
                        </a>
                    </li>
                    <li className='flex items-center space-x-3 bg-gradient-to-bl from-neutral-50 to-blue-100 p-3 rounded-xl max-w-24'>
                        <button
                            onClick={() => handleChangeLanguage('en')}
                            className={`${i18n.language === 'en' ? 'opacity-50' : ''}`}
                        >
                            <ReactCountryFlag
                                countryCode='US'
                                svg
                                style={{ width: '1.2em', height: '1.2em' }}
                            />
                        </button>
                        <span className='font-bold text-gray-900'>|</span>
                        <button
                            onClick={() => handleChangeLanguage('id')}
                            className={`${i18n.language === 'id' ? 'opacity-50' : ''}`}
                        >
                            <ReactCountryFlag
                                countryCode='ID'
                                svg
                                style={{ width: '1.2em', height: '1.2em' }}
                            />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SidebarMobile;
