<template>
  <transition name="grow" v-on:after-leave="onCloseComplete">
    <div v-if="isOpen" class="panel">
      <div class="content">
        <h1>{{ title }}</h1>
        <div v-if="loaded">
          <h2>APPLICATION</h2>
          <h3>Personal Information</h3>
          <div class="form-group">
            <label for="first_name"
              >First Name<span class="required">*</span></label
            >
            <input
              type="text"
              id="first_name"
              v-model="jobResponse.candidate.firstName"
            />
          </div>
          <div class="form-group">
            <label for="last_name"
              >Last Name<span class="required">*</span></label
            >
            <input
              type="text"
              id="last_name"
              v-model="jobResponse.candidate.lastName"
            />
          </div>
          <div class="form-group">
            <label for="email">Email<span class="required">*</span></label>
            <input
              type="email"
              id="email"
              v-model="jobResponse.candidate.email"
            />
          </div>

          <h3>Fields</h3>
          <div v-for="field in jobForm.form_fields" :key="field.key">
            <div v-if="field.key === 'education'">
              <h4>Education</h4>
              <button @click="addEducation">Add Entry</button>
              <Education
                v-for="(education_entry, index) in jobResponse.candidate
                  .education_entries"
                :key="index"
                :srcEducation="education_entry"
                @change="
                  jobResponse.candidate.education_entries[index] = $event
                "
                @delete="
                  jobResponse.candidate.education_entries.splice(index, 1)
                "
              />
            </div>
            <div v-if="field.key === 'experience'">
              <h4>Experience</h4>
              <button @click="addExperience">Add Entry</button>
              <experience
                v-for="(experience_entry, index) in jobResponse.candidate
                  .experience_entries"
                :key="index"
                :srcExperience="experience_entry"
                @change="
                  jobResponse.candidate.experience_entries[index] = $event
                "
                @delete="
                  jobResponse.candidate.experience_entries.splice(index, 1)
                "
              />
            </div>
            <div v-if="field.key === 'summary'">
              <h4>Summary</h4>
              <div class="form-group">
                <label for="summary">Summary</label>
                <textarea
                  id="summary"
                  v-model="jobResponse.candidate.summary"
                />
              </div>
            </div>

            <div v-if="field.key === 'resume'">
              <h4>Resume</h4>
              <div class="form-group">
                <label for="resume">Resume</label>
                <input id="resume" type="file" @change="onFileUpload" />
              </div>
            </div>

            <div v-if="field.key === 'cover_letter'">
              <h4>Cover Letter</h4>
              <div class="form-group">
                <label for="cover_letter">Summary</label>
                <textarea
                  id="cover_letter"
                  v-model="jobResponse.candidate.cover_letter"
                />
              </div>
            </div>
          </div>
          <!--<h3>Questions</h3>
          <ul>
            <li v-for="question in jobForm.questions" :key="question.id">
              <a :href="question.url" class="fakelink">{{ question.body }}</a>
            </li>
          </ul> -->
          <button @click="logData">Submit</button>
        </div>
        <div v-else>
          <div class="lines-spinner full-height">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <div class="close-button">
        <img
          :src="closeButtonSource"
          :data-src="closeButtonSource"
          @click="onClose"
        />
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@import '../scss/variables.scss';

h1 {
  font-size: 2.75rem;

  @media (max-width: $mid) {
    max-width: 80vw;
  }
}

.panel {
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 30vw;
  width: 70vw;
  min-height: calc(100vh - 5.5em);
  background-color: $extended3-light;
  padding-top: 5.5em;
  padding-left: 3em;
  overflow-y: scroll;

  @media (max-width: $mid) {
    padding: 0;
    left: 0;
    max-height: 100vh;
    width: 100vw;
  }

  & .content {
    display: flex;
    flex-direction: column;
    width: 70%;
    padding-bottom: 10em;

    @media (max-width: $mid) {
      width: 100%;
      margin: 0 0.5em;
    }
  }
}

.grow-enter-active,
.grow-leave-active {
  transition: left 1200ms cubic-bezier(0.16, 1, 0.3, 1);
}

