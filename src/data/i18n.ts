export type Locale = 'tr' | 'en' | 'ru';

const tr = {
  meta: { title: 'sryya.dev — Dijital Ürünler ve Web Çözümleri', description: 'İşletmeler için hızlı, güvenilir ve sürdürülebilir web siteleri ve dijital ürünler geliştiriyoruz.' },
  nav: { services: 'Hizmetler', approach: 'Yaklaşım', projects: 'Projeler', about: 'Hakkımızda', blog: 'Blog', cta: 'Projenizi konuşalım', homeLabel: 'sryya.dev ana sayfa', menuLabel: 'Menüyü aç', navLabel: 'Ana menü', languageLabel: 'Dil seçimi' },
  hero: { eyebrow: 'Yeni projeler için müsaitiz', line1: 'İyi fikirleri,', accent: 'çalışan ürünlere', line3: 'dönüştürüyoruz.', intro: 'İşletmelerin dijital dünyada daha hızlı ve sağlam ilerlemesi için web siteleri, özel uygulamalar ve yalın teknoloji çözümleri geliştiriyoruz.', cta: 'Projenizi anlatın', work: 'Çalışmalarımızı inceleyin', aria: 'Sryya dijital ürün geliştirme özeti', from: 'Fikirden', launch: 'yayına.', disciplines: 'strateji · tasarım · kod', performance: 'performans', live: 'Yayında', seamless: 'kesintisiz deneyim', proof: ['Hız odaklı', 'Şeffaf iletişim', 'Ölçeklenebilir yapı', 'Yayın sonrası destek'] },
  services: { index: '01 / HİZMETLER', title1: 'Fikirden çalışan ürüne,', title2: 'uçtan uca geliştirme.', intro: 'Bagla.app, OnlyMLM ve ClaryFlow gibi ürünlerde edindiğimiz deneyimle dijital platformları tasarlıyor, geliştiriyor ve büyütüyoruz.', items: [
    { no: '01', title: 'SaaS & Platform Geliştirme', text: 'Üyelik, abonelik, analitik ve ölçeklenebilir altyapı gerektiren web tabanlı ürünleri uçtan uca geliştiriyoruz.' },
    { no: '02', title: 'Mobil Uygulamalar', text: 'Wellness ve günlük kullanım odaklı fikirleri, akıcı deneyime sahip iOS ve Android uygulamalarına dönüştürüyoruz.' },
    { no: '03', title: 'İş Süreçleri & Yönetim Panelleri', text: 'Ekip, kullanıcı, performans ve operasyon verilerini tek merkezden yöneten özel sistemler kuruyoruz.' },
    { no: '04', title: 'Ürün Tasarımı & Teknik Altyapı', text: 'Ürün stratejisinden arayüze, veri modelinden güvenli ve sürdürülebilir mimariye kadar tüm temeli oluşturuyoruz.' },
  ]},
  approach: { index: '02 / YAKLAŞIM', title1: 'Az karmaşa.', title2: 'Net ilerleme.', intro: 'Her aşamada ne yaptığımızı, neden yaptığımızı ve sırada ne olduğunu bilirsiniz.', steps: [
    { no: '01', title: 'Keşif', text: 'İhtiyacı, kullanıcıyı ve başarı ölçütlerini birlikte netleştiririz.' },
    { no: '02', title: 'Tasarım', text: 'Karmaşayı azaltan akışlar ve markanıza uygun bir arayüz oluştururuz.' },
    { no: '03', title: 'Geliştirme', text: 'Hızlı, güvenilir ve bakımı kolay bir teknik yapı kurarız.' },
    { no: '04', title: 'Yayın & Destek', text: 'Ürünü yayına alır, ölçer ve ihtiyaç oldukça geliştirmeye devam ederiz.' },
  ]},
  projects: { index: '03 / SEÇİLİ PROJELER', title: 'Ürettiğimiz çözümler.', intro: 'İş hedefiyle kullanıcı deneyimini aynı noktada buluşturan ürünler.', visit: 'Projeyi incele', previous: 'Önceki proje', next: 'Sonraki proje', carouselLabel: 'Seçili projeler', items: [
    { slug: 'bagla-app', name: 'Bagla.app', type: 'SaaS · İçerik araçları', description: 'İçerik üreticileri ve işletmeler için bağlantıları tek yerde toplayan, ölçen ve yöneten akıllı profil platformu.', url: 'https://bagla.app', logo: '/images/projects/bagla-logo.jpg', note: 'Bağlantılar · Analitik · Profil' },
    { slug: 'claryflow', name: 'ClaryFlow', type: 'Mobil Uygulama · Mental Wellness', description: 'Günlük yaşamda zihinsel iyi oluşu destekleyen, kişisel farkındalık ve dengeli rutinler oluşturmaya yardımcı olacak yeni nesil wellness uygulaması.', url: '', logo: '/images/projects/claryflow-logo.png', note: 'Yakında' },
    { slug: 'onlymlm', name: 'OnlyMLM', type: 'Platform · İş Yönetimi', description: 'Network marketing operasyonlarının ekip, süreç ve performans yönetimini tek merkezden yürütmesine yardımcı olan dijital platform.', url: 'https://onlymlm.com', logo: '/images/projects/onlymlm-logo.png', note: 'Ekip · Süreç · Büyüme' },
  ]},
  about: { index: '04 / HAKKIMIZDA', title1: 'Küçük ekip.', title2: 'Büyük sahiplenme.', lead: 'sryya.dev, işletmelerin gerçek ihtiyaçlarına odaklanan bağımsız bir dijital ürün stüdyosudur.', text: 'Hazır kalıpları dayatmak yerine problemi anlamayı, gereksiz yüklerden kaçınmayı ve uzun süre güvenle kullanılabilecek çözümler üretmeyi önemsiyoruz.', metrics: [['11+', 'yıllık deneyim'], ['20+', 'tamamlanan proje'], ['∞', 'merak ve gelişim']] },
  testimonials: { index: '05 / GERİ BİLDİRİMLER', title: 'Birlikte çalışmanın nasıl hissettirdiği.', intro: 'Ürün ve proje ekiplerinden aldığımız geri bildirimlerden öne çıkanlar.', label: 'Müşteri geri bildirimi', items: [
    { quote: 'İhtiyacımızı hızla anlayıp karmaşık süreci herkesin takip edebileceği net adımlara dönüştürdüler.', role: 'Kurucu', sector: 'SaaS girişimi' },
    { quote: 'Sadece yazılım geliştirmediler; ürünün neden ve kim için çalışması gerektiğini de sürekli sorguladılar.', role: 'Ürün yöneticisi', sector: 'Teknoloji' },
    { quote: 'Yayın sonrasında da aynı sahiplenmeyle yanımızda olmaları bizim için en değerli noktaydı.', role: 'Operasyon yöneticisi', sector: 'Dijital platform' },
    { quote: 'Teknik konuları sade biçimde anlattıkları için kararları daha hızlı ve güvenle alabildik.', role: 'Genel müdür', sector: 'Hizmet sektörü' },
    { quote: 'Yeni panel ekibimizin günlük operasyon yükünü belirgin biçimde azalttı.', role: 'Ekip lideri', sector: 'Network marketing' },
    { quote: 'Performans, kullanım kolaylığı ve görsel kalite arasında çok iyi bir denge kuruldu.', role: 'Pazarlama yöneticisi', sector: 'E-ticaret' },
    { quote: 'Değişen ihtiyaçlarımıza hızlı uyum sağlayan, uzun vadeli düşünen bir çözüm ortağı bulduk.', role: 'Kurucu ortak', sector: 'Dijital ürün' },
    { quote: 'Kullanıcı akışları sadeleşince destek taleplerimiz azaldı ve ürün daha anlaşılır hale geldi.', role: 'Müşteri deneyimi lideri', sector: 'SaaS' },
    { quote: 'Planlama ve iletişim baştan sona şeffaftı; her aşamada neyin neden yapıldığını biliyorduk.', role: 'Proje yöneticisi', sector: 'Kurumsal teknoloji' },
    { quote: 'Fikrimizi çalışan, hızlı ve büyümeye hazır bir ürüne dönüştüren güvenilir bir ekip.', role: 'Girişimci', sector: 'Mobil uygulama' },
  ]},
  contact: { index: '06 / İLETİŞİM', title: 'Aklınızda bir proje mi var?', text: 'Fikrinizi birkaç cümleyle anlatın. Size en uygun yaklaşımı birlikte belirleyelim.', subject: 'Yeni proje hakkında' },
  footer: { tagline: 'İşletmeler için yalın, hızlı ve sürdürülebilir dijital ürünler.', services: 'Hizmetler', projects: 'Projeler', contact: 'İletişim' },
};

