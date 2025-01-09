<script setup>
    import HeroImgSub from '@/components/HeroImgSub.vue'; 
    import StickyBottomMenu from '@/components/StickyBottomMenu.vue';
    import TheFooter from '@/components/TheFooter.vue';
    import ExhibitCard from '@/components/ExhibitCard.vue';

    import udstillingerForsidebillede from '@/assets/img/exhibitOverview/udstillinger_forsidebillede.jpg';

    import militareStyrker from '@/assets/img/exhibitOverview/ww2/MilitareStyrker.jpg';
    import denDomteEksadrille from '@/assets/img/exhibitOverview/ww2/den_domte_eksadrille.jpg';
    import besaettelsestiden from '@/assets/img/exhibitOverview/ww2/besaettelsestiden.jpeg';
    import flyvningILuften from '@/assets/img/exhibitOverview/ww2/flyvningILuften.jpg';
    import bunkeren from '@/assets/img/exhibitOverview/ww2/bunkeren.jpg';

    import hangaren from '@/assets/img/exhibitOverview/coldWar/hangaren.jpg';
    import forplads from '@/assets/img/exhibitOverview/coldWar/forplads.jpg';
    import nyUdstillingshal from '@/assets/img/exhibitOverview/coldWar/nyUdstillingshal.jpg';
    import udstillingsdakket from '@/assets/img/exhibitOverview/coldWar/udstillingsdakket.jpg';

    import haeren from '@/assets/img/exhibitOverview/totalforsvar/haeren.jpg';
    import flyvevaabnet from '@/assets/img/exhibitOverview/totalforsvar/flyvevaabnet.jpg';
    import hjemmevaernet from '@/assets/img/exhibitOverview/totalforsvar/hjemmevaernet.jpg';
    import politi from '@/assets/img/exhibitOverview/totalforsvar/politi.jpg';
    import jagerKorpset from '@/assets/img/exhibitOverview/totalforsvar/jagerKorpset.jpg';
    import signaltjenesten from '@/assets/img/exhibitOverview/totalforsvar/signaltjenesten.jpg';

    import garnisonen from '@/assets/img/exhibitOverview/aalborgGarrison/garnisonen.jpg';
    import dronningensLivregiment from '@/assets/img/exhibitOverview/aalborgGarrison/dronningensLivregiment.jpg';
    import militærmusik from '@/assets/img/exhibitOverview/aalborgGarrison/militærmusik.jpg';

    import attenfiretreds from '@/assets/img/exhibitOverview/1864/1864.jpg';

    
</script>

<template>
    <HeroImgSub
        :imageSrc="udstillingerForsidebillede"
    >
        <template #subPageHeading>VORES UDSTILLINGER</template>
        <template #subPageIntro>Her kan du se alle vores udstillinger</template>
    </HeroImgSub>
    <section class="localnav">
    <p>SKIP TIL</p>
    <div class="localNavPointsMobile">
        <i class="fa-solid fa-chevron-left scroll"></i>
        <div class="localNavGradientStart"></div>
        <div class="localNavPoints">
            <a href="#exhibitCategory1">2. VERDENSKRIG</a>
            <a href="#exhibitCategory2">KOLDE KRIG</a>
            <a href="#exhibitCategory3">TOTALFORSVARET</a>
            <a href="#exhibitCategory4">AALBORG GARNISON</a>
            <a href="#exhibitCategory5">1864</a>
        </div>
        <div class="localNavGradientEnd"></div>
        <i class="fa-solid fa-chevron-right"></i>
    </div>
