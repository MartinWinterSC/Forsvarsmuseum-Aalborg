<script>
import CTABtn from './CTABtn.vue';

export default {
    components: {
        CTABtn,
    },
    props: {
        imageSrc: { type: String, required: true },
        imageAlt: { type: String, required: true },
        hasCTA: { type: Boolean, default: false }
    },
};
</script>

<template>
    <section>
        <img :src="imageSrc" :alt="imageAlt"/>
        <div class="textContainer">
            <h3>
                <slot name="introHeading"></slot>
            </h3>
            <slot name="introContent"></slot>
            <CTABtn v-if="hasCTA">
                <slot name="CTAImgText"></slot>
            </CTABtn>
        </div>
    </section>
</template>

<style scoped>
    section{
        display: grid;
        grid-template-columns: 1fr 400px 400px;
        position: relative;
        margin: 0 5vw;
    }
    img{
        grid-column: 1 / span 2;
        height: 70vh;
        position: relative;
        z-index: 1;
        border-radius: 30px;
        object-fit: cover;
        width: 100%;
    }
    .textContainer{
        grid-column: 2 / span 2;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        z-index: 2;
        background-color: var(--specialCaseColor);
        padding: 30px;
        border-radius: 30px;
    }
    .textContainer *{
        margin: 15px 0;
    }
    h3, p{
        color: var(--headerColor);
    }
    
    @media screen and (max-width: 950px){
        .textContainer, img{
            border-radius: 15px;
        }
        section{
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: repeat(3, 1fr);
        }
        img{
            grid-column: 1 / span 3;
            grid-row: 1 / span 2;
            width: 100%;
        }
        .textContainer{
            grid-column: 1 / span 3;
            grid-row: 2 / span 2;
            margin: 0 5vw;
            top: unset;
        }
    }
</style>