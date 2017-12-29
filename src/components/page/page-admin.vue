<template lang="html">
    <div class="components-list">
        <div class="content">
            <h1>Admin Page</h1>
        </div>
        <article-item-create></article-item-create>
        <h2>Image with weblind.ru</h2>
        <div><img src="/src/assets/test1.png" alt="Test image for mokaps"></div>
    </div>
</template>

<script>
import ArticleItemCreate from '../article/article-item-create.vue';

export default {
    components: {
        ArticleItemCreate
    }
}
</script>
