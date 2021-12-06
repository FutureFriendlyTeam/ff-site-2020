<template>
  <section id="job-modal">
    <transition name="modal slide-fade">
      <div
        v-if="active"
      >
        <div class="modal-overlay fade" @click.prevent="$emit('close')"/>
        <div class="modal">
          <button
            class="close-button"
            @click.prevent="$emit('close')"
          >
            Close
          </button>
          <div class="modal-guts">

            <div>
              <h1>Job Title </h1>
              <h2>Overview</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti cum repellendus sit porro quia adipisci laboriosam rem a voluptate eveniet voluptatibus maxime, commodi doloremque doloribus eius voluptates totam iste placeat possimus optio maiores? Natus, similique!</p><h2>Overview</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti cum repellendus sit porro quia adipisci laboriosam rem a voluptate eveniet voluptatibus maxime, commodi doloremque doloribus eius voluptates totam iste placeat possimus optio maiores? Natus, similique!</p>
              <h2>Overview</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti cum repellendus sit porro quia adipisci laboriosam rem a voluptate eveniet voluptatibus maxime, commodi doloremque doloribus eius voluptates totam iste placeat possimus optio maiores? Natus, similique!</p>
              <h2>Overview</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti cum repellendus sit porro quia adipisci laboriosam rem a voluptate eveniet voluptatibus maxime, commodi doloremque doloribus eius voluptates totam iste placeat possimus optio maiores? Natus, similique!</p>
              <h2>Overview</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti cum repellendus sit porro quia adipisci laboriosam rem a voluptate eveniet voluptatibus maxime, commodi doloremque doloribus eius voluptates totam iste placeat possimus optio maiores? Natus, similique!</p>
              <h2>Overview</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti cum repellendus sit porro quia adipisci laboriosam rem a voluptate eveniet voluptatibus maxime, commodi doloremque doloribus eius voluptates totam iste placeat possimus optio maiores? Natus, similique!</p>
              <h2>Overview</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti cum repellendus sit porro quia adipisci laboriosam rem a voluptate eveniet voluptatibus maxime, commodi doloremque doloribus eius voluptates totam iste placeat possimus optio maiores? Natus, similique!</p>


              <a href="https://apply.workable.com/futurefriendly/j/B2871A5501/" class="apply-button">Apply</a>
            </div>

          </div>

        </div>

      </div>
    </transition>
  </section>
</template>
<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    blok: {
      type: Object,
      default: null
    }
  }
}
</script>
<style>
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
  overflow: hidden;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100%);
  opacity: 0;
}

.modal {
  /* This way it could be display flex or grid or whatever also. */
  display: block;
  /* Probably need media queries here */
  width: 80vw;
  height: 100%;
  max-height: 100%;
  position: fixed;
  z-index: 100;
  right: 0;
  /* top: 0; */
  /* Use this for centering if unknown width/height */
  /* transform: translate(-50%, -50%); */
  /* If known, negative margins are probably better (less chance of blurry text). */
  /* margin: -200px 0 0 -200px; */
  background: #d1e5ff;
  box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
  overflow: hidden;
}
.closed {
  display: none;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 20%;
  height: 100%;
  z-index: 50;
  background: rgba(0, 0, 0, 0.6);
}
.modal-guts {
  /* position: absolute;
  top: 0;
  left: 0; */
  width: auto;
  height: 85%;
  overflow: auto;
  color: black;
  padding: 100px 200px 200px 20px;
}
.modal .close-button {
  position: absolute;
  /* don't need to go crazy with z-index here, just sits over .modal-guts */
  z-index: 1;
  top: 100px;
  /* needs to look OK with or without scrollbar */
  right: 1rem;
  border: 0;
  color: #000000;
  font-size: 1.25rem;
  font-family: 'Plain';
  font-weight: normal;
  line-height: 1.25rem;
  padding: 5px 0;
  text-decoration: underline;
  cursor: pointer;
  background: transparent;
}
.modal-guts .apply-button {
  background-color: black;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  border-radius: 5%;
  bottom: 0;
  font-size: 20px;
  font-family: 'Plain';
}
</style>
