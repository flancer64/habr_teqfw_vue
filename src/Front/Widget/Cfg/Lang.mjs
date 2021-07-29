/**
 * Language configuration widget.
 *
 * @namespace Fl64_Habr_Vue_Front_Widget_Cfg_Lang
 */
// MODULE'S VARS
const NS = 'Fl64_Habr_Vue_Front_Widget_Cfg_Lang';
const LANG_EN = 'en';
const LANG_RU = 'ru';

// MODULE'S FUNCTIONS
/**
 * Factory to create template for new Vue component instances.
 *
 * @memberOf Fl64_Habr_Vue_Front_Widget_Cfg_Lang
 * @returns {Fl64_Habr_Vue_Front_Widget_Cfg_Lang.vueCompTmpl}
 */
export default function Factory(spec) {
    // EXTRACT DEPS
    /** @type {Fl64_Habr_Vue_Front_Defaults} */
    const DEF = spec['Fl64_Habr_Vue_Front_Defaults$'];
    /** @type {TeqFw_I18n_Front_Lib} */
    const i18n = spec['TeqFw_I18n_Front_Lib$'];
    /** @type {Fl64_Habr_Vue_Front_Layout_Base.Factory} */
    const BaseLayoutFactory = spec['Fl64_Habr_Vue_Front_Layout_Base#'];

    // DEFINE WORKING VARS
    const template = `
<q-card class="bg-white">
    <q-card-section>
        <div class="text-subtitle2">{{$t('widget.cfg.lang.title')}}:</div>
        <q-option-group
                :options="optsLang"
                inline
                v-model="fldLang"
        ></q-option-group>
    </q-card-section>
</q-card>
`;

    // COMPOSE RESULT
    /**
     * Template to create new component instances using Vue.
     *
     * @const {Object} vueCompTmpl
     * @memberOf Fl64_Habr_Vue_Front_Widget_Cfg_Lang
     */
    return {
        teq: {package: DEF.NAME},
        name: NS,
        template,
        data() {
            return {
                fldLang: null,
            };
        },
        computed: {
            optsLang() {
                return [
                    {label: this.$t('widget.cfg.lang.lang.en'), value: LANG_EN},
                    {label: this.$t('widget.cfg.lang.lang.ru'), value: LANG_RU},
                ];
            },
        },
        watch: {
            fldLang(current, old) {
                if (old !== null && current !== old && (current === LANG_RU || current === LANG_EN)) {
                    i18n.getI18n().changeLanguage(current);
                    // increment lang counter to refresh all components starting from base layout
                    BaseLayoutFactory.langChangeCounter.value++;
                }
            }
        },
        mounted() {
            this.fldLang = i18n.getLang();
        },
    };
}
// to get namespace on debug
Object.defineProperty(Factory, 'name', {value: `${NS}.${Factory.name}`});

