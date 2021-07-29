/**
 * Route widget for app home.
 *
 * @namespace Fl64_Habr_Vue_Front_Route_Home
 */
// MODULE'S VARS
const NS = 'Fl64_Habr_Vue_Front_Route_Home';

// MODULE'S FUNCTIONS
/**
 * Factory to create template for new Vue component instances.
 *
 * @memberOf Fl64_Habr_Vue_Front_Route_Home
 * @returns {Fl64_Habr_Vue_Front_Route_Home.vueCompTmpl}
 */
export default function Factory(spec) {
    // EXTRACT DEPS
    /** @type {Fl64_Habr_Vue_Front_Defaults} */
    const DEF = spec['Fl64_Habr_Vue_Front_Defaults$'];
    /** @type {Fl64_Habr_Vue_Front_Widget_ToDo_New.vueCompTmpl} */
    const todoNew = spec['Fl64_Habr_Vue_Front_Widget_ToDo_New$'];
    /** @type {Fl64_Habr_Vue_Front_Widget_ToDo_List.vueCompTmpl} */
    const todoList = spec['Fl64_Habr_Vue_Front_Widget_ToDo_List$'];
    /** @type {Fl64_Habr_Vue_Front_Dto_ToDo.Factory} */
    const fItem = spec['Fl64_Habr_Vue_Front_Dto_ToDo#Factory$'];

    // DEFINE WORKING VARS
    const template = `
<layout-base>
    <div class="q-pa-xs q-gutter-xs">
        <q-card class="bg-white">
            <todo-new :items="items"/>
        </q-card>
        <q-card class="bg-white">
            <todo-list :items="items"/>
        </q-card>
    </div>
</layout-base>
`;

    // COMPOSE RESULT
    /**
     * Template to create new component instances using Vue.
     *
     * @const {Object} vueCompTmpl
     * @memberOf Fl64_Habr_Vue_Front_Route_Home
     */
    return {
        teq: {package: DEF.NAME},
        name: NS,
        template,
        components: {todoNew, todoList},
        data: function () {
            return {
                items: []
            };
        },
        created() {
            const def = [
                {content: 'Составить план на сегодня', done: false},
                {content: 'Выполнить первый пункт', done: false},
                {content: 'Осознать, что 2 вещи уже сделаны', done: false},
                {content: 'Отдохнуть от проделанной работы', done: false},
            ];
            const saved = JSON.parse(localStorage.getItem(DEF.DATA_TODO)) || def;
            if (Array.isArray(saved)) {
                for (const one of saved) {
                    const item = fItem.create(one);
                    this.items.push(item);
                }
            }

        },
    };
}

// MODULE'S EXPORT
Object.defineProperty(Factory, 'name', {value: `${NS}.${Factory.constructor.name}`});
