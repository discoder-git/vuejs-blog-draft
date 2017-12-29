<template lang="html">
    <div class="article-list">
        <div
        class="article-list__item content"
        v-for="article in articles"
        :key="article.id"
        @click="onLoadArticle(article.id)"
        >
            <h2>{{ article.title }}</h2>
            <div class="article-intro">
                <div class="article-intro__item">
                    <div class="article-intro__title"><icon name="hashtag" scale="1"></icon></div>
                    <div class="article-intro__content">{{ article.section }}</div>
                </div>
                <div class="article-intro__item">
                    <div class="article-intro__title"><icon name="calendar" scale="1"></icon></div>
                    <div class="article-intro__content">{{ article.date }}</div>
                </div>
            </div>
            <div v-html="article.summary"></div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        articles () {
            return this.$store.getters.loadedArticles
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

.article-list {
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
</style>
