<script>
export default {
    props: {
        imageSrc: { type: String, required: true },
    },
};
</script>

<template>
    <article>
        <div class="activityCardIndividual" :style="{ backgroundImage: `url(${imageSrc})` }"></div>
        <p class="activityType"><slot name="activityCatagory"></slot></p>
        <div class="activityInfo">
            <p class="bold"><slot name="activityName"></slot></p>
            <p><slot name="activityAvailability"></slot></p>
        </div>
    </article>
</template>

<style scoped>
    article{
        height: 500px;
        min-width: 400px;
        width: 400px;
        position: relative;
        overflow: hidden;
        border-radius: 30px;
    }
    .activityCardIndividual{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        background-position: center;
        overflow: hidden;
        height: 100%;
        width: 100%;
        z-index: 1;
    }
    .activityInfo{
        position: absolute;
        z-index: 2;
        bottom: 0;
        width: 100%;
    }
    p{
        color: var(--headerColor);
        padding: 20px;
    }
    p.bold{
        font-weight: var(--boldWeight);
         
    }
    .activityInfo p:first-child{
        padding-bottom: 5px;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)); 
    }
    .activityInfo p:last-child{
        padding-top: 5px;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1));
    }
    .activityType{
        position: absolute;
        top: 0;
        background-color: var(--headerIconColor);
        color: var(--headerColor);
        border-radius: 50px;
        padding: 5px 15px;
        margin: 20px;
        z-index: 2;
    }
    article:hover .activityCardIndividual{
        transform: scale(1.1);
    }
    @media screen and (max-width: 950px){
        article{
            height: 400px;
            min-width: 300px;
            width: 300px;
        }
        /* .activityCardIndividual:hover{
            transform: scale(1.1);
            height: 400px;
        } */
        #activityType{
            border-radius: 25px;
        }
        .activityCardIndividual{
            border-radius: 15px;
        }
    }
</style>