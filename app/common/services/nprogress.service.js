const NProgress = require('nprogress');
let np;

class NprogressService {
    start() {
        if ("undefined" != typeof NProgress) {
            NProgress.start();
        }
    }
    done() {
        if ("undefined" != typeof NProgress) {
            setTimeout(() => NProgress.done(), 1000);
        }
    }
}

np = new NprogressService();

module.exports = np;