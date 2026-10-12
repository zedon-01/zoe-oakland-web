/* ==========================================================================
   ZOE OAKLAND - JAVASCRIPT LOGIC & INTERACTIONS (REDESIGN 2.0)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Blur
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
    });

    // Close menu when clicking link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          mobileToggle.setAttribute('aria-expanded', 'false');
          mobileToggle.innerHTML = '☰';
        }
      });
    });
  }

  // 3. Language Switcher Dictionary (CZ / EN)
  const translations = {
    cz: {
      nav_spoluprace: "Jak to probíhá",
      nav_benefity: "Co získáš",
      nav_sluzby: "Ceník",
      nav_about: "O mně",
      nav_vysledky: "Výsledky",
      nav_faq: "FAQ",
      nav_kontakt: "Kontakt",
      nav_cta: "Začít spolupráci",

      hero_loc_badge: 'Trénuji v <a href="https://blackfieldgym.cz/" target="_blank" rel="noopener" class="gym-link">Blackfield Gym Brno ↗</a>',
      hero_badge: 'CERTIFIKOVANÁ TRENÉRKA • VITAL INSTITUT BRNO',
      hero_title: 'DOMINUJ V SÍLE.<br><span class="text-volt">VYNIKNI V KONDICI.</span>',
      hero_desc: 'Osobní a hybridní coaching pod vedením Zoe Oakland v Blackfield Gymu v Brně. Pomáhám začátečníkům i pokročilým atletům budovat brutální sílu, funkční tělo a kondici bez bolesti zad a zranění.',
      hero_t1: 'Začátečníci i pokročilí',
      hero_t2: 'Nárůst síly & svalů',
      hero_t3: 'Zdravá záda bez bolesti',
      hero_t4: 'Hybridní atletika',
      hero_cta_primary: 'Začít spolupráci',
      hero_cta_secondary: 'Zobrazit služby',

      stat_years: '7+ LET',
      stat_years_lbl: 'Tréninková praxe & zkušenosti',
      stat_cert: 'VITAL INSTITUT',
      stat_cert_lbl: 'Certifikace trenéra',
      stat_clients: '100+',
      stat_clients_lbl: 'Úspěšných klientských proměn',

      floating_badge_title: 'Vital Institut Brno Alumni',
      floating_badge_sub: 'Silový & Hybridní trénink v <a href="https://blackfieldgym.cz/" target="_blank" rel="noopener" class="gym-badge-link">Blackfield Gym Brno ↗</a>',

      timeline_badge: 'JAK PROBÍHÁ SPOLUPRÁCE',
      timeline_title: '4 KROKY K VAŠÍ FORMĚ',
      timeline_subtitle: 'Od prvního kontaktu po systematický rozvoj síly a kondice v Blackfield Gymu. Jasný, strukturovaný a přehledný proces.',
      step1_title: '1. Nezávazná poptávka',
      step1_desc: 'Vyplníte krátký formulář níže. Zjistím vaše časové možnosti a aktuální cíle.',
      step2_title: '2. Úvodní konzultace',
      step2_desc: 'V Blackfield Gymu probereme vaši tréninkovou historii, případná zranění, denní režim a reálné cíle.',
      step3_title: '3. Plán na míru',
      step3_desc: 'Sestavím individualizovaný tréninkový a výživový systém přímo pro vás.',
      step4_title: '4. Tréninky & Progres',
      step4_desc: 'Pravidelné lekce v gymu, precizní kontrola techniky cviků a měřitelné vyhodnocování progresu.',

      benefits_badge: 'PROČ TRÉNOVAT SE MNOU',
      benefits_title: 'CO ZÍSKÁŠ SPOLUPRÁCÍ',
      benefits_subtitle: 'Získáte kompletní odborné zázemí a podporu bez planých fitness mýtů.',
      ben1_title: 'Individuální přístup',
      ben1_desc: 'Žádné generické šablony. Každý trénink vychází z vaší mobility a stavby těla.',
      ben2_title: 'Kontrola techniky',
      ben2_desc: 'Bezpečné provedení každého cviku, prevence zranění a okamžitá korekce chyb.',
      ben3_title: 'Systematický progres',
      ben3_desc: 'Cílené progresivní přetížení a měřitelné zvyšování silových výkonů i kondice.',
      ben4_title: 'Přizpůsobení schopnostem',
      ben4_desc: 'Úpravy tréninku podle aktuální únavy, regenerace a pracovního vytížení.',
      ben5_title: 'Pravidelná zpětná vazba',
      ben5_desc: 'Průběžná komunikace, hodnocení dat a úpravy plánu pro setrvalý posun.',
      ben6_title: 'Dlouhodobá udržitelnost',
      ben6_desc: 'Vytvoření pevných návyků a životního stylu, který vás bude bavit po celá léta.',

      pricing_badge: 'JASNÉ PODMÍNKY BEZ SKRYTÝCH POPLATKŮ',
      pricing_title: 'PŘEHLEDNÝ CENÍK SLUŽEB',
      pricing_subtitle: 'Vyberte si formu spolupráce, která vám nejlépe vyhovuje. Všechny ceny jsou konečné.',
      toggle_standard: 'Standardní ceník',
      toggle_student: 'Student (-20% Sleva)',
      tag_discount: '-20% SLEVA',
      btn_order: 'Objednat spolupráci',
      gym_notice: 'Vstup do fitness centra je hrazen zvlášť na recepci gymu dle vašeho členství.',

      plan1_badge: 'Nejoblíbenější',
      plan1_title: 'Osobní Trénink 1-on-1',
      plan1_duration: '60 minut • Blackfield Gym Brno',
      plan1_desc: 'Intenzivní osobní vedení v gymu. Maximální důraz na techniku, biomechaniku a bezpečný rozvoj síly.',
      plan1_period: '/ lekce',
      plan1_notice: 'Osobní tréninky probíhají v <a href="https://blackfieldgym.cz/" target="_blank" rel="noopener" class="gym-link"><strong>Blackfield Gym</strong></a>. Vstup do fitness centra se hradí na recepci dle vašeho tarifu.',
      plan1_f1: '60 minut plné individuální péče',
      plan1_f2: 'Vstupní diagnostika pohybového aparátu',
      plan1_f3: 'Náprava svalových dysbalancí',
      plan1_f4: 'Vedení podrobného tréninkového deníku',

      plan2_title: 'Online Coaching',
      plan2_duration: 'Měsíční cyklus • Vedení na dálku',
      plan2_desc: 'Kompletní online vedení pro samostatně trénující sportovce po celé ČR. Týdenní check-iny a videokontroly.',
      plan2_period: '/ měsíc',
      plan2_notice: 'Trénujete ve své vlastní posilovně dle vašeho výběru.',
      plan2_f1: 'Tréninkový plán v mobilní aplikaci',
      plan2_f2: 'Týdenní videokontroly techniky provedení',
      plan2_f3: 'Úprava makroživin & stravovacích návyků',
      plan2_f4: 'Průběžná konzultace na WhatsAppu',

      plan3_title: 'Plán na Míru',
      plan3_duration: '8–12 týdnů • Jednorázová příprava',
      plan3_desc: 'Strukturovaný tréninkový a výživový manuál sestavený přesně podle vašich časových možností a cílů.',
      plan3_period: '/ plán',
      plan3_notice: 'Vhodné pro cvičení ve fitness centru i v domácích podmínkách.',
      plan3_f1: 'Komplexní rozbor dosavadního tréninku',
      plan3_f2: 'Tréninková periodizace na 8–12 týdnů',
      plan3_f3: 'Výpočet optimálních maker & nutriční manuál',
      plan3_f4: '1x Vstupní online/osobní konzultace (45 min)',

      about_badge: 'KDO STOJÍ ZA TVÝM ÚSPĚCHEM • VITAL INSTITUT BRNO',
      about_title: 'ZOE OAKLAND',
      about_desc: 'Věřím, že silový a hybridní trénink není jen o zvedání váhy v posilovně, ale o vybudování odolného těla a silné mysli pro každodenní život. S více než 7 lety zkušeností a oficiální certifikací z Vital Institutu v Brně vedu osobní lekce v moderním zázemí <a href="https://blackfieldgym.cz/" target="_blank" rel="noopener" class="gym-link">Blackfield Gym</a>.',
      p1_title: 'Technika',
      p1_desc: 'musíš umět cvik provést bezpečně a správně zapojit svaly',
      p2_title: 'Progresivní přetížení',
      p2_desc: 'jakmile máš techniku, začínáš systematicky přidávat zátěž/objem',
      p3_title: 'Výživa',
      p3_desc: 'progres potřebuje stavební materiál a energii na regeneraci',
      p4_title: 'Regenerace & Spánek',
      p4_desc: 'uzavírá kruh – bez adaptace a odpočinku tělo neroste a hrozí vyhoření',

      faq_badge: 'ČASTÉ DOTAZY',
      faq_title: 'VŠECHNO, CO VÁS ZAJÍMÁ',
      faq_subtitle: 'Odpovědi na nejčastější otázky ohledně tréninků, spolupráce i začátků.',
      faq1_q: 'Potřebuji předchozí zkušenosti s posilovnou?',
      faq1_a: 'Vůbec ne. Velká část mých klientů začínala od nuly. Všechny cviky, pohybové vzorce a dýchání vás naučím krok za krokem od úplných základů, abyste se v posilovně cítili sebejistě a v bezpečí.',
      faq2_q: 'Jak probíhá první trénink a kde se potkáme?',
      faq2_a: 'Potkáme se na recepci <a href="https://blackfieldgym.cz/" target="_blank" rel="noopener" class="gym-link">Blackfield Gym Brno</a>. První lekce je kombinací úvodního rozhovoru a lehké pohybové diagnostiky (mobilita, stabilita středu těla a základní pohybové vzorce).',
      faq3_q: 'Musím platit vstup do fitness centra?',
      faq3_a: 'Ano, vstup do <a href="https://blackfieldgym.cz/" target="_blank" rel="noopener" class="gym-link">Blackfield Gym</a> se hradí samostatně přímo na recepci gymu dle jejich aktuálního ceníku (jednorázový vstup, permanentka nebo členské karty).',
      faq4_q: 'Jak často doporučuješ trénovat?',
      faq4_a: 'Pro znatelný a udržitelný posun doporučuji 2 až 3 silové či hybridní tréninky týdně. Frekvenci však vždy nastavíme podle vašeho pracovního rozvrhu, rodiny a regenerační kapacity.',
      faq5_q: 'Můžu začít i jako úplný začátečník?',
      faq5_a: 'Jednoznačně ano. Začít pod dohledem trenérky je to nejlepší rozhodnutí, protože se vyhnete zlozvykům, špatné technice a zbytečným zraněním, která začátečníky často od cvičení odradí.',
      faq6_q: 'Jak funguje online coaching?',
      faq6_a: 'Dostanete ode mě tréninkový plán v mobilní aplikaci s instruktážními videi. Vy natáčíte své pracovní série, které mi posíláte ke zpětné vazbě. Jednou týdně probíhá souhrnný check-in a úprava vah a objemu.',
      faq7_q: 'Jak můžu domluvený trénink zrušit nebo přesunout?',
      faq7_a: 'Trénink lze bezplatně zrušit či přesunout nejpozději 24 hodin předem telefonicky nebo zprávou na WhatsApp. Při zrušení méně než 24 hodin předem se lekce započítává jako odučená z důvodu rezervace času.',

      form_badge: 'NEZÁVAZNÝ PRVNÍ KROK',
      form_title: 'ZAČNĚTE SVOU SPOLUPRÁCI',
      form_subtitle: 'Vyplňte krátký formulář. Ozvu se vám zpět na telefon nebo e-mail do 24 hodin v pracovní dny (Po–Pá: 8:00–16:00).',
      lbl_name: 'Jméno a příjmení *',
      lbl_email: 'Váš E-mail *',
      lbl_phone: 'Telefonní číslo *',
      lbl_service: 'Vyberte službu *',
      lbl_time: 'Preferovaný den a čas tréninku',
      lbl_goals: 'Vaše cíle a poznámka',
      opt_s1: 'Osobní Trénink 1-on-1 (Blackfield Gym Brno)',
      opt_s2: 'Online Coaching',
      opt_s3: 'Individuální Plán na Míru',
      opt_s4: 'Nezávazná Úvodní Konzultace',
      form_submit: 'Odeslat nezávaznou poptávku',
      form_response_notice: '🔒 Vaše údaje jsou v bezpečí. Odpovídám v pracovní dny od 8:00 do 16:00.',
      gdpr_consent_text: 'Souhlasím se zpracováním osobních údajů pro účely vyřízení této poptávky v souladu s pravidly ochrany osobních údajů (GDPR).',

      contact_badge: 'JSME V KONTAKTU',
      contact_title: 'KONTAKT & ODPOVĚDNÍ DOBA',
      contact_subtitle: 'Máte dotaz? Neváhejte mě kontaktovat napřímo přes telefon, e-mail nebo sociální sítě.',
      card_gym_title: 'Tréninkové zázemí',
      card_gym_sub: 'Brno-sever, moderní silová zóna',
      card_phone_title: 'Telefonní kontakt',
      card_email_title: 'E-mailový kontakt',
      card_ig_title: 'Instagram Profile',
      footer_copy: '© 2026 Zoe Oakland Fitness. Osobní tréninky v <a href="https://blackfieldgym.cz/" target="_blank" rel="noopener" class="gym-link">Blackfield Gym Brno</a>. Certifikováno Vital Institut Brno.'
    },
    en: {
      nav_spoluprace: "How It Works",
      nav_benefity: "Benefits",
      nav_sluzby: "Pricing",
      nav_about: "About Zoe",
      nav_vysledky: "Results",
      nav_faq: "FAQ",
      nav_kontakt: "Contact",
      nav_cta: "Start Coaching",

      hero_loc_badge: 'Coaching at <a href="https://blackfieldgym.cz/" target="_blank" rel="noopener" class="gym-link">Blackfield Gym Brno ↗</a>',
      hero_badge: 'CERTIFIED COACH • VITAL INSTITUT BRNO',
      hero_title: 'DOMINATE IN STRENGTH.<br><span class="text-volt">EXCEL IN ENDURANCE.</span>',
      hero_desc: 'Personal and hybrid coaching by Zoe Oakland at Blackfield Gym in Brno. Helping beginners and dedicated athletes build raw strength, functional resilience, and stamina without back pain or injuries.',
      hero_t1: 'Beginners & Advanced',
      hero_t2: 'Strength & Muscle Hypertrophy',
      hero_t3: 'Healthy, Pain-Free Back',
      hero_t4: 'Hybrid Conditioning',
      hero_cta_primary: 'Start Coaching',
      hero_cta_secondary: 'View Services',

      stat_years: '7+ YEARS',
      stat_years_lbl: 'Strength & Hybrid Experience',
      stat_cert: 'VITAL INSTITUT',
      stat_cert_lbl: 'Certified Fitness Coach',
      stat_clients: '100+',
      stat_clients_lbl: 'Completed Transformations',

      floating_badge_title: 'Vital Institut Brno Alumni',
      floating_badge_sub: 'Strength & Hybrid Training at <a href="https://blackfieldgym.cz/" target="_blank" rel="noopener" class="gym-badge-link">Blackfield Gym Brno ↗</a>',

      timeline_badge: 'HOW WE WORK TOGETHER',
      timeline_title: '4 STEPS TO PEAK FORM',
      timeline_subtitle: 'From initial contact to structured strength and conditioning at Blackfield Gym. Clear, structured, and goal-oriented.',
      step1_title: '1. Initial Inquiry',
      step1_desc: 'Complete the short inquiry form below with your current schedule and primary fitness milestones.',
      step2_title: '2. Consultation',
      step2_desc: 'We meet at Blackfield Gym to analyze your training history, past injuries, lifestyle habits, and goals.',
      step3_title: '3. Tailored Program',
      step3_desc: 'I create an individualized strength and nutritional blueprint engineered specifically for you.',
      step4_title: '4. Training & Progress',
      step4_desc: 'Regular in-person gym sessions, rigorous technique correction, and measurable progress tracking.',

      benefits_badge: 'WHY WORK WITH ME',
      benefits_title: 'WHAT YOU GAIN',
      benefits_subtitle: 'Comprehensive professional guidance and support without misleading fitness fads.',
      ben1_title: 'Tailored Approach',
      ben1_desc: 'No generic templates. Every session is custom designed for your mobility, anatomy, and goals.',
      ben2_title: 'Technique Mastery',
      ben2_desc: 'Safe biomechanical execution, injury prevention, and real-time form correction on every lift.',
      ben3_title: 'Systematic Progress',
      ben3_desc: 'Methodical progressive overload for measurable gains in strength and athletic conditioning.',
      ben4_title: 'Capacity Matching',
      ben4_desc: 'Smart adjustments based on your current fatigue levels, recovery, and daily work stress.',
      ben5_title: 'Regular Feedback',
      ben5_desc: 'Continuous communication, metric evaluations, and strategic adjustments for nonstop progress.',
      ben6_title: 'Long-term Longevity',
      ben6_desc: 'Sustainable fitness habits and movement patterns you will enjoy and benefit from for years.',

      pricing_badge: 'TRANSPARENT TERMS & ZERO HIDDEN FEES',
      pricing_title: 'SERVICES & PRICING',
      pricing_subtitle: 'Select the coaching format that fits your journey best. All listed rates are final.',
      toggle_standard: 'Standard Rates',
      toggle_student: 'Student (-20% Off)',
      tag_discount: '-20% DISCOUNT',
      btn_order: 'Book This Plan',
      gym_notice: 'Gym admission is paid separately at reception according to your membership preference.',

      plan1_badge: 'Most Popular',
      plan1_title: '1-on-1 Personal Training',
      plan1_duration: '60 min • Blackfield Gym Brno',
      plan1_desc: 'Intensive 1-on-1 gym coaching. Maximum focus on exercise biomechanics and injury-free strength building.',
      plan1_period: '/ session',
      plan1_notice: 'Sessions take place at <a href="https://blackfieldgym.cz/" target="_blank" rel="noopener" class="gym-link"><strong>Blackfield Gym</strong></a>. Gym entry is paid at reception based on your membership.',
      plan1_f1: '60 minutes of dedicated private coaching',
      plan1_f2: 'Initial movement & mobility screening',
      plan1_f3: 'Correction of muscular imbalances',
      plan1_f4: 'Detailed tracking in personal training log',

      plan2_title: 'Online Coaching',
      plan2_duration: 'Monthly Cycle • Remote Coaching',
      plan2_desc: 'Complete remote coaching for independent athletes across the country. Weekly check-ins and video form analysis.',
      plan2_period: '/ month',
      plan2_notice: 'You train in your own preferred gym facility anywhere.',
      plan2_f1: 'Periodized training plan in mobile app',
      plan2_f2: 'Weekly video analysis of exercise form',
      plan2_f3: 'Macro targets & practical nutritional habits',
      plan2_f4: 'Ongoing chat consultations via WhatsApp',

      plan3_title: 'Custom Training Plan',
      plan3_duration: '8–12 Weeks • Tailored Blueprint',
      plan3_desc: 'Structured training and nutrition manual built specifically around your schedule, equipment, and milestones.',
      plan3_period: '/ plan',
      plan3_notice: 'Suitable for both commercial gyms and home workouts.',
      plan3_f1: 'Comprehensive audit of current routine',
      plan3_f2: 'Periodized 8–12 week workout block',
      plan3_f3: 'Caloric & macronutrient calculation manual',
      plan3_f4: '1x 45-min consultation (online or in-person)',

      about_badge: 'WHO STANDS BEHIND YOUR PROGRESS • VITAL INSTITUT BRNO',
      about_title: 'ZOE OAKLAND',
      about_desc: 'I believe strength and hybrid training is not just about lifting weights, but about building a resilient body and mind for everyday life. With over 7 years of training experience and certified by Vital Institut Brno, I coach at the modern facility of <a href="https://blackfieldgym.cz/" target="_blank" rel="noopener" class="gym-link">Blackfield Gym</a>.',
      p1_title: 'Technique',
      p1_desc: 'Master safe execution and correct muscle activation',
      p2_title: 'Progressive Overload',
      p2_desc: 'Once technique is solid, systematically increase weight and volume',
      p3_title: 'Nutrition',
      p3_desc: 'Progress needs building blocks and energy for muscular recovery',
      p4_title: 'Recovery & Sleep',
      p4_desc: 'Completes the loop – without rest and adaptation, the body cannot grow',

      faq_badge: 'FREQUENT QUESTIONS',
      faq_title: 'EVERYTHING YOU NEED TO KNOW',
      faq_subtitle: 'Straightforward answers regarding sessions, requirements, and getting started.',
      faq1_q: 'Do I need previous gym experience?',
      faq1_a: 'Not at all. Many of my clients started as complete beginners. I will guide you through every movement pattern, breathing technique, and exercise step-by-step so you feel confident and safe.',
      faq2_q: 'How does the first session work and where do we meet?',
      faq2_a: 'We meet at the reception of <a href="https://blackfieldgym.cz/" target="_blank" rel="noopener" class="gym-link">Blackfield Gym Brno</a>. The first session combines an initial consultation and a light movement screen (mobility, core bracing, and basic movement patterns).',
      faq3_q: 'Do I need to pay for gym entry?',
      faq3_a: 'Yes, entry to <a href="https://blackfieldgym.cz/" target="_blank" rel="noopener" class="gym-link">Blackfield Gym</a> is paid directly at the reception according to their pricing (single entry, multi-pass, or membership).',
      faq4_q: 'How often do you recommend training?',
      faq4_a: 'For consistent, long-term progress, I recommend 2 to 3 strength or hybrid sessions per week. We always tailor frequency to your work schedule and recovery capacity.',
      faq5_q: 'Can I start as a complete beginner?',
      faq5_a: 'Definitely yes. Starting under professional guidance is the smartest decision to prevent bad habits, poor form, and avoidable injuries that often discourage beginners.',
      faq6_q: 'How does online coaching work?',
      faq6_a: 'You receive your personalized workout schedule in a mobile app with video instructions. You film your key sets and send them for technique analysis, with weekly check-ins to calibrate weights and training volume.',
      faq7_q: 'How can I reschedule or cancel a session?',
      faq7_a: 'Sessions can be rescheduled or cancelled free of charge up to 24 hours in advance via phone or WhatsApp. Cancellations made under 24 hours are billed due to gym floor slot reservation.',

      form_badge: 'NON-BINDING INQUIRY',
      form_title: 'START YOUR COACHING',
      form_subtitle: 'Complete the short form below. I will reach out by phone or email within 24 business hours (Mon–Fri: 8:00–16:00).',
      lbl_name: 'Full Name *',
      lbl_email: 'Email Address *',
      lbl_phone: 'Phone Number *',
      lbl_service: 'Selected Service *',
      lbl_time: 'Preferred Training Time',
      lbl_goals: 'Your Goals & Notes',
      opt_s1: '1-on-1 Personal Training (Blackfield Gym Brno)',
      opt_s2: 'Online Coaching',
      opt_s3: 'Custom Training Plan',
      opt_s4: 'Non-Binding Initial Consultation',
      form_submit: 'Send Non-Binding Inquiry',
      form_response_notice: '🔒 Your data is safe. I respond on business days between 8:00 and 16:00.',
      gdpr_consent_text: 'I consent to the processing of personal data for the purpose of handling this inquiry in accordance with GDPR regulations.',

      contact_badge: 'GET IN TOUCH',
      contact_title: 'CONTACT & RESPONSE HOURS',
      contact_subtitle: 'Have questions? Feel free to reach out directly by phone, email, or social media.',
      card_gym_title: 'Training Facility',
      card_gym_sub: 'Brno-North, modern strength zone',
      card_phone_title: 'Phone Contact',
      card_email_title: 'Email Contact',
      card_ig_title: 'Instagram Profile',
      footer_copy: '© 2026 Zoe Oakland Fitness. Personal coaching at <a href="https://blackfieldgym.cz/" target="_blank" rel="noopener" class="gym-link">Blackfield Gym Brno</a>. Vital Institut Brno Certified.'
    }
  };

  let currentLang = 'cz';
  const langBtns = document.querySelectorAll('.lang-btn');

  function updateLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'cz' ? 'cs' : 'en';

    langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key]) {
        el.placeholder = dict[key];
      }
    });
  }

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      updateLanguage(btn.dataset.lang);
    });
  });

  // 4. Mathematical Student Price Switcher (-20%)
  const priceToggle = document.getElementById('priceToggle');
  const priceCards = document.querySelectorAll('.price-card');
  const toggleLabels = document.querySelectorAll('.toggle-label');

  if (priceToggle) {
    priceToggle.addEventListener('change', (e) => {
      const isStudent = e.target.checked;
      toggleLabels.forEach(lbl => {
        lbl.classList.toggle('active', lbl.dataset.target === (isStudent ? 'student' : 'standard'));
      });

      priceCards.forEach(card => {
        const stdPrice = parseInt(card.dataset.priceStd, 10);
        // Correct 20% mathematical discount: price * 0.8 rounded
        const stuPrice = Math.round(stdPrice * 0.8);
        const amountEl = card.querySelector('.price-amount');
        const origEl = card.querySelector('.original-price');

        if (isStudent) {
          amountEl.textContent = `${stuPrice} Kč`;
          origEl.textContent = `${stdPrice} Kč`;
          origEl.classList.add('visible');
        } else {
          amountEl.textContent = `${stdPrice} Kč`;
          origEl.classList.remove('visible');
        }
      });
    });
  }

  // 5. Pre-fill Form on Package Click
  document.querySelectorAll('.btn-choose-plan').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const planName = btn.dataset.plan;
      const selectEl = document.getElementById('formService');
      if (selectEl) {
        selectEl.value = planName;
      }
      const formSection = document.getElementById('kontakt-formular');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
        const nameInput = document.getElementById('formName');
        if (nameInput) {
          setTimeout(() => nameInput.focus(), 600);
        }
      }
    });
  });

  // 6. Accessible FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-question');
            const otherAns = otherItem.querySelector('.faq-answer');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            if (otherAns) otherAns.style.maxHeight = null;
          }
        });

        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
          answer.style.maxHeight = null;
        } else {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    }
  });

  // 7. Server-Side AJAX Form Submission with Security & Honeypot
  const bookingForm = document.getElementById('inquiryForm');
  const formAlert = document.getElementById('formAlert');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = bookingForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      // Reset alert
      if (formAlert) {
        formAlert.className = 'form-alert';
        formAlert.style.display = 'none';
        formAlert.textContent = '';
      }

      // Check GDPR
      const gdprCheck = document.getElementById('gdprConsent');
      if (gdprCheck && !gdprCheck.checked) {
        if (formAlert) {
          formAlert.className = 'form-alert error';
          formAlert.textContent = currentLang === 'cz' 
            ? 'Před odesláním musíte souhlasit se zpracováním osobních údajů.'
            : 'You must agree to personal data processing before sending.';
          formAlert.style.display = 'block';
        }
        return;
      }

      submitBtn.innerHTML = '⏳ Odesílám...';
      submitBtn.disabled = true;

      // Prepare FormData
      const formData = new FormData(bookingForm);
      formData.append('action', 'zoe_submit_inquiry');
      if (typeof zoe_ajax !== 'undefined' && zoe_ajax.nonce) {
        formData.append('nonce', zoe_ajax.nonce);
      }

      const isWordPress = (typeof zoe_ajax !== 'undefined' && zoe_ajax.ajaxurl);
      const ajaxEndpoint = isWordPress ? zoe_ajax.ajaxurl : 'https://formsubmit.co/ajax/zoe.catherine.oaklandova@gmail.com';

      const fetchOptions = isWordPress ? {
        method: 'POST',
        body: formData
      } : {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          service: formData.get('service'),
          time: formData.get('time'),
          goals: formData.get('goals'),
          _subject: 'Nová poptávka tréninku - Zoe Oakland',
          _captcha: 'false',
          _template: 'table'
        })
      };

      fetch(ajaxEndpoint, fetchOptions)
      .then(response => response.json())
      .then(data => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;

        const isSuccess = isWordPress ? data.success : (data.success === 'true' || data.success === true || data.message);

        if (formAlert) {
          formAlert.style.display = 'block';
          if (isSuccess) {
            formAlert.className = 'form-alert success';
            formAlert.textContent = (isWordPress && data.data && data.data.message) 
              ? data.data.message 
              : (currentLang === 'cz' 
                  ? 'Děkujeme! Vaše poptávka byla úspěšně odeslána. Zoe Oakland se vám brzy ozve.' 
                  : 'Thank you! Your inquiry was submitted. Zoe Oakland will contact you shortly.');
            bookingForm.reset();
          } else {
            formAlert.className = 'form-alert error';
            formAlert.textContent = (data.message || (currentLang === 'cz' ? 'Chyba při odesílání formuláře.' : 'Error sending inquiry.'));
          }
        }
      })
      .catch(error => {
        console.error('Submit error:', error);
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;

        if (formAlert) {
          formAlert.style.display = 'block';
          formAlert.className = 'form-alert error';
          formAlert.textContent = currentLang === 'cz'
            ? 'Došlo k chybě sítě. Zkuste to prosím znovu nebo napište na e-mail.'
            : 'A network error occurred. Please try again or write via email.';
        }
      });
    });
  }
});
