# Calculator

[![Version](https://img.shields.io/badge/version-1.0.0-blue)](package.json)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

Calculator is a small Next.js application for performing quick arithmetic in the browser. It ships with two calculator experiences: a basic two-input calculator on the home page and an operator-driven advanced calculator on the advanced route.

## What this project does

- Provides a clean, browser-based calculator built with Next.js, React, TypeScript, and Tailwind CSS.
- Offers a basic calculator for addition, subtraction, multiplication, and division.
- Includes an advanced calculator with an operator selector and clear/reset flow.
- Supports light and dark themes through `next-themes` and a built-in theme toggle.

## Why it is useful

- Simple UI with fast access to common math operations.
- Separate routes for basic and advanced workflows so users can choose the interaction style they prefer.
- Modern stack that is easy to extend, test, and style.
- Component-based structure that keeps the calculator logic isolated and maintainable.

## Getting started

### Prerequisites

- Node.js 24 or newer
- npm 11 or newer

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build and preview

```bash
npm run build
npm run start
```

### Lint the project

```bash
npm run lint
```

### Usage

The app exposes two calculator views:

- Home: [src/app/page.tsx](src/app/page.tsx) renders the basic calculator.
- Advanced: [src/app/advanced/page.tsx](src/app/advanced/page.tsx) renders the advanced calculator.

Basic calculator example:

```text
1. Enter two numbers.
2. Choose an operation: +, -, *, or /.
3. Read the result in the preview field.
4. Use Reset to clear all fields.
```

Advanced calculator example:

```text
1. Enter the first number.
2. Select an operator.
3. Enter the second number.
4. Click Calculate, or All Clear to reset the form.
```

For implementation details, see [src/components/BasicCalculator.tsx](src/components/BasicCalculator.tsx) and [src/components/AdvancedCalculator.tsx](src/components/AdvancedCalculator.tsx).

## Help and documentation

- Project structure and shell setup live in [src/app/layout.tsx](src/app/layout.tsx).
- Theme handling is implemented in [src/components/Providers/ThemeProvider.tsx](src/components/Providers/ThemeProvider.tsx) and [src/components/ThemeToggleButton.tsx](src/components/ThemeToggleButton.tsx).
- Shared UI primitives live under [src/components/shadcnui](src/components/shadcnui).
- If you need help using or extending the app, start by reading the source files above and opening an issue in the repository.

## Maintainers and contributors

The project is maintained by Piyush Sarkar.

Contributions are welcome. Please keep changes focused, run `npm run lint` and `npm run build` before submitting a pull request, and follow the existing component and styling patterns in the codebase.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
