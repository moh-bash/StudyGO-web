const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('.site-header');
const progressBar = document.querySelector('.scroll-progress i');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const prefersTouch = window.matchMedia('(pointer: coarse)').matches;
const gogoStates = {
  happy: { image: 'Happy.png', title: { en: 'You’re on a roll!', ar: 'أنت في أفضل حالاتك!' }, copy: { en: 'You stayed consistent and kept moving forward. That makes me happy!', ar: 'حافظت على استمراريتك وتقدمت خطوة بعد أخرى. هذا يسعدني!' }, label: { en: 'Happy', ar: 'سعيد' } },
  sad: { image: 'Sad.png', title: { en: 'Rough day?', ar: 'يوم صعب؟' }, copy: { en: 'It’s okay. Not every study session goes perfectly. Tomorrow is another chance.', ar: 'لا بأس. لا تسير كل جلسة مذاكرة كما نريد. غدًا فرصة جديدة.' }, label: { en: 'Sad', ar: 'حزين' } },
  angry: { image: 'Angry.png', title: { en: 'Okay... that deadline was NOT fair.', ar: 'حسنًا... ذلك الموعد لم يكن عادلًا!' }, copy: { en: 'Take a breath. Let’s figure it out and keep going.', ar: 'خذ نفسًا عميقًا. سنرتب الأمور ونواصل التقدم.' }, label: { en: 'Angry', ar: 'غاضب' } },
  tired: { image: 'Tired.png', title: { en: 'Even GoGo needs a break.', ar: 'حتى GoGo يحتاج إلى استراحة.' }, copy: { en: 'You’ve been working hard. A short break can help you come back stronger.', ar: 'لقد بذلت جهدًا كبيرًا. استراحة قصيرة ستساعدك على العودة بطاقة أكبر.' }, label: { en: 'Tired', ar: 'متعب' } },
  worried: { image: 'Worried.png', title: { en: 'We’ve got this.', ar: 'لا تقلق، سنجتازها معًا.' }, copy: { en: 'That exam might feel scary, but one step at a time.', ar: 'قد يبدو الامتحان مخيفًا، لكننا سنتقدم خطوة واحدة كل مرة.' }, label: { en: 'Worried', ar: 'قلق' } },
  grumpy: { image: 'GGrumpy.png', title: { en: 'Who moved my deadline?!', ar: 'من حرّك موعد التسليم؟!' }, copy: { en: 'Some days are frustrating. Let’s get things organized.', ar: 'بعض الأيام مرهقة فعلًا. دعنا نرتب كل شيء.' }, label: { en: 'Grumpy', ar: 'متذمر' } },
  friendly: { image: 'Neutral.png', title: { en: 'Hey, study buddy!', ar: 'مرحبًا يا رفيق الدراسة!' }, copy: { en: 'Whatever you’re working on, I’m here with you.', ar: 'أيًا كان ما تعمل عليه، أنا هنا إلى جانبك.' }, label: { en: 'Friendly', ar: 'ودود' } },
  idea: { image: 'Idea.png', title: { en: 'Wait... I have an idea!', ar: 'لحظة... خطرت لي فكرة!' }, copy: { en: 'Sometimes the best ideas show up when you least expect them.', ar: 'أحيانًا تظهر أفضل الأفكار حين لا نتوقعها.' }, label: { en: 'Idea', ar: 'فكرة' } },
  shy: { image: 'آNeutral.png', title: { en: 'Umm... you’ve got this.', ar: 'همم... أنت قادر على ذلك.' }, copy: { en: 'I might be a little shy, but I’m always cheering for you.', ar: 'قد أكون خجولًا قليلًا، لكنني دائمًا أشجعك.', }, label: { en: 'Shy', ar: 'خجول' } }
};

