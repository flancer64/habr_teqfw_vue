/**
 * Web application.
 *
 * Load config and i18n dictionary from server, initialize Vue (add router, Quasar UI, i18next),
 * create and mount root vue component.
 */
// MODULE'S VARS
const NS = 'Fl64_Habr_Vue_Front_App';

export default class Fl64_Habr_Vue_Front_App {
    constructor(spec) {
        const {createApp} = spec['TeqFw_Vue_Front_Lib_Vue'];
        const {createRouter, createWebHashHistory} = spec['TeqFw_Vue_Front_Lib_Router'];
        /** @type {Fl64_Habr_Vue_Front_Defaults} */
        const _DEF = spec['Fl64_Habr_Vue_Front_Defaults$'];
        /** @type {TeqFw_Di_Shared_Container} */
        const _container = spec['TeqFw_Di_Shared_Container$'];
        /** @type {TeqFw_Web_Front_Model_Config} */
        const _config = spec['TeqFw_Web_Front_Model_Config$'];
        /** @type {TeqFw_I18n_Front_Lib} */
        const _I18nLib = spec['TeqFw_I18n_Front_Lib$'];
        /** @type {Fl64_Habr_Vue_Front_Layout_Base} */
        const _layoutBase = spec['Fl64_Habr_Vue_Front_Layout_Base$'];
        /** @type {TeqFw_Ui_Quasar_Front_Lib} */
        const _quasar = spec['TeqFw_Ui_Quasar_Front_Lib'];

        // DEFINE WORKING VARS / PROPS
        let _root; // root vue component for the application

        // DEFINE INSTANCE METHODS

        /**
         * Initialize application.
         *
         * @return {Promise<void>}
         */
        this.init = async function () {
            // DEFINE INNER FUNCTIONS

            /**
             * Setup working languages and fallback language and add translation function to the Vue.
             *
             * @param {Object} app
             * @param {TeqFw_I18n_Front_Lib} I18nLib
             * @return {Promise<void>}
             * @memberOf Fl64_Habr_Vue_Front_App.init
             */
            async function initI18n(app, I18nLib) {
                await I18nLib.init(['en', 'ru'], 'en');
                const appProps = app.config.globalProperties;
                const i18n = I18nLib.getI18n();
                // add translation function to Vue
                appProps.$t = function (key, options) {
                    // add package name if namespace is omitted in the key
                    const ns = this.$options.teq?.package;
                    if (ns && key.indexOf(':') <= 0) key = `${ns}:${key}`;
                    return i18n.t(key, options);
                }
            }

            function initQuasarUi(app, quasar) {
                app.use(quasar, {config: {}});
                quasar.iconSet.set(quasar.iconSet.svgMaterialIcons);
            }

            function initRouter(app, DEF, container) {
                /** @type {{addRoute}} */
                const router = createRouter({
                    history: createWebHashHistory(),
                    routes: [],
                });
                // setup application routes (load es6-module on demand with DI-container)
                router.addRoute({
                    path: DEF.ROUTE_HOME,
                    component: () => container.get('Fl64_Habr_Vue_Front_Route_Home$')
                });
                router.addRoute({
                    path: DEF.ROUTE_CFG,
                    component: () => container.get('Fl64_Habr_Vue_Front_Route_Cfg$')
                });
                //
                app.use(router);
            }

            // MAIN FUNCTIONALITY

            // create root vue component
            _root = createApp({
                teq: {package: _DEF.NAME},
                name: NS,
                template: '<router-view/>',
            });
            // ... and add global available components
            _root.component('LayoutBase', _layoutBase);

            // other initialization
            await _config.init({}); // this app has no separate 'doors' (entry points)
            await initI18n(_root, _I18nLib);
            initQuasarUi(_root, _quasar);
            initRouter(_root, _DEF, _container);
        }

        /**
         * Mount root vue component of the application to DOM element.
         *
         * @see https://v3.vuejs.org/api/application-api.html#mount
         *
         * @param {Element|string} elRoot
         * @return {Object} the root component instance
         */
        this.mount = function (elRoot) {
            return _root.mount(elRoot);
        }
    }

}
