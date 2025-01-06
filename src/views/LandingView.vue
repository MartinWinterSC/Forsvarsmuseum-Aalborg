<script setup>
    import HeroImg from '@/components/HeroImg.vue';
    import StickyBottomMenu from '@/components/StickyBottomMenu.vue';
    import ExhibitCard from '@/components/ExhibitCard.vue'
    import ImgWText from '@/components/ImgWText.vue'
    import ActivityCard from '@/components/ActivityCard.vue';
    import InstagramCard from '@/components/InstagramCard.vue';
    import FEPCard from '@/components/FEPCard.vue';
</script>

<template>
    <main>
        <HeroImg />
        <!-- <StickyBottomMenu /> -->
        <section id="scrollToPoint">
            <div class="sideScrollHeader">
                <h2>VORES UDSTILLINGER</h2>
                <button>SE ALLE UDSTILLINGER</button>
            </div>
            <div class="sideScrollContainner">
                <ExhibitCard class="sideScrollCard"/>
                <ExhibitCard class="sideScrollCard"/>
                <ExhibitCard class="sideScrollCard"/>
                <ExhibitCard class="sideScrollCard"/>
                <ExhibitCard class="sideScrollCard"/>
                <ExhibitCard class="sideScrollCard"/>
            </div>
        </section>
        <section>
            <ImgWText />
        </section>
        <section>
            <div class="sideScrollHeader">
                <h2>AKTIVITETER</h2>
            </div>
            <div class="sideScrollContainner">
                <ActivityCard class="sideScrollCard"/>
                <ActivityCard class="sideScrollCard"/>
                <ActivityCard class="sideScrollCard"/>
                <ActivityCard class="sideScrollCard"/>
                <ActivityCard class="sideScrollCard"/>
                <ActivityCard class="sideScrollCard"/>
            </div>
        </section>
        <section>
            <ImgWText />
        </section>
        <section>
            <div class="sideScrollHeader" id="insta">
                <h2>INSTAGRAM</h2>
                <p>Del jeres billeder med hash #forsvarsmuseet, <br> så bliver de spotlighted her på siden</p>
            </div>
            <div class="sideScrollContainner">
                <InstagramCard class="sideScrollCard"/>
                <InstagramCard class="sideScrollCard"/>
                <InstagramCard class="sideScrollCard"/>
                <InstagramCard class="sideScrollCard"/>
                <InstagramCard class="sideScrollCard"/>
                <InstagramCard class="sideScrollCard"/>
            </div>
        </section>
        <section>
            <FEPCard />
        </section>
    </main>
</template>

<style scoped>
    .sideScrollHeader{
        display: flex;
        justify-content: space-between;
        margin: 50px 5vw 25px 5vw;
    }
    .sideScrollContainner{
        display: flex;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
    }
    .sideScrollContainner::-webkit-scrollbar {
      height: 12px;
    }

    .sideScrollContainner::-webkit-scrollbar-thumb,
    .sideScrollContainner::-webkit-scrollbar-track {
      border-radius: 92px;
    }

    .sideScrollContainner::-webkit-scrollbar-thumb {
      background: var(--specialCaseColor);
    }

    .sideScrollContainner::-webkit-scrollbar-track {
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
    #insta{
        flex-direction: column;
    }    
</style>