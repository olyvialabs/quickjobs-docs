// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        language: "en",
        hashed: true
      }
    ],
  ],
  title: 'quickjobs',
  url: 'https://help.quickjobs.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-quickjobs.svg',


  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'user-manual-quickjobs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs:{
      en: {
        htmlLang: 'en-GB',
      },
      es:{
        label: 'Español',
      }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl: 'https://github.com/facebook/docusaurus/edit/master',
        // }, 
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag:{
          trackingID:'G-71PBBB83QT',
          anonymizeIP: true
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'quickjobs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo-quickjobs.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Help',
          },
          {
            type: 'localeDropdown',
            position: 'left',
          }
          
        ],
        
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
