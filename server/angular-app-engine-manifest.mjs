
export default {
  basePath: 'https://v-jessie-z.github.io/tsala-frontend',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
