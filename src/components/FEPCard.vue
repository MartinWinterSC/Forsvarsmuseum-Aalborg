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
    <section :style="{ backgroundImage: `url(${imageSrc})` }">
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
        height: 500px;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 30px;
        object-fit: cover;
        overflow: hidden;
    }
    h3{
        position: absolute;
        color: var(--headerColor);
        padding: 25px;
        width: 100%;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)); 
    }
    p{
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 25px;
    }
    section:hover{
        transform: scale(1.05);
    }
    @media screen and (max-width: 950px){
        section{
            border-radius: 15px;
        }
    }
</style>