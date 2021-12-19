/**
 * Model for language switcher.
 */
export default class Fl64_Habr_Vue_Front_Model_Lang {
    #data;

    constructor(spec) {
        const {ref} = spec['TeqFw_Vue_Front_Lib_Vue'];
        this.#data = ref(0);
    }

    getData() {
        return this.#data;
    }
}
