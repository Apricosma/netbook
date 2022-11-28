import { User } from './user-class.js';

class Subscriber extends User {
    #pages
    #groups
    #canMonetize

    constructor(id, name, userName, email, pages, groups, canMonetize) {
        super(id, name, userName, email);        
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    get pages() {
        return this.#pages;
    }

    get groups() {
        return this.#groups;
    }

    get canMonetize() {
        return this.#canMonetize;
    }

    getInfo() {
        const info = [
            this.id,
            this.name,
            this.userName,
            this.email,
            this.pages,
            this.groups,
            this.canMonetize];
        return info;
    }
}

export { Subscriber }