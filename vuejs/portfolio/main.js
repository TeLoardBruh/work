const links = [
  {
    id: 1,
    href: "/",
    name: "Home",
  },
  {
    id: 2,
    href: "/portfolio",
    name: "Portfolio",
  },
  {
    id: 3,
    href: "/contact",
    name: " Contact Me",
  },
];
const posts = [
  {
    id: 1,
    header: `Master Vue 3`,
    description: `I'm baby chambray street art thundercats occupy four loko
    church-key disrupt. Shaman neutra bushwick chicharrones, tousled
    air plant lomo williamsburg. Listicle aesthetic whatever prism,
    ennui glossier asymmetrical scenester austin intelligentsia
    cronut raw denim umami mumblecore. Lo-fi meh austin, selfies
    hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
    tumeric.`,
  },
  {
    id: 2,
    header: `Vue 3 Looping`,
    description: `I'm baby chambray street art thundercats occupy four loko
    church-key disrupt. Shaman neutra bushwick chicharrones, tousled
    air plant lomo williamsburg. Listicle aesthetic whatever prism,
    ennui glossier asymmetrical scenester austin intelligentsia
    cronut raw denim umami mumblecore. Lo-fi meh austin, selfies
    hell of tacos 90's vinyl banh mi tbh bicycle rights mumblecore
    tumeric..`,
  },
];

Vue.createApp({
  data() {
    return {
      links,
      posts,
      darkModeSet: false,
      darkMode: {
        transition: "2s",
        background: "#38383a",
        color: "whitesmoke",
      },
      base: {
        fontFamily: "monospace",
        transition: "2s",
      },
    };
  },
  methods: {
    switchTheme() {
      this.darkModeSet = !this.darkModeSet;
    },
  },
}).mount("body");
