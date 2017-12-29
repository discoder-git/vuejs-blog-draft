<template lang="html">
    <a class="button button--icon" @click.prevent="onMainNavigationOpen">
        <icon name="bars" scale="2"></icon>
    </a>
</template>

<script>
export default {
    methods: {
        onMainNavigationOpen () {
            this.$store.dispatch('setOverlay', true)
            this.$store.dispatch('openMainNavigation')
        }
    }
}
</script>
