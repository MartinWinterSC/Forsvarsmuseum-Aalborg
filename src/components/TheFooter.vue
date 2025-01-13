<template>
    <!-- <h1>TheFooter</h1> -->
    <!-- Indsæt HTML herunder -->
    
    <footer>
        <div class="footerTop">
            <div>
                <p class="medium">AALBORG FORSVARS- OG <br> GARNISONS MUSEUM</p>
                <p class="practicalInfo">Skydebanevej 22, 9000 Aalborg</p>
                <p class="openingHours practicalInfo">Åbent alle dage <br> 10 - 17</p>
            </div>
            <div class="footerTopSecondary">
                <p class="medium">STØT OS</p>
                <p class="medium">KONTAKT</p>
            </div>
        </div>
        <div class="footerBottom">
            <img src="@/assets/img/FGMALogo.png" alt="">
            <div class="soMe">
                <a href="https://www.facebook.com/Forsvarsmuseum/?locale=da_DK" target="_blank"><img src="./icons/facebook-f-brands-solid.svg" alt="Facebook Logo"></a>
                <a href="https://www.instagram.com/aalborg_forsvarsmuseum/" target="_blank"><img src="./icons/instagram-brands-solid.svg" alt="YouTube Logo"></a>
                <a href="https://www.youtube.com/channel/UCUF8owAiBnONe-nOA1u4rJQ" target="_blank"><img src="./icons/youtube-brands-solid.svg" alt="Instagram Logo"></a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    .soMe{
        display: flex;
        align-items: center;
        margin-left: 25px;
    }
    .soMe img{
        height: 25px;
        min-width: 25px;
        display: flex;
        margin-left: 15px;
    }
    footer{
        color: var(--headerColor);
        padding: 50px 5vw;
        background-color: var(--specialCaseColor);
        z-index: 7;
    }
    .footerTop, .footerBottom{
        display: flex;
    }
    .footerTop{
        border-bottom: 1px solid var(--headerColor);
        padding-bottom: 40px;
    }
    .footerTop div{
        margin-right: 50px;
    }
    .footerBottom{
        border-top: 1px solid var(--headerColor);
        padding-top: 40px;
    } 
    p.medium{
        font-family: Chivo Mono;
        font-weight: var(--boldWeight);
        text-wrap: balance;
    }
    p.openingHours{
        margin-top: 25px;
    }
    p.practicalInfo{
        font-size: 1rem;
    }
    .footerTopSecondary p{
        margin-bottom: 15px;
    }
    @media screen and (max-width: 950px){
        p.practicalInfo{
            font-size: 0.75rem;
        } 
    }
</style>