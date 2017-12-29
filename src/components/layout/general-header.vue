<template lang="html">
    <header class="header">
        <div class="header__item">
            <main-navigation-toggle></main-navigation-toggle>
        </div>
        <div class="header__item">
            <router-link to="/">
                <main-logo></main-logo>
            </router-link>
        </div>
        <div class="header__item">
            <button class="button button--icon" title="
Site settings will be available soon..." disabled>
                <icon name="cog" scale="2"></icon>
            </button>
        </div>
    </header>
</template>

<script>
import MainNavigationToggle from './main-navigation-toggle.vue'
import MainLogo             from './main-logo.vue'
import UserNavigation       from './user-navigation.vue'

export default {
    components: {
        MainNavigationToggle,
        MainLogo,
        UserNavigation
    }
}
</script>

<style lang="less">
@import (reference) "../../less/vars.less";
@import (reference) "../../less/mixins.less";

.header {
    position: fixed;
    z-index: 997;
    top: 0;
    left: 0;
    width: 100%;
    display: grid;
    grid-template-columns: 34px 1fr 34px;
    grid-column-gap: 20px;
    padding: 20px 3.5%;
    background: #fff;
    border-bottom: 1px solid lighten(@colorBasicGray, 60%);
    box-shadow: 0 1px 6px rgba(57,73,76,.35);
}
</style>
