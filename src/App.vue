<template>
    <Header />
    <router-view/>
</template>

<script>

import Header from '@/components/Header.vue'

export default {
    name: "App",
    components: {
        Header,
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit&family=Romanesco&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url("https://necolas.github.io/normalize.css/8.0.1/normalize.css");


@font-face {
    font-family: 'Garamond';
    src: url('./assets/fonts/GaramondLT-LightCondensedItalic.woff2');
    font-weight: normal;
    font-style: normal;
}

.Garamond {
    font-family: Garamond,sans-serif;
}


:root {
    --white: rgb(224, 220, 211);
    --whiteTrans: rgba(224, 220, 211, 0.7);
    --black : rgb(25, 25, 25);
    --blackTrans : rgba(25, 25, 25, 0.9);
    --bleu: #322783;
    --red: #d51125;
    --green: #00963f;
}

* {
    box-sizing: border-box;
    font-family: "Outfit", sans-serif;
}

body {
    position: relative;
    padding-top: 8em;
    background-color: var(--white);
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

body::-webkit-scrollbar {
    display: none;
}

.material-icons {
    user-select: none;
}

</style>
