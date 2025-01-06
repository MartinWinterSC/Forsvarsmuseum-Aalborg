<script>
    import CTABtn from '@/components/CTABtn.vue';
</script>

<template>     
    <section>
        <img src="../assets/img/FGMALogo.png" alt="">
        <div class="textContainer">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>
                Hos Aalborg Forsvars- og Garnisonsmuseum får du en unik mulighed for at udforske Danmarks forsvars- og besættelseshistorie gennem autentiske udstillinger og genstande.
                <br>
                Vi tilbyder en unik mulighed for komme tæt på historien gennem spændende fortællinger og sjældne genstande.
                <br>
                Tag familien, vennerne eller kollegerne med og få en oplevelse sammen. Vi glæder os til at byde dig velkommen og dele historien med dig!
            </p>
            <button>PLANLÆG DIT BESØG</button>
            <!-- Den er der styr på, detter er for demo -->
        </div>
    </section>
</template>

<style scoped>
    section {
    position: relative;
    height: 80vh;
}

img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    height: calc(60vh + 100px);
    object-fit: cover;
    width: 60%;
    margin-left: 5vw;
}

.textContainer {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 2;
    background-color: var(--specialCaseColor);
    padding: 30px;
    max-width: 40%;
    box-sizing: border-box;
    transform: translateY(-50%);
    border-radius: 30px;
    margin-right: 5vw;
}
    .textContainer *{
        margin: 15px 0;
    }
    h3, p{
        color: var(--headerColor);
    }
</style>