<template lang="html">
    <div class="testimonial content">
        <h1>{{ testimonial.title }}</h1>
        <div><strong>Article id:</strong> {{ testimonial.id }}</div>
        <div><strong>Date:</strong> {{ testimonial.date }}</div>
        <div><img :src="testimonial.imageUrl" :alt="testimonial.title"></div>
        <div>{{ testimonial.message }}</div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        testimonial () {
            return this.$store.getters.loadedTestimonial(this.id);
        }
    }
}
</script>
