# ПРИЛОЖЕНИЕ Б

# Выполнение индивидуального задания

---

## 1. Общее описание задания

Индивидуальное задание заключалось в разработке многостраничной образовательной веб-страницы «Научиться учиться» на тему современных и эффективных подходов к обучению. Проект реализован по методологии **BEM (Block Element Modifier)** с организацией файлов по вложенной структуре (Nested BEM).

Требовалось создать две версии страницы:
- **Краткая версия** (`index01.html`) — 6 секций, шрифт Helvetica Neue, без анимаций.
- **Полная версия** (`index02.html`) — 11 секций, шрифт Inter, с CSS-анимациями вращения декоративных элементов.

---

## 2. Структура проекта

### 2.1. Файловая организация

Проект организован по методологии BEM с вложенной структурой файлов:

```
individual-task/
├── index01.html              — Краткая версия страницы
├── index02.html              — Полная версия страницы
├── blocks/                   — BEM-блоки
│   ├── cards/                — Карточки техник обучения
│   ├── content/              — Основное содержимое
│   ├── description/         — Секция «Главные проблемы»
│   ├── digits/               — Секция «Цифры и факты»
│   ├── feynman/              — Секция «Метод Фейнмана»
│   ├── footer/               — Подвал сайта
│   ├── header/               — Шапка сайта
│   ├── khan/                 — Секция «Салман Хан»
│   ├── kaufman/              — Секция «Принципы Кауфмана»
│   ├── link/                 — Универсальный блок ссылок
│   ├── logo/                 — Логотип сайта
│   ├── oakley/               — Секция «Барбара Оакли»
│   ├── page/                 — Корневой блок страницы
│   ├── resources/            — Секция «Полезные ресурсы»
│   ├── rotation/             — Блок анимации вращения
│   ├── section-subtitle/     — Подзаголовки секций
│   ├── section-title/        — Заголовки секций
│   ├── table/                — Сетка карточек/фактов
│   ├── techniques/           — Секция «Техники обучения»
│   ├── two-columns/          — Двухколоночный макет
│   └── video/                — Секция «Видео на TED»
├── images/                   — Изображения и SVG-иконки
├── pages/                    — Точечные входы (entry points)
│   ├── index01.css           — Стили для краткой версии
│   └── index02.css           — Стили для полной версии
└── vendor/                   — Сторонние ресурсы
    ├── normalize.css         — Сброс стилей
    └── fonts/                — Шрифт Inter (woff/woff2)
```

Всего создано **75 CSS-файлов** для BEM-блоков, элементов и модификаторов, а также 2 файла точек входа.

---

## 3. Архитектура CSS

### 3.1. Точечные входы (Entry Points)

Точечные входы — это CSS-файлы, которые подключаются в HTML и импортируют стили всех блоков. Порядок импортов соответствует порядку секций на странице.

**Точка входа для краткой версии (`pages/index01.css`):**

