<template>
  <transition name="grow" v-on:after-leave="onCloseComplete">
    <div v-if="isOpen" class="applypanel">
      <div class="content">
        <h1>{{ title }}</h1>
        <div v-if="loaded">
          <h2>Personal Information</h2>
          <Input
            label="First Name"
            id="first_name"
            v-model="jobResponse.candidate.firstName"
          />
          <Input
            label="Last Name"
            type="text"
            id="last_name"
            v-model="jobResponse.candidate.lastName"
          />
          <Input
            label="Email"
            type="email"
            id="email"
            v-model="jobResponse.candidate.email"
          />
          <div v-for="field in jobForm.form_fields" :key="field.key">
            <div v-if="field.key === 'education'">
              <h2>Education</h2>
              <Button @click="addEducation" text="Add Entry" />
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
              <h2>Experience</h2>
              <Button @click="addExperience" text="Add Entry" />
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
              <h2>Summary</h2>
              <TextArea v-model="jobResponse.candidate.summary" />
            </div>

            <div v-if="field.key === 'resume'">
              <h2>Resume</h2>
              <File @change="onFileUpload" text="Upload" />
            </div>

            <div v-if="field.key === 'cover_letter'">
              <h2>Cover Letter</h2>
              <TextArea v-model="jobResponse.candidate.cover_letter" />
            </div>
          </div>
          <h2>Questions</h2>
          <div v-for="question in jobForm.questions" :key="question.id">
            <p>{{ question.body }}</p>
            <div v-if="question.type === 'string'">
              <Input
                type="text"
                v-model="jobResponse.candidate.answers[question.id].value"
              />
            </div>
            <div v-if="question.type === 'free_text'">
              <TextArea
                v-model="jobResponse.candidate.answers[question.id].value"
              />
            </div>
            <div v-if="question.type === 'boolean'">
              <input
                type="checkbox"
                v-model="jobResponse.candidate.answers[question.id].value"
              />
            </div>
            <div v-if="question.type === 'date'">
              <input
                type="date"
                v-model="jobResponse.candidate.answers[question.id].value"
              />
            </div>
          </div>
          <Button
            v-if="!submitting && !submitted"
            @click="onSubmit"
            text="Submit"
          />
          <div v-if="submitted">
            <p>Success!</p>
          </div>
          <div v-if="submitting">
            <p>Submitting</p>
            <Loader />
          </div>
          <div v-if="error !== ''">
            <p>{{ error }}</p>
          </div>
          <div class="footer-padding">&nbsp;</div>
        </div>
        <Loader v-else />
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

.applypanel {
  display: flex;
  flex-direction: row;
  position: fixed;
  top: 0;
  left: 30vw;
  width: 70vw;
  min-height: calc(100vh - 5.5em);
  max-height: calc(100vh - 5.5em);
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
import Button from './formFields/Button.vue'
import File from './formFields/File.vue'
import Input from './formFields/Input.vue'
import TextArea from './formFields/TextArea.vue'
import Loader from './Loader.vue'

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

  const answers = questions.reduce((acc, question) => {
    switch (question.type) {
      case 'string':
        return { ...acc, [question.id]: { dataKey: 'body', value: '' } }
      case 'free_text':
        return { ...acc, [question.id]: { dataKey: 'body', value: '' } }
      case 'boolean':
        return { ...acc, [question.id]: { dataKey: 'body', value: false } }
      case 'date':
        return { ...acc, [question.id]: { dataKey: 'body', value: '' } }
      case 'file':
        return {
          ...acc,
          [question.id]: {
            dataKey: 'file',
            value: {
              name: '',
              data: undefined,
            },
          },
        }
    }
  }, {})

  return {
    firstName: '',
    lastName: '',
    email: '',
    answers,
    ...requestedFormFields,
  }
}

export default {
  components: { Button, Education, File, Input, Experience, Loader, TextArea },
  props: {
    shortcode: String,
    title: String,
    isOpen: Boolean,
  },
  data() {
    return {
      loaded: false,
      submitting: false,
      submitted: false,
      error: '',
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
    async onSubmit() {
      this.submitting = true
      this.error = ''
      const formatted = {
        ...this.jobResponse,
        candidate: {
          ...this.jobResponse.candidate,
          answers: Object.keys(this.jobResponse.candidate.answers).map(
            (key) => {
              const answer = this.jobResponse.candidate.answers[key]
              return {
                question_key: key,
                [answer.dataKey]: answer.value,
              }
            }
          ),
        },
      }
      const { data, status } = await this.$axios.$post(
        `https://j0vz06anpf.execute-api.ap-southeast-2.amazonaws.com/jobs/${this.shortcode}`,
        formatted
      )
      this.submitting = false

      if (status === 200) {
        this.success = true
      } else if (status === 422) {
        this.error = data.error
      } else {
        this.error = 'Something went wrong, please try again later'
      }
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
      const file = event.target.files[0]
      if (file) {
        let filename = files.name
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.jobResponse.candidate.resume = {
            name: filename,
            data: fileReader.result.split(',')[1],
          }
        })
        fileReader.readAsDataURL(files[0])
      } else {
        this.jobResponse.candidate.resume = {
          name: '',
          data: '',
        }
      }
    },
    async getJobForm() {
      const applicationForm = await this.$axios.$get(
        `https://j0vz06anpf.execute-api.ap-southeast-2.amazonaws.com/jobs/${this.shortcode}/form`
      )
      this.jobForm = applicationForm
      this.jobResponse.candidate = generateBlankCandidate(applicationForm)
      this.loaded = true
    },
    onClose() {
      this.$emit('close')
    },
    onCloseComplete() {
      this.isAnimatedOpen = false
      this.$emit('closecomplete')
    },
  },
}
</script>
