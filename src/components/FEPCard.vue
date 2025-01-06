<script>
export default {
    components: {
        CTABtn,
    },
    props: {
        imageSrc: { type: String, required: true },
    },
};
</script>

<template>
    <section :style="{ backgroundImage: `url(${imageSrc})` }">
        <h3>
            <slot name="FEPHeading"></slot>
        </h3>
        <CTABtn>
            <slot name="CTAText"></slot>
        </CTABtn>
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