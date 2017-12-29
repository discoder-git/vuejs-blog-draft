<template lang="html">
    <div class="components-list">
        <card-person-intro></card-person-intro>
        <section-title text="Latest on blog:"></section-title>
        <article-list-concise></article-list-concise>
    </div>
</template>

<script>
import CardPersonIntro    from '../layout/card-person-intro.vue'
import ArticleListConcise from '../article/article-list-concise.vue'

export default {
    components: {
        CardPersonIntro,
        ArticleListConcise
    }
}
</script>
