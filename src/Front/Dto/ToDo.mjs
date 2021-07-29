/**
 * 'To Do' DTO for frontend.
 */
// MODULE'S VARS
const NS = 'Fl64_Habr_Vue_Front_Dto_ToDo';

// MODULE'S CLASSES
export default class Fl64_Habr_Vue_Front_Dto_ToDo {
    /** @type {string} */
    content;
    /** @type {boolean} */
    done;
}

/**
 * Factory to create new DTO instances.
 * @memberOf Fl64_Habr_Vue_Front_Dto_ToDo
 */
export class Factory {
    constructor() {
        /**
         * @param {Fl64_Habr_Vue_Front_Dto_ToDo|null} data
         * @return {Fl64_Habr_Vue_Front_Dto_ToDo}
         */
        this.create = function (data = null) {
            const res = new Fl64_Habr_Vue_Front_Dto_ToDo();
            res.content = data?.content;
            res.done = data?.done ?? false;
            return res;
        }
    }
}

// finalize code components for this es6-module
Object.freeze(Fl64_Habr_Vue_Front_Dto_ToDo);
Object.defineProperty(Factory, 'name', {value: `${NS}.${Factory.constructor.name}`});

