<template lang="html">
    <div
    class="shared-informer"
    @click="onClose"
    >{{ text }}</div>
</template>

<script>
export default {
    props: ['text'],
    methods: {
        onClose () {
            this.$emit('dismissed');
        }
    }
}
</script>
