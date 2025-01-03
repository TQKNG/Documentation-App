import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { Options } from 'docusaurus-preset-openapi';



/** @type {import('@docusaurus/types').Config} */
const config: Config = {
  title: 'Virbrix Developer Docs',
  tagline: 'Documentation for Virbrix API and SDK',
  favicon: 'img/virbrix-favicon.png',

  // Set the production url of your site here
  url: 'https://stgvirbrix.azurewebsites.net/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'GlobalDWS', // Usually your GitHub org/user name.
  projectName: 'Virbrix Integration', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
    // [
    //   "docusaurus-preset-openapi",
    //   {
    //     api: {
    //       sidebarPath: require.resolve("./sidebars.ts"),
    //       routeBasePath: "/api",
    //     },
    //     docs: {
    //       sidebarPath: require.resolve("./sidebars.ts"),
    //       routeBasePath: "/",
    //     },
    //     theme: {
    //       customCss: require.resolve("./src/css/custom.css"),
    //     },
    //   },
    // ],
  ],
  plugins: [
    // [
    //   'docusaurus-plugin-openapi',
    //   {
    //     id: 'trains',
    //     path: 'trains/openapi.json',
    //     routeBasePath: 'trains',
    //     // ... other options
    //   },
    // ],
    // [
    //   'docusaurus-plugin-openapi',
    //   {
    //     id: 'bikes',
    //     path: 'bikes/openapi.json',
    //     routeBasePath: 'bikes',
    //     // ... other options
    //   },
    // ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: 'img/virbrix-social-card.png',
    navbar: {
      title: 'Virbrix Developer Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/virbrix-favicon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guides',
        },
        {to: '/api', label: 'API', position: 'left'},
        {
          href: 'https://github.com/globaldws/VirBrix',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GlobalDWS`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
