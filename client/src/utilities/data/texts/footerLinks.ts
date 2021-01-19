type TData = {
  copyrightColumn: {
    rowOne: string;
    rowTwo: string;
    rowThree: string;
  },
  linkColumn: {
    columnOne: {
      rowOne: string;
      rowTwo: string;
      rowThree: string;
    },
    columnTwo: {
      rowOne: string;
      rowTwo: string;
      rowThree: string;
      rowFour: string;
      rowFive: string;
    },
    columnThree: {
      rowOne: string;
      rowTwo: string;
      rowThree: string;
    },
    columnFour: {
      rowOne: string;
      rowTwo: string;
      rowThree: string;
    }
  }
}

const currentYear: string = new Date().getFullYear().toString();

const footerLinks: TData = {
  copyrightColumn: {
    rowOne: `\u00A9 2020 - ${currentYear} by tamasnvk`,
    rowTwo: "built with \u2764",
    rowThree: "using react & newsapi.org"
  },
  linkColumn: {
    columnOne: {
      rowOne: "Facebook",
      rowTwo: "Twitter",
      rowThree: "YouTube"
    },
    columnTwo: {
      rowOne: "Complaints & corrections",
      rowTwo: "Privacy",
      rowThree: "Terms & conditions",
      rowFour: "Help",
      rowFive: "Sitemap"
    },
    columnThree: {
      rowOne: "Work with us",
      rowTwo: "Advertise with us",
      rowThree: "Partner with us"
    },
    columnFour: {
      rowOne: "Contact us",
      rowTwo: "Newsletter",
      rowThree: "Subscription"
    }
  }
};

export default footerLinks;