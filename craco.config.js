const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1DA57A',
              '@layout-header-background': '#3c5438',
              '@layout-sider-background': '#3c5438',
              '@menu-dark-submenu-bg': '#3c5438',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
