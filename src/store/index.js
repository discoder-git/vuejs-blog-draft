import Vue  from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: null,
        informer: {
            overlay: false,
            loading: false,
            error: null
        },
        mainNavigation: {
            isOpen: false
        },
        loadedArticles: [
            {
                id: 'introduction-to-localstorage-and-sessionstorage',
                title: 'Introduction to localStorage and sessionStorage',
                summary: '<p><em>localStorage</em> and <em>sessionStorage</em>, part of the web storage API, are two great tools to save key/value pairs locally.</p>',
                text: '<p><em>localStorage</em> and <em>sessionStorage</em>, part of the web storage API, are two great tools to save key/value pairs locally.</p><p>Both localStorage and sessionStorage offer advantages compared to using cookies:</p><ul><li>The data is saved locally only and can’t be read by the server, which eliminates the security issue that cookies present.</li><li>It allows for much more data to be saved (<strong>10Mb</strong> for most browsers).</li><li>It’s simpler to use and the syntax is very straightforward.</li></ul><p>It’s also supported in all modern browsers, so you can use it today without an issue. Obviously, since the data can’t be read on the server, cookies still have a use, especially when it comes to authentication.</p><h2>localStorage vs sessionStorage</h2><p>localStorage and sessionStorage accomplish the exact same thing and have the same API, but with sessionStorage the data is persisted only until the window or tab is closed, while with localStorage the data is persisted until the user manually clears the browser cache or until your web app clears the data. The examples in this post are for localStorage, but the same syntax works for sessionStorage.</p><h2>Creating Entries</h2><p>Create key/value pair entries with <em>localStorage.setItem</em>, providing a key and a value:</p><pre><code class="highlighting-js"><span class="highlighting-js__keyword">let</span> key = <span class="highlighting-js__string">"Item 1"</span>;<br>localStorage.setItem(key, <span class="highlighting-js__string">"Value"</span>);</code></pre><h2>Reading Entries</h2><p>Read entries with <em>localStorage.getItem</em>:</p><pre><code class="highlighting-js"><span class="highlighting-js__keyword">let</span> myItem = localStorage.getItem(key);</code></pre><h2>Updating Entries</h2><p>Update an entry just as you would create a new one with <em>setItem</em>, but with a key that already exists:</p><pre><code class="highlighting-js">localStorage.setItem(key, <span class="highlighting-js__string">"New Value"</span>);</code></pre><h2>Deleting Entries</h2><p>Delete an entry with the <em>removeItem</em> method:</p><pre><code class="highlighting-js">localStorage.removeItem(key);</code></pre><h2>Clearing Everything</h2><p>Here’s how to clear everything that’s stored in localStorage:</p><pre><code class="highlighting-js">localStorage.clear();</code></pre><h2>Storing Json Objects</h2><p>Only strings can be stored with localStorage or sessionStorage, but you can use <em>JSON.stringify</em> to store more complex objects and <em>JSON.parse</em> to read them:</p><pre><code class="highlighting-js"><span class="highlighting-js__comment">// Create item:</span><br><span class="highlighting-js__keyword">let</span> myObj = { <span class="highlighting-js__attr">name</span>: <span class="highlighting-js__string">"Skip"</span>, <span class="highlighting-js__attr">breed</span>: <span class="highlighting-js__string">"Labrador"</span> };<br>localStorage.setItem(key, <span class="highlighting-js__built-in">JSON</span>.stringify(myObj));<br><br><span class="highlighting-js__comment">// Read item:</span><br><span class="highlighting-js__keyword">let</span> item = <span class="highlighting-js__built-in">JSON</span>.parse(localStorage.getItem(key));</code></pre><h2>Checking for Items</h2><p>Here’s how you can test for the presence of items in the loclaStorage:</p><pre><code class="highlighting-js"><span class="highlighting-js__keyword">if</span> (localStorage.length &gt; <span class="highlighting-js__number">0</span>) {<br><span class="highlighting-js__comment">    // We have items</span><br>} <span class="highlighting-js__keyword">else</span> {<br><span class="highlighting-js__comment">    // No items</span><br>}</code></pre><h2>Checking for Support</h2><p>Test for localStorage support by checking if it’s available on the <em>window</em> object:</p><pre><code class="highlighting-js"><span class="highlighting-js__keyword">if</span> (<span class="highlighting-js__built-in">window</span>.localStorage) {<br><span class="highlighting-js__comment">    // localStorage supported</span><br>}</code></pre><h2>Iterating Over Items</h2><p>localStorage or sessionStorage don’t have a <em>forEach</em> method, but you can iterate over the items with a good old <em>for</em> loop:</p><pre><code class="highlighting-js"><span class="highlighting-js__keyword">for</span> (<span class="highlighting-js__keyword">let</span> i = <span class="highlighting-js__number">0</span>; i &lt; localStorage.length; i++) {<br><span class="highlighting-js__keyword">let</span> key = localStorage.key(i);<br><span class="highlighting-js__keyword">let</span> value = localStorage.getItem(key);<br>    <span class="highlighting-js__built-in">console</span>.log(key, value);<br>}</code></pre>',
                date: '2017-11-01',
                section: 'javascript'
            },
            {
                id: 'introduction-to-localstorage-and-sessionstorage',
                title: 'Introduction to localStorage and sessionStorage',
                summary: '<p><em>localStorage</em> and <em>sessionStorage</em>, part of the web storage API, are two great tools to save key/value pairs locally.</p>',
                text: '<p><em>localStorage</em> and <em>sessionStorage</em>, part of the web storage API, are two great tools to save key/value pairs locally.</p><p>Both localStorage and sessionStorage offer advantages compared to using cookies:</p><ul><li>The data is saved locally only and can’t be read by the server, which eliminates the security issue that cookies present.</li><li>It allows for much more data to be saved (<strong>10Mb</strong> for most browsers).</li><li>It’s simpler to use and the syntax is very straightforward.</li></ul><p>It’s also supported in all modern browsers, so you can use it today without an issue. Obviously, since the data can’t be read on the server, cookies still have a use, especially when it comes to authentication.</p><h2>localStorage vs sessionStorage</h2><p>localStorage and sessionStorage accomplish the exact same thing and have the same API, but with sessionStorage the data is persisted only until the window or tab is closed, while with localStorage the data is persisted until the user manually clears the browser cache or until your web app clears the data. The examples in this post are for localStorage, but the same syntax works for sessionStorage.</p><h2>Creating Entries</h2><p>Create key/value pair entries with <em>localStorage.setItem</em>, providing a key and a value:</p><pre><code class="highlighting-js"><span class="highlighting-js__keyword">let</span> key = <span class="highlighting-js__string">"Item 1"</span>;<br>localStorage.setItem(key, <span class="highlighting-js__string">"Value"</span>);</code></pre><h2>Reading Entries</h2><p>Read entries with <em>localStorage.getItem</em>:</p><pre><code class="highlighting-js"><span class="highlighting-js__keyword">let</span> myItem = localStorage.getItem(key);</code></pre><h2>Updating Entries</h2><p>Update an entry just as you would create a new one with <em>setItem</em>, but with a key that already exists:</p><pre><code class="highlighting-js">localStorage.setItem(key, <span class="highlighting-js__string">"New Value"</span>);</code></pre><h2>Deleting Entries</h2><p>Delete an entry with the <em>removeItem</em> method:</p><pre><code class="highlighting-js">localStorage.removeItem(key);</code></pre><h2>Clearing Everything</h2><p>Here’s how to clear everything that’s stored in localStorage:</p><pre><code class="highlighting-js">localStorage.clear();</code></pre><h2>Storing Json Objects</h2><p>Only strings can be stored with localStorage or sessionStorage, but you can use <em>JSON.stringify</em> to store more complex objects and <em>JSON.parse</em> to read them:</p><pre><code class="highlighting-js"><span class="highlighting-js__comment">// Create item:</span><br><span class="highlighting-js__keyword">let</span> myObj = { <span class="highlighting-js__attr">name</span>: <span class="highlighting-js__string">"Skip"</span>, <span class="highlighting-js__attr">breed</span>: <span class="highlighting-js__string">"Labrador"</span> };<br>localStorage.setItem(key, <span class="highlighting-js__built-in">JSON</span>.stringify(myObj));<br><br><span class="highlighting-js__comment">// Read item:</span><br><span class="highlighting-js__keyword">let</span> item = <span class="highlighting-js__built-in">JSON</span>.parse(localStorage.getItem(key));</code></pre><h2>Checking for Items</h2><p>Here’s how you can test for the presence of items in the loclaStorage:</p><pre><code class="highlighting-js"><span class="highlighting-js__keyword">if</span> (localStorage.length &gt; <span class="highlighting-js__number">0</span>) {<br><span class="highlighting-js__comment">    // We have items</span><br>} <span class="highlighting-js__keyword">else</span> {<br><span class="highlighting-js__comment">    // No items</span><br>}</code></pre><h2>Checking for Support</h2><p>Test for localStorage support by checking if it’s available on the <em>window</em> object:</p><pre><code class="highlighting-js"><span class="highlighting-js__keyword">if</span> (<span class="highlighting-js__built-in">window</span>.localStorage) {<br><span class="highlighting-js__comment">    // localStorage supported</span><br>}</code></pre><h2>Iterating Over Items</h2><p>localStorage or sessionStorage don’t have a <em>forEach</em> method, but you can iterate over the items with a good old <em>for</em> loop:</p><pre><code class="highlighting-js"><span class="highlighting-js__keyword">for</span> (<span class="highlighting-js__keyword">let</span> i = <span class="highlighting-js__number">0</span>; i &lt; localStorage.length; i++) {<br><span class="highlighting-js__keyword">let</span> key = localStorage.key(i);<br><span class="highlighting-js__keyword">let</span> value = localStorage.getItem(key);<br>    <span class="highlighting-js__built-in">console</span>.log(key, value);<br>}</code></pre>',
                date: '2017-11-01',
                section: 'javascript'
            }

        ],
        loadedTestimonials: []
    },
    mutations: {
        setLoadedTestimonials (state, payload) {
            state.loadedTestimonials = payload
        },
        createTestimonialItem (state, payload) {
            state.loadedTestimonials.push(payload)
        },
        setUser (state, payload) {
            state.user = payload
        },
        setOverlay (state, payload) {
            state.informer.overlay = payload
        },
        setLoading (state, payload) {
            state.informer.loading = payload
        },
        setError (state, payload) {
            state.informer.error = payload
        },
        clearError (state) {
            state.informer.error = null
        },
        setMainNavigationIsOpen (state, payload) {
            state.mainNavigation.isOpen = payload
        }
    },
    actions: {
        loadTestimonials ({commit}) {
            commit('setLoading', true);
            firebase.database().ref('testimonials').once('value')
                .then(
                    (data) => {
                        const testimonials = [];
                        const obj = data.val();
                        for (let key in obj) {
                            testimonials.push({
                                id:        key,
                                creatorId: obj[key].creatorId,
                                date:      obj[key].date,
                                title:     obj[key].title,
                                message:   obj[key].message,
                                imageUrl:  obj[key].imageUrl
                            })
                        }
                        commit('setLoadedTestimonials', testimonials);
                        commit('setLoading', false);
                    }
                )
                .catch(
                    (error) => {
                        console.log(error);
                        commit('setLoading', false);
                    }
                )
        },
        createTestimonialItem ({commit, getters}, payload) {
            const testimonial = {
                creatorId: getters.user.id,
                date:      payload.date.toISOString(),
                title:     payload.title,
                message:   payload.message
            }
            var imageUrl
            var key
            firebase.database().ref('testimonials').push(testimonial)
                .then(
                    (data) => {
                        key = data.key
                        return key
                    }
                )
                .then(
                    key => {
                        const filename = payload.image.name
                        const ext = filename.slice(filename.lastIndexOf('.'))
                        return firebase.storage().ref('testimonials/' + key + '.' + ext).put(payload.image)
                    }
                )
                .then(
                    fileData => {
                        imageUrl = fileData.metadata.downloadURLs[0]
                        return firebase.database().ref('testimonials').child(key).update({imageUrl: imageUrl})
                    }
                )
                .then(
                    () => {
                        commit('createTestimonialItem', {
                            ...testimonial,
                            imageUrl: imageUrl,
                            id: key
                        })
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                )
        },
        signUserUp ({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', false)
                        const newUser = {
                            id: user.uid,
                            addedArticles: []
                        }
                        commit('setUser', newUser)
                    }
                )
                .catch(
                    error => {
                        commit('setLoading', false)
                        commit('setError', error)
                        console.log(error)
                    }
                )
        },
        signUserIn ({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', false)
                        const newUser = {
                            id: user.uid,
                            addedArticles: []
                        }
                        commit('setUser', newUser)
                    }
                )
                .catch(
                    error => {
                        commit('setLoading', false)
                        commit('setError', error)
                        console.log(error)
                    }
                )
        },
        autoSignIn ({commit}, payload) {
            commit('setUser', {
                id: payload.uid,
                addedArticles: []
            })
        },
        logout ({commit}) {
            firebase.auth().signOut()
            commit('setUser', null)
        },
        clearError ({commit}) {
            commit('clearError')
        },
        setOverlay ({commit}, payload) {
            commit('setOverlay', payload)
        },
        openMainNavigation ({commit}) {
            commit('setMainNavigationIsOpen', true)
        },
        closeMainNavigation ({commit}) {
            commit('setMainNavigationIsOpen', false)
        }
    },
    getters: {
        user (state) {
            return state.user
        },
        overlay (state) {
            return state.informer.overlay
        },
        loading (state) {
            return state.informer.loading
        },
        error (state) {
            return state.informer.error
        },
        mainNavigationIsOpen (state) {
            return state.mainNavigation.isOpen
        },


        loadedArticles (state) {
            return state.loadedArticles.sort((articleA, articleB) => {
                return articleA.date > articleB.date
            })
        },
        featuredArticles (state, getters) {
            return getters.loadedArticles.slice(0, 4)
        },
        loadedArticle (state) {
            return (articleId) => {
                return state.loadedArticles.find((article) => {
                    return article.id === articleId
                })
            }
        },


        loadedTestimonials (state) {
            return state.loadedTestimonials.sort((testimonialA, testimonialB) => {
                return testimonialA.date > testimonialB.date
            })
        },
        featuredTestimonials (state, getters) {
            return getters.loadedTestimonials.slice(0, 5)
        },
        loadedTestimonial (state) {
            return (testimonialId) => {
                return state.loadedTestimonials.find((testimonial) => {
                    return testimonial.id === testimonialId
                })
            }
        }
    }
});