```css
/* Сторонние сброс и шрифты */
@import url(../vendor/normalize.css);
@import url(../vendor/fonts/fonts.css);

/* Каркас страницы */
@import url(../blocks/page/page.css);
@import url(../blocks/content/content.css);

/* Логотип */
@import url(../blocks/logo/logo.css);
@import url(../blocks/logo/_place/logo_place_header.css);
@import url(../blocks/logo/_place/logo_place_footer.css);

/* Шапка сайта */
@import url(../blocks/header/header.css);
@import url(../blocks/header/__title/header__title.css);
@import url(../blocks/header/__subtitle/header__subtitle.css);
@import url(../blocks/header/__link/header__link.css);
@import url(../blocks/header/__main-illustration/header__main-illustration.css);
@import url(../blocks/header/__square-pic/header__square-pic.css);

/* Главные проблемы в обучении */
@import url(../blocks/description/description.css);
@import url(../blocks/two-columns/two-columns.css);
@import url(../blocks/two-columns/__brief/two-columns__brief.css);
@import url(../blocks/two-columns/__main-text/two-columns__main-text.css);
@import url(../blocks/two-columns/__paragraph/two-columns__paragraph.css);
@import url(../blocks/two-columns/__span-accent/two-columns__span-accent.css);

/* Переиспользуемые заголовки секций */
@import url(../blocks/section-title/section-title.css);
@import url(../blocks/section-title/_theme/section-title_theme_dark.css);
@import url(../blocks/section-subtitle/section-subtitle.css);
@import url(../blocks/section-subtitle/_theme/section-subtitle_theme_dark.css);

/* Цифры и факты */
@import url(../blocks/digits/digits.css);
@import url(../blocks/table/table.css);
@import url(../blocks/table/__cell/table__cell.css);
@import url(../blocks/table/__cell/_size/table__cell_size_l.css);
@import url(../blocks/table/__cell/_size/table__cell_size_m.css);
@import url(../blocks/table/__heading/table__heading.css);
@import url(../blocks/table/__text/table__text.css);

/* Метод Фейнмана */
@import url(../blocks/feynman/feynman.css);
@import url(../blocks/feynman/__title/feynman__title.css);
@import url(../blocks/feynman/__subtitle/feynman__subtitle.css);
@import url(../blocks/feynman/__link/feynman__link.css);
@import url(../blocks/feynman/__illustration/feynman__illustration.css);

/* Принципы Джоша Кауфмана */
@import url(../blocks/kaufman/kaufman.css);
@import url(../blocks/kaufman/__triangle/kaufman__triangle.css);
@import url(../blocks/table/_theme/table_theme_dark.css);
@import url(../blocks/table/__cell/_theme/table__cell_theme_dark.css);
@import url(../blocks/table/__heading/_theme/table__heading_theme_dark.css);
@import url(../blocks/table/__text/_theme/table__text_theme_dark.css);

/* Подвал */
@import url(../blocks/footer/footer.css);
/* ... все элементы подвала ... */

/* Переопределение шрифта для краткой версии */
.page {
    font-family: "Helvetica Neue", "Arial", sans-serif;
}
```

**Точка входа для полной версии (`pages/index02.css`)** включает дополнительные импорты для блоков `rotation`, `link`, `cards`, `techniques`, `video`, `oakley`, `khan`, `resources` и не переопределяет шрифт (используется Inter по умолчанию).

---

## 4. Реализация BEM-блоков

### 4.1. Блок `page` (Корневой блок)

Корневой блок задаёт ширину контента и базовый шрифт:

```css
/* blocks/page/page.css */
.page {
    min-width: 1100px;
    max-width: 1600px;
    margin: 0 auto;
    font-family: "Inter", "Arial", sans-serif;
}
```

Ширина ограничена диапазоном 1100–1600 px в соответствии с макетом.

---

### 4.2. Блок `header` (Шапка сайта)

Шапка занимает всю высоту первого экрана (`100vh`) с ограничениями (700–756 px). Элементы позиционируются абсолютно внутри блока:

```css
/* blocks/header/header.css */
.header {
    height: 100vh;
    min-height: 700px;
    max-height: 756px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #f2f2f2;
    position: relative;
    padding-left: 64px;
    overflow: hidden;
}

/* blocks/header/__title/header__title.css */
.header__title {
    line-height: 96px;
    font-size: 102px;
    font-weight: 700;
    width: 730px;
    margin: 0;
    z-index: 5;
}

/* blocks/header/__square-pic/header__square-pic.css */
.header__square-pic {
    width: 568px;
    height: 568px;
    background-color: #2f80ed;
    z-index: 1;
    position: absolute;
    top: 64px;
    right: 0;
}

/* blocks/header/__main-illustration/header__main-illustration.css */
.header__main-illustration {
    width: 765px;
    height: 608px;
    object-fit: cover;
    z-index: 2;
    position: absolute;
    right: 0;
    bottom: 0;
}
```

---

### 4.3. Блок `rotation` (Анимация вращения)

Блок реализует бесконечное вращение декоративных элементов (синий квадрат в шапке, синий треугольник в секции Кауфмана):

```css
/* blocks/rotation/rotation.css */
@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.rotation {
    animation: rotation 20s linear infinite;
}
```

