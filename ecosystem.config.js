module.exports = {
  apps: [
    {
      name: 'site-okulovka-auto.ru',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/site',
      env: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
    },
  ],
};
