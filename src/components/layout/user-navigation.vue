<template lang="html">
    <div class="user-navigation">
        <ul class="user-navigation__list" v-if="!userIsAuthenticated">
            <li class="user-navigation__item" v-for="link in links" :key="link.text">
                <router-link class="user-navigation__link" :to="link.to">{{ link.text }}</router-link>
            </li>
        </ul>
        <button class="button button--primary" v-if="userIsAuthenticated" @click="onLogout">Logout</button>
    </div>
</template>

<script>
export default {
    computed: {
        links () {
            let links = [
                { text: 'Sign in', to: '/signin' },
                { text: 'Sign up', to: '/signup' }
            ];
            return links;
        },
        userIsAuthenticated () {
            return this.$store.getters.user !== null && this.$store.getters.user !== undefined
        }
    },
    methods: {
        onLogout () {
            this.$store.dispatch('logout');
        }
    }
}
</script>

<style lang="less">
.user-navigation {

    &__list {

        &__item {
            display: inline-block;

            &::after {
                content: "/";
                display: inline-block;
                margin: 0 10px;
            }

            &:last-child {

                &.user-navigation__item::after {
                    display: none;
                }
            }
        }
    }
}
</style>
