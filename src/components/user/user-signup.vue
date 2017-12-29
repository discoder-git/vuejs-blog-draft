<template lang="html">
    <div class="user-signup">
        <form
        class="form"
        @submit.prevent="onSignup"
        >
            <div
            class="form__item"
            v-if="error"
            >
                <shared-alert
                @dismissed="onDismissed"
                :text="error.message"
                ></shared-alert>
            </div>
            <div
            class="form__item"
            v-if="loading"
            >
                <shared-loader></shared-loader>
            </div>
            <div class="form__item">
                <label for="email">Email:</label>
                <input
                class="input-field"
                type="email"
                name="email"
                id="email"
                v-model="email"
                required
                >
            </div>
            <div class="form__item">
                <label for="password">Password:</label>
                <input
                class="input-field"
                type="password"
                name="password"
                id="password"
                v-model="password"
                required
                >
            </div>
            <div class="form__item">
                <label for="confirm-password">Confirm Password:</label>
                <input
                class="input-field"
                type="password"
                name="confirmPassword"
                id="confirm-password"
                v-model="confirmPassword"
                >
            </div>
            <div class="form__item">
                <button
                class="button button--primary"
                type="submit"
                >Sign up</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                email:           '',
                password:        '',
                confirmPassword: ''
            }
        },
        computed: {
            comparePasswords () {
                return this.password !== this.confirmPassword ? 'Passwords do not match' : '';
            },
            user () {
                return this.$store.getters.user;
            },
            error () {
                return this.$store.getters.error;
            },
            loading () {
                return this.$store.getters.loading;
            }
        },
        watch: {
            user (value) {
                if (value !== null && value !== undefined) {
                    this.$router.push('/');
                }
            }
        },
        methods: {
            onSignup () {
                this.$store.dispatch('signUserUp', {
                    email:    this.email,
                    password: this.password
                });
            },
            onDismissed () {
                this.$store.dispatch('clearError');
            }
        }
    }
</script>
