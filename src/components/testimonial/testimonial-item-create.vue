<template lang="html">
    <div class="testimonial-item-create">
        <form
        class="form"
        @submit.prevent="onCreateTestimonial"
        >
            <div class="form__item">
                <label for="title">Title:</label>
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
                <label for="image-url">Image URL:</label>
                <button
                type="button"
                class="button button--primary"
                @click="onPickFile"
                >Upload Image</button>
                <input
                type="file"
                style="display: none;"
                ref="fileInput"
                accept="image/*"
                @change="onFilePicked"
                >
            </div>
            <div class="form__item">
                <img
                class="image"
                :src="imageUrl"
                height="200"
                >
            </div>
            <div class="form__item">
                <label for="message">Message:</label>
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
            message:  '',
            date: new Date(),
            image: null
        }
    },
    computed: {
        formIsValid () {
            return this.title    !== '' &&
                   this.imageUrl !== '' &&
                   this.message  !== '';
        }
    },
    methods: {
        onCreateTestimonial () {
            if ( !this.formIsValid ) {
                return;
            }
            if ( !this.image ) {
                return;
            }
            const testimonialData = {
                date:     this.date,
                title:    this.title,
                image:    this.image,
                message:  this.message
            };
            this.$store.dispatch('createTestimonialItem', testimonialData);
            this.$router.push('/wall');
        },
        onPickFile () {
            this.$refs.fileInput.click();
        },
        onFilePicked (event) {
            const files = event.target.files;
            let filename = files[0].name;
            if ( filename.lastIndexOf('.') <= 0 ) {
                return alert('Please add a valid file.');
            }
            const fileReader = new FileReader();
            fileReader.addEventListener('load', () => {
                this.imageUrl = fileReader.result;
            });
            fileReader.readAsDataURL(files[0]);
            this.image = files[0];
        }
    }
}
</script>
