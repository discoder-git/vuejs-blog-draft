<template lang="html">
    <div class="components-list">
        <article-item :article="article"></article-item>
        <section-title text="Latest on blog:"></section-title>
        <article-list-concise></article-list-concise>
    </div>
</template>

<script>
import ArticleItem from '../article/article-item.vue'
import ArticleListConcise from '../article/article-list-concise.vue'

export default {
    props: ['id'],
    computed: {
        article () {
            return this.$store.getters.loadedArticle(this.id);
        }
    },
    components: {
        ArticleItem,
        ArticleListConcise
    }
}
</script>
