<template lang="html">
    <nav class="navigation" :class="classObject" role="navigation">
        <ul class="navigation__list">
            <li class="navigation__item" v-for="link in links" :key="link.text">
                <router-link class="navigation__link" :to="link.to">{{ link.text }}</router-link>
            </li>
        </ul>
        <a class="navigation__close-button button button--icon" @click.prevent="onMainNavigationClose">
            <icon name="times" scale="2"></icon>
        </a>
    </nav>
</template>

<script>
export default {
    computed: {
        links () {
            let links = [
                { text: 'Home', to: '/' },
                { text: 'Blog', to: '/blog' }
            ];
            return links;
        },
        isOpen () {
            return this.$store.getters.mainNavigationIsOpen
        },
        classObject () {
            return {
                'navigation--active': this.isOpen
            }
        }
    },
    methods: {
        onMainNavigationClose () {
            this.$store.dispatch('setOverlay', false)
            this.$store.dispatch('closeMainNavigation')
        }
    }
}
</script>

<style lang="less">
@import (reference) "../../less/vars.less";

.navigation {
    position: fixed;
    z-index: 999;
    top: 0;
    bottom: 0;
    width: 300px;
    left: -340px;
    padding: 20px 3.5%;
    min-height: 100%;
    background: @colorBasicGray;
    transition: transform .3s ease-in-out;

    &.navigation--active {
        transform: translateX(340px);
    }

    &__close-button {
        position: absolute;
        top: 20px;
        left: 20px;
        color: #fff;
    }

    &__list {
        margin: 40px 0 0;
    }

    &__item {
        color: @colorBasicWhite;
        font-size: 2em;
        font-weight: 700;
        margin: 0 0 10px;
        list-style: none;

        &:last-child {
            margin: 0;
        }
    }

    &__link {
        color: @colorBasicWhite;
        font-size: 34px;
        line-height: 46px;
        font-weight: 700;

        &:hover {
            color: @colorBasicYellow;
        }
    }
}
</style>
