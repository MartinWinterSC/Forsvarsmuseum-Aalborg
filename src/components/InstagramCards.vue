<template>
    <!-- <h1>InstagramCards</h1> -->
    <!-- Indsæt HTML herunder -->
    
    <article>
        <div class="instaInfo">
            <img src="@/assets/img/FGMALogo.png" alt="">
            <p>Aalborg Forsvars og Garnissons...</p>
        </div>
        <img src="@/assets/img/FGMALogo.png" alt="">
        <p>Kommende jægerpilot #Familiehygge #TætPåHistorien #Forsvarsmuseet</p>
    </article>
</template>

<style scoped>
    article{
        /* height: 500px; */
        width: 400px;
        /* background-color: var(--headerColor); */
        background-color: green; /* fjernes senere, erstattes med ovnstående linje*/
        border-radius: 30px;
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
</style>