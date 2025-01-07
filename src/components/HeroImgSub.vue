<template>
    <div class="subHeroContainer">
        <div class="pageInfo">
            <h1><slot name="subPageHeading">DEFAULT</slot></h1>
            <p><slot name="subPageIntro">Default</slot></p>
        </div>
    </div>
</template>

<style scoped>
    .subHeroContainer{
        background-image: url(../assets/img/heroGif_DT.gif);
        height: 60vh;
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        overflow: hidden;
        border-radius: 0 0 50px 50px;
    }
    .pageInfo{
        position: absolute;
        bottom: 0;
        padding-bottom: 25px;
        padding-left: 5vw;
        width: 100%;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)); 
    }
    .pageInfo{
        color: var(--headerColor);
    }
    @media screen and (max-width: 950px){
        .subHeroContainer{
            border-radius: 0 0 25px 25px;
        }
    }
</style>