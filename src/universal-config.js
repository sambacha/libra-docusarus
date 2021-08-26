module.exports = {
  title: "Yearn Finnace",
  tagline: "Governance",
  baseUrl: "/",
  organizationName: "diem",
  projectName: "diem",
  themeConfig: {
    logo: {
      alt: "Yearn Logo",
      src: "/img/shared/logo.svg",
      to: "https://www.yearn.finance/",
    },
    footer: {
      links: [
        {
          items: [
            {
              label: "Snapshot",
              to: "#",
            },
            {
              label: "Forums",
              to: "#",
            },
            {
              label: "Developers",
           to: "#",
            },
            {
              label: "Learn",
               to: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Media",
              to: "https://www.diem.com/media-press-news/",
            },
            {
              label: "White Paper",
              to: "https://www.diem.com/white-paper/",
            },
            {
              label: "Careers",
              to: "https://www.diem.com/careers/",
            },
          ],
        },
        {
          items: [
            {
              type: "secondary",
              label: "Privacy",
              to: "#",
            },
            {
              type: "secondary",
              label: "Cookies",
              to: "#",
            },
            {
              type: "secondary",
              label: "Terms of Use",
              to: "#",
            },
            {
              type: "secondary",
              label: "Code of Conduct",
              to: "#",
            },
          ],
        },
      ],
      copyright: `©${new Date().getFullYear()} Diem Association`,
    },
  },
  customFields: {
    socialLinks: {
      telegram: "#",
      twitter: "https://twitter.com/",
      github: "#",
    },
    navbar: {
      primaryLinks: [
        {
          label: "Vision",
          to: "#",
        },
        {
          label: "Ecosystem",
          to: "#",,
        },
        {
          id: "developers",
          label: "Developers",
          to: "#",
        },
        {
          label: "Learn",
          to: "#",
        },
        {
          label: "Discord",
          to: "#",
        },
      ],
      cornerLink: {
        label: "Wallet Connect",
        to: "#",
        image: {
          alt: "web3",
        },
      },
      secondaryLinks: [
        {
          id: "developers",
          label: "Documentation",
          to: "https://developers.diem.com/docs/welcome-to-diem/",
        },
        {
          id: "yips",
          label: "YIP Overview",
          to: "https://yips.yearn.finance/",
        },
        {
          label: "Community",
          to: "#",
        },
        {
          isExternal: true,
          label: "GitHub",
          to: "https://github.com/yearn/",
        },
      ],
    },
  },
};
