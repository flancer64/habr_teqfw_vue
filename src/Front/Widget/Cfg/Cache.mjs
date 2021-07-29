/**
 * Cache configuration widget.
 *
 * @namespace Fl64_Habr_Vue_Front_Widget_Cfg_Cache
 */
// MODULE'S VARS
const NS = 'Fl64_Habr_Vue_Front_Widget_Cfg_Cache';

// MODULE'S FUNCTIONS
/**
 * Factory to create template for new Vue component instances.
 *
 * @memberOf Fl64_Habr_Vue_Front_Widget_Cfg_Cache
 * @returns {Fl64_Habr_Vue_Front_Widget_Cfg_Cache.vueCompTmpl}
 */
export default function Factory(spec) {
    // EXTRACT DEPS
    /** @type {Fl64_Habr_Vue_Front_Defaults} */
    const DEF = spec['Fl64_Habr_Vue_Front_Defaults$'];

    // DEFINE WORKING VARS
    const template = `
<q-card class="bg-white">
    <q-card-section>
        <div class="text-subtitle2">
        {{$t('widget.cfg.cache.title')}}:
        <span v-if="cacheIsCleaned">{{$t('widget.cfg.cache.done')}}</span>
        </div>
    </q-card-section>
    <q-card-actions align="center">
        <q-btn
                color="primary"
                v-on:click="onClean"
        >{{$t('widget.cfg.cache.btn')}}
        </q-btn>
    </q-card-actions>
</q-card>
`;

    // COMPOSE RESULT
    /**
     * Template to create new component instances using Vue.
     *
     * @const {Object} vueCompTmpl
     * @memberOf Fl64_Habr_Vue_Front_Widget_Cfg_Cache
     */
    return {
        teq: {package: DEF.NAME},
        name: NS,
        template,
        data() {
            return {
                cacheIsCleaned: false
            }
        },
        methods: {
            async onClean() {
                const res = await fetch('./sw/cache/clean', {
                    method: 'POST'
                });
                const json = await res.json();
                if (json.result) {
                    this.cacheIsCleaned = true;
                    setTimeout(() => {
                        this.cacheIsCleaned = false;
                    }, 2000);
                }
            }
        },
    };
}
// to get namespace on debug
Object.defineProperty(Factory, 'name', {value: `${NS}.${Factory.name}`});

