This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Code linting

We are mainly using eslint with rule configured in `.eslintrs.json` file. More options can be found at https://eslint.org/docs/latest/rules/

To make VSCode automatically format on save, follows belowed steps:

- Hit Control + Shift + P (On Mac you would want to hit the Command key instead of Control) and search for >Format Document With.... Check if that work.

- If it works, then maybe your setting is overridden. Open your settings.json file (Use Control + ,, then on the top right corner you would see the open settings.json). Check the javascriptreact section.

- Here is the example: this setting turns on formatOnSave for all the document type, but with .jsx extension, the formatOnSave is disabled, instead the files are formatted using eslint

```
{
  // Other settings, don't mind it
  // ...

  "editor.formatOnSave": true,
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "editor.formatOnSave": false
  },

  // Other settings, don't mind it
  // ...
}
```

You may want to update the settings based on your need.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
