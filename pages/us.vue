<template>
  <div id="page" >
    <future-div :background-color="'extended1Light'">

      <!-- <main-header/> -->

      <section 
        class="v-padding-top-mega v-padding-bottom-big">
        <div class="center-col">
          <h1 class="mega xs-full s-three-quarters no-margin">We are Future Friendly.</h1>
        </div>
      </section>

      <section>
        <div class="center-col">
          <div class="horizontal">

            <div class="border-block xs-full s-half m-half vertical between v-margin-bottom">
              <div class="xs-third self-end v-margin-bottom color-background">
                <future-img :aspect="'square'" src="us/one.jpg" class="multiply"/>
              </div>

              <div class="xs-half gridbreaker-left color-background">
                <future-img :aspect="'four-three'" src="us/two.jpg" class="multiply"/>
              </div>
            </div>

            <article class="border-block xs-full s-half m-half v-padding-bottom-mega v-margin-bottom">
              <p class="big v-margin-top-none">Global warming,<br>
                financial wellbeing, <br>
                mental health, <br>
                diversity and inclusion, education, <br>
                housing stability,<br>
                and rising cost of living — are all affected by the products and services we use everyday.</p>
              <p class="big v-margin-top-none">Digital services have the power to change lives and build a better future.</p>
            </article>
          </div>
        </div>
      </section>

      <section>
        <div class="center-col v-margin-bottom">
          <div class="horizontal border-right">
            <div class="xs-full s-three-quarters v-padding-right color-background">
              <future-img :aspect="'four-three'" src="us/team.jpg" class="multiply"/>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="center-col">
          <div class="horizontal">

            <div class="border-block xs-full s-half m-half vertical between v-margin-bottom">
              <div>
                <span class="big v-margin-top-none">Founded in 2004.</span>
              </div>

              <div class="xs-third self-end v-margin-bottom color-background">
                <future-img :aspect="'square'" src="us/sydney.jpg" class="multiply"/>
              </div>

              <div class="xs-half gridbreaker-left v-margin-bottom color-background">
                <future-img :aspect="'four-three'" src="us/canberra.jpg" class="multiply"/>
              </div>

              <div class="self-end">
                <!-- <span class="super v-margin-bottom-none">— 2020</span> -->
              </div>
            </div>

            <div class="border-block h-padding-none xs-full s-half m-half v-margin-bottom">

              <article class="xs-full m-half h-padding v-padding-bottom-mega">
                <h2 class="big v-margin-top-none v-margin-bottom">Studios in Sydney and Canberra.</h2>
                <p class="body">While we work across Australia, we started in Sydney and felt so strongly about the Government and policy work we do that we opened a full time space in Canberra.  </p>
              </article>

              <article class="xs-full m-half h-padding v-padding-bottom-mega">
                <h2 class="big v-margin-top-none v-margin-bottom">B-Corp Certified.</h2>
                <p class="body">We are committed to running an ethical and sustainable business. Future Friendly has been B Corp certified for 5 years and plays an active role in the Sydney B Corp community. </p>
              </article>

              <article class="xs-full m-half h-padding v-padding-bottom-mega">
                <h2 class="big v-margin-top-none v-margin-bottom">Independently and Australian owned.</h2>
                <p class="body">We are owned by the original founders and a team of partners. We all work in the business and we are all passionate about making things that matter.</p>
              </article>

            </div>
          </div>
        </div>
      </section>


      <!-- <section>
      <div class="center-col">
        <div class="horizontal">

          <article class="xs-full s-two-thirds v-padding-right v-margin-bottom">
            <fixed-aspect :aspect="'four-three'" class="multiply big-quote-wrapper">
              <div class="big-quote">
                <blockquote class="big">“It's very rare you get external consultants who come in and not just understand your industry, but can teach you things about it. It makes your work very credible.”</blockquote>

                <p class="body quote-attribution v-margin-bottom-none">
                  — Kelly Fisher,<br>Branch Manager,<br>VET Market Information
                </p>
              </div>
            </fixed-aspect>
          </article>

          <div id="quote-image" class="h-padding flex self-end border-block v-margin-bottom">
            <future-img :aspect="'square'"/>
          </div>
        </div>
      </div>
    </section> -->


      <section>
        <div class="center-col v-margin-bottom">
          <div class="horizontal">
            <div class="border-block xs-full s-half m-half"/>
            <article class="border-block h-padding-none xs-full s-half m-half v-padding-bottom-mega">
              <h2 class="v-margin-top-none big h-padding">Our team</h2>

              <div class="horizontal h-padding-left">

                <div v-for="(portrait, i) in team" :key="`${i}-portrait`" class="xs-third h-padding-right v-margin-bottom color-background">
                  <future-img :aspect="'square'" :src="`team/${portrait.name.toLowerCase().replace(' ', '-')}.jpg`" class="multiply"/>
                </div>
              </div>

            </article>
          </div>
        </div>
      </section>

    
    </future-div>
    <super-footer :background-color="'extended1'" :color="'extended1Light'"/>
  </div>
</template>

<script>
import team from '~/data/team.json'
export default {
  transition: 'fade',
  data() {
    return {
      team: team
    }
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
