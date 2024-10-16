// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'mvl-app',
      removal: input?.stage === 'main' ? 'retain' : 'remove',
      home: 'aws',
      providers: {
        aws: {
          region: 'eu-west-2',
        },
      },
    }
  },
  async run() {
    const publicKey = new sst.Secret('PublicKey')
    const marvelKey = new sst.Secret('MarvelKey')

    new sst.aws.Astro('mvl-app-astro', {
      link: [publicKey, marvelKey],
      buildCommand: 'bun run build',
      domain:
        $app.stage === 'main'
          ? {
              name: 'mvl.mightydinosaur.dev',
              dns: sst.aws.dns(),
            }
          : undefined,
    })
  },
})