const en: typeof tr = {
  meta: { title: 'sryya.dev — Digital Products & Web Solutions', description: 'We build fast, reliable and sustainable websites and digital products for businesses.' },
  nav: { services: 'Services', approach: 'Approach', projects: 'Projects', about: 'About', blog: 'Blog', cta: 'Let’s discuss your project', homeLabel: 'sryya.dev home page', menuLabel: 'Open menu', navLabel: 'Main navigation', languageLabel: 'Language selection' },
  hero: { eyebrow: 'Available for new projects', line1: 'We turn good ideas', accent: 'into working', line3: 'digital products.', intro: 'We build websites, custom applications and focused technology solutions that help businesses move faster and stronger in the digital world.', cta: 'Tell us about your project', work: 'Explore our work', aria: 'Sryya digital product development overview', from: 'From idea', launch: 'to launch.', disciplines: 'strategy · design · code', performance: 'performance', live: 'Live', seamless: 'seamless experience', proof: ['Performance first', 'Clear communication', 'Scalable architecture', 'Post-launch support'] },
  services: { index: '01 / SERVICES', title1: 'From idea to working product,', title2: 'end-to-end development.', intro: 'Drawing on our experience with products such as Bagla.app, OnlyMLM and ClaryFlow, we design, build and grow digital platforms.', items: [
    { no: '01', title: 'SaaS & Platform Development', text: 'We build complete web products with membership, subscriptions, analytics and scalable infrastructure.' },
    { no: '02', title: 'Mobile Applications', text: 'We turn wellness and everyday-use ideas into fluid, purposeful applications for iOS and Android.' },
    { no: '03', title: 'Business Systems & Dashboards', text: 'Custom systems for managing teams, users, performance and operational data from one place.' },
    { no: '04', title: 'Product Design & Architecture', text: 'We shape the foundation from product strategy and interface design to data models and secure, sustainable architecture.' },
  ]},
  approach: { index: '02 / APPROACH', title1: 'Less complexity.', title2: 'Clear progress.', intro: 'At every stage, you know what we are doing, why we are doing it and what comes next.', steps: [
    { no: '01', title: 'Discovery', text: 'Together we define the need, the users and the measures of success.' },
    { no: '02', title: 'Design', text: 'We create clear flows and an interface that feels true to your brand.' },
    { no: '03', title: 'Development', text: 'We build a fast, reliable technical foundation that is easy to maintain.' },
    { no: '04', title: 'Launch & Support', text: 'We launch, measure and continue improving the product as your needs evolve.' },
  ]},
  projects: { index: '03 / SELECTED PROJECTS', title: 'Solutions we have built.', intro: 'Products that bring business goals and user experience together.', visit: 'View case study', previous: 'Previous project', next: 'Next project', carouselLabel: 'Selected projects', items: [
    { slug: 'bagla-app', name: 'Bagla.app', type: 'SaaS · Creator tools', description: 'A smart profile platform that helps creators and businesses collect, manage and measure their links in one place.', url: 'https://bagla.app', logo: '/images/projects/bagla-logo.jpg', note: 'Links · Analytics · Profile' },
    { slug: 'claryflow', name: 'ClaryFlow', type: 'Mobile App · Mental Wellness', description: 'A next-generation wellness app designed to support mental wellbeing, personal awareness and more balanced daily routines.', url: '', logo: '/images/projects/claryflow-logo.png', note: 'Coming soon' },
    { slug: 'onlymlm', name: 'OnlyMLM', type: 'Platform · Business Management', description: 'A digital platform that helps network marketing operations manage teams, workflows and performance from one place.', url: 'https://onlymlm.com', logo: '/images/projects/onlymlm-logo.png', note: 'Teams · Operations · Growth' },
  ]},
  about: { index: '04 / ABOUT', title1: 'Small team.', title2: 'Full ownership.', lead: 'sryya.dev is an independent digital product studio focused on the real needs of businesses.', text: 'Instead of imposing ready-made patterns, we work to understand the problem, avoid unnecessary weight and build solutions you can rely on for years.', metrics: [['11+', 'years of experience'], ['20+', 'completed projects'], ['∞', 'curiosity and growth']] },
  testimonials: { index: '05 / FEEDBACK', title: 'What working together feels like.', intro: 'Highlights from the feedback shared by product and project teams.', label: 'Client feedback', items: [
    { quote: 'They understood the need quickly and turned a complex process into clear steps everyone could follow.', role: 'Founder', sector: 'SaaS startup' },
    { quote: 'They did more than build software; they kept asking why the product should work and who it should serve.', role: 'Product manager', sector: 'Technology' },
    { quote: 'Their continued ownership after launch was the most valuable part of the collaboration.', role: 'Operations manager', sector: 'Digital platform' },
    { quote: 'Technical topics were explained clearly, helping us make decisions faster and with confidence.', role: 'General manager', sector: 'Services' },
    { quote: 'The new dashboard noticeably reduced the daily operational load on our team.', role: 'Team lead', sector: 'Network marketing' },
    { quote: 'The product strikes an excellent balance between performance, ease of use and visual quality.', role: 'Marketing manager', sector: 'E-commerce' },
    { quote: 'We found a long-term product partner who adapts quickly as our needs evolve.', role: 'Co-founder', sector: 'Digital product' },
    { quote: 'Simplifying the user flows reduced support requests and made the product much easier to understand.', role: 'Customer experience lead', sector: 'SaaS' },
    { quote: 'Planning and communication were transparent from start to finish; we always understood every decision.', role: 'Project manager', sector: 'Enterprise technology' },
    { quote: 'A reliable team that turned our idea into a fast, working product ready to grow.', role: 'Entrepreneur', sector: 'Mobile application' },
  ]},
  contact: { index: '06 / CONTACT', title: 'Have a project in mind?', text: 'Tell us about your idea in a few sentences. Together, we will find the right way forward.', subject: 'About a new project' },
  footer: { tagline: 'Focused, fast and sustainable digital products for businesses.', services: 'Services', projects: 'Projects', contact: 'Contact' },
};

