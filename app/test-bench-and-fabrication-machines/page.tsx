import TestBenchAndFabricationMachinesClient from './TestBenchAndFabricationMachinesClient';

export const revalidate = 60;

export const metadata = {
    title: 'Test Bench dan Mesin Fabrikasi | Indo Teknik',
    description:
        'Gallery semua Mesin Test Bench dan Fabrikasi milik Indo Teknik Pekanbaru. Temukan solusi mesin industri terbaik untuk kebutuhan Anda.',
    alternates: {
        canonical:
            'https://indo-teknik.com/test-bench-and-fabrication-machines',
    },
    keywords: [
        'mesin test bench',
        'mesin fabrikasi',
        'Indo Teknik Pekanbaru',
        'spare part mesin industri',
        'servis mesin fabrikasi',
        'galeri mesin industri',
    ],
    openGraph: {
        title: 'Test Bench dan Mesin Fabrikasi | Indo Teknik',
        description:
            'Lihat koleksi mesin test bench dan fabrikasi milik Indo Teknik Pekanbaru. Solusi mesin industri terbaik untuk kebutuhan Anda.',
        url: 'https://indo-teknik.com/test-bench-and-fabrication-machines',
        type: 'website',
        images: [
            {
                url: 'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
                width: 1200,
                height: 630,
                alt: 'Indo Teknik - Test Bench & Mesin Fabrikasi',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Test Bench dan Mesin Fabrikasi | Indo Teknik',
        description:
            'Lihat koleksi mesin test bench dan fabrikasi milik Indo Teknik Pekanbaru. Solusi mesin industri terbaik untuk kebutuhan Anda.',
        images: [
            'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
        ],
    },
};

export default function TestBenchAndFabricationMachines() {
    const tab1Images = [
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1723703566/cp-indoteknik-v3/commonRailSystem/ITECH_CR318C_CE_PRO_pcw0lb.png',
            name: 'ITECH CR318C CE PRO',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1723703555/cp-indoteknik-v3/commonRailSystem/ITECH_CR318-S_s9uz1b.png',
            name: 'ITECH CR318-S',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1723704834/cp-indoteknik-v3/commonRailSystem/Untitled_design_13_d6fqpv.png',
            name: 'ITECH CR1016',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1723703558/cp-indoteknik-v3/commonRailSystem/BOSCH_EPS619_wmijmq.png',
            name: 'BOSCH EPS619',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1723703572/cp-indoteknik-v3/commonRailSystem/HARTRIDGE_IFT-70_dxcebh.png',
            name: 'HARTRIDGE IFT-70',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1723705077/cp-indoteknik-v3/commonRailSystem/HARTRIDGE%20AVM2-PC_ugh4tu.png ',
            name: 'HARTRIDGE AVM2-PC',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1723703599/cp-indoteknik-v3/commonRailSystem/HARTRIDGE_SABRE_CRI_MASTER_v0kk0z.png',
            name: 'HARTRIDGE SABRE CRI MASTER',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1723704176/cp-indoteknik-v3/commonRailSystem/BOSCH_EPS200_herjrn.png',
            name: 'BOSCH EPS200',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/v1723705529/cp-indoteknik-v3/commonRailSystem/BOSCH_EPS_619_EPS_707_EPS_611.png',
            name: 'BOSCH EPS 619, EPS 707, EPS 611',
        },
    ];
    const tab2Images = [
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_800/v1723696297/cp-indoteknik-v3/fabrication/GAP_BED_LATHE_C6232A_soqqqt.png',
            name: 'GAP BED LATHE C6232A',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_800/v1723696303/cp-indoteknik-v3/fabrication/YUNGSAN_SN_6266D2000_mxlbx1.png',
            name: 'YUNGSAN SN 6266D/2000',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_800/v1723696381/cp-indoteknik-v3/fabrication/BOSHI_CS6266B_vpodvd.png',
            name: 'BOSHI CS6266B',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_800/v1723696293/cp-indoteknik-v3/fabrication/BOSHI_CQ6280B_vwfa5i.png',
            name: 'BOSHI CQ6280B',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_800/v1723696304/cp-indoteknik-v3/fabrication/MECMAC_CQ6280B3000_lhf8bp.png',
            name: 'MECMAC CQ6280B/3000',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_800/v1723696289/cp-indoteknik-v3/fabrication/BAOJI_MACHINE_TOOL_CS62660_t9jcx3.png',
            name: 'BAOJI MACHINE TOOL CS62660',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_800/v1723696954/cp-indoteknik-v3/fabrication/PRESS_MACHINE_500_BAR_3000_BAR_b4a3ob.png',
            name: 'PRESS MACHINE 500 BAR, 3000 BAR',
        },
        {
            src: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_800/v1723697030/cp-indoteknik-v3/fabrication/MILLING-DRILLING%20ZX50C_p3fl8f.png',
            name: 'MILLING-DRILLING ZX50C',
        },
    ];
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Test Bench dan Mesin Fabrikasi Indo Teknik',
        description:
            'Gallery semua Mesin Test Bench dan Fabrikasi milik Indo Teknik Pekanbaru. Temukan solusi mesin industri terbaik untuk kebutuhan Anda.',
        url: 'https://indo-teknik.com/test-bench-and-fabrication-machines',
        publisher: {
            '@type': 'Organization',
            name: 'Indo Teknik',
            url: 'https://indo-teknik.com',
            logo: {
                '@type': 'ImageObject',
                url: 'https://res.cloudinary.com/dcbryptkx/image/upload/c_scale,w_1200/v1717044591/companyProfile/home/roundLogo.png',
            },
        },
    };
    return (
        <TestBenchAndFabricationMachinesClient
            tab1Images={tab1Images}
            tab2Images={tab2Images}
            jsonLd={jsonLd}
        />
    );
}