В краткой версии анимация не применяется (класс `rotation` не добавлен к элементам). В полной версии класс `rotation` добавлен к квадрату в шапке и треугольнику в секции Кауфмана.

---

### 4.4. Блок `two-columns` (Двухколоночный макет)

Переиспользуемый блок для секций с двухколоночной раскладкой (описание, Оакли):

```css
/* blocks/two-columns/two-columns.css */
.two-columns {
    width: 80%;
    display: flex;
    justify-content: space-between;
}

/* blocks/two-columns/__brief/two-columns__brief.css */
.two-columns__brief {
    margin: 0;
    color: #2f80ed;
    width: 175px;
    line-height: 1.2;
    font-size: 18px;
    font-weight: normal;
    height: fit-content;
}

/* blocks/two-columns/__main-text/two-columns__main-text.css */
.two-columns__main-text {
    width: 80%;
    min-width: 784px;
}

/* blocks/two-columns/__paragraph/two-columns__paragraph.css */
.two-columns__paragraph {
    line-height: 34px;
    font-size: 24px;
    font-weight: normal;
    margin: 0;
}

.two-columns__paragraph:not(:last-child) {
    margin-bottom: 30px;
}

/* blocks/two-columns/__span-accent/two-columns__span-accent.css */
.two-columns__span-accent {
    line-height: 34px;
    font-size: 24px;
    font-weight: 700;
}
```

---

### 4.5. Блок `cards` (Карточки техник обучения)

Секция содержит пять карточек с техниками Барбары Оакли, расположенных в три колонки с помощью Flexbox:

```css
/* blocks/cards/cards.css */
.cards {
    display: flex;
    flex-wrap: wrap;
    width: 920px;
    padding: 0;
    list-style-type: none;
    margin: 0 auto;
}

/* blocks/cards/__item/cards__item.css */
.cards__item {
    padding-top: 60px;
    margin-right: 100px;
    width: 240px;
}

.cards__item:nth-child(3n) {
    margin-right: 0;
}

/* blocks/cards/__image/cards__image.css */
.cards__image {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    margin-bottom: 43px;
    padding: 0 40px;
    object-fit: cover;
    box-sizing: content-box;
}

/* blocks/cards/__title/cards__title.css */
.cards__title {
    line-height: 1.15;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin: 0 0 16px;
}

/* blocks/cards/__description/cards__description.css */
.cards__description {
    line-height: 23px;
    font-size: 18px;
    font-weight: normal;
    text-align: center;
    margin: 0;
}
```

Селектор `.cards__item:nth-child(3n)` убирает правый отступ у каждого третьего элемента, обеспечивая корректное размещение карточек в три колонки.

---

### 4.6. Блок `feynman` (Метод Фейнмана)

Секция с фоном, абсолютным позиционированием изображения и ссылкой:

```css
/* blocks/feynman/feynman.css */
.feynman {
    min-height: 890px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    padding-top: 100px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* blocks/feynman/__title/feynman__title.css */
.feynman__title {
    width: 648px;
    line-height: 1.15;
    font-size: 120px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 70px;
    z-index: 2;
    text-align: center;
}

/* blocks/feynman/__illustration/feynman__illustration.css */
.feynman__illustration {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 867px;
    height: 637px;
    object-fit: contain;
}

/* blocks/feynman/__link/feynman__link.css */
.feynman__link {
    position: absolute;
    top: 50%;
    right: 48px;
    line-height: 51px;
    font-size: 36px;
    font-weight: normal;
    text-decoration: none;
    color: #2f80ed;
}
```

---

### 4.7. Блок `kaufman` (Принципы Кауфмана)

Тёмная секция с модификатором темы и вращающимся треугольником:

```css
/* blocks/kaufman/kaufman.css */
.kaufman {
    background-color: #1f1f1f;
    padding: 90px 0;
    overflow: hidden;
    position: relative;
}

/* blocks/kaufman/__triangle/kaufman__triangle.css */
.kaufman__triangle {
    background-image: url(../../../images/kaufman-triangle.svg);
    width: 877px;
    height: 877px;
    background-size: cover;
    position: absolute;
    right: -210px;
    top: 0;
}
```

