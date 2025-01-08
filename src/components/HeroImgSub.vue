<template>
    <div class="subHeroContainer" :style="{ backgroundImage: `url(${imageSrc})` }">
        <div class="pageInfo">
            <h1><slot name="subPageHeading">DEFAULT</slot></h1>
            <p><slot name="subPageIntro">Default</slot></p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageSrc: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.subHeroContainer {
    height: 60vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: center;
    position: relative;
    overflow: hidden;
    border-radius: 0 0 50px 50px;
}
.pageInfo {
    position: absolute;
    bottom: 0;
    padding-bottom: 25px;
    padding-left: 5vw;
    width: 100%;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)); 
    color: var(--headerColor);
}
@media screen and (max-width: 950px) {
    .subHeroContainer {
        border-radius: 0 0 25px 25px;
    }
}
</style>
