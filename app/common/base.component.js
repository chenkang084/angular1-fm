class BaseComponent {
    constructor() {
        this.bindToController = true;
        this.controllerAs = 'vm';
        this.restrict = 'E';
    }

}

module.exports = BaseComponent;