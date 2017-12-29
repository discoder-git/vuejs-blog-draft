<template lang="html">
    <div class="testimonial-list">
        <div
        class="testimonial-list__item"
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        @click="onLoadTestimonial(testimonial.id)"
        >
            <h2>{{ testimonial.title }}</h2>
            <div><strong>Testimonial id:</strong> {{ testimonial.id }}</div>
            <div><strong>Date:</strong> {{ testimonial.date | date }}</div>
            <h3>{{ testimonial.id }}</h3>
            <div><img :src="testimonial.imageUrl" :alt="testimonial.title"></div>
            <div>{{ testimonial.message }}</div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        testimonials () {
            return this.$store.getters.loadedTestimonials;
        }
    },
    methods: {
        onLoadTestimonial (id) {
            this.$router.push(`/wall/${id}`);
        }
    }
}
</script>

<style lang="less">
.testimonial-list {

    &__item {
        border-top: 2px solid #f7df1e;
        padding: 40px 20px;

        &:hover {
            background: #f2f3f7;
            cursor: pointer;
        }
    }
}
</style>
