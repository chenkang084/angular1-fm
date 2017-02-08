const routerConfig = [{
        url: '/',
        component: 'home',
        params: {
            name: "Home",
            label: "Home",
            // reloadOnSearch: true
        }
    },
    {
        url: '/about',
        component: 'about',
        params: {
            name: "About",
            label: "About",
            // reloadOnSearch: true
        }
    }


];

module.exports = routerConfig;