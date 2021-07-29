/**
 * Navigator for base layout.
 *
 * @namespace Fl64_Habr_Vue_Front_Layout_Navigator
 */
// MODULE'S VARS
const NS = 'Fl64_Habr_Vue_Front_Layout_Navigator';

// MODULE'S FUNCTIONS
/**
 * Factory to create template for new Vue component instances.
 *
 * @memberOf Fl64_Habr_Vue_Front_Layout_Navigator
 * @returns {Fl64_Habr_Vue_Front_Layout_Navigator.vueCompTmpl}
 */
export default function Factory(spec) {
    // EXTRACT DEPS
    /** @type {Fl64_Habr_Vue_Front_Defaults} */
    const DEF = spec['Fl64_Habr_Vue_Front_Defaults$'];

    // DEFINE WORKING VARS
    const template = `
<div class="t-grid rows gutter-md">
      
    <q-list bordered padding class="rounded-borders text-primary">

        <q-item to="${DEF.ROUTE_HOME}"
                clickable
                v-ripple
                active-class="bg-primary text-white"
        >
            <q-item-section avatar>
                <q-icon name="home"/>
            </q-item-section>
            <q-item-section>{{$t('navig.home')}}</q-item-section>
        </q-item>

        <q-item to="${DEF.ROUTE_CFG}"
                clickable
                v-ripple
                active-class="bg-primary text-white"
        >
            <q-item-section avatar>
                <q-icon name="settings"/>
            </q-item-section>
            <q-item-section>{{$t('navig.config')}}</q-item-section>
        </q-item>

    </q-list>    

</div>
`;

    // COMPOSE RESULT
    /**
     * Template to create new component instances using Vue.
     *
     * @const {Object} vueCompTmpl
     * @memberOf Fl64_Habr_Vue_Front_Layout_Navigator
     */
    return {
        teq: {package: DEF.NAME},
        name: NS,
        template,
    };
}
// to get namespace on debug
Object.defineProperty(Factory, 'name', {value: `${NS}.${Factory.name}`});

