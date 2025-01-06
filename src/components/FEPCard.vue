<template>
    <!-- <h1>FEPCards</h1> -->
    <!-- Indsæt HTML herunder -->
    <section>
        <h3>OM MUSEET</h3>
        <button>BESTIL BILLETTER</button> <!-- Erstattes med komponentet -->
    </section>
</template>

<style scoped>
    section{
        background-image: url(../assets/img/heroGif_DT.gif);
        margin: 0 5vw;
        position: relative;
        width: 90vw;
        height: 500px;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 30px;
    }
    h3{
        position: absolute;
        color: var(--headerColor);
        margin: 25px;
    }
    button{
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 25px;
    }
</style>