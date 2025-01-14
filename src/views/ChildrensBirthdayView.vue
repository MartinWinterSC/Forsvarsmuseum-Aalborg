<script setup>
import ImgWText from "@/components/ImgWText.vue";
import ImgWTextAlt from "@/components/ImgWTextAlt.vue";
import HeroImgSub from '@/components/HeroImgSub.vue';

import dreng from "@/assets/img/ChildrenBirthdayPage/dreng.jpg";
import barnITank from "@/assets/img/ChildrenBirthdayPage/barnITank.jpg";
import boerneFoedelsdag from "@/assets/img/ChildrenBirthdayPage/boerneFoedelsdag.jpg";

</script>
<template>
  <HeroImgSub
    :imageSrc="boerneFoedelsdag"
  >
    <template #subPageHeading>BØRNEFØDSELSDAG</template>
    <template #subPageIntro>Giv dine børn en sjov og lærerig fødselsdag</template>
  </HeroImgSub>
  <section>
    <ImgWText :imageSrc="dreng" imageAlt="Dreng på museum">
    <template #introHeading> Et fødselsdagseventyr </template>
    <template #introContent>
      <p>
        Børnene får mulighed for at klæde sig ud som soldater, løse spændende
        missioner og opleve museets unikke udstillinger på en sjov og interaktiv
        måde.
      </p>
      <p>
        Derudover vil der være fri adgang til hele museumet, samt en helt privat
        guide for jer, som kan fører jer gennem historien.
      </p>
    </template>
    <template #CTAImgText>PLANLÆG DIT BESØG</template>
  </ImgWText>
  </section>
  
  <div class="praktiskInformation">
    <h2>Praktisk information</h2>
    <p>
      Fødselsdagen kan tilpasses aldersgruppen og varer ca. 2-3 timer.
      Arrangementet er ideelt for børn i alderen 6-12 år. Kontakt os for priser
      og ledige datoer!
    </p>
  </div>
  <ImgWTextAlt :imageSrc="barnITank" imageAlt="Garnisonsmuseumets facade">
    <template #introHeadingAlt> Fødselsdagspakke </template>
    <template #introContentAlt>
      <p>- En guidet tur med fokus på børnevenlige historier og sjove fakta.</p>
      <p>- Aktiviteter som skattejagt eller "spiontræning."</p>

      <p>- Mulighed for at spise medbragt mad.</p>
    </template>
    <template #CTATextAlt>BESTIL BILLETTER</template>
  </ImgWTextAlt>
  <div class="kontaktFødselsdag">
    <h2>En fødselsdag de aldrig glemmer</h2>
    <p>
      Tag kontakt i dag og book en fødselsdag, der kombinerer sjov, historie og
      masser af spænding. Vi glæder os til at skabe en uforglemmelig dag for
      jer!
    </p>
  </div>
</template>
<style scoped>
.praktiskInformation {
  margin: 5rem 5vw;
  width: 60%;
}
.praktiskInformation h2 {
  padding-bottom: 2.5rem;
}
.kontaktFødselsdag {
  margin: 5rem 5vw;
  width: 60%;
}
.kontaktFødselsdag h2 {
  padding-bottom: 2.5rem;
}
#CTABorder {
  margin-top: 2.5rem;
}
p{
  color: var(--headerColor);
}
p:not(section p){
  color: var(--headerIconColor);
}
@media screen and (max-width: 950px) {
  .kontaktFødselsdag {
    margin: 5rem 5vw;
    width: 80%;
  }
  .praktiskInformation {
    margin: 5rem 5vw;
    width: 80%;
  }
}
</style>
