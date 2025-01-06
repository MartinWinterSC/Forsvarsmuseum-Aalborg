<template>
    <!-- <h1>HeroImg</h1> -->
    <!-- Indsæt HTML herunder -->

    <div class="heroContainer">
        <h1>OPLEV DANMARKS <br> MILITÆRE HISTORIE</h1>
        <div class="scrollIndicator">
            <p id="scrollIndicatorIcon">&#xFFEC;</p>
            <p>Udforks vores udstillinger</p>
        </div>
    </div>
</template>

<style scoped>
    .heroContainer{
        background-image: url(../assets/img/heroGif_DT.gif);
        height: 100vh;
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 2;
    }
    #scrollIndicatorIcon{
        display: flex;
        font-size: 3rem;
        border: 2px solid var(--headerColor);
        border-radius: 50px;
        width: 3rem;
        height: 3rem;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
    }
    p#scrollIndicatorIcon:hover{
        background-color: var(--headerColor);
        color: var(--headerIconColor);
    }
    .scrollIndicator{
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translate(-50%);
    }
    h1, p{
        color: var(--headerColor);
    }
    h1{
        position: absolute;
        margin-left: 5vw;
        top: 50vh;
        transform: translate(0, -50%);
    }
    @media screen and (max-width: 950px){
        .heroContainer{
            background-image: url(../assets/img/heroGif_MB.gif);
        }
    }
</style>