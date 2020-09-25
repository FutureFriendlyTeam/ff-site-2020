<template>
  <div id="page" >
    <future-div :background-color="'extended3Light'" class="color-background">

      <!-- <main-header/> -->

      <section 
        class="v-padding-top-mega v-padding-bottom-big">
        <div class="center-col">
          <h1 class="mega xs-full s-three-quarters no-margin">We believe in teams.</h1>
        </div>
      </section>

      <section>
        <div class="center-col">
          <div class="horizontal">

            <div class="border-block xs-full s-half m-half vertical between v-margin-bottom">
              <div class="xs-half self-end v-margin-bottom color-background">
                <future-img :aspect="'four-three'" src="careers/one.jpg" class="multiply"/>
              </div>

              <div class="xs-two-thirds  gridbreaker-left color-background">
                <future-img :aspect="'four-three'" src="careers/two.jpg" class="multiply"/>
              </div>
            </div>

            <article class="border-block xs-full s-half m-half v-padding-bottom-mega v-margin-bottom">
              <p class="big v-margin-top-none">Our goal is to create a place where you can do the best work of your career. Every day.</p>
              <p class="big v-margin-top-none">A sustainable and supporting workplace — dedicated to the well-being, quality of life, and inclusivity of the team.</p>

              <p class="big v-margin-top-none"><a target="_blank" href="http://handbook.mentallyfriendly.com/">Read our team handbook</a></p>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div class="center-col v-margin-bottom">
          <div class="horizontal border-right">
            <div class="xs-full s-three-quarters v-padding-right color-background">
              <future-img :aspect="'four-three'" src="careers/three.jpg" class="multiply"/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="center-col">
          <div class="horizontal">

            <div class="border-block xs-full s-half m-half vertical between v-margin-bottom">
              <div class="v-margin-bottom">
                <h2 class="big v-margin-top-none v-margin-bottom-none">Our promise is to help you grow and leave us more confident, experienced and highly skilled than when you started.</h2>
              </div>

              <div class="xs-third self-end v-margin-bottom color-background">
                <future-img :aspect="'four-three'" src="careers/four.jpg" class="multiply"/>
              </div>

              <div class="xs-half gridbreaker-left color-background">
                <future-img :aspect="'four-three'" src="careers/five.jpg" class="multiply"/>
              </div>
            </div>

            <div class="border-block h-padding-none xs-full s-half m-half v-margin-bottom">

              <article class="xs-full m-half h-padding v-padding-bottom-mega">
                <h2 class="big v-margin-top-none v-margin-bottom">A variety of meaningful work</h2>
                <p class="body">Work on meaningful projects for a variety of clients and sectors in cross-functional teams soaking up all kinds of skills, process and knowledge.</p>
              </article>

              <article class="xs-full m-half h-padding v-padding-bottom-mega">
                <h2 class="big v-margin-top-none v-margin-bottom">A culture of learning</h2>
                <p class="body">Our process and culture are designed to maximise sharing. We build learning practices into our work and you will be supported by your team to build the skills relevant to you. We consider it critical to assign time and budget to formal training. We send team members to specific skills courses and regularly close our studio for full team training. </p>
              </article>

              <article class="xs-full m-half h-padding v-padding-bottom-mega">
                <h2 class="big v-margin-top-none v-margin-bottom">Empowered teams</h2>
                <p class="body">Work from start to finish on projects in a tightly knit team, present your own work, be present at testing sessions. Be in control of the success or failure of a product.</p>
              </article>

              <article class="xs-full m-half h-padding v-padding-bottom-mega">
                <h2 class="big v-margin-top-none v-margin-bottom">Wellbeing focus</h2>
                <p class="body">We put our teams' wellbeing before profitability. Built into our process and cadence are regular check-ins with a support network. These ensure that you’re happy and comfortable on projects and allow us to offer help if need be.</p>
              </article>

              <article class="xs-full m-half h-padding v-padding-bottom-mega">
                <h2 class="big v-margin-top-none v-margin-bottom">Growth plans</h2>
                <p class="body">We are proud of the growth tools and career progression we offer within the business. Team members have gone on to lead their departments, set up new departments and even set up new studios and businesses within Mentally Friendly.</p>
              </article>
            </div>
          </div>
        </div>
      </section>





    </future-div>
    <super-footer :background-color="'extended3'" :color="'dark'"/>
  </div>
</template>

<script>
import FutureImg from '~/components/FutureImg.vue'
import FixedAspect from '~/components/FixedAspect.vue'

export default {
  transition: 'fade',
  components: {
    FutureImg,
    FixedAspect
  },
  data() {
    return {}
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
@import '../scss/borders.scss';

#quote-image {
  @media (min-width: $small) {
    &:before {
      display: none;
    }
  }
}
</style>
