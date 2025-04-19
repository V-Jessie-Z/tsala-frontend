
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://v-jessie-z.github.io/tsala-frontend/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/tsala-frontend"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 540, hash: '26106a83ad2971087cdebc9a45e6624c2a51615b2deec224c267dfb507b6b713', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1053, hash: '0a0a6894b836d959c875551dcdbd55aa75c053b9871f38acb6f81c8b623a7399', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20977, hash: '79a11dfb6202bcae43a8fdeb5b5f96bcb06e13188865c6f0c5f9bd5f7032ecb3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