Тёмная тема реализована через модификаторы блоков `table`, `table__cell`, `table__heading`, `table__text`:

```css
/* blocks/section-title/_theme/section-title_theme_dark.css */
.section-title_theme_dark {
    color: #fff;
}

/* blocks/table/__cell/_theme/table__cell_theme_dark.css */
.table__cell_theme_dark {
    color: #fff;
    padding-top: 80px;
}
```

---

### 4.8. Блок `table` (Сетка фактов)

Универсальный блок для отображения сетки карточек (фактов в секции digits, принципов в секции kaufman):

```css
/* blocks/table/table.css */
.table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 1100px;
    margin: 0 auto;
    z-index: 5;
    position: relative;
}

/* blocks/table/__cell/_size/table__cell_size_l.css */
.table__cell_size_l {
    width: 250px;
}

/* blocks/table/__cell/_size/table__cell_size_m.css */
.table__cell_size_m {
    width: 200px;
}
```

---

### 4.9. Блок `video` (Видео на TED)

Секция с двумя встроенными видео из YouTube, вынесенными за нижнюю границу для визуального перекрытия:

```css
/* blocks/video/__iframes/video__iframes.css */
.video__iframes {
    display: flex;
    justify-content: center;
    position: relative;
    bottom: -50px;
}

/* blocks/video/__iframe/video__iframe.css */
.video__iframe {
    width: 515px;
    height: 316px;
    margin-right: 20px;
    border: 0;
}

.video__iframe:nth-child(2n) {
    margin-right: 0;
}
```

---

### 4.10. Блок `footer` (Подвал)

Трёхколоночный подвал с использованием Flexbox:

```css
/* blocks/footer/footer.css */
.footer {
    box-sizing: border-box;
    background: #1f1f1f;
    color: #fff;
    padding: 60px 0 40px;
    min-height: 350px;
    display: flex;
}

/* blocks/footer/__columns/footer__columns.css */
.footer__columns {
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin: 0 auto;
}

/* blocks/footer/__column/_content/footer__column_content_copyright.css */
.footer__column_content_copyright {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
```

---

### 4.11. Блок `link` (Универсальная ссылка)

Переиспользуемый блок, добавляющий плавное изменение прозрачности при наведении:

```css
/* blocks/link/link.css */
.link {
    transition: opacity 0.2s linear;
}

.link:hover {
    opacity: 0.6;
}
```

Применяется к ссылкам в шапке, секции Фейнмана, подвале и секции ресурсов.

---

### 4.12. Блок `logo` (Логотип)

Блок с модификатором места размещения:

```css
/* blocks/logo/logo.css */
.logo {
    width: 228px;
    height: 32px;
    background-size: contain;
    background-repeat: no-repeat;
    display: block;
}

/* blocks/logo/_place/logo_place_header.css */
.logo_place_header {
    background-image: url(../../../images/logo_place_header.svg);
    position: absolute;
    top: 30px;
    left: 64px;
}

/* blocks/logo/_place/logo_place_footer.css */
.logo_place_footer {
    background-image: url(../../../images/logo_place_footer.svg);
}
```

---

## 5. Секции полной версии страницы

### 5.1. Секция «Техники обучения» (Барбара Оакли)

Содержит пять карточек с техниками обучения:
1. **Два вида внимания** — сфокусированное и рассеянное мышление.
2. **Recall** — вспоминание изученного материала.
3. **Интерливинг** — одновременное изучение нескольких навыков.
4. **Вопросы** — придумывание вопросов при слушании.
5. **Иллюзия компетентности** — проверка реального уровня знаний.

### 5.2. Секция «Видео на TED»

Два встроенных видео из YouTube:
- «Первые 20 часов — как научиться чему угодно».
- «Тайм-менеджмент и прокрастинация».

Видео расположены с отрицательным смещением `bottom: -50px` для визуального эффекта перекрытия с последующей секцией.

### 5.3. Секция «История Барбары Оакли»

