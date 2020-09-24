<template>
  <future-div id="page" :background-color="'accentLight'">

    <section 
      class="v-padding-top-mega v-padding-bottom-big">
      <div class="center-col">
        <h1 class="mega xs-full s-three-quarters no-margin">We define how products & services create impact today and in the future.</h1>
      </div>
    </section>

    <section>
      <div class="center-col">
        <div class="horizontal">

          <article class="border-block xs-full s-half m-half v-padding-bottom-mega v-margin-bottom">
            <h2 class="big v-margin-top-none v-margin-bottom">01. Service Strategy</h2>
            <future-img :aspect="'three-four'" class="v-margin-bottom multiply" src="services/design.jpg"/>
            <p class="big">Define how products & services succeed today and in the future.</p>
            <ul class="body">
              <li>Proposition design</li>
              <li>Product innovation</li>
              <li>Service design</li>
              <li>Rapid prototyping & customer validation</li>
              <li>Business cases & funding</li>
              <li>Live trials & experimentation</li>
              <li>3 horizons roadmaps</li>
            </ul>
          </article>

          <article :class="valueFromMq({tiny:'', small:'', mid: 'v-padding-top-mega', big: 'v-padding-top-mega', max: 'v-padding-top-mega'})" class="border-block xs-full s-half m-half v-padding-bottom-mega v-margin-bottom">
            <h2 class="big v-margin-top-none v-margin-bottom">02. Delivery Support</h2>
            <future-img :aspect="'three-four'" class="v-margin-bottom multiply" src="services/build.jpg"/>
            <p class="big">Work together to launch new services, and set internal teams up for success.</p>
            <ul class="body">
              <li>Team formation & acceleration</li>
              <li>Product management</li>
              <li>Product design</li>
              <li>Product engineering</li>
              <li>User testing</li>
              <li>MVP / First release delivery</li>
              <li>Product roadmaps</li>
            </ul>
          </article>

        </div>
      </div>
    </section>


    <section>
      <div class="center-col">
        <div class="horizontal reverse">

          <article class="xs-full s-two-thirds v-padding-right v-margin-bottom multiply">
            <fixed-aspect :aspect="'four-three'">
              <div class="big-quote">
                <blockquote class="big">“The best thing about this whole process is that we’ve taken customer research, and then actually validated something tangible. It’s not just all talk, it’s not just high level stuff. The results have been really positive.”</blockquote>

                <p class="body quote-attribution v-margin-bottom-none">
                  — Jeremy Chee,<br> Director of Customer Strategy & Transformation,<br>  Ausgrid
                </p>
              </div>
            </fixed-aspect>
          </article>

          <div id="quote-image" class="h-padding flex self-end border-block v-margin-bottom">
            <future-img :aspect="'three-four'"/>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="center-col">
        <div class="xs-full vertical between">

          <div class="xs-third gridbreaker-left v-margin-bottom">
            <future-img :aspect="'four-three'" src="services/one.jpg" class="multiply"/>
          </div>

          <div class="xs-half v-margin-bottom self-end">
            <future-img :aspect="'four-three'" src="services/two.jpg" class="multiply"/>
          </div>

        </div>
      </div>
    </section>


    <section>
      <div class="center-col">

        <article class="horizontal v-margin-bottom">
          <div class="xs-full s-half border-block v-padding-bottom-mega">
            <aside class="super v-margin-top-none v-margin-bottom-none">01.</aside>
          </div>
          <div class="xs-full s-half h-padding-none border-block horizontal v-padding-bottom-mega">
            <h1 class="big h-padding xs-full m-half v-margin-top-none">Makers not managers.</h1>
            <div class="h-padding xs-full m-half">
              <p class="body v-margin-top-none">Our most senior team members are all active practitioners,  and work full-time on projects.</p>
              <p class="body">Teams benefit from their deep domain expertise, and years of experience – driving immediate progress.</p>
            </div>
          </div>
        </article>



        <article class="horizontal v-margin-bottom">
          <div class="xs-full s-half border-block v-padding-bottom-mega">
            <aside class="super v-margin-top-none v-margin-bottom-none">02.</aside>
          </div>
          <div class="xs-full s-half h-padding-none border-block horizontal v-padding-bottom-mega">
            <h1 class="big h-padding xs-full m-half v-margin-top-none">Make it real, fast. </h1>
            <div class="h-padding xs-full m-half">
              <p class="body v-margin-top-none">The only way to build evidence in a solution is to make it and test it.</p>
              <p class="body">We build working prototypes in the first 2 weeks of a project, and test with at least 5 customers ever sprint.</p>
            </div>
          </div>
        </article>


        <article class="horizontal v-margin-bottom">
          <div class="xs-full s-half border-block v-padding-bottom-mega">
            <aside class="super v-margin-top-none v-margin-bottom-none">03.</aside>
          </div>
          <div class="xs-full s-half h-padding-none border-block horizontal v-padding-bottom-mega">
            <h1 class="big h-padding xs-full m-half v-margin-top-none">Accelerate your teams.</h1>
            <div class="h-padding xs-full m-half">
              <p class="body v-margin-top-none">We’ll work alongside your teams to deliver project outputs and up-skill along the way.</p>
              <p class="body">We record and teach what works with simple playbooks, so your teams can take it forward.</p>
            </div>
          </div>
        </article>
      </div>
    </section>

  </future-div>
</template>

<script>
export default {
  components: {},
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
    &:after {
      display: none;
    }
  }
}
</style>
