module.exports = {
    apps: [
        {
            name: 'TypeScript App',
            script: 'dist/main.js',
            watch: 'dist',
            watch_delay: 4000,
            env: {
                NODE_ENV: 'production'
            }
        }
    ]
};
