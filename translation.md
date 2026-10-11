# Translation Implementation Plan

## 1. Audit User-Facing Text

- Review all components and pages for hardcoded text:
  - Labels, headings, button text, navigation, error messages, and main content.
  - Key files:  
    - Components: src/components/Header.jsx, Footer.jsx, Hero.jsx, Features.jsx, About.jsx, Stats.jsx, PageHero.jsx, etc.
    - Pages: src/pages/Events.jsx, EventDetail.jsx, Contact.jsx, Poojas.jsx, PoojaDetail.jsx, Payment.jsx, etc.
    - Context/data: src/data/eventsApi.js, poojasApi.js (for dynamic content).

## 2. Extract Strings & Assign Keys

- For each string, assign a unique key (e.g., `header.home`, `footer.contact`, `about.title`, `event.registerButton`).
- Replace hardcoded text with translation keys in your React code (using an i18n library).

## 3. Google Sheet Structure

Create a Google Sheet with these columns:

| Key                | Context/Description         | English (en)      | Hindi (hi)      | Telugu (te)     |
|--------------------|----------------------------|-------------------|-----------------|-----------------|
| header.home        | Main nav: Home             | Home              | होम             | హోమ్            |
| footer.contact     | Footer: Contact Us link    | Contact Us        | संपर्क करें      | సంప్రదించండి     |
| ...                | ...                        | ...               | ...             | ...             |

- **Key**: Unique identifier for each string.
- **Context/Description**: Brief explanation for translators.
- **English (en)**: Default text.
- **Hindi (hi)**: Hindi translation.
- **Telugu (te)**: Telugu translation.

## 4. Translation Workflow

- Populate the sheet with all keys and English text.
- Share with translators to fill Hindi and Telugu columns.
- When new content is added, update the sheet.

## 5. Integration Steps

### a. Fetch Translations

- Use Google Sheets API or export as CSV/JSON.
- Write a script (e.g., scripts/fetch-translations.js) to fetch and convert the sheet to JSON files:
  - `/src/locales/en.json`
  - `/src/locales/hi.json`
  - `/src/locales/te.json`

### b. Add i18n Library

- Install `react-i18next` and `i18next`.
- Initialize i18n in your app (e.g., in src/main.jsx or a new src/i18n.js).
- Configure to load translation files from `/src/locales/`.

### c. Refactor Code

- Replace hardcoded text with translation keys:
  ```jsx
  import { useTranslation } from 'react-i18next';
  // ...
  const { t } = useTranslation();
  // ...
  <h1>{t('about.title')}</h1>
  ```
- For dynamic content (from Google Sheets), ensure event/pooja data includes translation keys or translated fields.

### d. Language Switcher

- Add a language selector component (dropdown or buttons).
- Store selected language in context or localStorage.
- Update i18n language on selection.

## 6. Testing

- Test all pages/components in all three languages.
- Ensure fallback to English for missing translations.

## 7. Maintenance

- Update the Google Sheet for new/changed content.
- Re-run the fetch/export script to update JSON files.
- Re-deploy the app as needed.
