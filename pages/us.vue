<template>
  <future-div id="page" :background-color="'extended1Light'">

    <!-- <main-header/> -->

    <section 
      class="v-padding-top-mega v-padding-bottom-big">
      <div class="center-col">
        <h1 class="mega xs-full s-three-quarters no-margin">We are future friendly.</h1>
      </div>
    </section>

    <section>
      <div class="center-col">
        <div class="horizontal">

          <div class="border-block xs-full s-half m-half vertical between v-margin-bottom">
            <div class="xs-third self-end v-margin-bottom">
              <future-img :aspect="'square'" src="us/one.jpg" class="multiply"/>
            </div>

            <div class="xs-half gridbreaker-left">
              <future-img :aspect="'four-three'" src="us/two.jpg" class="multiply"/>
            </div>
          </div>

          <article class="border-block xs-full s-half m-half v-padding-bottom-mega v-margin-bottom">
            <p class="big v-margin-top-none">Global warming,
            financial wellbeing, 
            mental health, 
            diversity and inclusion, education, 
            housing stability,
            and rising cost of living — are all affected by the products and services we use everyday.</p>
            <p class="big v-margin-top-none">The way we build these services can change people's lives. </p>
          </article>
        </div>
      </div>
    </section>

    <section>
      <div class="center-col v-margin-bottom">
        <div class="horizontal border-right">
          <div class="xs-full s-three-quarters v-padding-right">
            <future-img :aspect="'four-three'" src="us/studio.jpg" class="multiply"/>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="center-col">
        <div class="horizontal">

          <div class="border-block xs-full s-half m-half vertical between v-margin-bottom">
            <div>
              <span class="super v-margin-top-none">2004 —</span>
            </div>

            <div class="xs-third self-end v-margin-bottom">
              <future-img :aspect="'square'" src="us/sydney.jpg" class="multiply"/>
            </div>

            <div class="xs-half gridbreaker-left v-margin-bottom">
              <future-img :aspect="'four-three'" src="us/canberra.jpg" class="multiply"/>
            </div>

            <div class="self-end">
              <span class="super v-margin-bottom-none">— 2020</span>
            </div>
          </div>

          <div class="border-block h-padding-none xs-full s-half m-half v-margin-bottom">

            <article class="xs-full m-half h-padding v-padding-bottom-mega">
              <h2 class="big v-margin-top-none v-margin-bottom">Founded in 2004.</h2>
              <p class="body">Over 15 years we have come to understand what we are good at and what we aren’t. When we commit to helping an organisation we bring all 15 years of that experience to making sure we add value from day 1.</p>
            </article>

            <article class="xs-full m-half h-padding v-padding-bottom-mega">
              <h2 class="big v-margin-top-none v-margin-bottom">Studios in Sydney and Canberra.</h2>
              <p class="body">While we work across Australia, we started in Sydney and felt so strongly about the Government and policy work we do that we opened a full time space in Canberra.  </p>
            </article>

            <article class="xs-full m-half h-padding v-padding-bottom-mega">
              <h2 class="big v-margin-top-none v-margin-bottom">B-Corp Certified.</h2>
              <p class="body">While we work across Australia, we started in Sydney and felt so strongly about the Government and policy work we do that we opened a full time space in Canberra.  </p>
            </article>

            <article class="xs-full m-half h-padding v-padding-bottom-mega">
              <h2 class="big v-margin-top-none v-margin-bottom">Independently and Australian owned.</h2>
              <p class="body">While we work across Australia, we started in Sydney and felt so strongly about the Government and policy work we do that we opened a full time space in Canberra.  </p>
            </article>

          </div>
        </div>
      </div>
    </section>


    <section>
      <div class="center-col">
        <div class="horizontal">

          <article class="xs-full s-two-thirds v-padding-right v-margin-bottom">
            <fixed-aspect :aspect="'four-three'" class="multiply">
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
    </section>


    <section>
      <div class="center-col v-margin-bottom">
        <div class="horizontal">
          <div class="border-block xs-full s-half m-half"/>
          <article class="border-block h-padding-none xs-full s-half m-half v-padding-bottom-mega">
            <h2 class="v-margin-top-none big h-padding">Our team</h2>

            <div class="horizontal h-padding-left">

              <div v-for="(portrait, i) in [...Array(30)]" :key="`${i}-portrait`" class="xs-third h-padding-right v-margin-bottom">
                <future-img :aspect="'square'"/>
              </div>
            </div>

          </article>
        </div>
      </div>
    </section>
  </future-div>
</template>

<script>
export default {
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
