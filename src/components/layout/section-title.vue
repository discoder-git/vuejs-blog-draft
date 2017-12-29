<template lang="html">
    <h2 class="section-title">
        <span class="section-title__inner">{{ text }}</span>
    </h2>
</template>

<script>
export default {
    props: ['text']
}
</script>

<style lang="less">
.section-title {

    &__inner {
        display: inline-block;
        background: #0C2C3A;
        color: #FFF;
    }
}
</style>
