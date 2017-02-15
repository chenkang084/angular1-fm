// const Promise = require('bluebird');

class BootstrapService {

}

BootstrapService.promise = new Promise((resolve) => {
    BootstrapService.resolve = resolve;
})

module.exports = BootstrapService;