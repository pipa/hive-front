// pm2 install pm2-logrotate
// pm2 set pm2-logrotate:max_size 10M

module.exports = {
  apps : [
    {
      name: 'front',
      cwd: './',
      script: 'index.js',
      ignore_watch: ['node_modules'],
      watch: true,
      exec_mode: 'cluster',
      max_restarts: 20,
      max_memory_restart: '200M',
      watch_options: {
        usePolling: true,
        alwaysStat: true,
        useFsEvents: false,
        depth: 100
      },
      env: {
        PORT: 9999,
        NODE_ENV: 'dev'
      },
      env_testing: {
        PORT: 80,
        NODE_ENV: 'tst'
      },
      env_production: {
        PORT: 80,
        NODE_ENV: 'prd'
      }
    }
  ]
};
