<script>
    export default {
        props: {
            imageSrc: { type: String, required: true },
            imageAlt: { type: String, required: true },
        },
};
</script>

<template>
    <article>
        <div class="instaInfo">
            <img src="@/assets/img/FGMALogo.png" alt="">
            <p>Aalborg Forsvars og Garnissons...</p>
        </div>
        <div class="instaImg">
            <img :src="imageSrc" :alt="imageAlt" />
        </div>
        <p>
            <slot name="InstaContent"></slot>
        </p>
    </article>
</template>

<style scoped>
    article{
        min-width: 400px;
        width: 400px;
        background-color: var(--headerColor);
        border-radius: 30px;
        scroll-snap-align: center;
        margin: 0 25px 25px 25px;
    }
    p{
        font-size: 1rem;
        text-wrap: balance;
    }
    .instaInfo{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }
    .instaInfo img{
        height: 50px;
        width: 50px;
        object-fit: contain;
        background-color: var(--headerIconColor);
        border-radius: 50px;
        padding: 5px;
    }
    .instaInfo p{
        margin-left: 15px;
    }
    .instaImg{
        height: 300px;
        width: 400px;
        position: relative;
        overflow: hidden;
    }
    .instaImg img{
        width: 100%;
        height: 300px;
        object-fit: cover;
        position: absolute;
    }
    article > p{
        padding: 10px 20px 20px 20px;
    }
    article:first-child {
        margin-left: 5vw;
    }
    article:last-child {
        margin-right: 5vw;
    }
    article:hover .instaImg img{
        transform: scale(1.1);
    }

    @media screen and (max-width: 950px) {
    article {
        min-width: 300px;
        width: 300px;
        border-radius: 15px;
    }
    .instaImg{
        overflow: hidden;
        height: 300px;
        width: 100%;
    }
    .instaImg img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform-origin: center center;
    }
    article:hover .instaImg img{
        transform: scale(1.1);
    }
}
</style>