Рассказ об истории Барбары Оакли — от гуманитария к специалисту в точных науках. Реализована с использованием переиспользуемого блока `two-columns`.

### 5.4. Секция «Салман Хан»

Секция с цитатой Джорджа Лукаса о книге «Весь мир — школа», обложкой книги и ссылкой на покупку:

```css
/* blocks/khan/khan.css */
.khan {
    background-color: #f2f2f2;
    padding-top: 100px;
}

/* blocks/khan/__container/khan__container.css */
.khan__container {
    width: 80%;
    margin: 0 auto;
}

/* blocks/khan/__book-pic/khan__book-pic.css */
.khan__book-pic {
    width: 620px;
    height: 608px;
    margin-right: 48px;
    object-fit: cover;
    object-position: top;
}

/* blocks/khan/__buy-link/khan__buy-link.css */
.khan__buy-link {
    line-height: 42px;
    font-size: 30px;
    font-weight: normal;
    text-decoration: none;
    color: #2f80ed;
    margin: 0;
    height: fit-content;
}
```

### 5.5. Секция «Полезные ресурсы»

Четыре логотипа образовательных проектов (Арзамас, N+1, Стрелка, Полка) с ссылками:

```css
/* blocks/resources/resources.css */
.resources {
    padding: 100px 0 217px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* blocks/resources/__logo-zone/resources__logo-zone.css */
.resources__logo-zone {
    width: 1100px;
    margin: 0;
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
}

/* blocks/resources/__logo/resources__logo.css */
.resources__logo {
    width: 270px;
    height: 38px;
}
```

---

## 6. Различия между краткой и полной версиями

| Характеристика | Краткая (index01) | Полная (index02) |
|---|---|---|
| Количество секций | 6 | 11 |
| Шрифт | Helvetica Neue | Inter |
| Анимация вращения | Нет | Да (rotation) |
| Блок link | Не используется | Используется |
| Секция techniques | Отсутствует | Присутствует |
| Секция video | Отсутствует | Присутствует |
| Секция oakley | Отсутствует | Присутствует |
| Секция khan | Отсутствует | Присутствует |
| Секция resources | Отсутствует | Присутствует |

---

## 7. Применённые технологии и подходы

1. **Методология BEM (Nested):** Каждый блок, элемент и модификатор вынесен в отдельный CSS-файл. Именование классов следует конвенции `block__element` и `block_modifier`.

2. **Flexbox:** Использован для создания сетки карточек (`cards`), двухколоночных макетов (`two-columns`), раскладки подвала (`footer__columns`), раскладки видео (`video__iframes`) и горизонтального позиционирования ресурсов (`resources__logo-zone`).

3. **Абсолютное позиционирование:** Применено для размещения декоративных элементов в шапке (квадрат, иллюстрация), изображения Фейнмана и ссылки в секции.

4. **CSS-анимации:** `@keyframes rotation` с параметром `20s linear infinite` для декоративных элементов.

5. **CSS-переменные:** Использованы в секции Kaufman для задания размеров треугольника.

6. **Модификаторы темы:** `_theme_dark` для заголовков секций, подзаголовков, ячеек и текста таблиц в тёмной секции Кауфмана.

7. **Переиспользуемые блоки:** `two-columns`, `section-title`, `section-subtitle`, `table`, `link`, `logo` — используются в нескольких секциях.

8. **Семантическая HTML-разметка:** Использованы теги `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`, `<blockquote>`, `<figure>`.

9. **Атрибуты доступности:** `aria-label`, `aria-hidden`, `alt` для изображений, `target="_blank"` с `rel="noopener noreferrer"` для внешних ссылок.

---

## 8. Итог

В ходе выполнения индивидуального задания была разработана многостраничная образовательная веб-страница «Научиться учиться», полностью реализованная по методологии BEM. Проект содержит 2 HTML-страницы, 75 BEM CSS-файлов, 2 файла точек входа и использует семантическую разметку, Flexbox, CSS-анимации и модификаторы темы. Все блоки спроектированы как переиспользуемые компоненты, что обеспечивает масштабируемость и поддерживаемость проекта.
