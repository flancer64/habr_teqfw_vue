/**
 * 'To Do' item widget.
 *
 * @namespace Fl64_Habr_Vue_Front_Widget_ToDo_Item
 */
// MODULE'S VARS
const NS = 'Fl64_Habr_Vue_Front_Widget_ToDo_Item';
const EVT_DEL = 'onDelete';
const EVT_UPD = 'onUpdate';

// MODULE'S FUNCTIONS
/**
 * Factory to create template for new Vue component instances.
 *
 * @memberOf Fl64_Habr_Vue_Front_Widget_ToDo_Item
 * @returns {Fl64_Habr_Vue_Front_Widget_ToDo_Item.vueCompTmpl}
 */
export default function Factory(spec) {
    // EXTRACT DEPS
    /** @type {Fl64_Habr_Vue_Front_Defaults} */
    const DEF = spec['Fl64_Habr_Vue_Front_Defaults$'];

    // DEFINE WORKING VARS
    const template = `
<q-item>
    <q-item-section>
        <q-item-label :style="computedStyle">{{id+1}}. {{item.content}}</q-item-label>
    </q-item-section>
    <q-item-section side
                    style="display:grid; grid-template-columns: 1fr 1fr; column-gap: 10px; align-content: center"
    >
        <q-btn icon="done"
               color="primary"
               push
               round
               v-if="!item.done"
               v-on:click="(item.done=!item.done); $emit('${EVT_UPD}');"
        />
        <q-btn icon="undo"
               color="primary"
               push
               round
               v-if="item.done"
               v-on:click="(item.done=!item.done); $emit('${EVT_UPD}');"
        />
        <q-btn icon="delete"
               color="primary"
               push
               round
               v-on:click="$emit('${EVT_DEL}', id);"
        />
    </q-item-section>
</q-item>
`;

    // COMPOSE RESULT
    /**
     * Template to create new component instances using Vue.
     *
     * @const {Object} vueCompTmpl
     * @memberOf Fl64_Habr_Vue_Front_Widget_ToDo_Item
     */
    return {
        teq: {package: DEF.NAME},
        name: NS,
        template,
        props: {
            /** @type {number} array index */
            id: null,
            /** @type {Fl64_Habr_Vue_Front_Dto_ToDo} */
            item: null,
        },
        computed: {
            computedStyle() {
                return this.item.done ? 'text-decoration: line-through;' : '';
            }
        },
        emits: [EVT_DEL, EVT_UPD],
    };
}
// to get namespace on debug
Object.defineProperty(Factory, 'name', {value: `${NS}.${Factory.name}`});

