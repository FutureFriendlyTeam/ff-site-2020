<template>
  <section id="download-modal">
    <transition name="modal">
      <div
        v-if="active"
        class="relative transition-all ease-in-out duration-300"
      >
        <div class="modal-overlay" id="modal-overlay" @click.prevent="$emit('close')"></div>
        <div class="modal">
          <button
            class="close-button"
            @click.prevent="$emit('close')"
          >
            Close
          </button>
          <div class="modal-guts">

            <div>

            </div>
            <div>
              <mail-chimp-form></mail-chimp-form>
            </div>

          </div>

        </div>

      </div>
    </transition>
  </section>
</template>
<script>
import MailChimpForm from '~/components/MailChimpForm.vue'

export default {
  components: {
    MailChimpForm
  },
  props: {
    active: {
      type: Boolean,
      default: false
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
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal {
  /* This way it could be display flex or grid or whatever also. */
  display: block;
  /* Probably need media queries here */
  width: 400px;
  max-width: 100%;
  height: 640px;
  max-height: 100%;
  position: fixed;
  z-index: 100;
  left: 50%;
  top: 50%;
  /* Use this for centering if unknown width/height */
  transform: translate(-50%, -50%);
  /* If known, negative margins are probably better (less chance of blurry text). */
  /* margin: -200px 0 0 -200px; */
  background: #edefed;
  box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
}
.closed {
  display: none;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background: rgba(0, 0, 0, 0.6);
}
.modal-guts {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  /* padding: 20px 50px 20px 20px; */
}
.modal .close-button {
  position: absolute;
  /* don't need to go crazy with z-index here, just sits over .modal-guts */
  z-index: 1;
  top: 10px;
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
}
</style>
