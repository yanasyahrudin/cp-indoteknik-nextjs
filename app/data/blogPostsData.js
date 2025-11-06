// Sample blog data
const blogPosts = [
    {
        id: 1,
        title: 'Optimalkan Performa Toyota Hilux Revo Anda dengan Service Injector di Indo Teknik Pekanbaru',
        category: 'Workshop',
        content:
            'Proses dimulai dengan pembongkaran injektor oleh mekanik kami yang berpengalaman dan terlatih',
        link: '/blog/2024/10/optimize-the-performance-of-your-hilux-revo',
        date: '2024-10-4', // Add date here
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728722214/cp-indoteknik-v3/blog/October2024/optimizeThePerformanceOfYourHiluxRevo/1_w52apy.png',
    },
    {
        id: 2,
        title: 'Perbaikan Injector Mitsubishi L300 di Pekanbaru: Solusi untuk Masalah Tenaga dan Emisi',
        category: 'Workshop',
        content:
            'Setelah menerima mobil, langkah pertama kami adalah melakukan pengecekan di mesin tes',
        link: '/blog/2024/10/l300-car-injector-repair',
        date: '2024-10-7', // Add date here
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728888378/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepair/1_yni2hh.png',
    },
    {
        id: 3,
        title: 'Perbaikan Injector Mitsubishi L300 di Pekanbaru: Part II - Pencucian Tangki dan Pemasangan Injektor',
        category: 'Workshop',
        content:
            'Setelah membongkar injektor, langkah selanjutnya adalah memeriksa tangki bahan bakar',
        link: '/blog/2024/10/l300-car-injector-repair-part-ii',
        date: '2024-10-10', // Add date here
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728894957/cp-indoteknik-v3/blog/October2024/l300CarInjectorRepairPartII/1_ziprej.png',
    },
    {
        id: 4,
        title: 'Mengatasi Masalah Injector Mobil: Pentingnya Menggunakan Sparepart yang Sesuai Standar',
        category: 'Spare Parts',
        content:
            'Banyak pelanggan mengeluhkan bahwa servis injektor mobil mereka tidak tahan lama dan performanya kurang memuaskan',
        link: '/blog/2024/10/solving-car-injector-problems',
        date: '2024-10-14', // Add date here
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728967398/cp-indoteknik-v3/blog/October2024/solvingCarInjectorProblems/1_sabzpj.png',
    },
    {
        id: 5,
        title: 'Servis dan Kalibrasi Injektor Caterpillar C9 di Pekanbaru - Indo Teknik',
        category: 'Workshop',
        content:
            'Di Indo Teknik Pekanbaru, kami memiliki pengalaman luas dalam menangani Electronic Unit Injector Caterpillar C9',
        link: '/blog/2024/10/caterpillar-c9-electronic-unit-injector-eui',
        date: '2024-10-17', // Add date here
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729159574/cp-indoteknik-v3/blog/October2024/caterpillarC9ElectronicUnitInjectorEUI/1_mdxe7q.png',
    },
    {
        id: 6,
        title: 'Ganti Rotor Head di Indo Teknik Pekanbaru, Kantong Aman dan Hasil Terjamin!',
        category: 'Workshop',
        content:
            'Ketika pump Isuzu ini dibongkar dan dicek, ternyata as rotornya sudah aus dan wajib diganti',
        link: '/blog/2024/10/replace-rotor-head-at-indo-teknik',
        date: '2024-10-20', // Add date here
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1728987448/cp-indoteknik-v3/blog/October2024/replaceRotorHeadAtIndoTeknik/1_jjiddx.png',
    },
    {
        id: 7,
        title: 'Service Injection Pump Hino Lohan Pekanbaru: Kinerja Optimal',
        category: 'Workshop',
        content:
            'Pertama-tama, kita mulai dengan membongkar injection pump dari truk Hino Lohan ini',
        link: '/blog/2024/10/hino-lohan-injection-pump-service',
        date: '2024-10-24', // Add date here
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729066690/cp-indoteknik-v3/blog/October2024/hinoLohanInjectionPumpService/1_i4eefv.png',
    },
    {
        id: 8,
        title: 'Proses Pembongkaran Pump Rotary Isuzu Elf Pekanbaru: Tips Aman dan Detail',
        category: 'Workshop',
        content:
            'Sebelum mulai, ada beberapa hal penting yang harus diperhatikan saat membongkar Pump Rotary',
        link: '/blog/2024/10/isuzu-elf-rotary-pump-disassembly-process',
        date: '2024-10-27',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729136937/cp-indoteknik-v3/blog/October2024/isuzuElfRotaryPumpDisassemblyProcess/1_mfb9g4.png',
    },
    {
        id: 9,
        title: 'Service Injection Pump Colt Diesel di Pekanbaru - Indo Teknik',
        category: 'Workshop',
        content:
            'Ketika kalian service Injection Pump di Indo Teknik, kami tidak hanya membongkar bagian atas atau sebagian saja, tapi membongkar seluruh komponen',
        link: '/blog/2024/10/detailed-colt-diesel-njection-pump',
        date: '2024-10-30',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729151893/cp-indoteknik-v3/blog/October2024/DetailedColtDieselInjectionPumpService/1_fulc1c.png',
    },
    {
        id: 10,
        title: 'Review Nozzle P1030 Itech untuk Pajero Dakar 2.5: Pilihan Terbaik untuk Performa Maksimal',
        category: 'Spare Parts',
        content:
            'Nozzle P1030 ITech adalah salah satu komponen yang sering dicari oleh para pemilik Pajero Dakar 2.5',
        link: '/blog/2024/10/itech-p1030-nozzle-review-for-pajero-dakar-2_5',
        date: '2024-11-3',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729219750/cp-indoteknik-v3/blog/October2024/itechP1030NozzleReviewForPajeroDakar2_5/1_ukfhog.png',
    },
    {
        id: 11,
        title: 'Tips Penting dalam Reparasi Bucket Ekskavator untuk Menghemat Biaya Operasional',
        category: 'Fabrication',
        content:
            'Setiap bucket ekskavator dibuat dari bahan yang berbeda, dan pemilihan kawat las harus disesuaikan dengan bahan tersebut',
        link: '/blog/2024/10/important-tips-for-excavator-bucket-repair',
        date: '2024-11-6',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1729237233/cp-indoteknik-v3/blog/October2024/importantTipsforExcavatorBucketRepair/1_nkcese.png',
    },
    {
        id: 12,
        title: 'Proses Reparasi dan Penggantian Topi Velg di Indo Teknik',
        category: 'Fabrication',
        content:
            'Buat yang belum tahu, topi velg adalah salah satu bagian penting yang mempengaruhi stabilitas dan keamanan roda mobil',
        link: '/blog/2024/9/repair-and-replacement-process-for-rim-caps',
        date: '2024-9-2',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730175461/cp-indoteknik-v3/blog/September2024/repairAndReplacementProcessforRimCapsAtIndoTeknik/1_rob9uj.png',
    },
    {
        id: 13,
        title: 'Pentingnya Perbaikan Tepat pada Silinder Bucket PC-130 untuk Kinerja Alat Berat yang Optimal',
        category: 'Fabrication',
        content:
            'Jika Anda menghadapi masalah kebocoran pada seal silinder bucket PC-130, segera perhatikan dan atasi sebelum kerusakan semakin parah!',
        link: '/blog/2024/11/the-importance-of-proper-repair-of-the-pc130-bucket-cylinder',
        date: '2024-11-9',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730262737/cp-indoteknik-v3/blog/November2024/theImportanceOfProperRepairOfTheBucketCylinder/1_yydqed.png',
    },
    {
        id: 14,
        title: 'Kenapa Injektor Mobil Bisa Macet? Yuk, Cari Tahu!',
        category: 'Spare Parts',
        content:
            'Salah satu alasan umum injektor bisa tersendat adalah as di dalam nozzle yang sulit bergerak',
        link: '/blog/2024/9/why-do-car-injectors-get-stuck',
        date: '2024-9-5',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730345342/cp-indoteknik-v3/blog/September2024/whyDoCarInjectorsGetStuck/1_vi9ml6.png',
    },
    {
        id: 15,
        title: 'Mengatasi Masalah Injector Pada Mitsubishi Triton 2.5 – Asap Putih dan Mesin Mati Mendadak',
        category: 'Spare Parts',
        content:
            'Masalah utama yang dialami Triton ini adalah mesin pincang dengan tanda-tanda asap putih di awal start, lalu mendadak mati',
        link: '/blog/2024/9/overcoming-injector-problems-on-mitsubishi-triton-2_5',
        date: '2024-9-8',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730363379/cp-indoteknik-v3/blog/September2024/overcomingInjectorProblemsOnMitsubishiTriton2.5/1_v8ayxf.png',
    },
    {
        id: 16,
        title: 'Valve Itech: Apa Bedanya dengan yang Lain?',
        category: 'Spare Parts',
        content:
            'Valve Itech dirancang dengan standar produksi ketat untuk memastikan kualitas terbaik',
        link: '/blog/2024/9/valve-itech-how-is-it-different-from-others',
        date: '2024-9-11',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732260884/cp-indoteknik-v3/blog/September2024/valveItechHowisitDifferentfromOthers/1_o8d8io.png',
    },
    {
        id: 17,
        title: 'Ford 2.5 Mati Total: Solusi Perbaikan Injektor dengan Produk ITech yang Bikin Mesin Kembali Bertenaga!',
        category: 'Workshop',
        content:
            'Awalnya, saya perhatikan mobil mulai kehilangan tenaga. Ada hentakan kecil setiap kali gas ditekan dan mesin terasa berat, sampai akhirnya mogok total',
        link: '/blog/2024/9/ford-2_5-totally-dead-injector-repair-solution-with-itech-roducts',
        date: '2024-9-14',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730701362/cp-indoteknik-v3/blog/September2024/ford2_5TotallyDeadInjectorRepairSolutionWithITechProducts/1_rmsyec.png',
    },
    {
        id: 18,
        title: 'Proses Pembongkaran dan Pembersihan Tangki Bahan Bakar di Indo Teknik',
        category: 'Workshop',
        content:
            'Tangki bahan bakar pada mobil, terutama diesel, sangat rentan menimbun kotoran, karat, dan bahkan lumut',
        link: '/blog/2024/11/fuel-tank-dismantling-and-cleaning-process',
        date: '2024-11-10',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730781971/cp-indoteknik-v3/blog/November2024/fuelTankDismantlingAndCleaningProcess/1.png',
    },
    {
        id: 19,
        title: 'Proses Kalibrasi Injection Pump Komatsu PC200-7 Galileo: Langkah-langkah Detil yang Perlu Anda Ketahui',
        category: 'Workshop',
        content:
            'Proses kalibrasi dimulai dengan membersihkan injection pump untuk menghilangkan kotoran yang mungkin menumpuk di komponen luar dan dalamnya',
        link: '/blog/2024/9/komatsu-pc200-7-galileo-injection-pump-calibration-process',
        date: '2024-9-17',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1730950958/cp-indoteknik-v3/blog/September2024/galileoKomatsuPC200_7InjectionPumpCalibrationProcess/1_s02zu4.png',
    },
    {
        id: 20,
        title: 'Cara Mengatasi Masalah Injektor pada Mitsubishi Triton 2500cc: Langkah Demi Langkah',
        category: 'Workshop',
        content:
            'Langkah pertama setelah menemukan masalah adalah membongkar injektor. Sobat, perlu diingat ya, saat membongkar injektor, pastikan untuk tidak membongkar paksa',
        link: '/blog/2024/9/how-to-solve-injector-problems-on-a-mitsubishi-triton-2500cc',
        date: '2024-9-30',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1731061501/cp-indoteknik-v3/blog/September2024/howToSolveInjectorProblemsOnAMitsubishiTriton/1_ih29rh.png',
    },
    {
        id: 21,
        title: 'Tips Penting Saat Ganti Seal Mesin Press: Langkah Reparasi Silinder Jack Mesin Press 300 Bar yang Bocor',
        category: 'Fabrication',
        content:
            'Para mekanik kita menunjukkan proses reparasinya mulai dari penggantian seal silinder dengan bahan berkualitas tinggi dan tahan lama',
        link: '/blog/2024/11/important-tips-when-replacing-a-press-machine-seal',
        date: '2024-11-12',
        image: 'https://servisdieselpekanbaru.wordpress.com/wp-content/uploads/2024/11/1_ec3qwu.png',
    },
    {
        id: 22,
        title: 'Jaga Performa Mesinmu dengan SCV ITECH Ini! Suction Control Valve Itech 294200-4970',
        category: 'Spare Parts',
        content:
            'SCV Itech telah melalui uji ketahanan dalam berbagai kondisi ekstrem dan terbukti memiliki daya tahan yang luar biasa',
        link: '/blog/2024/11/maintain-your-engine-performance-with-this-itech-scv',
        date: '2024-11-14',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732092713/cp-indoteknik-v3/blog/November2024/maintainYourEnginePerformanceWithThisITECHSCV/1_xshb52.png',
    },
    {
        id: 23,
        title: 'Mengapa Feed Pump Assy ITech Wajib Jadi Pilihan Anda!',
        category: 'Spare Parts',
        content:
            'Feed Pump ITech 105237-4410 memiliki keunggulan utama dalam memberikan aliran bahan bakar yang stabil, yang penting untuk pembakaran sempurna dalam mesin',
        link: '/blog/2024/11/why-itech-feed-pump-assy-must-be-your-choice',
        date: '2024-11-17',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732091277/cp-indoteknik-v3/blog/November2024/whyFeedPumpAssyITechMustBeYourChoice/1_fruoco.png',
    },
    {
        id: 24,
        title: 'Sistem Bahan Bakar Makin Cepat Tanggap Dengan Switch Limiter Pipa Common Rail Itech!',
        category: 'Spare Parts',
        content:
            'Sensor ini dirancang untuk memberikan pembacaan tekanan yang sangat akurat dalam sistem bahan bakar',
        link: '/blog/2024/11/the-fuel-system-is-more-response',
        date: '2024-11-20',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732090463/cp-indoteknik-v3/blog/November2024/thefuelSystemIsMoreResponsive/1_tikpqd.png',
    },
    {
        id: 25,
        title: 'Kenapa Banyak yang Memilih Plunger ITech 9H5797?',
        category: 'Spare Parts',
        content:
            'Jika Anda sedang mencari solusi injeksi bahan bakar yang andal untuk mesin diesel berat, jawabannya ada di Plunger ITech 9H5797',
        link: '/blog/2024/11/why-do-many-choose-the-itech-9H5797-plunger',
        date: '2024-11-23',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732089235/cp-indoteknik-v3/blog/November2024/whyDoManyChooseTheITech9H5797Plunger/1_gjfxht.png',
    },
    {
        id: 26,
        title: 'Tanjakan Serasa Datar dengan Turbocharger Itech CT16 17201-OL070 untuk Kijang Innova 2KD',
        category: 'Spare Parts',
        content:
            'Dengan Turbocharger Itech, gas terasa lebih ringan dan responsif. Saat menekan pedal gas, tenaga langsung tersalurkan, memberikan pengalaman berkendara yang lebih dinamis',
        link: '/blog/2024/11/the-incline-feels-flat-with-turbocharge-itech-CT16-17201-OL070',
        date: '2024-11-26',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732088435/cp-indoteknik-v3/blog/November2024/theInclineFeelsFlatWithTurbochargeItechCT16_17201_OL070/1_hnfxmw.png',
    },
    {
        id: 27,
        title: 'Injection Pump Jadi Lebih Awet? Ini Rahasianya!',
        category: 'Spare Parts',
        content:
            'Salah satu penyebab utama efisiensi bahan bakar menurun adalah kebocoran pada sistem pompa. Dengan liner berkualitas tinggi, kebocoran dapat dicegah secara efektif',
        link: '/blog/2024/11/does-the-injection-pump-last-longer',
        date: '2024-11-29',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732087409/cp-indoteknik-v3/blog/November2024/doesTheInjectionPumpLastMore/1_amsusd.png',
    },
    {
        id: 28,
        title: 'Ganti Part Injector dengan Mudah! Pakai Repair Kit 1465A257 ITech',
        category: 'Spare Parts',
        content:
            'Ingin mengganti part injector kendaraan Anda dengan mudah dan cepat? Kini, Anda tidak perlu bingung lagi!',
        link: '/blog/2024/9/replace-injector-parts-easily',
        date: '2024-9-20',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732337237/cp-indoteknik-v3/blog/September2024/ReplaceInjectorPartsEasily/1_cr0jxz.png',
    },
    {
        id: 29,
        title: 'Optimalkan Performa Mesin Canter Anda dengan Hand Pump ITech 092130-0050!',
        category: 'Spare Parts',
        content:
            'Kinerja truk Canter Anda terganggu karena aliran bahan bakar yang tidak stabil? Kini saatnya beralih ke Priming Pump/Hand Pump ITech 092130-0050',
        link: '/blog/2024/9/optimize-the-performance-of-your-canter-machine',
        date: '2024-9-23',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732094571/cp-indoteknik-v3/blog/September2024/optimizeThePerformanceOfYourCanterMachine/1_vmx0l2.png',
    },
    {
        id: 30,
        title: 'Pakai ini! Ketahui Kondisi Nozzle Anda dengan Akurat',
        category: 'Spare Parts',
        content:
            'Apakah Anda sering merasa ragu dengan performa nozzle kendaraan atau alat berat Anda? Jangan biarkan keraguan itu menjadi masalah besar',
        link: '/blog/2024/9/use-this-know-your-nozzle-condition-acurately',
        date: '2024-9-26',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732005997/cp-indoteknik-v3/blog/September2024/useThis_FindOutTheConditionOfYourNozzleAccurately/1_xdnihi.png',
    },
    {
        id: 31,
        title: 'TENAGA JOS! Pekerjaan Selalu "OKE BOS!" untuk Komatsu PC-200',
        category: 'Spare Parts',
        content:
            'Dibuat dengan teknologi manufaktur terkini, Catridge Turbo ITech HX35 memastikan mesin diesel Anda bekerja lebih efisien tanpa boros bahan bakar',
        link: '/blog/2024/9/energy-boost-the-work-is-always-oke-bos',
        date: '2024-9-29',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732158324/cp-indoteknik-v3/blog/September2024/energyBoostTheWorkIsAlwaysOKE%20BOS_ForTheKomatsuPC_200/1_hbj6ws.png',
    },
    {
        id: 32,
        title: 'Ini Dia!!! Solusi Ampuh untuk Canter Anda: Plunger Supply Pump Euro 4 FE 7.8',
        category: 'Spare Parts',
        content:
            'Apakah Anda pemilik Canter Euro 4 FE 7.8? Jika iya, Anda pasti menginginkan kendaraan yang selalu dalam kondisi prima, kuat, dan efisien',
        link: '/blog/2024/11/here-it-is-the-powerful-solution-for-your-canter',
        date: '2024-11-1',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732180744/cp-indoteknik-v3/blog/November2024/HereItIs_ThePowerfulSolutionForYourCanter/1_oqtwoc.png',
    },
    {
        id: 33,
        title: 'Injection Pump Canter PS125: Rahasia Kekuatan di Segala Medan!',
        category: 'Spare Parts',
        content:
            'Injection pump ini dirancang untuk mengoptimalkan aliran bahan bakar, meningkatkan tenaga dan torsi mesin Canter PS125',
        link: '/blog/2024/10/injection-pump-canter-ps125',
        date: '2024-10-2',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732180744/cp-indoteknik-v3/blog/November2024/HereItIs_ThePowerfulSolutionForYourCanter/1_oqtwoc.png',
    },
    {
        id: 34,
        title: 'Anti Bocor-Bocor Club! Pakai Seal Gasket 801671 ITech!',
        category: 'Spare Parts',
        content:
            'Produk ITech telah melewati serangkaian uji kualitas untuk memastikan performanya. Seal gasket ini dirancang untuk menjaga tekanan dengan optimal dan mencegah kebocoran secara efektif',
        link: '/blog/2024/8/anti-leak-club-use-seal-gasket-801671-itech',
        date: '2024-8-30',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732346200/cp-indoteknik-v3/blog/August2024/anti_LeakClub_UseItech801671GasketSeal/1_ych8wn.png',
    },
    {
        id: 35,
        title: 'Kerja Aman! Proyek Tuntas! Pilih Supply Pump Kami Untuk Komatsu PC-70',
        category: 'Spare Parts',
        content:
            'Jika Anda mencari solusi terbaik untuk memastikan performa excavator Komatsu PC70-8 tetap optimal, Supply Pump Komatsu PC70-8 0445020070 dari ITech adalah jawabannya!',
        link: '/blog/2024/8/safe-work-project-completed-choose-our-supply-pump',
        date: '2024-8-28',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732508504/cp-indoteknik-v3/blog/August2024/safeWork_ProjectCompleted_ChooseOurPumpSupply/1_bvsw13.png',
    },
    {
        id: 37,
        title: 'Inilah Sparepart Wajib untuk PC200: Supply Pump Komatsu PC200-8!',
        category: 'Spare Parts',
        content:
            'Supply Pump Komatsu PC200-8 dirancang dengan teknologi canggih untuk memastikan pasokan bahan bakar yang stabil',
        link: '/blog/2024/8/here-are-the-mandatory-spareparts-for-pc200',
        date: '2024-8-26',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732527324/cp-indoteknik-v3/blog/August2024/hereAreTheMandatorySparePartsForPC200/1_e4ohie.png',
    },
    {
        id: 38,
        title: 'Pastikan Kinerja Supply Pump Anda Optimal Dengan Plunger HP 3 ITech!',
        category: 'Spare Parts',
        content:
            'Plunger ITech dirancang dengan teknologi presisi tinggi, menjamin tekanan bahan bakar yang konsisten dan stabil',
        link: '/blog/2024/8/ensure-optimal-performance-of-your-supply-pump',
        date: '2024-8-24',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732614100/cp-indoteknik-v3/blog/August2024/ensureOptimalPerformanceOfYourSupplyPump/1_shxo6n.png',
    },
    {
        id: 39,
        title: 'Komatsu PC-200: Tetap Prima Tanpa Khawatir Ngadat! Pressure Limiting Valve ITech Solusinya',
        category: 'Spare Parts',
        content:
            'Dengan harga yang kompetitif, Pressure Limiting Valve ITech menawarkan kualitas unggulan. Ini adalah investasi cerdas untuk perawatan alat berat jangka panjang',
        link: '/blog/2024/8/komatsu-pc-200-stay-prime-without-worrying-about-breakdowns',
        date: '2024-8-22',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732766236/cp-indoteknik-v3/blog/August2024/komatsuPC200_StayExcellentWithoutWorryingAboutCrashes/1_k3jaws.png',
    },
    {
        id: 40,
        title: 'Rahasia Tenaga Canter Jadi Joss? Delivery Valve Itech Solusinya!',
        category: 'Spare Parts',
        content:
            'Tahukah Anda? Micro Filter Injector Denso adalah komponen kecil dengan peran besar dalam sistem injector kendaraan diesel. Jika filter ini bermasalah, kinerja mesin bisa terganggu',
        link: '/blog/2024/8/the-secret-to-canters-Power-to-be-joss',
        date: '2024-8-20',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732851868/cp-indoteknik-v3/blog/August2024/theSecretOfCantersPowerToBeJoss/1_exvc0x.png',
    },
    {
        id: 41,
        title: 'Tahukah Anda? Pentingnya Cover T Untuk Mobil Diesel Anda',
        category: 'Spare Parts',
        content:
            'Meskipun berukuran kecil, Cover T memiliki fungsi yang sangat penting dalam menjaga performa sistem bahan bakar kendaraan diesel Anda',
        link: '/blog/2024/8/did-you-know-the-importance-of-t-cover',
        date: '2024-8-18',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732934877/cp-indoteknik-v3/blog/August2024/didYouKnow_TheImportanceOfTCoverForYourDieselCar/1_adlswr.png',
    },
    {
        id: 42,
        title: 'Jangan Sepelekan Si kecil Ini! Micro Filter Injector Denso',
        category: 'Spare Parts',
        content:
            'Tahukah Anda? Micro Filter Injector Denso adalah komponen kecil dengan peran besar dalam sistem injector kendaraan diesel. Jika filter ini bermasalah, kinerja mesin bisa terganggu. Solusinya? Anda bisa mendapatkannya di Indo Teknik',
        link: '/blog/2024/8/dont-underestimate-this-little-one',
        date: '2024-8-16',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1732956999/cp-indoteknik-v3/blog/August2024/dontUnderestimateThisLittleOne/1_qljqv1.png',
    },
    {
        id: 43,
        title: 'Penggemar Mesin Diesel Wajib Tahu! Nozzle Pensil Assy Ini Jadikan Mesin Lebih Perkasa!',
        category: 'Spare Parts',
        content:
            'Dengan kontrol pembakaran yang lebih baik, mesin Anda bekerja lebih optimal. Pembakaran yang sempurna memberikan tenaga yang konsisten, bahkan dalam kondisi berat sekalipun',
        link: '/blog/2024/12/diesel-engine-fans-must-know-this-pencil-nozzle-assy',
        date: '2024-12-1',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733115188/cp-indoteknik-v3/blog/September2024/dieselManiacsMustKnow_ThisPencilNozzleAssy/1_ush70v.png',
    },
    {
        id: 44,
        title: 'Solusi Tepat untuk Masalah Solenoid Injektor Innova Anda: Pilih Solenoid ITech!',
        category: 'Spare Parts',
        content:
            'Solenoid Kepala Injektor Kode 22 ITech dibuat dari bahan berkualitas tinggi yang dirancang untuk bertahan dalam kondisi suhu panas dan tekanan tinggi',
        link: '/blog/2024/12/the-right-solution-for-your-innova-injector-solenoid-problems',
        date: '2024-8-14',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733132229/cp-indoteknik-v3/blog/August2024/problemWithInnovaInjectorSolenoid/1_vlzqwy.png',
    },
    {
        id: 45,
        title: 'Mau Mesin Diesel Anda Makin Bertenaga! Ini Dia Kuncinya! Rotor Head 7189-039 Itech',
        category: 'Spare Parts',
        content:
            'Jika kamu mencari cara untuk meningkatkan performa mesin diesel, menjaga efisiensi bahan bakar, dan mengurangi risiko kerusakan, Rotor Head 7189-039L ITech adalah jawabannya!',
        link: '/blog/2024/12/want-your-diesel-engine-to-get-more-powerful',
        date: '2024-12-3',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733198815/cp-indoteknik-v3/blog/December2024/1_g0za0d.png',
    },
    {
        id: 46,
        title: 'Retaining Nut ITech: Kunci Performa Maksimal Injector Triton',
        category: 'Spare Parts',
        content:
            'Injector adalah elemen penting dalam sistem bahan bakar kendaraan diesel, terutama pada Triton. Untuk menjaga agar kinerjanya tetap optimal, setiap komponen pendukung injector harus memiliki kualitas terbaik',
        link: '/blog/2024/8/itech-retaining-nut-the-key',
        date: '2024-8-12',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733218756/cp-indoteknik-v3/blog/August2024/importantComponentsInAnInjector/1_vllb0p.png',
    },
    {
        id: 47,
        title: 'Upgrade Mesin Nissan FE6A? Delivery Valve 131110-6820 (A49) ITech untuk Performa Maksimal',
        category: 'Spare Parts',
        content:
            'Mesin diesel Anda kurang bertenaga? Jangan khawatir! Saatnya menggunakan Delivery Valve 131110-6820 (A49) ITech. Komponen kecil ini bisa membuat mesin Nissan FE6A Anda bekerja lebih maksimal',
        link: '/blog/2024/12/nissan-fe6a-engine-upgrade-delivery-valve-131110-6820-a49-itech',
        date: '2024-12-5',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733294737/cp-indoteknik-v3/blog/December2024/nissanFE6ADieselEngineUpgrade/1_kzpasm.png',
    },
    {
        id: 48,
        title: 'Nozzle Jos! Efisiensi Maksimal untuk Toyota Dyna 130HT',
        category: 'Spare Parts',
        content:
            'Bagi Anda pengguna setia Toyota Dyna 130HT, kini saatnya meningkatkan kinerja kendaraan Anda dengan NOZZLE 093400-3460 DLLA150SND346 ITech. Produk ini dirancang khusus untuk memberikan efisiensi bahan bakar dan performa mesin yang optimal',
        link: '/blog/2024/8/nozzle-jos-maximum-efficiency-for-toyota-dyna-130ht',
        date: '2024-8-10',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733368454/cp-indoteknik-v3/blog/December2024/nozzleJos_maximumEffeciencyForToyotaDyna130HT/1_x2ynpw.png',
    },
    {
        id: 49,
        title: 'Turbo Charger RHV4 1515A170 ITech: Bikin Pajero Dakar Makin Ngebut dan Tangguh!',
        category: 'Spare Parts',
        content:
            'Dengan desain yang sederhana, Anda tidak perlu khawatir soal perawatan. Komponen turbo ini dirancang agar mudah diakses, sehingga perawatan menjadi lebih ekonomis dan efisien.',
        link: '/blog/2024/12/turbo-charger-rhv4-1515A170-itech',
        date: '2024-12-7',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733468886/cp-indoteknik-v3/blog/December2024/turboChargerRHV41515A170Itech/1_opempv.png',
    },
    {
        id: 50,
        title: 'Injektor Ini Bikin Ford Ranger Anda Ngebut Abis!',
        category: 'Spare Parts',
        content:
            'Injector ini dirancang dengan komponen yang lebih sederhana, sehingga perawatannya menjadi lebih mudah dan ekonomis',
        link: '/blog/2024/12/this-injector-makes-your-ford-ranger-lightning-fast',
        date: '2024-12-9',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733711635/cp-indoteknik-v3/blog/December2024/thisInjectorMakesYourFordRangerLightningFast/1_ljawzz.png',
    },
    {
        id: 51,
        title: 'Rahasia Mesin Diesel Tetap Bertenaga! Pilih SCV Pajero Dakar dari Indo Teknik!',
        category: 'Spare Parts',
        content:
            'Saatnya upgrade Suction Control Valve (SCV) Pajero Anda dengan produk berkualitas tinggi dari INDO TEKNIK!',
        link: '/blog/2024/12/the-secret-to-diesel-engines-staying-powerful',
        date: '2024-12-11',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733804637/cp-indoteknik-v3/blog/December2024/theSecrettoDieselEnginesStayingPowerful/1_vmrhqh.png',
    },
    {
        id: 52,
        title: 'Kerja Makin Happy! Tenaga Fuso Anda Semakin Optimal dengan Sparepart Ini',
        category: 'Spare Parts',
        content:
            'Jangan biarkan performa kendaraan Anda menurun karena sparepart yang tidak sesuai. SUPPLY PUMP 294050-0460/294050-0461 ITECH adalah pilihan tepat untuk Fuso Fighter Anda',
        link: '/blog/2024/8/working-made-happier-boost-your-fusos-power',
        date: '2024-8-8',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1733991526/cp-indoteknik-v3/blog/August2024/workingMadeHappierBoostYourFusosPower/1_vnwe6f.png',
    },
    {
        id: 53,
        title: 'Rahasia Mesin Diesel Lebih Awet dan Optimal: Valve G4 Hilux 2GD Itech',
        category: 'Spare Parts',
        content:
            'Apakah Anda ingin mesin diesel Anda lebih awet, efisien, dan bebas dari masalah? Jika iya, jawabannya ada pada VALVE G4 HILUX 2GD ITECH',
        link: '/blog/2024/12/the-secret-to-longer-lasting-and-optimal-diesel-engines',
        date: '2024-12-14',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734084284/cp-indoteknik-v3/blog/December2024/theSecretToLongerLastingAndOptimalDieselEngines/1_blauhb.png',
    }
    ,
    {
        id: 54,
        title: 'Tingkatkan Performa CAT 320D Anda: Dapatkan Tenaga Maksimal dengan Injector Hebat Ini!',
        category: 'Spare Parts',
        content:
            'Mesin yang handal adalah investasi jangka panjang. Dengan menggunakan Injector CAT 320D, performa mesin diesel Anda tetap terjaga dalam kondisi optimal',
        link: '/blog/2024/12/unleash-maximum-power-boost-your-cat-320d-performance',
        date: '2024-12-17',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734338271/cp-indoteknik-v3/blog/December2024/unleashMaximumPower_BoostYourCAT320DPerformance/1_d7fwfe.png',
    }
    ,
    {
        id: 55,
        title: 'Tenaga Hino Harus Lebih Kuat dengan Sparepart Ini!',
        category: 'Spare Parts',
        content:
            'Untuk menjaga performa kendaraan niaga Anda tetap maksimal, Hino J08E Truck 500 Euro 4 hadir dengan solusi terbaik',
        link: '/blog/2024/8/make-your-hino-stronger-with-this-spare-part',
        date: '2024-08-06',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734581975/cp-indoteknik-v3/blog/August2024/makeYourHinoStrongerWithThisSparePart/1_wjl1ak.png',
    },
    {
        id: 56,
        title: 'Maksimalkan Performa Alat Berat Anda dengan Injection Pump CAT 320D!',
        category: 'Spare Parts',
        content:
            'Injection Pump CAT 320D dibuat dengan material unggulan yang dirancang untuk menghadapi kondisi kerja paling ekstrem',
        link: '/blog/2024/12/maximize-your-heavy-equipment-performance',
        date: '2024-12-21',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734686279/cp-indoteknik-v3/blog/December2024/MaximizeYourHeavyEquipmentPerformance/1_mn5sfe.png',
    },
    {
        id: 57,
        title: 'Solenoid Handal Kinerja Optimal! Selenoid Injektor Kobelco SK200',
        category: 'Spare Parts',
        content:
            'Apakah Anda sedang mencari solenoid injektor berkualitas tinggi untuk mesin Kobelco SK200 Anda? Kami punya solusi terbaik untuk Anda!',
        link: '/blog/2024/12/reliable-solenoid-for-optimal-performance',
        date: '2024-12-24',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1734947383/cp-indoteknik-v3/blog/December2024/reliableSolenoidForOptimalPerformance/1_czsui4.png',
    },
    {
        id: 58,
        title: 'Bebas dari Masalah Mesin Diesel dengan Injector Ini!',
        category: 'Spare Parts',
        content:
            'Injector ini dibuat dengan material premium yang menjamin ketahanan dan keandalan terbaik',
        link: '/blog/2024/8/free-yourself-from-diesel-engine-problems',
        date: '2024-08-04',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735194295/cp-indoteknik-v3/blog/August2024/freeYourselfFromDieselEngineProblemsWithThisInjector/1_ft89gi.png',
    },
    {
        id: 59,
        title: 'Buka Valve Lebih Cepat dan Aman dengan Tool Injector Ford 2.2 dari Itech!',
        category: 'Spare Parts',
        content:
            'Tool Injector ini terbuat dari bahan premium yang dirancang untuk bertahan di kondisi kerja berat',
        link: '/blog/2024/12/open-valves-faster-and-safer',
        date: '2024-12-28',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735293540/cp-indoteknik-v3/blog/December2024/openValvesFasterAndSaferwithOurProfessionalTool/1_gxkin1.png',
    },
    {
        id: 60,
        title: 'TENAGA BADAK! Upgrade Ford Everest Anda dengan Nozzle DNOPDN121 ITECH',
        category: 'Spare Parts',
        content:
            'Nozzle DNOPDN121 ITECH dibuat dari material yang tahan terhadap keausan, memberikan umur pakai yang lebih lama',
        link: '/blog/2024/8/unleash-the-beast-upgrade-your-ford-everest',
        date: '2024-8-2',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735534731/cp-indoteknik-v3/blog/August2024/unleashTheBeast_UpgradeYourFordEverest/1_fbbqhb.png',
    },
    {
        id: 61,
        title: 'Jaga Mesin Diesel Anda Tetap Prima dengan Pipa Common Rail Kobelco SK130!',
        category: 'Spare Parts',
        content:
            'Pipa Common Rail Kobelco SK130 dirancang dengan daya tahan tinggi dan desain yang efisien',
        link: '/blog/2024/12/keep-your-diesel-engine-in-top-condition',
        date: '2024-12-31',
        image: 'https://res.cloudinary.com/dcbryptkx/image/upload/w_600/v1735554411/cp-indoteknik-v3/blog/December2024/keepYourDieselEngineInTopCondition/1_urpj1p.png',
    },
];

export default blogPosts;
