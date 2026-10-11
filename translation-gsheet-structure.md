# Google Sheet Structure for Translations

Create a Google Sheet with the following columns:

| Key                | Context/Description         | English (en)      | Hindi (hi)      | Telugu (te)     |
|--------------------|----------------------------|-------------------|-----------------|-----------------|
| header.home        | Main nav: Home             | Home              |                 |                 |
| header.events      | Main nav: Events           | Events            |                 |                 |
| ...                | ...                        | ...               | ...             | ...             |

- **Key**: Unique identifier for each string (matches your code translation keys).
- **Context/Description**: Brief explanation for translators.
- **English (en)**: Default text.
- **Hindi (hi)**: Hindi translation.
- **Telugu (te)**: Telugu translation.

Copy the keys and English text from translation-keys-sample.md into this sheet. Share the sheet with translators to fill Hindi and Telugu columns.

When ready, move to the next phase: writing the script to fetch/export translations from Google Sheets to JSON files for use in your app.
