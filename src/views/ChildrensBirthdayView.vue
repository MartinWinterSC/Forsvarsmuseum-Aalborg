<script setup>
import ImgWText from "@/components/ImgWText.vue";
import ImgWTextAlt from "@/components/ImgWTextAlt.vue";
import dreng from "@/assets/img/ChildrenBirthdayPage/dreng.jpg";
import barnITank from "@/assets/img/ChildrenBirthdayPage/barnITank.jpg";
import CTABtn from "@/components/CTABtn.vue";
</script>
<template>
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
      <ul>
        <li>
          En guidet tur med fokus på børnevenlige historier og sjove fakta.
        </li>
        <li>Aktiviteter som skattejagt eller "spiontræning."</li>

        <li>Mulighed for at spise medbragt mad.</li>
      </ul>
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
    <CTABtn id="CTABorder">
      <template #CTAText>SE ALLE UDSTILLINGER</template>
    </CTABtn>
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
