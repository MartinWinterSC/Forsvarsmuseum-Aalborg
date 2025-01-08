<template>
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
                BESTIL BILLETTER
            </p>
            <img src="./icons/bars-solid.svg" alt="" class="navMenuOpen">
            <!--  -->
            <div class="overlayMenuContainer">
                <div class="navPointsMenu">
                    <RouterLink to="/">BESØG</RouterLink>
                    <RouterLink to="/">UDSTILLINGER</RouterLink>
                    <RouterLink to="/">OM MUSEET</RouterLink>
                </div>
                <div class="miscMenu">
                    <p class="bold">GÅ DIREKTE TIL:</p>
                    <p>Familier og børn</p>
                    <p>Skoler</p>
                    <p>Grupper</p>
                    <p>Støt os</p>
                </div>
                <div class="contactInfo">
                    <p class="medium">AALBORG FORSVARS- OG <br> GARNISONS MUSEUM</p>
                    <p class="practicalInfo">Skydebanevej 22, 9000 Aalborg</p>
                    <p class="openingHours practicalInfo">Åbent alle dage <br> 10 - 17</p>
                </div>
                <img src="./icons/bars-solid.svg" alt="" class="navMenuClose">
            </div>
            <!--  -->
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
        padding: 10px 20px;
    }
    .navPointsPrimary > *{
        padding: 5vw;
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
    /*  */
    .overlayMenuContainer{
        position: relative;
        /* display: none; */
    }
    .overlayMenuContainer *{
        position: absolute;
    }
    /*  */
    nav, .navPointsPrimary, .navPointsSecondary{
        display: flex;
        align-items: center;
        margin: 0;
    }
    .navPointsPrimary img{
        height: 100px;
        margin: 0;
        margin-left: calc(5vw - 20px);
    }
    nav{
        justify-content: space-between;
        z-index: 10;
        width: 100%;
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
        position: fixed;
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
        margin-right: calc(5vw - 20px);
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
    @media screen and (max-width: 1000px){
        .desktopNavPoints{
            display: none;
        }
        .navPointsMenu *, .languageSelect *, .desktopNavPoints *, p{
            font-size: 0.75rem;
        }
        .ticketOrdering{
            display: none;
        }
    }
    @media screen and (max-width: 950px){
        .navPointsPrimary img{
            height: 50px;
        }
        .languageSelect, p{
            border-radius: 7.5px;
        }
    }
    
</style>