const translations = {
  en: {
    navFeatures:'Features', navProductivity:'Productivity', navTools:'Tools', navDownload:'Download', getStudyGo:'Get StudyGo',
    eyebrow:'Your academic sidekick', heroTitle:'University life,<br><em>sorted.</em>', heroLead:'Courses, grades, projects, deadlines and the little things that matter — all in one calm, clever place.', download:'Download StudyGo', seeHow:'See how it works', madeFor:'Made for real student life', lessRemembering:'Less remembering. More doing.',
    date:'Monday, 14 October', goodMorning:'Good morning, Alex', streak:'3 day streak', keepMomentum:'Keep your momentum going', semesterGpa:'Semester GPA', courseProgress:'Course progress', comingUp:'Coming up', viewAll:'View all', dueTomorrow:'Due tomorrow · CS 302', studyData:'Study · Data structures', today:'Today, 6:00 PM', home:'Home', calendar:'Calendar', tasks:'Tasks', profile:'Profile', thisSemester:'this semester', focusSession:'focus session',
    onePlace:'ONE PLACE. LESS CHAOS.', introTitle:'Everything university.<br><span>One simple rhythm.</span>', introLead:'StudyGo turns a busy semester into a clear next step. See what is happening, what needs doing, and where you are heading — without digging through five different apps.', semesterView:'See the whole semester at a glance', coursesFiles:'Keep every course and file together', progressVisible:'Make progress feel visible',
    knowProgress:'KNOW YOUR PROGRESS', gradesTitle:'Grades that tell<br><span>the whole story.</span>', gradesLead:'Save results as you go and let StudyGo calculate your semester and cumulative GPA. No spreadsheets. No guessing. Just a clearer picture of how you are doing.', trackProgress:'Track your progress', academicOverview:'Academic overview', semester:'2025 / 26', currentGpa:'Current GPA', excellent:'Excellent work, Alex', semesterProgress:'Semester progress', webDevelopment:'Web development', discreteMath:'Discrete mathematics', entrepreneurship:'Entrepreneurship',
    seeNext:'SEE WHAT’S NEXT', calendarTitle:'A calendar that<br><span>gets student life.</span>', calendarLead:'Exams, lectures, projects, holidays and the surprise things your semester throws at you. Put it all in one view and stop relying on memory.', projects:'Projects', exams:'Exams', lectures:'Lectures', events:'Events', october:'October 2025', myCalendar:'My calendar', webProposal:'Web project proposal', dataLecture:'Data structures lecture', midterm:'Midterm exam', dueTomorrowShort:'Due tomorrow · 09:00',
    tooMuch:'FROM “TOO MUCH” TO “I’VE GOT THIS”', focusTitle:'Make time for<br><span>the good stuff.</span>', focusLead:'Small steps add up. StudyGo helps you turn a noisy to-do list into a day you can actually finish.', todaysFocus:'Today’s focus', oneTask:'One task at a time. You’re doing great.', done:'done', reviewNotes:'Review lecture notes', finishProposal:'Finish project proposal', prepareQuestions:'Prepare questions for seminar', focusTimer:'FOCUS TIMER', deepFocus:'deep focus', nextBreak:'Your next break is in 24 minutes',
    inBetween:'BUILT FOR THE IN-BETWEEN MOMENTS', toolsTitle:'Tools that make<br><span>studying lighter.</span>', toolsLead:'From a 25-minute focus sprint to a home for all your course files, StudyGo gives your brain fewer tabs to hold open.', explore:'Explore StudyGo', pomodoro:'Pomodoro', pomodoroText:'25 minutes of focus.<br>5 minutes to breathe.', startSession:'Start a session', courseFiles:'Course files', filesText:'Notes, slides and links,<br>right where you need them.', openFiles:'Open your files', findPartner:'Find a partner', partnerText:'Meet students who<br>complement your skills.', matches:'See project matches',
    together:'BETTER TOGETHER', partnersTitle:'Find your<br><span>project people.</span>', partnersLead:'Good projects are easier with the right teammates. Share what you are working on, find students with complementary skills, and build something you are proud of.', members:'3 / 4 members', project:'Web project', request:'Send a request', students:'students looking for<br>project partners this week',
    sidekick:'YOUR ACADEMIC SIDEKICK', meet:'Meet <span>GoGo.</span>', gogoIntro:'GoGo is your StudyGo companion — here to cheer you on, keep you motivated, and share every step of your academic journey.', gogoWith:'GoGo is with you', start:'Start', struggle:'Struggle', focus:'Focus', progress:'Progress', celebrate:'Celebrate',
    downloadTitle:'Ready to make<br><span>university easier?</span>', downloadLead:'Download StudyGo and bring your whole academic life into focus.', available:'Available on iOS and Android · Free to get started', exploreFooter:'Explore', getFooter:'Get StudyGo', hello:'Say hello', studyTools:'Study tools', about:'About the app',     copyright:'© 2025 StudyGo. Made for students.', backTop:'Back to top ↑', github:'GitHub ↗', storeApp:'Download on the', storeGoogle:'GET IT ON'
  },
  ar: {
    navFeatures:'المزايا', navProductivity:'الإنتاجية', navTools:'أدوات الدراسة', navDownload:'تحميل', getStudyGo:'احصل على StudyGo',
    eyebrow:'رفيقك الأكاديمي', heroTitle:'حياتك الجامعية،<br><em>مرتبة.</em>', heroLead:'المقررات والدرجات والمشاريع والمواعيد وكل التفاصيل المهمة — في مكان واحد هادئ وذكي.', download:'حمّل StudyGo', seeHow:'اكتشف كيف يعمل', madeFor:'مصمم لحياتك كطالب', lessRemembering:'ذاكرة أقل. إنجاز أكثر.',
    date:'الاثنين، 14 أكتوبر', goodMorning:'صباح الخير، Alex', streak:'سلسلة 3 أيام', keepMomentum:'حافظ على حماسك', semesterGpa:'معدل الفصل', courseProgress:'تقدم المقررات', comingUp:'القادم', viewAll:'عرض الكل', dueTomorrow:'غدًا · CS 302', studyData:'مذاكرة · هياكل البيانات', today:'اليوم، 6:00 مساءً', home:'الرئيسية', calendar:'التقويم', tasks:'المهام', profile:'الملف الشخصي', thisSemester:'هذا الفصل', focusSession:'جلسة تركيز',
    onePlace:'مكان واحد. فوضى أقل.', introTitle:'كل ما يخص الجامعة.<br><span>إيقاع واحد وبسيط.</span>', introLead:'يحوّل StudyGo الفصل المزدحم إلى خطوات واضحة. اعرف ما يحدث وما عليك إنجازه وإلى أين تتجه — دون التنقل بين خمسة تطبيقات.', semesterView:'شاهد الفصل كاملًا بنظرة واحدة', coursesFiles:'اجمع مقرراتك وملفاتك معًا', progressVisible:'اجعل تقدمك واضحًا',
    knowProgress:'اعرف تقدمك', gradesTitle:'درجاتك تحكي<br><span>الصورة كاملة.</span>', gradesLead:'سجّل نتائجك ودع StudyGo يحسب معدل فصلك ومعدلك التراكمي. بلا جداول معقدة أو تخمين — فقط صورة أوضح عن أدائك.', trackProgress:'تابع تقدمك', academicOverview:'نظرة أكاديمية', semester:'2025 / 26', currentGpa:'المعدل الحالي', excellent:'عمل رائع يا Alex', semesterProgress:'تقدم الفصل', webDevelopment:'تطوير الويب', discreteMath:'الرياضيات المتقطعة', entrepreneurship:'ريادة الأعمال',
    seeNext:'اعرف خطوتك التالية', calendarTitle:'تقويم يفهم<br><span>حياة الطالب.</span>', calendarLead:'الامتحانات والمحاضرات والمشاريع والعطلات ومفاجآت الفصل. اجمعها في عرض واحد وتوقف عن الاعتماد على ذاكرتك.', projects:'المشاريع', exams:'الامتحانات', lectures:'المحاضرات', events:'الفعاليات', october:'أكتوبر 2025', myCalendar:'تقويمي', webProposal:'مقترح مشروع الويب', dataLecture:'محاضرة هياكل البيانات', midterm:'امتحان منتصف الفصل', dueTomorrowShort:'غدًا · 09:00',
    tooMuch:'من «لا أعرف من أين أبدأ» إلى «أنا مسيطر»', focusTitle:'اصنع وقتًا<br><span>للأشياء المهمة.</span>', focusLead:'الخطوات الصغيرة تصنع فرقًا. يساعدك StudyGo على تحويل قائمة مزدحمة إلى يوم يمكنك إنجازه فعلًا.', todaysFocus:'تركيز اليوم', oneTask:'مهمة واحدة في كل مرة. أنت تبلي بلاءً رائعًا.', done:'منجزة', reviewNotes:'مراجعة ملاحظات المحاضرة', finishProposal:'إنهاء مقترح المشروع', prepareQuestions:'تحضير أسئلة الحلقة الدراسية', focusTimer:'مؤقت التركيز', deepFocus:'تركيز عميق', nextBreak:'استراحتك القادمة بعد 24 دقيقة',
    inBetween:'مصمم للحظات بين المهام', toolsTitle:'أدوات تجعل<br><span>المذاكرة أسهل.</span>', toolsLead:'من جلسة تركيز 25 دقيقة إلى مكان يجمع ملفات مقرراتك، يمنحك StudyGo عقلًا أخف وتطبيقات أقل مفتوحة.', explore:'استكشف StudyGo', pomodoro:'بومودورو', pomodoroText:'25 دقيقة تركيز.<br>5 دقائق للتنفس.', startSession:'ابدأ جلسة', courseFiles:'ملفات المقررات', filesText:'ملاحظات وشرائح وروابط،<br>في متناولك دائمًا.', openFiles:'افتح ملفاتك', findPartner:'اعثر على شريك', partnerText:'تعرّف على طلاب<br>يكملون مهاراتك.', matches:'شاهد المطابقات',
    together:'معًا أفضل', partnersTitle:'اعثر على<br><span>رفاق مشروعك.</span>', partnersLead:'تصبح المشاريع أسهل مع الفريق المناسب. شارك ما تعمل عليه وابحث عن طلاب يكملون مهاراتك وابنِ شيئًا تفخر به.', members:'3 / 4 أعضاء', project:'مشروع ويب', request:'أرسل طلبًا', students:'طالب يبحثون عن<br>شركاء مشاريع هذا الأسبوع',
    sidekick:'رفيقك الأكاديمي', meet:'تعرّف إلى <span>GoGo.</span>', gogoIntro:'GoGo هو رفيقك في StudyGo — يشجعك ويحافظ على حماسك ويشاركك كل خطوة في رحلتك الأكاديمية.', gogoWith:'GoGo معك', start:'البداية', struggle:'التحدي', focus:'التركيز', progress:'التقدم', celebrate:'الاحتفال',
    downloadTitle:'مستعد لتجعل<br><span>الجامعة أسهل؟</span>', downloadLead:'حمّل StudyGo واجعل حياتك الأكاديمية كلها أوضح.', available:'متاح على iOS وAndroid · ابدأ مجانًا', exploreFooter:'استكشف', getFooter:'احصل على StudyGo', hello:'تواصل معنا', studyTools:'أدوات الدراسة', about:'عن التطبيق',     copyright:'© 2025 StudyGo. صُمم للطلاب.', backTop:'العودة للأعلى ↑', github:'GitHub ↗', storeApp:'حمّل من', storeGoogle:'احصل عليه من'
  }
};

