<template lang="html">
    <div class="auxiliary-navigation">
        <ul class="auxiliary-navigation__list">
            <li class="auxiliary-navigation__item" v-for="link in links" :key="link.text">
                <router-link class="auxiliary-navigation__link" :to="link.to">{{ link.text }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        links () {
            let links = [
                { text: 'About website', to: '/about-project' },
                { text: 'Changelog', to: '/changelog' }
            ]
            return links
        }
    }
}
</script>

<style lang="less">
.auxiliary-navigation {

    &__list {
        list-style: none;
    }

    &__item {
        display: inline-block;

        &::after {
            content: "/";
            display: inline-block;
            margin: 0 10px;
        }

        &:last-child {

            &::after {
                display: none;
            }
        }
    }
}
</style>
