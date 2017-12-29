<template lang="html">
    <div id="app" class="wrapper">
        <general-header></general-header>
        <main-navigation></main-navigation>
        <main class="main" role="main">
            <router-view></router-view>
        </main>
        <general-footer></general-footer>
        <general-overlay v-if="overlay"></general-overlay>
    </div>
</template>

<script>
import GeneralHeader  from './components/layout/general-header.vue'
import MainNavigation from './components/layout/main-navigation.vue'
import GeneralFooter  from './components/layout/general-footer.vue'
import GeneralOverlay  from './components/layout/general-overlay.vue'

export default {
    name: 'app',
    computed: {
        overlay () {
            return this.$store.getters.overlay;
        }
    },
    components: {
        GeneralHeader,
        MainNavigation,
        GeneralFooter,
        GeneralOverlay
    }
}
</script>

<style lang="less">
@import (reference) "./less/vars.less";
@import (reference) "./less/mixins.less";

html, body, div, span, applet,
object, iframe,
h1, h2, h3, h4, h5, h6, p,
blockquote, pre,
a, abbr, acronym, address, big,
cite, code, del, dfn, em,
img, ins, kbd, q, s,
samp, small, strike,
strong, sub, sup, tt,
var, dl, dt, dd, ol, ul,
li, fieldset, form, label,
legend, table, caption,
tbody, tfoot, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-weight: inherit;
    font-style: inherit;
    font-family: inherit;
    font-size: 100%;
    vertical-align: baseline;
}

::selection {
     background: darken(@colorBasicYellow, 20%);
}

html {
    height: 100%;
    background: lighten(@colorBasicGray, 60%);
    box-sizing: border-box;
 }

 *, *:before, *:after {
    box-sizing: inherit;
 }

body {
    height: 100%;
    color: @colorBasicGray;
    font-family: 'Average', serif;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 20px;
    line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
    color: @colorBasicBlueDark;
    font-family: 'Open Sans', sans-serif;
}

h1 {
    font-size: 54px;
    line-height: 72px;
    font-weight: 800;
}

h2 {
    font-size: 34px;
    line-height: 46px;
    font-weight: 700;
}

h3 {
    font-size: 22px;
    line-height: 30px;
    font-weight: 700;
}

a {
    color: @colorBasicBlue;

    &:hover {
        color: darken(@colorBasicBlue, 10%);
    }
}

img {
    display: block;
    width: 100%;
}

.content {

    & h1,
    & h2,
    & h3,
    p,
    ul,
    pre,
    .article-intro {
        margin: 0 0 40px 0;

        &:last-child {
            margin: 0;
        }
    }
}

strong {
    font-weight: 700;
}

.article-intro {
    color: @colorBasicGreen;

    &__item,
    &__title,
    &__content {
        display: inline-block;
    }
}

em {
    background: lighten(@colorBasicYellow, 5%);
    border-bottom: 1px solid darken(@colorBasicYellow, 10%);
}

pre {
    background: lighten(@colorBasicYellow, 5%);
    border-bottom: 1px solid darken(@colorBasicYellow, 10%);
    padding: 20px 3.5%;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.highlighting {
    color: #6C7757;
    padding: .9em .5em;

    &__comment {
        color: #bbc6a7;
    }

    &__meta {
        color: #DC3958;
    }
}

.highlighting-vue {
    color: #6C7757;
    padding: .9em .5em;

    &__comment {
        color: #bbc6a7;
    }
}

.highlighting-js {
    color: #6C7757;
    padding: .9em .5em;

    &__comment {
        color: #bbc6a7;
    }

    &__keyword {
        color: #81ba0e;
    }

    &__string {
        color: #2a9e7d;
    }

    &__number {
        color: #e2a200;
    }

    &__attr {

    }

    &__built-in {
        color: #F1C553;
    }
}

button,
input[type="button"] {
    padding: 0;
    border: none;
    display: inline-block;
    font-size: 1em;
    line-height: 1.6;
}

input,
textarea {
    font-size: 1em;
    line-height: 1.6;
}

label {
    display: block;
}

.form {

    &__item {
        margin: 0 0 10px 0;

        &:last-child {
            margin: 0;
        }
    }
}

.wrapper {
    display: grid;
    grid-template-columns: minmax(320px, 1024px);
    justify-content: center;
}

.main {
    background: @colorBasicWhite;
    padding: 80px 7%;
    margin: 160px 0 0;
}

.components-list {
    display: grid;
    grid-row-gap: 80px;
}

.button {
    display: inline-block;
    vertical-align: middle;
    font-family: 'Average', serif;

    &:disabled {
        color: lighten(@colorBasicGray, 60%);

        &:hover {
            color: lighten(@colorBasicGray, 60%);
        }
    }

    &--icon {
        width: 34px;
        height: 34px;
        text-align: center;
        background: none;
        color: @colorBasicGray;

        &:hover {
            color: @colorBasicSea;
        }
    }
}

@media only screen and (max-width: 1024px) {

    .main {
        margin: 80px 0 0;
    }
}

@media only screen and (max-width: 599px) {

    body {
        font-size: 18px;
    }

    h1 {
        font-size: 42px;
        line-height: 56px;
    }

    h2 {
        font-size: 26px;
        line-height: 36px;
    }

    h3 {
        font-size: 20px;
        line-height: 28px;
    }
}

</style>
