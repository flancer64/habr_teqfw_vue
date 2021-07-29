/**
 * 'To Do' list widget.
 *
 * @namespace Fl64_Habr_Vue_Front_Widget_ToDo_List
 */
// MODULE'S VARS
const NS = 'Fl64_Habr_Vue_Front_Widget_ToDo_List';

// MODULE'S FUNCTIONS
/**
 * Factory to create template for new Vue component instances.
 *
 * @memberOf Fl64_Habr_Vue_Front_Widget_ToDo_List
 * @returns {Fl64_Habr_Vue_Front_Widget_ToDo_List.vueCompTmpl}
 */
export default function Factory(spec) {
    // EXTRACT DEPS
    /** @type {Fl64_Habr_Vue_Front_Defaults} */
    const DEF = spec['Fl64_Habr_Vue_Front_Defaults$'];
    /** @type {Fl64_Habr_Vue_Front_Widget_ToDo_Item.vueCompTmpl} */
    const todoItem = spec['Fl64_Habr_Vue_Front_Widget_ToDo_Item$'];

    // DEFINE WORKING VARS
    const template = `
<q-card-section>
    <div v-if="!items.length" class="text-center">{{$t('widget.todo.list.empty')}}</div>
    <todo-item v-for="(item, id) in items" :item="item" :id="id" @onDelete="deleteItem" @onUpdate="updateItem"/>
</q-card-section>
`;

    // COMPOSE RESULT
    /**
     * Template to create new component instances using Vue.
     *
     * @const {Object} vueCompTmpl
     * @memberOf Fl64_Habr_Vue_Front_Widget_ToDo_List
     */
    return {
        teq: {package: DEF.NAME},
        name: NS,
        template,
        components: {todoItem},
        props: {
            items: null
        },
        methods: {
            deleteItem(id) {
                this.items.splice(id, 1);
                localStorage.setItem(DEF.DATA_TODO, JSON.stringify(this.items));
            },
            updateItem() {
                localStorage.setItem(DEF.DATA_TODO, JSON.stringify(this.items));
            }
        },
    };
}
// to get namespace on debug
Object.defineProperty(Factory, 'name', {value: `${NS}.${Factory.name}`});

