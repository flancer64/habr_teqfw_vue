/**
 * Base layout widget.
 *
 * @namespace Fl64_Habr_Vue_Front_Layout_Base
 */
// MODULE'S VARS
const NS = 'Fl64_Habr_Vue_Front_Layout_Base';

// MODULE'S FUNCTIONS
/**
 * Factory to create template for new Vue component instances.
 *
 * @memberOf Fl64_Habr_Vue_Front_Layout_Base
 * @returns {Fl64_Habr_Vue_Front_Layout_Base.vueCompTmpl}
 */
function Factory(spec) {
    // EXTRACT DEPS
    /** @type {Fl64_Habr_Vue_Front_Defaults} */
    const DEF = spec['Fl64_Habr_Vue_Front_Defaults$'];
    /** @type {TeqFw_Vue_Front_Lib} */
    const VueLib = spec['TeqFw_Vue_Front_Lib$'];
    /** @type {Fl64_Habr_Vue_Front_Layout_Navigator.vueCompTmpl} */
    const navigator = spec['Fl64_Habr_Vue_Front_Layout_Navigator$'];


    // DEFINE WORKING VARS
    /** @type {Function} */
    const ref = VueLib.getVue().ref;
    // use ':key' to refresh UI (https://v3.vuejs.org/api/special-attributes.html#key)
    const template = `
<q-layout view="hHh lpR fFf" :key="${DEF.DI_LANG_COUNT}">
    <q-header elevated class="bg-primary text-white">
        <q-toolbar>
            <q-avatar v-on:click="$router.push('${DEF.ROUTE_HOME}')">
                <img src="./img/favicon-192.png" alt="logo">
            </q-avatar>

            <q-toolbar-title class="text-center">{{$t('base.title')}}</q-toolbar-title>

            <q-btn dense flat round icon="menu" @click="toggleMenu"/>
        </q-toolbar>
    </q-header>

    <q-drawer v-model="menuOpen" side="right" overlay behavior="mobile" bordered>
        <navigator/>
    </q-drawer>

    <q-page-container>
        <slot/>
    </q-page-container>
    <div>Base: {{${DEF.DI_LANG_COUNT}}}</div>
</q-layout>
`;

    // COMPOSE RESULT
    /**
     * Template to create new component instances using Vue.
     *
     * @const {Object} vueCompTmpl
     * @memberOf Fl64_Habr_Vue_Front_Layout_Base
     */
    return {
        teq: {package: DEF.NAME},
        name: NS,
        template,
        components: {navigator},
        data() {
            return {
                menuOpen: false
            };
        },
        methods: {
            toggleMenu() {
                this.menuOpen = !this.menuOpen;
            },
        },
        inject: [DEF.DI_LANG_COUNT],
    };
}

// to get namespace on debug
Object.defineProperty(Factory, 'name', {value: `${NS}.${Factory.name}`});
export default Factory;
