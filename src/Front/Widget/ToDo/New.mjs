/**
 * New 'To Do' form widget.
 *
 * @namespace Fl64_Habr_Vue_Front_Widget_ToDo_New
 */
// MODULE'S VARS
const NS = 'Fl64_Habr_Vue_Front_Widget_ToDo_New';

// MODULE'S FUNCTIONS
/**
 * Factory to create template for new Vue component instances.
 *
 * @memberOf Fl64_Habr_Vue_Front_Widget_ToDo_New
 * @returns {Fl64_Habr_Vue_Front_Widget_ToDo_New.vueCompTmpl}
 */
export default function Factory(spec) {
    // EXTRACT DEPS
    /** @type {Fl64_Habr_Vue_Front_Defaults} */
    const DEF = spec['Fl64_Habr_Vue_Front_Defaults$'];
    /** @type {Fl64_Habr_Vue_Front_Dto_ToDo.Factory} */
    const fItem = spec['Fl64_Habr_Vue_Front_Dto_ToDo#Factory$'];

    // DEFINE WORKING VARS
    const template = `
<q-card-section>
    <q-input
            :label="$t('widget.todo.new.label')"
            v-model="fldTodo"
    ></q-input>
    <q-card-actions align="center">
        <q-btn
                color="primary"
                :disable="!fldTodo"
                v-on:click="onAdd"
        >{{$t('widget.todo.new.btn.add')}}
        </q-btn>
    </q-card-actions>
</q-card-section>
`;

    // COMPOSE RESULT
    /**
     * Template to create new component instances using Vue.
     *
     * @const {Object} vueCompTmpl
     * @memberOf Fl64_Habr_Vue_Front_Widget_ToDo_New
     */
    return {
        teq: {package: DEF.NAME},
        name: NS,
        template,
        data() {
            return {
                fldTodo: null
            }
        },
        props: {
            items: null
        },
        methods: {
            onAdd() {
                const item = fItem.create();
                item.content = this.fldTodo;
                this.items.push(item);
                this.fldTodo = '';
                localStorage.setItem(DEF.DATA_TODO, JSON.stringify(this.items));
            }
        },
    };
}
// to get namespace on debug
Object.defineProperty(Factory, 'name', {value: `${NS}.${Factory.name}`});

