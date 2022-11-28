class User {
    #id;
    #name;
    #userName
    #email;

    constructor(id, name, userName, email) {
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }

    set id(id) {
        this.#id = id;
    }

    get id() {
        return this.#id;
    }

    set name(name) {
        this.#name = name;
    }

    get name() {
        return this.#name
    }

    set userName(userName) {
        this.#userName = userName;
    }

    get userName() {
        return this.#userName;
    }

    set email(email) {
        this.#email = email;
    }

    get email() {
        return this.#email;
    }

    getInfo() {
        const info = [this.id, this.name, this.userName, this.email]
        return info;
    }
}

export {User};