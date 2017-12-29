<template lang="html">
    <div class="logo">
        <span class="logo__inner">Nazar Linovetskiy</span>
    </div>
</template>

<style lang="less">
@import (reference) "../../less/vars.less";

.logo {
    display: inline-block;
    vertical-align: middle;

    &__inner {
        font-family: 'Raleway', sans-serif;
        color: @colorBasicGray;
        font-weight: 700;
        background: @colorBasicYellow;
        text-shadow: 2px 2px 2px #fff;

        &:hover {
            background: darken(@colorBasicYellow, 10%);
        }
    }
}
</style>
