# primo-world-assignment-frontend

UI Project for Primo World Assignment

## Environment

Copy `.env.template` to `.env` and fill in the values. Real environment variables take precedence over `.env`.

```bash
$ cp .env.template .env
```

| Variable | Required | Description |
| --- | --- | --- |
| `VITE_API_BASE_URL` | yes | Base URL of the backend API, e.g. `http://localhost:8000`. Used by `POST /get-encrypt-data`, `POST /get-decrypt-data` and `POST /merge` |
| `VITE_PRIMEUI_LICENSE` | yes | PrimeUI license key, passed to PrimeVue's `license` option |
| `VITE_FIREBASE_API_KEY` | no | Firebase web app API key, used for Google sign-in |
| `VITE_FIREBASE_AUTH_DOMAIN` | no | Firebase auth domain, used for Google sign-in |
| `VITE_FIREBASE_PROJECT_ID` | no | Firebase project ID, used for Google sign-in |
| `VITE_FIREBASE_APP_ID` | no | Firebase web app ID, used for Google sign-in |

The `VITE_FIREBASE_*` variables must be set together. If any of them is missing, the app runs without Firebase and requests are sent without a sign-in token.

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
yarn build

# Runs the end-to-end tests
yarn test:e2e
# Runs the tests only on Chromium
yarn test:e2e --project=chromium
# Runs the tests of a specific file
yarn test:e2e tests/example.spec.ts
# Runs the tests in debug mode
yarn test:e2e --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