menuButton?.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const languageToggle = document.querySelector('.language-toggle');
const languageMenu = document.querySelector('.language-menu');
const languageButtons = document.querySelectorAll('[data-language]');
const gogoImage = document.querySelector('#gogo-image');
const gogoTitle = document.querySelector('#gogo-title');
const gogoCopy = document.querySelector('#gogo-copy');
const gogoLabel = document.querySelector('.gogo-message-label');
let currentLanguage = localStorage.getItem('studygo-language') === 'ar' ? 'ar' : 'en';

const textMap = {
  '.nav-links a:nth-child(1), #mobile-menu a:nth-child(1)': 'navFeatures', '.nav-links a:nth-child(2), #mobile-menu a:nth-child(2)': 'navProductivity', '.nav-links a:nth-child(3), #mobile-menu a:nth-child(3)': 'navTools', '.nav-links a:nth-child(4), #mobile-menu a:nth-child(4)': 'navDownload',
  '.nav-cta': 'getStudyGo', '.eyebrow': 'eyebrow', '.hero h1': 'heroTitle', '.hero-lede': 'heroLead', '.hero-actions .button': 'download', '.hero-actions .text-link': 'seeHow', '.hero-note strong': 'madeFor',
  '.app-greeting': 'date', '.phone h3': 'goodMorning', '.streak strong': 'streak', '.streak small': 'keepMomentum', '.app-stat-row > div:nth-child(1) small': 'semesterGpa', '.app-stat-row > div:nth-child(2) small': 'courseProgress', '.app-section-title strong': 'comingUp', '.app-section-title a': 'viewAll', '.task-row:nth-of-type(1) small': 'dueTomorrow', '.task-row:nth-of-type(2) strong': 'studyData', '.task-row:nth-of-type(2) small': 'today', '.app-nav span:nth-child(1) small': 'home', '.app-nav span:nth-child(2) small': 'calendar', '.app-nav span:nth-child(3) small': 'tasks', '.app-nav span:nth-child(4) small': 'profile', '.grade-card small': 'thisSemester', '.focus-card small': 'focusSession',
  '#features .section-kicker': 'onePlace', '#features h2': 'introTitle', '#features .intro-copy p': 'introLead', '#features .check-list div:nth-child(1) span': 'semesterView', '#features .check-list div:nth-child(2) span': 'coursesFiles', '#features .check-list div:nth-child(3) span': 'progressVisible',
  '.grades .section-kicker': 'knowProgress', '.grades h2': 'gradesTitle', '.grades .feature-copy p': 'gradesLead', '.grades .text-link': 'trackProgress', '.sheet-top span': 'academicOverview', '.sheet-top b': 'semester', '.big-grade span': 'currentGpa', '.big-grade small': 'excellent', '.bar-label span': 'semesterProgress', '.course-bars div:nth-child(1) span': 'webDevelopment', '.course-bars div:nth-child(2) span': 'discreteMath', '.course-bars div:nth-child(3) span': 'entrepreneurship',
  '.calendar-section .section-kicker': 'seeNext', '.calendar-section h2': 'calendarTitle', '.calendar-section .feature-copy p': 'calendarLead', '.mini-pill-row span:nth-child(1)': 'projects', '.mini-pill-row span:nth-child(2)': 'exams', '.mini-pill-row span:nth-child(3)': 'lectures', '.mini-pill-row span:nth-child(4)': 'events', '.calendar-head small': 'october', '.calendar-head strong': 'myCalendar', '.cal-event:nth-child(1) b': 'webProposal', '.cal-event:nth-child(2) b': 'dataLecture', '.cal-event:nth-child(3) b': 'midterm', '.cal-event:nth-child(1) small': 'dueTomorrowShort',
  '.productivity .section-kicker': 'tooMuch', '.productivity h2': 'focusTitle', '.productivity-head p': 'focusLead', '.board-copy strong': 'todaysFocus', '.board-copy p': 'oneTask', '.task-header span': 'done', '.big-task:nth-of-type(2) span': 'reviewNotes', '.big-task:nth-of-type(3) span': 'finishProposal', '.big-task:nth-of-type(4) span': 'prepareQuestions', '.pomodoro-top span': 'focusTimer', '.timer-ring small': 'deepFocus', '.timer-caption': 'nextBreak',
  '.tools .section-kicker': 'inBetween', '.tools h2': 'toolsTitle', '.tools-copy p': 'toolsLead', '.tools-copy .button': 'explore', '.tool-card:nth-child(1) strong': 'pomodoro', '.tool-card:nth-child(1) small': 'pomodoroText', '.tool-card:nth-child(1) b': 'startSession', '.tool-card:nth-child(2) strong': 'courseFiles', '.tool-card:nth-child(2) small': 'filesText', '.tool-card:nth-child(2) b': 'openFiles', '.tool-card:nth-child(3) strong': 'findPartner', '.tool-card:nth-child(3) small': 'partnerText', '.tool-card:nth-child(3) b': 'matches',
  '.partners .section-kicker': 'together', '.partners h2': 'partnersTitle', '.partners-copy p': 'partnersLead', '.partner-top span': 'project', '.partner-top b': 'members', '.request-button': 'request', '.partner-stat span': 'students',
  '.gogo-content .section-kicker': 'sidekick', '.gogo-content h2': 'meet', '.gogo-intro': 'gogoIntro', '.gogo-caption span:last-child': 'gogoWith', '.gogo-journey span:nth-of-type(1)': 'start', '.gogo-journey span:nth-of-type(2)': 'struggle', '.gogo-journey span:nth-of-type(3)': 'focus', '.gogo-journey span:nth-of-type(4)': 'progress', '.gogo-journey span:nth-of-type(5)': 'celebrate',
  '.download h2': 'downloadTitle', '.download p': 'downloadLead', '.coming': 'available', '.store-button:nth-child(1) small': 'storeApp', '.store-button:nth-child(2) small': 'storeGoogle', '.footer-links > div:nth-child(1) strong': 'exploreFooter', '.footer-links > div:nth-child(2) strong': 'getFooter', '.footer-links > div:nth-child(3) strong': 'hello', '.footer-links > div:nth-child(1) a:nth-child(3)': 'studyTools', '.footer-links > div:nth-child(2) a:nth-child(3)': 'about', '.footer-bottom span': 'copyright', '.footer-bottom a': 'backTop', '.footer-links a[href*="github"]': 'github'
};