</section>
    <section class="categorySingle" id="exhibitCategory1">
        <h2>2. VERDENSKRIG</h2>
        <div class="exhibitContainer">
            <ExhibitCard
                :imageSrc="militareStyrker"
            >
                <template #exhibitName>MILITÆRE STYRKER UNDER 2. VERDENSKRIG</template>
                <template #exhibitCatagory>Anden verdenskrig</template>
            </ExhibitCard>
            <ExhibitCard
                :imageSrc="denDomteEksadrille"
            >
                <template #exhibitName>DEN DØMTE ESKADRILLE</template>
                <template #exhibitCatagory>Anden verdenskrig</template>
            </ExhibitCard>
            <ExhibitCard
                :imageSrc="besaettelsestiden"
            >
                <template #exhibitName>BESÆTTELSESTIDEN 1940-1945</template>
                <template #exhibitCatagory>Anden verdenskrig</template>
            </ExhibitCard>
            <ExhibitCard
                :imageSrc="flyvningILuften"
            >
                <template #exhibitName>FLYVNING I LUFTEN OVER DANMARK 19440-1945</template>
                <template #exhibitCatagory>Anden verdenskrig</template>
            </ExhibitCard>
            <ExhibitCard
                :imageSrc="bunkeren"
            >
                <template #exhibitName>BUNKEREN</template>
                <template #exhibitCatagory>Anden verdenskrig</template>
            </ExhibitCard>
        </div>
    </section>
    <section class="categorySingle" id="exhibitCategory2">
        <h2>KOLDE KRIG</h2>
        <div class="exhibitContainer">
            <ExhibitCard
                :imageSrc="hangaren"
            >
                <template #exhibitName>HANGAREN</template>
                <template #exhibitCatagory>Den kolde krig</template>
            </ExhibitCard>
            <ExhibitCard
                :imageSrc="forplads"
            >
                <template #exhibitName>FORPLADS</template>
                <template #exhibitCatagory>Den kolde krig</template>
            </ExhibitCard>
            <ExhibitCard
                :imageSrc="nyUdstillingshal"
            >
                <template #exhibitName>DEN NYE UDSTILLING</template>
                <template #exhibitCatagory>Den kolde krig</template>
            </ExhibitCard>
            <ExhibitCard
                :imageSrc="udstillingsdakket"
            >
                <template #exhibitName>UDSTILLINGSDÆKKET</template>
                <template #exhibitCatagory>Den kolde krig</template>
            </ExhibitCard>
        </div>
    </section>
    <section class="categorySingle" id="exhibitCategory3">
        <h2>TOTALFORSVARET</h2>
        <div class="exhibitContainer">
            <ExhibitCard
                :imageSrc="haeren"
            >
                <template #exhibitName>HÆREN</template>
                <template #exhibitCatagory>Totalforsvaret</template>
            </ExhibitCard>
            <ExhibitCard
                :imageSrc="flyvevaabnet"
            >
                <template #exhibitName>FLYVÅBNET</template>
                <template #exhibitCatagory>Totalforsvaret</template>
            </ExhibitCard>
            <ExhibitCard
                :imageSrc="hjemmevaernet"
            >
                <template #exhibitName>HJEMMEVÆRNET</template>
                <template #exhibitCatagory>Totalforsvaret</template>
            </ExhibitCard>
            <ExhibitCard
                :imageSrc="politi"
            >
                <template #exhibitName>POLITI</template>
                <template #exhibitCatagory>Totalforsvaret</template>
            </ExhibitCard>
            <ExhibitCard
                :imageSrc="jagerKorpset"
            >
                <template #exhibitName>JÆGERKORPSET</template>
                <template #exhibitCatagory>Totalforsvaret</template>
            </ExhibitCard>
            <ExhibitCard
                :imageSrc="signaltjenesten"
            >
                <template #exhibitName>SIGNALTJENESTEN</template>
                <template #exhibitCatagory>Totalforsvaret</template>
            </ExhibitCard>
        </div>
    </section>
    <section class="categorySingle" id="exhibitCategory4">
        <h2>AALBORG GARNISON</h2>
        <div class="exhibitContainer">
            <ExhibitCard
                :imageSrc="garnisonen"
            >
                <template #exhibitName>GARNISONEN</template>
                <template #exhibitCatagory>Aalborg Garnison</template>
            </ExhibitCard>
            <ExhibitCard
                :imageSrc="dronningensLivregiment"
            >
                <template #exhibitName>DRONINGENS LIVREGIMENT</template>
                <template #exhibitCatagory>Aalborg Garnison</template>
            </ExhibitCard>
            <ExhibitCard
                :imageSrc="militærmusik"
            >
                <template #exhibitName>MILITÆR MUSIK I GARNISONEN</template>
                <template #exhibitCatagory>Aalborg Garnison</template>
            </ExhibitCard>
        </div>
    </section>
    <section class="categorySingle" id="exhibitCategory5">
        <h2>1864</h2>
        <div class="exhibitContainer">
            <ExhibitCard
                :imageSrc="attenfiretreds"
            >
                <template #exhibitName>KRIGEN I 1864</template>
                <template #exhibitCatagory>1864</template>
            </ExhibitCard>
        </div>
    </section>
    <TheFooter />
    <StickyBottomMenu />
</template>

<style scoped>
    .localNavPoints{
        position: relative;
        background-color: var(--headerIconColor);
        padding: 5px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        overflow: hidden;
    }
    .localNavPoints a{
        color: var(--headerColor);
        text-decoration: none;
        padding: 15px 0px;
        font-family: Roboto;
        font-weight: var(--boldWeight);
    }
    .localNavPoints a:hover{
        text-decoration: underline;
    }
    section{
        margin: 50px 5vw;
    }
    i{
        color: var(--headerColor);
        font-size: 2rem;
        display: none;
        background-color: var(--headerIconColor);
    }
    .exhibitContainer{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 50px 20px;
    }

    @media screen and (max-width: 1400px){
        .exhibitContainer{
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media screen and (max-width: 750px){
        .localNavPoints{
            display: flex;
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            background-color: var(--headerIconColor);
            padding: 5px;
            display: flex;
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            width: 100%;
        }
        .localNavPoints a:first-child{
            padding-left: 10px;
        }
        .localNavPoints a:last-child{
            padding-right: 10px;
        }
        .localNavPoints::-webkit-scrollbar{
            height: 12px;
            margin-top: 12px;
        }
        .localNavPoints::-webkit-scrollbar-thumb{
            background: var(--specialCaseColor);
        }
        .localNavPoints::-webkit-scrollbar-track{
            background: var(--headerColor);
        }
        .localNavPoints a{
            flex-shrink: 0;
            margin: 0 10px;
            scroll-snap-align: center;
        }
        .exhibitContainer{
            grid-template-columns: repeat(1, 1fr);
        }
        .localNavPointsMobile{
            position: relative;
            display: flex;
            align-items: center;
            overflow: hidden;
        }
        .localNavGradientStart, .localNavGradientEnd{
            position: absolute;
            top: 0;
            bottom: 0;
            width: 50px;
            pointer-events: none;
            z-index: 1;
        }
        .localNavGradientStart{
            left: 0;
            background: linear-gradient(to right, var(--headerIconColor), rgba(255, 255, 255, 0));
        }
        .localNavGradientEnd{
            right: 0;
            background: linear-gradient(to left, var(--headerIconColor), rgba(255, 255, 255, 0));
        }
    }
</style>