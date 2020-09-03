<template>

  <article
    :class="i%2 === 0 ? 'start': 'end'" 
    class="work-block xs-full m-three-quarters l-two-thirds border-left border-right v-margin-bottom-small">

    <a 
      :href="work.link"
      target="_blank" 
      class="wrapper-link">
      <section class="work-image h-padded v-margin-bottom-small">
        <future-img 
          :src="work.img.src" 
          :aspect="work.img.aspect" 
          :alt="work.img.alt"
          :scale="true"/>
      </section>

      <section class="work-block-copy horizontal">
        <div 
          class="xs-full s-half h-padded border-left border-right work-block-copy-text">
          <h2 class="no-margin-top v-margin-bottom-big">{{ work.main }}</h2>

          <p 
            id="link" 
            class="no-margin hover-accent mid">Case Study &#8594;</p>
        </div>

        <div 
          class="xs-full s-half">          
          <div class="badge-container h-padded">
            <future-img
              v-if="work.badgeImg"
              :src="work.badgeImg.src" 
              :aspect="'free'"
              :alt="work.badgeImg.alt"
              class="badge "
          /></div>
        </div>
      
        <!-- <aside id="mini-text">
          <p 
            id="mini-text-inner" 
            class="tiny hover-accent">Lorem ipsum dolor sit amet.</p>
        </aside> -->
      </section>
    </a>
  </article>
</template>

<script>
import FutureImg from '~/components/FutureImg.vue'
export default {
  name: 'WorkBlock',
  components: {
    FutureImg
  },
  props: {
    work: {
      type: Object,
      default: null
    },
    i: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped lang="scss">
@import '../scss/variables.scss';

.work-block {
  // margin-bottom: 8rem;

  @media (min-width: $mid) {
    margin-bottom: 1.5rem;
  }
  &.end {
    .work-block-copy {
      flex-direction: row-reverse;
      flex-wrap: wrap-reverse;
    }
  }

  &.start {
    .work-block-copy {
      flex-direction: row;
      flex-wrap: wrap-reverse;
    }
  }

  &:last-child {
    margin-bottom: 0px;
  }
}

.work-block-copy {
  position: relative;
}

.work-block-copy-text {
  min-height: 18rem;
  // position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // padding-right: 4rem;
  // padding-bottom: 8rem;

  @media (min-width: $mid) {
    padding-right: 1.5rem;
  }
}

.video {
  width: 100%;
  height: 100%;
}

#mini-text {
  display: none;

  @media (min-width: $small) {
    display: block;
  }
  position: absolute;
  right: 1rem;
  bottom: 0.25rem;
  transform-origin: 0% 0%;
  width: 0px;
  height: 0px;
  transform: rotateX(0deg) rotateY(0deg) rotateZ(-90deg);

  @media (min-width: $mid) {
    right: 1.5rem;
  }
}

.end {
  @media (min-width: $mid) {
    #mini-text {
      left: 1.5rem;
    }

    #mini-text-inner {
      transform: translate(0%, -50%);
    }
  }
}

#mini-text-inner {
  width: 8rem;
  height: auto;
  transform: translate(0%, -100%);
}

.badge-container {
  position: absolute;
  bottom: 0rem;
  right: 0rem;

  @media (min-width: $small) {
    position: relative;
  }
}

.badge {
  width: 8rem;
}
</style>