.grow-leave,
.grow-enter-to {
  left: 30%;

  @media (max-width: $mid) {
    left: 0;
  }
}

.grow-enter,
.grow-leave-to {
  left: 100%;
}

.anti-h3-padding {
  margin-top: -3em;
}

.anchor-links {
  margin-top: 5em;
  display: flex;
  flex-direction: row;

  @media (max-width: $mid) {
    margin-top: 2em;
    flex-direction: column;
  }

  .anchor-link {
    margin-right: 3em;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }

    & a {
      text-decoration: none;

      &:hover {
        color: #000;
        text-decoration: underline;
      }
    }
  }
}

.footer-padding {
  height: 20em;
}

.cta-button {
  display: inline-block;
  background-color: var(--textColor);
  padding: 0.5rem 2.5rem;
  color: var(--backgroundColor);
  border: none;
  text-decoration: none;

  &:hover {
    background-color: #f05969;
  }
}

.close-button {
  margin-top: 0.67em;

  @media (max-width: $mid) {
    padding: 1em;
    position: absolute;
    right: 0;
    top: 0;
  }

  & img {
    cursor: pointer;
  }
}

.full-height {
  height: 100vh;
}

.header-anchor:hover {
  color: #000;
}

.required {
  color: #f05969;
}
</style>

<script>
import Education from './Workablefields/Education.vue'
import Experience from './Workablefields/Experience.vue'

const generateBlankCandidate = (applicationForm) => {
  const { form_fields, questions } = applicationForm

  const requestedFormFields = form_fields.reduce((acc, field) => {
    switch (field.key) {
      case 'education':
        return { ...acc, education_entries: [] }
      case 'experience':
        return { ...acc, experience_entries: [] }
      case 'summary':
        return { ...acc, summary: '' }
      case 'headline':
        return { ...acc, headline: '' }
      case 'resume':
        return { ...acc, resume: { name: '', data: undefined } }
      case 'cover_letter':
        return { ...acc, cover_letter: '' }
      case 'skills':
        return { ...acc, skills: [] }
    }
  }, {})

  return {
    firstName: '',
    lastName: '',
    email: '',
    ...requestedFormFields,
  }
}

export default {
  components: { Education, Experience },
  props: {
    shortcode: String,
    title: String,
    isOpen: Boolean,
  },
  data() {
    return {
      loaded: false,
      isAnimatedOpen: false,
      closeButtonSource: require(`~/assets/images/ui/close.svg`),
      body: document.querySelector('body'),
      jobForm: {},
      jobResponse: {
        sourced: false,
        candidate: {},
      },
    }
  },
  watch: {
    async isOpen(val) {
      if (val) {
        this.isAnimatedOpen = true
        this.getJobForm()
      }
    },
  },
  methods: {
    logData() {
      console.log(this.jobResponse)
    },
    addEducation() {
      this.jobResponse.candidate.education_entries.push({
        school: '',
        degreee: '',
        field_of_study: '',
        start_date: '2000-01-01',
        end_date: '2000-01-01',
      })
    },
    addExperience() {
      this.jobResponse.candidate.experience_entries.push({
        title: '',
        summary: '',
        company: '',
        industry: '',
        start_date: '2000-01-01',
        end_date: '2000-01-01',
        current: false,
      })
    },
    onFileUpload(event) {
      const files = event.target.files
      let filename = files[0].name
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.jobResponse.candidate.resume = {
          name: filename,
          data: fileReader.result.split(',')[1],
        }
      })
      fileReader.readAsDataURL(files[0])
    },
    async getJobForm() {
      const applicationForm = await this.$axios.$get(
        `https://j0vz06anpf.execute-api.ap-southeast-2.amazonaws.com/jobs/${this.shortcode}/apply-form`
      )
      console.log(applicationForm)
      this.jobForm = applicationForm
      this.jobResponse.candidate = generateBlankCandidate(applicationForm)
      this.loaded = true
      console.log(generateBlankCandidate(applicationForm))
    },
    onClose() {
      console.log(this.jobResponse)
      this.$emit('close')
    },
    onCloseComplete() {
      this.isAnimatedOpen = false
      this.$emit('closecomplete')
    },
  },
}
</script>
