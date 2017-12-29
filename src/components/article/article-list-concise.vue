<template lang="html">
    <div class="article-list-concise">
        <div
        class="article-list-concise__item content"
        v-for="article in articles"
        :key="article.id"
        @click="onLoadArticle(article.id)"
        >
            <h3>{{ article.title }}</h3>
            <div v-html="article.summary"></div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        articles () {
            return this.$store.getters.featuredArticles
        }
    },
    methods: {
        onLoadArticle (id) {
            this.$router.push(`/blog/${id}`)
        }
    }
}
</script>

<style lang="less">
@import (reference) "../../less/vars.less";

.article-list-concise {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: 4px solid #B2DBBF;
    border-bottom: 4px solid #B2DBBF;

    &__item {
        padding: 40px 20px;

        &:hover {
            background: lighten(@colorBasicSea, 18%);
            cursor: pointer;
        }
    }
}

@media only screen and (max-width: 768px) {

    .article-list-concise {
        grid-template-columns: 1fr;
    }
}
</style>
