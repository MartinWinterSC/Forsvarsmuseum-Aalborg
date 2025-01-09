<script setup>
    import HeroImgSub from '@/components/HeroImgSub.vue'; 
    import StickyBottomMenu from '@/components/StickyBottomMenu.vue';
    import TheFooter from '@/components/TheFooter.vue';
    import ImgWText from '@/components/ImgWText.vue';
    import ImgWTextAlt from '@/components/ImgWTextAlt.vue';
    import ExhibitCard from '@/components/ExhibitCard.vue'

    import flyIFormation from '@/assets/img/exhibitIndividual/flyIFormation.jpg';
    import bristolBlenheim from '@/assets/img/exhibitIndividual/-bristolBlenheim-.png';
    import gravstedet from '@/assets/img/exhibitIndividual/gravstedet.png';

    import denDomteEksadrille from '@/assets/img/landingPage/ExhibitImg/den_domte_eksadrille.jpg';
    import hangaren from '@/assets/img/landingPage/ExhibitImg/hangaren.jpg';
    import jagerKorpset from '@/assets/img/landingPage/ExhibitImg/jagerKorpset.jpg';
    import besaettelsestiden from '@/assets/img/landingPage/ExhibitImg/besaettelsestiden.jpeg';
    import handvaben from '@/assets/img/landingPage/ExhibitImg/handvaben.jpg';
    import flyvevabnet from '@/assets/img/landingPage/ExhibitImg/flyvevabnet.jpg';
