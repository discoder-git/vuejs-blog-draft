<template lang="html">
    <footer class="footer">
        <div class="footer__item">
            <auxiliary-navigation></auxiliary-navigation>
        </div>
        <div class="footer__item">
            <span>Copyright 2017</span>
        </div>
    </footer>
</template>

<script>
import AuxiliaryNavigation  from './auxiliary-navigation.vue'

export default {
    components: {
        AuxiliaryNavigation
    }
}
</script>

<style lang="less">
@import (reference) "../../less/vars.less";
@import (reference) "../../less/mixins.less";

.footer {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    background: #fff;
    border-top: 1px solid lighten(@colorBasicGray, 60%);
    padding: 20px 7%;
    margin: 0 0 80px;
}

@media only screen and (max-width: 1024px) {

    .footer {
        margin: 0;
    }
}
</style>
