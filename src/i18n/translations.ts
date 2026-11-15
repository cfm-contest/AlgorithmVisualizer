
export type Locale = 'en' | 'ru' | 'uz'

export const defaultLocale: Locale = 'en'

export const locales: Locale[] = ['en', 'ru', 'uz']

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
  uz: "O'zbekcha",
}

export interface Translations {
  // Meta
  siteTitle: string
  siteDescription: string

  // Welcome screen
  welcomeTitle: string
  welcomeDescription: string
  playPauseShortcut: string
  stepShortcut: string

  // Sidebar
  searchPlaceholder: string
  algorithmsCount: string
  algorithmCountLabel: string
  expandSidebar: string
  collapseSidebar: string

  // Code panel
  tabCode: string
  tabAbout: string
  selectAlgorithmCode: string
  expandCodePanel: string
  collapseCodePanel: string
  variables: string
  codeLanguage: string

  // Controls
  speed: string
  skipToStart: string
  stepBackward: string
  playPause: string
  stepForward: string
  skipToEnd: string
  step: string
  controlsLabel: string
  progressStep: string
  speedLevel: string

  // Drag handles
  resizeSidebar: string
  resizeCodePanel: string

  // Mobile / aria labels
  sidebarAriaLabel: string
  codePanelAriaLabel: string
  visualizationLabel: string
  zoomControls: string
  zoomIn: string
  zoomOut: string
  resetZoom: string
  mobileMenuTitle: string
  openMenu: string
  closeMenu: string
  closePanel: string
  viewCode: string
  languageLabel: string

  // 404
  notFoundTitle: string
  notFoundDescription: string
  backToHome: string
  notFoundHint: string
  notFoundSearchLabel: string
  notFoundSearchPlaceholder: string
  notFoundDidYouMean: string
  notFoundPopular: string
  notFoundBrowseCategories: string
  notFoundNoResults: string
  notFoundViewAll: string

  // Graph visualizer
  queue: string
  stack: string
  empty: string
  distances: string

  // Categories
  categories: Record<string, string>
}