const applyTranslations = (language) => {
  const dictionary = translations[language];
  Object.entries(textMap).forEach(([selectors, key]) => {
    document.querySelectorAll(selectors).forEach((element) => { element.innerHTML = dictionary[key]; });
  });
  const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const replacements = {
    'Less remembering. More doing.': translations.en.lessRemembering,
    'ذاكرة أقل. إنجاز أكثر.': translations.ar.lessRemembering
  };
  const replacement = language === 'ar' ? translations.ar.lessRemembering : translations.en.lessRemembering;
  const nodes = [];
  while (textNodes.nextNode()) nodes.push(textNodes.currentNode);
  nodes.forEach((node) => { const value = node.nodeValue.trim(); if (replacements[value]) node.nodeValue = node.nodeValue.replace(value, replacement); });
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.title = language === 'ar' ? 'StudyGo — حياتك الجامعية، مرتبة.' : 'StudyGo — University, sorted.';
  document.querySelector('meta[name="description"]')?.setAttribute('content', language === 'ar' ? 'StudyGo ينظم حياتك الجامعية، من المقررات والدرجات إلى المشاريع والمواعيد ووقت المذاكرة.' : 'StudyGo keeps your university life organized — from courses and grades to projects, deadlines, files, and focused study time.');
  document.querySelector('.language-toggle')?.setAttribute('aria-label', language === 'ar' ? 'اختر اللغة' : 'Choose language');
  document.querySelectorAll('.language-menu button,.mobile-language button').forEach((button) => button.classList.toggle('active', button.dataset.language === language));
  document.querySelector('.language-toggle span').textContent = language.toUpperCase();
  const state = gogoStates[document.querySelector('.emotion-button.active')?.dataset.emotion || 'happy'];
  if (state && gogoTitle) { gogoTitle.textContent = state.title[language]; gogoCopy.textContent = state.copy[language]; gogoLabel.textContent = state.label[language]; }
};

