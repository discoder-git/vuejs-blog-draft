<template lang="html">
    <div class="components-list">
        <div class="content">
            <h1>Blog</h1>
        </div>
        <article-list></article-list>
    </div>
</template>

<script>
import ArticleList from '../article/article-list.vue'

export default {
    components: {
        ArticleList
    }
}
</script>
