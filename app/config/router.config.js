const routerConfig = [
    {
        url: '/',
        component: 'home',
        params: {
            name: "home",
            label: "Home",
            // reloadOnSearch: true
        }
    },
    {
        url: '/home',
        component: 'home',
        params: {
            name: "home",
            label: "Home",
            // reloadOnSearch: true
        }
    },
    {
        url: '/about',
        component: 'about',
        params: {
            name: "about",
            label: "about",
            // reloadOnSearch: true
        }
    }


];

module.exports = routerConfig;