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
        min-width: 400px;
        width: 400px;
        /* background-color: var(--headerColor); */
        background-color: green; /* fjernes senere, erstattes af ovnstående linje*/
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

    article {
        min-width: 400px;
        width: 400px;
        background-color: green;
        border-radius: 30px;
        scroll-snap-align: center; /* Apply sideScrollCard rules */
        margin: 0 25px 25px 25px;
    }
    article:first-child {
        margin-left: 5vw;
    }
    article:last-child {
        margin-right: 5vw;
    }


    @media screen and (max-width: 950px){
        article{
            min-width: 300px;
            width: 300px;
        }
    }
</style>