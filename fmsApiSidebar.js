module.exports = {
  fmsApiSidebar: [
    {
      type: "doc",
      id: "introduction",
      label: "Introduction",
    },
    {
      type: "category",
      label: "ANSCER ANYA FMS API",
      link: {
        type: "generated-index",
        title: "ANSCER ANYA FMS API",
      },
      collapsed: false,
      items: (() => {
        try {
          return require("./api/ansceranyafms/v1/sidebar.js");
        } catch (error) {
          return [];
        }
      })(),
    },
  ],
};
