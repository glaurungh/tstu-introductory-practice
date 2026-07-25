# tstu-introductory-practice

Ознакомительная практика ТГТУ (2026)

## О проекте

Практические задания по HTML, CSS, SASS и Bootstrap. Каждая папка — отдельная тема с заданиями и решениями.

## Модули

| # | Папка | Тема | Заданий |
|---|-------|------|---------|
| 01 | `01-layout-designer-basics-tasks` | Основы вёрстки и макетов | 4 |
| 02 | `02-css-content-tasks` | Текст, шрифты, колонки | 11 |
| 03 | `03-css-positioning-tasks` | Позиционирование элементов | 6 |
| 04 | `04-css-flex-tasks` | Flexbox-раскладка | 7 |
| 05 | `05-css-adaptive-tasks` | Адаптивная вёрстка и медиазапросы | 4 |
| 06 | `06-css-grid-tasks` | CSS Grid | 3 |
| 07 | `07-css-sass-tasks` | SASS — переменные, вложенности | 2 |
| 08 | `08-sass-programming-tasks` | SASS — программирование, миксины | 4 |
| 09 | `09-css-transform-tasks` | CSS Transform | 4 |
| 10 | `10-bootstrap-basic-tasks` | Bootstrap 5 | 5 |

Также содержит `individual-task/` — индивидуальное задание.

## Структура

Каждый модуль содержит:

```
название-папки/
├── tasks/          # Описания заданий (markdown)
├── solutions/      # Решения (HTML, CSS, SCSS)
├── __tests__/       # Playwright-тесты (снимки экранов)
└── package.json     # Зависимости
```

## Запуск

Для модулей с Playwright-тестами (визуальное сравнение):

```bash
cd <название-папки>
npm install
npm start            # http-server на ./solutions, порт 8080
npm test             # Playwright-тесты
```

## Технологии

- HTML5, CSS3
- SASS / SCSS
- Bootstrap 5.3
- Playwright (визуальное тестирование)
- Jest + sass-true (07, 08)
