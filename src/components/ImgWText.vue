<script>
import CTABtn from './CTABtn.vue';

export default {
    components: {
        CTABtn,
    },
    props: {
        imageSrc: { type: String, required: true },
        imageAlt: { type: String, required: true },
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
            <CTABtn>
                <slot name="CTAImgText"></slot>
            </CTABtn>
        </div>
    </section>
</template>

<style scoped>
    section{
        position: relative;
        height: 80vh;
    }
    img{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        height: calc(60vh + 100px);
        object-fit: cover;
        width: 60%;
        margin-left: 5vw;
        border-radius: 30px;
    }
    .textContainer{
        position: absolute;
        top: 50%;
        right: 0;
        z-index: 2;
        background-color: var(--specialCaseColor);
        padding: 30px;
        max-width: 40vw;
        box-sizing: border-box;
        transform: translateY(-50%);
        border-radius: 30px;
        margin-right: 5vw;
    }
    .textContainer *{
        margin: 15px 0;
    }
    h3, p{
        color: var(--headerColor);
    }

    @media screen and (max-width: 1400px){
        .textContainer{
            max-width: 50%
        }
    }
    @media screen and (max-width: 1200px){
        .textContainer{
            max-width: 60%
        }
    }
    @media screen and (max-width: 950px){
        .textContainer, img{
            border-radius: 15px;
        }
        img{
            width: 90%;
        }
        .textContainer{
            right: 50%;
            transform: translate(50%);
            top: 30%;
            max-width: unset;
        }
        section{
            padding-bottom: 150px;
        }
    }
</style>