languageToggle?.addEventListener('click', () => {
  const open = languageMenu.classList.toggle('open');
  languageToggle.setAttribute('aria-expanded', String(open));
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.language-switcher')) { languageMenu?.classList.remove('open'); languageToggle?.setAttribute('aria-expanded', 'false'); }
});
languageButtons.forEach((button) => button.addEventListener('click', () => {
  currentLanguage = button.dataset.language;
  localStorage.setItem('studygo-language', currentLanguage);
  applyTranslations(currentLanguage);
  languageMenu?.classList.remove('open');
  languageToggle?.setAttribute('aria-expanded', 'false');
}));
document.querySelectorAll('.emotion-button').forEach((button) => {
  button.addEventListener('click', () => {
    const state = gogoStates[button.dataset.emotion];
    if (!state || !gogoImage) return;
    document.querySelectorAll('.emotion-button').forEach((item) => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
    gogoImage.classList.add('switching');
    window.setTimeout(() => { gogoImage.src = `assets/${state.image}`; gogoImage.alt = `GoGo the StudyGo penguin, ${state.label[currentLanguage].toLowerCase()}`; gogoTitle.textContent = state.title[currentLanguage]; gogoCopy.textContent = state.copy[currentLanguage]; gogoLabel.textContent = state.label[currentLanguage]; gogoImage.classList.remove('switching'); }, reducedMotion ? 0 : 180);
  });
});
applyTranslations(currentLanguage);

const animateCounter = (element) => {
  if (element.dataset.counted) return;
  element.dataset.counted = 'true';
  const target = Number(element.dataset.counter);
  const decimals = Number(element.dataset.decimals || 0);
  const suffix = element.dataset.suffix || '';
  const start = performance.now();
  const duration = 1150;
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = `${(target * eased).toFixed(decimals)}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

const revealItems = document.querySelectorAll('.reveal');
const motionItems = document.querySelectorAll('.motion-item, .calendar-card .dates span, .cal-event');
const progressItems = document.querySelectorAll('[data-progress]');
const counters = document.querySelectorAll('[data-counter]');

if (reducedMotion) {
  revealItems.forEach((item) => item.classList.add('visible'));
  motionItems.forEach((item) => item.classList.add('motion-visible'));
  progressItems.forEach((item) => { item.style.setProperty('width', `${item.dataset.progress}%`, 'important'); });
  counters.forEach((counter) => {
    const decimals = Number(counter.dataset.decimals || 0);
    counter.textContent = `${Number(counter.dataset.counter).toFixed(decimals)}${counter.dataset.suffix || ''}`;
  });
} else {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      entry.target.classList.add('motion-visible');
      if (entry.target.matches('[data-counter]')) animateCounter(entry.target);
      if (entry.target.matches('[data-progress]')) {
        window.setTimeout(() => { entry.target.style.setProperty('width', `${entry.target.dataset.progress}%`, 'important'); }, 120);
      }
      entry.target.querySelectorAll?.('[data-counter]').forEach(animateCounter);
      entry.target.querySelectorAll?.('[data-progress]').forEach((bar) => {
        window.setTimeout(() => { bar.style.setProperty('width', `${bar.dataset.progress}%`, 'important'); }, 120);
      });
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

  [...revealItems, ...motionItems, ...counters].forEach((item) => observer.observe(item));
  progressItems.forEach((item) => observer.observe(item));
}

let rafId = 0;
const updateScrollMotion = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollY = window.scrollY;
  const ratio = maxScroll > 0 ? scrollY / maxScroll : 0;
  if (progressBar) progressBar.style.width = `${ratio * 100}%`;
  header?.classList.toggle('scrolled', scrollY > 30);

  if (!reducedMotion && !prefersTouch) {
    const hero = document.querySelector('.hero');
    if (hero && scrollY < hero.offsetHeight) {
      const amount = Math.min(scrollY, 360);
      document.querySelector('.hero-copy')?.style.setProperty('transform', `translate3d(0, ${amount * -.08}px, 0)`);
      document.querySelector('.phone-hero')?.style.setProperty('transform', `translate3d(0, ${amount * .045}px, 0) rotate(${3 + amount * .008}deg)`);
      document.querySelector('.hero-penguin')?.style.setProperty('transform', `translate3d(0, ${amount * -.11}px, 0) rotate(${Math.sin(scrollY / 240) * 2}deg)`);
      document.querySelectorAll('.hero-orbit').forEach((orbit, index) => orbit.style.transform = `translate3d(0, ${amount * (index ? .08 : -.04)}px, 0)`);
    }
  }
  rafId = 0;
};

window.addEventListener('scroll', () => {
  if (!rafId) rafId = requestAnimationFrame(updateScrollMotion);
}, { passive: true });
updateScrollMotion();
