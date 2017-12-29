<template lang="html">
    <div class="card-person-intro content">
        <div class="card-person-intro__text">
            <h1>Hello!</h1>
            <h2>My name is Nazar Linovetskiy and I am creative front-end developer.</h2>
            <p>I specialise in intuitive, easy to use and beautiful responsive websites for projects both large and small that work on any type and size of device. My work has a heavy leaning towards simplicity and typography with a gimmick free focus on content and concise communication.</p>
        </div>
    </div>
</template>

<style lang="less">
@import (reference) "../../less/vars.less";

.card-person-intro {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 40px;
    align-items: center;
    padding: 80px 28% 80px 7%;
    background-color: @colorBasicGreen;
    background-image: linear-gradient(
      rgba(36, 123, 160, .33),
      rgba(36, 123, 160, .66)
    ), url('/src/assets/man.jpg');
    background-position: center;
    background-size: cover;

    h1, h2, p {
        color: lighten(@colorBasicYellow, 5%);
    }
}
</style>