</script>
<template>
    <HeroImgSub
        :imageSrc="denDomteEksadrille"
    >
        <template #subPageHeading>DEN DØMTE ESKADRILLE</template>
        <template #subPageIntro>Oplev historien om den dømte ekskadrille</template>
    </HeroImgSub>
    <section>
        <ImgWTextAlt
            :imageSrc="flyIFormation"
            imageAlt=""
        >
            <template #introHeadingAlt>
                Operationen mod Aalborg: Et Skæbnesvangert Angreb
            </template>
            <template #introContentAlt>
                <p class="lightText">Den 13. august 1940 iværksatte RAF's 82. Squadron en mission mod den tyskbesatte flyveplads i Aalborg for at ødelægge startbaner og fly. Tolv Bristol Blenheim Mk IV bombefly lettede, men ét måtte vende om.</p>
                <p class="lightText">De resterende elleve blev opdaget i klart vejr, hvilket gav tyskerne tid til at reagere. Alle fly blev skudt ned, tyve besætningsmedlemmer mistede livet, og resten blev taget til fange.</p>
            </template>
            <template #CTATextAlt></template>
        </ImgWTextAlt>
        <h3>Bristol Blenheim Mk IV: <br> RAF's Arbejdshest</h3>
        <p>Bristol Blenheim Mk IV var et britisk bombefly, der kunne nå hastigheder op til 429 km/t og havde en tre-mands besætning. Flyet var avanceret ved sin introduktion, men hurtigt forældet mod tyske jagerfly. Tabene ved Aalborg-raidet den 13. august 1940 viste behovet for bedre bevæbning.</p>
    </section>
    <section>
        <ImgWText 
            :imageSrc="bristolBlenheim"
            imageAlt=""
        >
            <template #introHeading>
                Squadron: Modige Missioner i Mørke Tider
            </template>
            <template #introContent>
                <p class="lightText">82. Squadron, dannet i 1917, udførte vigtige operationer under Anden Verdenskrig. Den skæbnesvangre mission mod Aalborg endte med tabet af elleve fly og tyve besætningsmedlemmer. Eskadrillen fortsatte trods tab og udviste stort mod i kampen mod aksemagterne.</p>
            </template>
            <template #CTAImgText>PLANLÆG DIT BESØG</template>
        </ImgWText>
        <h3>Flyvestation Aalborg: <br> Fra Besættelse til Befriels</h3>
        <p>Flyvestation Aalborg blev oprettet som civil lufthavn i 1938, men blev hurtigt overtaget af Luftwaffe i 1940. Efter krigen blev den en del af det danske flyvevåben og har siden spillet en vigtig rolle i Danmarks forsvar.</p>
    </section>
    <section>
        <ImgWTextAlt
            :imageSrc="gravstedet"
            imageAlt=""
        >
            <template #introHeadingAlt>
                Vadum Kirkegård: En Stille Hyldest til Faldene
            </template>
            <template #introContentAlt>
                <p class="lightText">På Vadum Kirkegård hviler de tyve RAF-besætningsmedlemmer, der mistede livet under Aalborg-angrebet. Gravene er en stille påmindelse om deres offer og forbindelsen mellem Danmark og de allierede under krigen.</p>
            </template>
            <template #CTATextAlt></template>
        </ImgWTextAlt>
        <h3>Den Dømte Eskadrille: <br> En Udstilling om Mod og Ofre</h3>
        <p>Udstillingen "Den Dømte Eskadrille" på Aalborg Forsvars- og Garnisonsmuseum viser vragrester fra et Bristol Blenheim bombefly og fortæller historien om missionen den 13. august 1940.</p>
    </section>

    <section id="scrollToPoint">
            <div class="sideScrollHeader">
                <h2>VORES UDSTILLINGER</h2>
                <CTABtn id="CTABorder">
                    <template #CTAText>SE ALLE UDSTILLINGER</template>
                </CTABtn>
            </div>
            <div class="sideScrollContainer">
                <ExhibitCard
                    class="sideScrollCard"
                    :imageSrc="denDomteEksadrille"
                >
                    <template #exhibitName>DEN DØMTE ESKADRILLE</template>
                    <template #exhibitCatagory>Anden verdenskrig</template>
                </ExhibitCard>
                <ExhibitCard
                    class="sideScrollCard"
                    :imageSrc="hangaren"
                >
                    <template #exhibitName>HANGAREN</template>
                    <template #exhibitCatagory>Den kolde krig</template>
                </ExhibitCard>
                <ExhibitCard
                    class="sideScrollCard"
                    :imageSrc="jagerKorpset"
                >
                    <template #exhibitName>JÆGERKORPSET</template>
                    <template #exhibitCatagory>Totalforsvaret</template>
                </ExhibitCard>
                <ExhibitCard
                    class="sideScrollCard"
                    :imageSrc="besaettelsestiden"
                >
                    <template #exhibitName>BESÆTTELSESTIDEN</template>
                    <template #exhibitCatagory>Anden verdenskrig</template>
                </ExhibitCard>
                <ExhibitCard
                    class="sideScrollCard"
                    :imageSrc="handvaben"
                >
                    <template #exhibitName>HÅNDVÅBEN</template>
                    <template #exhibitCatagory>Våbenkollektionen</template>
                </ExhibitCard>
                <ExhibitCard
                    class="sideScrollCard"
                    :imageSrc="flyvevabnet"
                >
                    <template #exhibitName>FLYVÅBNET</template>
                    <template #exhibitCatagory>Totalforsvaret</template>
                </ExhibitCard>
            </div>
        </section>
    <TheFooter />
    <StickyBottomMenu />
</template>

<style scoped>
    p.lightText{
        color: var(--headerColor);
    }
    p:not(.lightText), h3{
        margin-left: 5vw;
        max-width: 800px;
    }
    #CTATextAlt, #CTAText{
        display: none;
    }
    section{
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .sideScrollHeader{
        display: flex;
        justify-content: space-between;
        margin: 50px 5vw 25px 5vw;
    }
    .sideScrollContainer{
        display: flex;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        align-items: flex-start;
    }
    .sideScrollContainer::-webkit-scrollbar{
        height: 12px;
    }
    .sideScrollContainer::-webkit-scrollbar-thumb,
    .sideScrollContainer::-webkit-scrollbar-track{
        border-radius: 92px;
    }
    .sideScrollContainer::-webkit-scrollbar-thumb{
        background: var(--specialCaseColor);
    }
    .sideScrollContainer::-webkit-scrollbar-track{
        background: var(--headerColor);
        margin: 0 5vw;
    }
    .sideScrollCard{
        scroll-snap-align: center;
        margin: 0 25px 25px 25px;
    }
    .sideScrollCard:first-child{
        margin-left: 5vw;
    }
    .sideScrollCard:last-child{
        margin-right: 5vw;
    }

</style>