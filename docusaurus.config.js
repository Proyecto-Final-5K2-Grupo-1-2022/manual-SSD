// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual de Usuario',
  tagline: 'Sistema de Soporte a Distribuidora Central',
  url: 'https://proyecto-final-5k2-grupo-1-2022.github.io/',
  baseUrl: '/manual-SSD/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Proyecto-Final-5K2-Grupo-1-2022', // Usually your GitHub org/user name.
  projectName: 'manual-SSD', // Usually your repo name.
  deploymentBranch: 'deploy',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         //  editUrl:
         //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Inicio',
        logo: {
          alt: 'My Site Logo',
          src: 'img/LogoDistribuidoraCentral.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
         // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://ssd-proyectofinal.systems/',
            label: 'Volver a SSD',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentos',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          
          {
            title: '¡Encontranos en las Redes!',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/distribuidacentral.cba/',
              },
              {
                label: 'Whatsapp',
                href: 'https://web.whatsapp.com/',
              },
              {
                label: 'distribuidoracentral.cba@gmail.com',
                href: 'https://gmail.com'
              } 
            ],
          },
          {
            title: 'Acerca de nosotros',
            items: [
              {
                label: 'Contactanos',
                href: 'https://ssd-proyectofinal.systems/about',
              },
            ],
          },
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SSD, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
