module.exports = {
  apiSidebar: [
    {
      type: "doc",
      id: "introduction",
      label: "Introduction",
    },
    {
      type: "category",
      label: "ANSCER ANYA API",
      link: {
        type: "generated-index",
        title: "ANSCER ANYA API",
      },
      collapsed: false,
      items: (() => {
        try {
          return require("./api/ansceranya/v1/sidebar.js");
        } catch (error) {
          return [];
        }
      })(),
    },
  ],
};
