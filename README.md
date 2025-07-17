<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/9113740/201498864-2a900c64-d88f-4ed4-b5cf-770bcb57e1f5.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/9113740/201498152-b171abb8-9225-487a-821c-6ff49ee48579.png">
</picture>

<div align="center"><strong>Next.js Admin Dashboard Starter Template With Shadcn-ui</strong></div>
<div align="center">Built with the Next.js 15 App Router</div>
<br />
<div align="center">
<span>
</div>

## Overview

This is a starter template using the following stack:

- Framework - [Next.js 15](https://nextjs.org/13)
- Language - [TypeScript](https://www.typescriptlang.org)
- Auth - [Clerk](https://go.clerk.com/ILdYhn7)
- Styling - [Tailwind CSS v4](https://tailwindcss.com)
- Components - [Shadcn-ui](https://ui.shadcn.com)
- Schema Validations - [Zod](https://zod.dev)
- State Management - [Zustand](https://zustand-demo.pmnd.rs)
- Search params state manager - [Nuqs](https://nuqs.47ng.com/)
- Tables - [Tanstack Data Tables](https://ui.shadcn.com/docs/components/data-table) • [Dice table](https://www.diceui.com/docs/components/data-table)
- Forms - [React Hook Form](https://ui.shadcn.com/docs/components/form)
- Command+k interface - [kbar](https://kbar.vercel.app/)
- Linting - [ESLint](https://eslint.org)
- Pre-commit Hooks - [Husky](https://typicode.github.io/husky/)
- Formatting - [Prettier](https://prettier.io)

_If you are looking for a Tanstack start dashboard template, here is the [repo](https://git.new/tanstack-start-dashboard)._

## Commit Code Guidelines

To ensure consistency and clarity in commit history, please follow the commit rules below.

#### Commit Message Structure

```bash
<type>: <subject>

<body>

<footer>

```

Where:

- **type**: The type of change (required, lowercase)
- **subject**: A brief description of the change (required, no all caps, no period at the end)
- **body**: A detailed description of the change, max 100 characters per line (optional, must follow rule if included)
- **footer**: Additional information such as ticket ID, breaking changes, etc., max 100 characters per line (optional,
  must follow rule if included)

#### Type

| Type     | Meaning                                                    |
| -------- | ---------------------------------------------------------- |
| build    | Changes related to the build system or dependencies        |
| chore    | Miscellaneous tasks that don't affect source or tests      |
| ci       | CI/CD configuration changes                                |
| docs     | Documentation updates                                      |
| feat     | Add new feature                                            |
| fix      | Bug fix                                                    |
| perf     | Performance optimization                                   |
| refactor | Refactor code, no feature added or bug fixed               |
| revert   | Revert previous commit                                     |
| style    | Code style changes (formatting, missing semi-colons, etc.) |
| test     | Add or update tests                                        |