export const translations: Record<Locale, Translations> = {
  en: {
    siteTitle: 'Algorithm Visualizer — Sorting, Graphs, DP & More',
    siteDescription:
      'Free interactive algorithm visualizer. Learn sorting, searching, graphs, dynamic programming, and data structures with step-by-step animations.',

    welcomeTitle: 'Algorithm Visualizer',
    welcomeDescription:
      'Learn algorithms through step-by-step visualizations — sorting, graphs, dynamic programming, data structures, and more. Pick one from the sidebar to begin.',
    playPauseShortcut: 'Play / Pause',
    stepShortcut: 'Step',

    searchPlaceholder: 'Search algorithms...',
    algorithmsCount: '{count} algorithms',
    algorithmCountLabel: '{count} algorithms',
    expandSidebar: 'Expand sidebar',
    collapseSidebar: 'Collapse sidebar',

    tabCode: 'Code',
    tabAbout: 'Explanation',
    selectAlgorithmCode: 'Select an algorithm to view its code',
    expandCodePanel: 'Expand code panel',
    collapseCodePanel: 'Collapse code panel',
    variables: 'Variables',
    codeLanguage: 'Programming language',

    speed: 'Speed',
    skipToStart: 'Skip to start',
    stepBackward: 'Step backward (←)',
    playPause: 'Play/Pause (Space)',
    stepForward: 'Step forward (→)',
    skipToEnd: 'Skip to end',
    step: 'Step {n}:',
    controlsLabel: 'Playback controls',
    progressStep: 'Step {current} of {total}',
    speedLevel: 'Speed level {n} of 5',

    resizeSidebar: 'Resize sidebar',
    resizeCodePanel: 'Resize code panel',

    sidebarAriaLabel: 'Algorithm categories',
    codePanelAriaLabel: 'Code and details panel',
    visualizationLabel: 'Algorithm visualization',
    zoomControls: 'Visualization zoom',
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    resetZoom: 'Reset zoom',
    mobileMenuTitle: 'Algorithms',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    closePanel: 'Close panel',
    viewCode: 'View code',
    languageLabel: 'Language',

    notFoundTitle: 'Page not found',
    notFoundDescription:
      "That URL didn't match any algorithm or page. Search below or jump to a popular visualization.",
    backToHome: 'Back to home',
    notFoundHint: 'No match · O(1) not found',
    notFoundSearchLabel: 'Search algorithms',
    notFoundSearchPlaceholder:
      'Try bubble sort, dijkstra, binary search…',
    notFoundDidYouMean: 'Did you mean?',
    notFoundPopular: 'Popular visualizations',
    notFoundBrowseCategories: 'Browse by category',
    notFoundNoResults: 'No algorithms match that search.',
    notFoundViewAll: 'View all algorithms',

    queue: 'Queue',
    stack: 'Stack',
    empty: 'empty',
    distances: 'Distances',

    categories: {
      Concepts: 'Concepts',
      'Data Structures': 'Data Structures',
      Sorting: 'Sorting',
      Searching: 'Searching',
      Graphs: 'Graphs',
      'Dynamic Programming': 'Dynamic Programming',
      Backtracking: 'Backtracking',
      'Divide and Conquer': 'Divide and Conquer',
      Math: 'Math',
      Compression: 'Compression',
    },
  },

  ru: {
    siteTitle: 'Визуализатор алгоритмов — Сортировка, графы, ДП и другое',
    siteDescription:
      'Бесплатный интерактивный визуализатор алгоритмов. Изучайте сортировку, поиск, графы, динамическое программирование и структуры данных с пошаговой анимацией.',

    welcomeTitle: 'Визуализатор алгоритмов',
    welcomeDescription:
      'Изучайте алгоритмы с помощью пошаговых визуализаций: сортировка, графы, динамическое программирование, структуры данных и многое другое. Выберите алгоритм в боковой панели, чтобы начать.',
    playPauseShortcut: 'Воспроизвести / Пауза',
    stepShortcut: 'Шаг',

    searchPlaceholder: 'Поиск алгоритмов...',
    algorithmsCount: '{count} алгоритмов',
    algorithmCountLabel: '{count} алгоритмов',
    expandSidebar: 'Развернуть боковую панель',
    collapseSidebar: 'Свернуть боковую панель',

    tabCode: 'Код',
    tabAbout: 'Объяснение',
    selectAlgorithmCode: 'Выберите алгоритм, чтобы посмотреть его код',
    expandCodePanel: 'Развернуть панель кода',
    collapseCodePanel: 'Свернуть панель кода',
    variables: 'Переменные',
    codeLanguage: 'Язык программирования',

    speed: 'Скорость',
    skipToStart: 'В начало',
    stepBackward: 'Предыдущий шаг (←)',
    playPause: 'Воспроизвести / Пауза (Пробел)',
    stepForward: 'Следующий шаг (→)',
    skipToEnd: 'В конец',
    step: 'Шаг {n}:',
    controlsLabel: 'Управление воспроизведением',
    progressStep: 'Шаг {current} из {total}',
    speedLevel: 'Уровень скорости {n} из 5',

    resizeSidebar: 'Изменить размер боковой панели',
    resizeCodePanel: 'Изменить размер панели кода',

    sidebarAriaLabel: 'Категории алгоритмов',
    codePanelAriaLabel: 'Панель кода и описания',
    visualizationLabel: 'Визуализация алгоритма',
    zoomControls: 'Масштаб визуализации',
    zoomIn: 'Увеличить',
    zoomOut: 'Уменьшить',
    resetZoom: 'Сбросить масштаб',
    mobileMenuTitle: 'Алгоритмы',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    closePanel: 'Закрыть панель',
    viewCode: 'Посмотреть код',
    languageLabel: 'Язык',

    notFoundTitle: 'Страница не найдена',
    notFoundDescription:
      'По этому адресу не найден алгоритм или страница. Попробуйте поиск или выберите популярную визуализацию.',
    backToHome: 'На главную',
    notFoundHint: 'Совпадений нет · O(1) не найдено',
    notFoundSearchLabel: 'Поиск алгоритмов',
    notFoundSearchPlaceholder:
      'Например: сортировка пузырьком, Дейкстра, бинарный поиск…',
    notFoundDidYouMean: 'Возможно, вы имели в виду?',
    notFoundPopular: 'Популярные визуализации',
    notFoundBrowseCategories: 'Обзор по категориям',
    notFoundNoResults: 'По вашему запросу алгоритмы не найдены.',
    notFoundViewAll: 'Посмотреть все алгоритмы',

    queue: 'Очередь',
    stack: 'Стек',
    empty: 'пусто',
    distances: 'Расстояния',

    categories: {
      Concepts: 'Основы',
      'Data Structures': 'Структуры данных',
      Sorting: 'Сортировка',
      Searching: 'Поиск',
      Graphs: 'Графы',
      'Dynamic Programming': 'Динамическое программирование',
      Backtracking: 'Поиск с возвратом',
      'Divide and Conquer': 'Разделяй и властвуй',
      Math: 'Математика',
      Compression: 'Сжатие данных',
    },
  },

  uz: {
    siteTitle: 'Algoritmlar vizualizatori — Saralash, Graflar, DP va boshqalar',
    siteDescription:
      "Bepul interaktiv algoritmlar vizualizatori. Saralash, qidirish, graflar, dinamik dasturlash va ma'lumotlar tuzilmalarini bosqichma-bosqich animatsiyalar orqali o'rganing.",

    welcomeTitle: 'Algoritmlar vizualizatori',
    welcomeDescription:
      "Algoritmlarni bosqichma-bosqich vizualizatsiya orqali o'rganing: saralash, graflar, dinamik dasturlash, ma'lumotlar tuzilmalari va boshqalar. Boshlash uchun yon paneldan algoritm tanlang.",
    playPauseShortcut: "Ijro etish / To'xtatish",
    stepShortcut: 'Qadam',

    searchPlaceholder: "Algoritmlarni qidirish...",
    algorithmsCount: '{count} ta algoritm',
    algorithmCountLabel: '{count} ta algoritm',
    expandSidebar: 'Yon panelni kengaytirish',
    collapseSidebar: 'Yon panelni yig‘ish',

    tabCode: 'Kod',
    tabAbout: 'Tushuntirish',
    selectAlgorithmCode: "Kodini ko'rish uchun algoritmni tanlang",
    expandCodePanel: 'Kod panelini kengaytirish',
    collapseCodePanel: 'Kod panelini yig‘ish',
    variables: "O'zgaruvchilar",
    codeLanguage: 'Dasturlash tili',

    speed: 'Tezlik',
    skipToStart: 'Boshiga o‘tish',
    stepBackward: 'Oldingi qadam (←)',
    playPause: 'Ijro etish / To‘xtatish (Space)',
    stepForward: 'Keyingi qadam (→)',
    skipToEnd: 'Oxiriga o‘tish',
    step: 'Qadam {n}:',
    controlsLabel: 'Ijroni boshqarish',
    progressStep: '{total} qadamdan {current}-qadam',
    speedLevel: 'Tezlik darajasi: {n}/5',

    resizeSidebar: 'Yon panel o‘lchamini o‘zgartirish',
    resizeCodePanel: 'Kod paneli o‘lchamini o‘zgartirish',

    sidebarAriaLabel: 'Algoritmlar kategoriyalari',
    codePanelAriaLabel: 'Kod va tafsilotlar paneli',
    visualizationLabel: 'Algoritm vizualizatsiyasi',
    zoomControls: 'Vizualizatsiya masshtabi',
    zoomIn: 'Kattalashtirish',
    zoomOut: 'Kichraytirish',
    resetZoom: 'Masshtabni tiklash',
    mobileMenuTitle: 'Algoritmlar',
    openMenu: 'Menyuni ochish',
    closeMenu: 'Menyuni yopish',
    closePanel: 'Panelni yopish',
    viewCode: "Kodni ko'rish",
    languageLabel: 'Til',

    notFoundTitle: 'Sahifa topilmadi',
    notFoundDescription:
      "Ushbu manzilda algoritm yoki sahifa topilmadi. Quyidagi qidiruvdan foydalaning yoki mashhur vizualizatsiyalardan birini tanlang.",
    backToHome: 'Bosh sahifaga qaytish',
    notFoundHint: 'Mos natija yo‘q · O(1) topilmadi',
    notFoundSearchLabel: 'Algoritmlarni qidirish',
    notFoundSearchPlaceholder:
      'Masalan: bubble sort, Dijkstra, binary search…',
    notFoundDidYouMean: 'Balki shuni nazarda tutgandirsiz?',
    notFoundPopular: 'Mashhur vizualizatsiyalar',
    notFoundBrowseCategories: 'Kategoriyalar bo‘yicha ko‘rish',
    notFoundNoResults: 'Qidiruvingizga mos algoritmlar topilmadi.',
    notFoundViewAll: 'Barcha algoritmlarni ko‘rish',

    queue: 'Navbat',
    stack: 'Stek',
    empty: 'bo‘sh',
    distances: 'Masofalar',

    categories: {
      Concepts: 'Asosiy tushunchalar',
      'Data Structures': "Ma'lumotlar tuzilmalari",
      Sorting: 'Saralash',
      Searching: 'Qidirish',
      Graphs: 'Graflar',
      'Dynamic Programming': 'Dinamik dasturlash',
      Backtracking: 'Qaytish orqali qidirish',
      'Divide and Conquer': 'Bo‘lib tashla va hukmronlik qil',
      Math: 'Matematika',
      Compression: 'Siqish',
    },
  },
}

export function t(locale: Locale, key: keyof Translations): string {
  return translations[locale][key] as string
}

export function getCategoryName(
  locale: Locale,
  categoryKey: string
): string {
  return translations[locale].categories[categoryKey] || categoryKey
}
