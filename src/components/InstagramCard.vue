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
        <img :src="imageSrc" :alt="imageAlt" />
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
        border-radius: 30px;
        padding: 5px;
    }
    .instaInfo p{
        margin-left: 15px;
    }
    article > img{
        width: 100%;
        height: 300px;
        object-fit: cover;
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
    article:hover{
        transform: scale(1.1);
        height: 460px;
    }

    @media screen and (max-width: 950px){
        article{
            min-width: 300px;
            width: 300px;
        }
        article:hover{
            transform: scale(1.1);
            height: 500px;
        }
        .instaInfo img, article{
            border-radius: 15px;
        }
    }
</style>