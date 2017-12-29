<template lang="html">
    <div class="components-list">
        <div class="content">
            <h1>Wall</h1>
        </div>
        <testimonial-item-create></testimonial-item-create>
        <testimonial-list></testimonial-list>
    </div>
</template>

<script>
import TestimonialList       from '../testimonial/testimonial-list.vue';
import TestimonialItemCreate from '../testimonial/testimonial-item-create.vue';

export default {
    components: {
        TestimonialList,
        TestimonialItemCreate
    }
}
</script>
