/* eslint-disable */
/// <reference path="./.sst/platform/config.d.ts" />
/* eslint-enable */

const MVL_PUBLIC_KEY = new sst.Secret('PUBLICKEY')
const MVL_MARVEL_KEY = new sst.Secret('MARVELKEY')

export default $config({
  app(input) {
    return {
      name: 'mvl',
      removal: input?.stage === 'main' ? 'retain' : 'remove',
      home: 'aws',
      providers: { '@pulumiverse/vercel': '1.11.0' },
    }
  },
  async run() {
    new sst.aws.Astro('mvl-astro', {
      link: [MVL_PUBLIC_KEY, MVL_MARVEL_KEY],
      domain: {
        name: 'mvl.zom.sh',
        dns: sst.vercel.dns({ domain: 'zom.sh' }),
      },
    })
  },
})
