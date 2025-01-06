<template>
    <!-- <h1>TheNav</h1> -->
    <!-- Indsæt HTML herunder -->

    <nav>
        <div class="navPointsPrimary">
            <RouterLink to=""><img src="@/assets/img/FGMALogo.png" alt="FGMA"></RouterLink>
            <div class="desktopNavPoints">
                <RouterLink to="/">BESØG</RouterLink>
                <RouterLink to="/">UDSTILLINGER</RouterLink>
                <RouterLink to="/">OM MUSEET</RouterLink>
            </div>
            
        </div>
        <div class="navPointsSecondary">
            <ul class="languageSelect">
                <li>EN</li>
                <li class="active">DK</li>
            </ul>
            <p class="ticketOrdering">
                BESTIL BILETTER
            </p>
            <img src="./icons/bars-solid.svg" alt="" class="navMenu">
            <div class="navPointsMenu">
                <RouterLink to="/"><img src="" alt="Forsvars-& Garnisons Museum Aalborg Logo"></RouterLink>
                <RouterLink to="/">BESØG</RouterLink>
                <RouterLink to="/">UDSTILLINGER</RouterLink>
                <RouterLink to="/">OM MUSEET</RouterLink>
            </div>
        </div>
    </nav>
</template>

<style scoped>
        .navPointsMenu *, .languageSelect *, .desktopNavPoints *, p{
        text-decoration: none;
        color: var(--headerColor);
        font-size: 1rem;
        font-family: Chivo Mono;
    }
    .navPointsPrimary *:not(img){
        margin: 0;
        /* margin-right: 25px; */
        padding: 15px 7.5px 15px 7.5px;
    }
    .languageSelect{
        display: flex;
        border: 3px solid var(--headerColor);
        border-radius: 15px;
    }
    .languageSelect *{
        list-style: none;
        margin: 0;
        padding: 15px 7.5px 15px 7.5px;
    }
    .languageSelect *:first-child{
        padding-left: 15px;
    }
    .languageSelect *:last-child{
        padding-right: 15px;
    }
    .navPointsMenu{
        display: none;
    }
    nav, .navPointsPrimary, .navPointsSecondary{
        display: flex;
        align-items: center;
        margin: 0;
    }
    .navPointsPrimary img{
        margin-left: 5vw;
        height: 100px;
        margin-right: 0;
    }
    nav{
        justify-content: space-between;
        z-index: 5;
        position: absolute;
        width: 100%;
        margin-top: 15px;
    }
    .navPointsSecondary{
        display: flex;
        justify-content: flex-end;

    }
    li{
        margin: 0;
    }
    li.active{
        text-decoration: underline;
        
    }
    li:hover{
        text-decoration: underline;
    }
    p{
        margin-left: 25px;
        padding: 15px;
        border: 3px solid var(--headerColor);
        border-radius: 15px;
    }
    .navPointsSecondary img{
        height: 50px;
        margin-left: 25px;
        margin-right: 5vw;
    }
    .desktopNavPoints{
        padding: 0;
    }
    .desktopNavPoints:last-child{
        padding: 0;
    }
    .desktopNavPoints *:hover, .navPointsMenu *:hover{
        text-decoration: underline;
    }
    .ticketOrdering:hover{
        background-color: var(--headerColor);
        color: var(--headerIconColor)
    }

    @media screen and (max-width: 1200px){
        .navPointsPrimary *{
            margin-right: 15px;
        }
        p{
            margin-left: 15px;
        }
        .navPointsSecondary img{
            margin-left: 15px;
        }
    }
    @media screen and (max-width: 950px){
        .desktopNavPoints{
            display: none;
        }
        .navPointsMenu *, .languageSelect *, .desktopNavPoints *, p{
            font-size: 0.75rem;
        }
    }
</style>