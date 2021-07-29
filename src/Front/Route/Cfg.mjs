/**
 * Configuration route widget.
 *
 * @namespace Fl64_Habr_Vue_Front_Route_Cfg
 */
// MODULE'S VARS
const NS = 'Fl64_Habr_Vue_Front_Route_Cfg';

// MODULE'S FUNCTIONS
/**
 * Factory to create template for new Vue component instances.
 *
 * @memberOf Fl64_Habr_Vue_Front_Route_Cfg
 * @returns {Fl64_Habr_Vue_Front_Route_Cfg.vueCompTmpl}
 */
export default function Factory(spec) {
    // EXTRACT DEPS
    /** @type {Fl64_Habr_Vue_Front_Defaults} */
    const DEF = spec['Fl64_Habr_Vue_Front_Defaults$'];
    /** @type {Fl64_Habr_Vue_Front_Widget_Cfg_Lang.vueCompTmpl} */
    const langCfg = spec['Fl64_Habr_Vue_Front_Widget_Cfg_Lang$'];
    /** @type {Fl64_Habr_Vue_Front_Widget_Cfg_Cache.vueCompTmpl} */
    const cacheCfg = spec['Fl64_Habr_Vue_Front_Widget_Cfg_Cache$'];

    // DEFINE WORKING VARS
    const template = `
<layout-base>
    <div class="q-pa-xs q-gutter-xs">
        <lang-cfg/>
        <cache-cfg/>
    </div>
</layout-base>
`;

    // COMPOSE RESULT
    /**
     * Template to create new component instances using Vue.
     *
     * @const {Object} vueCompTmpl
     * @memberOf Fl64_Habr_Vue_Front_Route_Cfg
     */
    return {
        teq: {package: DEF.NAME},
        name: NS,
        template,
        components: {langCfg, cacheCfg},
    };
}

// MODULE'S EXPORT
Object.defineProperty(Factory, 'name', {value: `${NS}.${Factory.constructor.name}`});
