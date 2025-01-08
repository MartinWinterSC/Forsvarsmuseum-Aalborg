<script>
    import CTABtn from './CTABtn.vue';

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
    <section>
        <div :style="{ backgroundImage: `url(${imageSrc})` }"></div>
        <h3>
            <slot name="FEPHeading"></slot>
        </h3>
        <CTABtn>
            <slot name="CTAFEPText"></slot>
        </CTABtn>
        
    </section>
</template>

<style scoped>
    section{
        margin: 0 5vw;
        position: relative;
        width: 90vw;
        height: 70vh;
        border-radius: 30px;
        object-fit: cover;
        overflow: hidden;
    }
    div{
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
    }
    h3{
        position: absolute;
        color: var(--headerColor);
        padding: 25px;
        width: 100%;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
        z-index: 2;
    }
    p{
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 25px;
        z-index: 2;
    }
    section:hover div{
        transform: scale(1.1);
    }
    @media screen and (max-width: 950px){
        section{
            border-radius: 15px;
        }
    }
</style>