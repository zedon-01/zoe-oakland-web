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
      nav_vysledky: "Výsledky",
      nav_faq: "FAQ",
      nav_kontakt: "Kontakt",
      nav_cta: "Začít spolupráci",

      hero_loc: "Brno • Osobní & Hybridní tréninky",
      hero_badge: "CERTIFIKOVANÁ TRENÉRKA • VITAL INSTITUT BRNO",
      hero_title: "DOMINUJ V SÍLE.<br><span class='text-volt'>VYNIKNI V KONDICI.</span>",
      hero_desc: "Osobní a hybridní coaching pod vedením Zoe Oakland v Brně. Pomáhám začátečníkům i pokročilým atletům budovat brutální sílu, funkční tělo a kondici bez bolesti zad a zranění.",
      hero_cta_primary: "Začít spolupráci",
      hero_cta_secondary: "Zobrazit služby",

      stat_years: "7+ LET",
      stat_years_lbl: "Praxe v silovém sportu",
      stat_cert: "VITAL INSTITUT",
      stat_cert_lbl: "Certifikace Brno",
      stat_clients: "100+",
      stat_clients_lbl: "Odehraných transformací",

      timeline_badge: "JAK PROBÍHÁ SPOLUPRÁCE",
      timeline_title: "4 KROKY K VAŠÍ FORMĚ",
      timeline_subtitle: "Od prvního kontaktu po systematický rozvoj síly a kondice. Jasný, strukturovaný a přehledný proces.",
      step1_title: "1. Nezávazná poptávka",
      step1_desc: "Vyplníte krátký formulář níže. Zjistím vaše časové možnosti a aktuální cíle.",
      step2_title: "2. Úvodní konzultace",
      step2_desc: "Probereme vaši tréninkovou historii, případná zranění, denní režim a reálné cíle.",
      step3_title: "3. Plán na míru",
      step3_desc: "Sestavím individualizovaný tréninkový a výživový systém přímo pro vás.",
      step4_title: "4. Tréninky & Progres",
      step4_desc: "Pravidelné lekce, precizní kontrola techniky cviků a měřitelné vyhodnocování progresu.",

      benefits_badge: "PROČ TRÉNOVAT SE MNOU",
      benefits_title: "CO ZÍSKÁŠ SPOLUPRÁCÍ",
      benefits_subtitle: "Získáte kompletní odborné zázemí a podporu bez planých fitness mýtů.",
      ben1_title: "Individuální přístup",
      ben1_desc: "Žádné generické šablony. Každý trénink vychází z vaší mobility a stavby těla.",
      ben2_title: "Kontrola techniky",
      ben2_desc: "Bezpečné provedení každého cviku, prevence zranění a okamžitá korekce chyb.",
      ben3_title: "Systematický progres",
      ben3_desc: "Cílené progresivní přetížení a měřitelné zvyšování silových výkonů i kondice.",
      ben4_title: "Přizpůsobení schopnostem",
      ben4_desc: "Úpravy tréninku podle aktuální únavy, regenerace a pracovního vytížení.",
      ben5_title: "Pravidelná zpětná vazba",
      ben5_desc: "Průběžná komunikace, hodnocení dat a úpravy plánu pro setrvalý posun.",
      ben6_title: "Dlouhodobá udržitelnost",
      ben6_desc: "Vytvoření pevných návyků a životního stylu, který vás bude bavit po celá léta.",

      pricing_badge: "JASNÉ PODMÍNKY BEZ SKRYTÝCH POPLATKŮ",
      pricing_title: "PŘEHLEDNÝ CENÍK SLUŽEB",
      pricing_subtitle: "Vyberte si formu spolupráce, která vám nejlépe vyhovuje. Všechny ceny jsou konečné.",
      toggle_standard: "Standardní ceník",
      toggle_student: "Student (-20% Sleva)",
      btn_order: "Objednat spolupráci",
      gym_notice: "Vstup do fitness centra je hrazen zvlášť na recepci gymu dle vašeho členství.",

      results_badge: "REÁLNÉ PROMĚNY & VÝSLEDKY",
      results_title: "VÝSLEDKY KLIENTŮ",
      results_subtitle: "Konkrétní data a zhodnocení klientů, kteří se rozhodli pro systematický trénink.",

      faq_badge: "ČASTÉ DOTAZY",
      faq_title: "VŠECHNO, CO VÁS ZAJÍMÁ",
      faq_subtitle: "Odpovědi na nejčastější otázky ohledně tréninků, spolupráce i začátků.",

      form_badge: "NEZÁVAZNÝ PRVNÍ KROK",
      form_title: "ZAČNĚTE SVOU SPOLUPRÁCI",
      form_subtitle: "Vyplňte krátký formulář. Ozvu se vám zpět na telefon nebo e-mail do 24 hodin v pracovní dny (Po–Pá: 8:00–16:00).",
      lbl_name: "Jméno a příjmení *",
      lbl_email: "Váš E-mail *",
      lbl_phone: "Telefonní číslo *",
      lbl_service: "Vyberte službu *",
      lbl_time: "Preferovaný den a čas tréninku",
      lbl_goals: "Vaše cíle a poznámka",
      form_submit: "Odeslat nezávaznou poptávku",
      gdpr_consent_text: "Souhlasím se zpracováním osobních údajů pro účely vyřízení této poptávky."
    },
    en: {
      nav_spoluprace: "How It Works",
      nav_benefity: "Benefits",
      nav_sluzby: "Pricing",
      nav_vysledky: "Results",
      nav_faq: "FAQ",
      nav_kontakt: "Contact",
      nav_cta: "Start Coaching",

      hero_loc: "Brno • Personal & Hybrid Training",
      hero_badge: "CERTIFIED COACH • VITAL INSTITUT BRNO",
      hero_title: "DOMINATE IN STRENGTH.<br><span class='text-volt'>EXCEL IN ENDURANCE.</span>",
      hero_desc: "Personal and hybrid coaching by Zoe Oakland in Brno. Helping beginners and competitive athletes build raw strength, functional resilience, and stamina without back pain or injuries.",
      hero_cta_primary: "Start Coaching",
      hero_cta_secondary: "View Services",

      stat_years: "7+ YEARS",
      stat_years_lbl: "Strength Coaching Practice",
      stat_cert: "VITAL INSTITUT",
      stat_cert_lbl: "Certified Brno Coach",
      stat_clients: "100+",
      stat_clients_lbl: "Completed Transformations",

      timeline_badge: "HOW WE WORK TOGETHER",
      timeline_title: "4 STEPS TO YOUR PEAK FORM",
      timeline_subtitle: "From initial contact to structured strength and fitness development. Clear and straightforward.",
      step1_title: "1. Initial Inquiry",
      step1_desc: "Fill out the quick form below with your current schedule and primary goals.",
      step2_title: "2. Consultation",
      step2_desc: "We discuss your training history, past injuries, lifestyle habits, and target milestones.",
      step3_title: "3. Tailored Program",
      step3_desc: "I create an individualized strength and nutrition blueprint engineered specifically for you.",
      step4_title: "4. Training & Progress",
      step4_desc: "Regular in-person sessions, rigorous biomechanics correction, and weekly progress tracking.",

      benefits_badge: "WHY WORK WITH ME",
      benefits_title: "WHAT YOU GAIN",
      benefits_subtitle: "Full professional backing and mentorship without fitness myths or generic nonsense.",
      ben1_title: "Tailored Approach",
      ben1_desc: "No copy-paste templates. Every movement is adjusted to your mobility and body structure.",
      ben2_title: "Technique Mastery",
      ben2_desc: "Safe biomechanical execution, injury prevention, and real-time form correction.",
      ben3_title: "Systematic Progress",
      ben3_desc: "Engineered progressive overload and measurable strength and conditioning PRs.",
      ben4_title: "Capacity Matching",
      ben4_desc: "Real-time adjustments reflecting your recovery status and workload.",
      ben5_title: "Regular Feedback",
      ben5_desc: "Continuous communication, metric reviews, and strategic plan refinements.",
      ben6_title: "Long-term Longevity",
      ben6_desc: "Sustainable lifestyle habits and strength fundamentals built to last for decades.",

      pricing_badge: "TRANSPARENT TERMS & ZERO HIDDEN FEES",
      pricing_title: "PRICING & SERVICES",
      pricing_subtitle: "Choose the coaching package that fits your goals. Clear pricing with zero surprises.",
      toggle_standard: "Standard Rates",
      toggle_student: "Student (-20% Discount)",
      btn_order: "Book This Plan",
      gym_notice: "Gym entrance fee is paid separately at the gym reception according to your membership.",

      results_badge: "CLIENT SUCCESS & TRANSFORMATIONS",
      results_title: "CLIENT RESULTS",
      results_subtitle: "Real progress metrics from clients committed to structured strength training.",

      faq_badge: "COMMON QUESTIONS",
      faq_title: "FREQUENTLY ASKED QUESTIONS",
      faq_subtitle: "Clear answers to questions about sessions, requirements, and getting started.",

      form_badge: "NON-BINDING INQUIRY",
      form_title: "START YOUR COACHING",
      form_subtitle: "Complete the short form below. I will reach out by phone or email within 24 business hours (Mon–Fri: 8:00–16:00).",
      lbl_name: "Full Name *",
      lbl_email: "Email Address *",
      lbl_phone: "Phone Number *",
      lbl_service: "Selected Service *",
      lbl_time: "Preferred Training Time",
      lbl_goals: "Your Goals & Notes",
      form_submit: "Send Non-Binding Inquiry",
      gdpr_consent_text: "I consent to the processing of personal data for the purpose of handling this inquiry."
    }
  };

  let currentLang = 'cz';
  const langBtns = document.querySelectorAll('.lang-btn');

  function updateLanguage(lang) {
    currentLang = lang;
    langBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) {
        el.innerHTML = dict[key];
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
      const ajaxEndpoint = isWordPress ? zoe_ajax.ajaxurl : 'https://formsubmit.co/ajax/zedon918@gmail.com';

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
          _subject: 'Nová poptávka tréninku - Zoe Oakland'
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
