// Example Configuration File
module.exports = {
    plugins: [
      '@snowpack/plugin-react-refresh',
    ],
    installOptions: {
      /* ... */
    },
    devOptions: {
      /* ... */
    },
    buildOptions: {
      /* ... */
    },
    mount: {
      public: '/',
      src: '/dist',
    },
    alias: {
      components: './src/components',
      context: './src/context',
      routes: './src/routes',
      theme: './src/theme',
      views: './src/views',
    },
  };