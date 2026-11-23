/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Emshey Family',
  url: 'https://emshey.ca',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
        },
        blog: false,
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Emshey Family',
      items: [{ to: '/family/', label: 'Family', position: 'left' }],
    },
  },
};
