# BOOWME Web App

This project use :
- [`Redux Toolkit`](https://redux-toolkit.js.org/)
- [`redux-persist`](https://github.com/rt2zz/redux-persist/blob/master/README.md)
- [`react-hook-form`](https://react-hook-form.com/)
- [`next-i18next`]()
- [`next-pwa`](https://github.com/shadowwalker/next-pwa) to create a progressive web app (PWA) powered by [Workbox](https://developers.google.com/web/tools/workbox/)
- [`tailwind`] PostCSS 7 compatibility build (https://tailwindcss.com/docs/installation#post-css-7-compatibility-build)

## Start learning
Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed. [`Start learning`](https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website)


## Install dependencies

```bash
yarn
```

## run project
### Env dev
```bash
yarn dev
```

### Env Production
```bash
# build project
yarn build
# start the project
yarn start
```

## Using Docker and Makefile

### Development environment - for doing testing

```
make build-development
make start-development
```

Open http://localhost:3001

### Staging environment - for doing UAT testing

```
make build-staging
make start-staging
```

Open http://localhost:3002

### Production environment - for users

```
make build-production
make start-production
```

Open http://localhost:3003

## Deploy your own

[deploy with Firebase](https://github.com/vercel/next.js/tree/canary/examples/with-firebase-hosting)


Deploy the project using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example)([Documentation](https://nextjs.org/docs/deployment)) :

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/progressive-web-app&project-name=progressive-web-app&repository-name=progressive-web-app)



## Documentation
- https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website
- https://redux-toolkit.js.org/
- https://github.com/rt2zz/redux-persist/blob/master/README.md
- https://github.com/isaachinman/next-i18next
- https://github.com/type-challenges/type-challenges
- https://www.benmvp.com/blog/polymorphic-react-components-typescript/