const ru: typeof tr = {
  meta: { title: 'sryya.dev — Цифровые продукты и веб-решения', description: 'Мы создаём быстрые, надёжные и устойчивые сайты и цифровые продукты для бизнеса.' },
  nav: { services: 'Услуги', approach: 'Подход', projects: 'Проекты', about: 'О нас', blog: 'Блог', cta: 'Обсудить проект', homeLabel: 'Главная страница sryya.dev', menuLabel: 'Открыть меню', navLabel: 'Главное меню', languageLabel: 'Выбор языка' },
  hero: { eyebrow: 'Открыты для новых проектов', line1: 'Превращаем идеи', accent: 'в работающие', line3: 'цифровые продукты.', intro: 'Создаём сайты, специализированные приложения и продуманные технологические решения, которые помогают бизнесу уверенно развиваться в цифровой среде.', cta: 'Расскажите о проекте', work: 'Посмотреть наши работы', aria: 'Обзор разработки цифровых продуктов Sryya', from: 'От идеи', launch: 'до запуска.', disciplines: 'стратегия · дизайн · код', performance: 'производительность', live: 'В сети', seamless: 'стабильная работа', proof: ['Фокус на скорости', 'Открытая коммуникация', 'Масштабируемая архитектура', 'Поддержка после запуска'] },
  services: { index: '01 / УСЛУГИ', title1: 'От идеи до готового продукта —', title2: 'полный цикл разработки.', intro: 'Опираясь на опыт создания Bagla.app, OnlyMLM и ClaryFlow, мы проектируем, разрабатываем и развиваем цифровые платформы.', items: [
    { no: '01', title: 'SaaS и разработка платформ', text: 'Создаём веб-продукты с подписками, личными кабинетами, аналитикой и масштабируемой инфраструктурой.' },
    { no: '02', title: 'Мобильные приложения', text: 'Превращаем идеи в сфере wellness и повседневных сервисов в удобные приложения для iOS и Android.' },
    { no: '03', title: 'Бизнес-системы и панели управления', text: 'Разрабатываем системы для централизованного управления командами, пользователями, эффективностью и операционными данными.' },
    { no: '04', title: 'Дизайн продукта и архитектура', text: 'Формируем основу продукта: стратегию, интерфейс, модель данных, безопасную и устойчивую архитектуру.' },
  ]},
  approach: { index: '02 / ПОДХОД', title1: 'Меньше сложности.', title2: 'Больше ясности.', intro: 'На каждом этапе вы знаете, что мы делаем, зачем и каким будет следующий шаг.', steps: [
    { no: '01', title: 'Исследование', text: 'Вместе определяем задачу, аудиторию и критерии успеха.' },
    { no: '02', title: 'Дизайн', text: 'Создаём понятные сценарии и интерфейс, соответствующий вашему бренду.' },
    { no: '03', title: 'Разработка', text: 'Строим быструю, надёжную и удобную в поддержке техническую основу.' },
    { no: '04', title: 'Запуск и поддержка', text: 'Запускаем, анализируем и развиваем продукт вместе с вашими потребностями.' },
  ]},
  projects: { index: '03 / ИЗБРАННЫЕ ПРОЕКТЫ', title: 'Решения, которые мы создали.', intro: 'Продукты, объединяющие цели бизнеса и удобство пользователей.', visit: 'Подробнее о проекте', previous: 'Предыдущий проект', next: 'Следующий проект', carouselLabel: 'Избранные проекты', items: [
    { slug: 'bagla-app', name: 'Bagla.app', type: 'SaaS · Инструменты для авторов', description: 'Умная платформа профилей для авторов и компаний: все ссылки, управление и аналитика в одном месте.', url: 'https://bagla.app', logo: '/images/projects/bagla-logo.jpg', note: 'Ссылки · Аналитика · Профиль' },
    { slug: 'claryflow', name: 'ClaryFlow', type: 'Мобильное приложение · Mental Wellness', description: 'Wellness-приложение нового поколения для поддержки ментального благополучия, осознанности и сбалансированных повседневных привычек.', url: '', logo: '/images/projects/claryflow-logo.png', note: 'Скоро' },
    { slug: 'onlymlm', name: 'OnlyMLM', type: 'Платформа · Управление бизнесом', description: 'Цифровая платформа для централизованного управления командами, процессами и эффективностью в сетевом маркетинге.', url: 'https://onlymlm.com', logo: '/images/projects/onlymlm-logo.png', note: 'Команды · Процессы · Рост' },
  ]},
  about: { index: '04 / О НАС', title1: 'Небольшая команда.', title2: 'Полная ответственность.', lead: 'sryya.dev — независимая студия цифровых продуктов, ориентированная на реальные задачи бизнеса.', text: 'Вместо готовых шаблонов мы стремимся понять задачу, исключить лишнее и создать решение, которым можно уверенно пользоваться долгие годы.', metrics: [['11+', 'лет опыта'], ['20+', 'завершённых проектов'], ['∞', 'интерес к развитию']] },
  testimonials: { index: '05 / ОТЗЫВЫ', title: 'Каково работать с нами.', intro: 'Главное из отзывов продуктовых и проектных команд.', label: 'Отзыв клиента', items: [
    { quote: 'Команда быстро поняла задачу и превратила сложный процесс в понятные шаги для всех участников.', role: 'Основатель', sector: 'SaaS-стартап' },
    { quote: 'Они не просто писали код, а постоянно задавались вопросом, зачем нужен продукт и для кого он создаётся.', role: 'Продакт-менеджер', sector: 'Технологии' },
    { quote: 'Ответственное отношение после запуска стало самой ценной частью нашего сотрудничества.', role: 'Операционный менеджер', sector: 'Цифровая платформа' },
    { quote: 'Технические темы объяснялись просто, поэтому мы принимали решения быстрее и увереннее.', role: 'Генеральный директор', sector: 'Сфера услуг' },
    { quote: 'Новая панель заметно снизила ежедневную операционную нагрузку на нашу команду.', role: 'Руководитель команды', sector: 'Сетевой маркетинг' },
    { quote: 'В продукте отлично сбалансированы скорость, удобство и визуальное качество.', role: 'Директор по маркетингу', sector: 'Электронная коммерция' },
    { quote: 'Мы нашли долгосрочного партнёра, который быстро адаптируется к меняющимся потребностям.', role: 'Сооснователь', sector: 'Цифровой продукт' },
    { quote: 'После упрощения сценариев стало меньше обращений в поддержку, а продукт стал понятнее.', role: 'Руководитель клиентского опыта', sector: 'SaaS' },
    { quote: 'Планирование и коммуникация были прозрачными — мы всегда понимали смысл каждого решения.', role: 'Руководитель проекта', sector: 'Корпоративные технологии' },
    { quote: 'Надёжная команда, превратившая нашу идею в быстрый, работающий и готовый к росту продукт.', role: 'Предприниматель', sector: 'Мобильное приложение' },
  ]},
  contact: { index: '06 / КОНТАКТЫ', title: 'Есть идея проекта?', text: 'Расскажите о ней в нескольких предложениях. Вместе мы определим оптимальный путь реализации.', subject: 'О новом проекте' },
  footer: { tagline: 'Лаконичные, быстрые и устойчивые цифровые продукты для бизнеса.', services: 'Услуги', projects: 'Проекты', contact: 'Контакты' },
};

export const translations = { tr, en, ru };
export type SiteCopy = typeof tr;
