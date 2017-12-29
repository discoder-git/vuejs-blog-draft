<template lang="html">
    <div class="article-item-create">
        <form
        class="form"
        @submit.prevent="onCreateTestimonial"
        >
            <div class="form__item">
                <input
                class="input-field"
                type="text"
                name="title"
                id="title"
                v-model="title"
                required
                >
            </div>
            <div class="form__item">
                <input
                class="input-field"
                type="text"
                name="imageUrl"
                id="image-url"
                v-model="imageUrl"
                required
                >
            </div>
            <div class="form__item">
                <img
                class="image"
                :src="imageUrl"
                >
            </div>
            <div class="form__item">
                <textarea
                class="input-field"
                name="message"
                id="message"
                v-model="message"
                required
                ></textarea>
            </div>
            <div class="form__item">
                <button
                class="button button--primary"
                type="submit"
                :disabled="!formIsValid"
                >Create Testimonial</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            title:    '',
            imageUrl: '',
            message:  ''
        }
    },
    computed: {
        formIsValid () {
            return this.title    !== '' &&
                   this.imageUrl !== '' &&
                   this.message  !== ''
        }
    },
    methods: {
        onCreateTestimonial () {
            if ( !this.formIsValid ) {
                return
            }

            const testimonialData = {
                date:     new Date(),
                title:    this.title,
                imageUrl: this.imageUrl,
                message:  this.message
            }

            this.$store.dispatch('createTestimonialItem', testimonialData)
            this.$router.push('/wall')
        }
    }
}
</script>
