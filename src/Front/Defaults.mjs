/**
 * Plugin constants (hardcoded configuration) for frontend code.
 */
export default class Fl64_Habr_Vue_Front_Defaults {
    NAME = '@flancer64/habr_teqfw_vue'; // name from NPM package to use as i18next namespace
    DATA_TODO = 'todoItems'; // key to put/get To Do items to/from local storag<e
    DI_LANG_COUNT = 'appLangCounter'; // dependency ID for Vue 3 ref-object to refresh UI on lang change>
    // FRONTEND ROUTES
    ROUTE_CFG = '/cfg';
    ROUTE_HOME = '/';

    constructor() {
        Object.freeze(this);
    }
}
