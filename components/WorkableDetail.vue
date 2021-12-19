<template>
  <div :class="`popout ${isAnimatedOpen ? 'high' : 'low'}`">
    <transition name="fade" @after-leave="onCloseComplete()">
      <div v-if="isOpen" class="fader" @click="onClose()"/>
    </transition>

    <transition name="grow">
      <div v-if="isOpen" class="jobpanel">
        <h2>{{ job.title }}</h2>
        <div class="top-list">
          <ul>
            <li>{{ job.location.region }}</li>
            <li>{{ job.department }}</li>
            <li>{{ job.employment_type }}</li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<style>
.popout {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.popout.high {
  z-index: 9999;
}
.popout.low {
  z-index: -1;
}

.fader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
  z-index: 9999;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1200ms cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-leave,
.fade-enter-to {
  opacity: 0.5;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.jobpanel {
  position: fixed;
  top: 0;
  left: 20%;
  width: 80%;
  height: 100%;
  /* flex-grow: 2; */
  background-color: #d1e5ff;
  z-index: 9999;
  padding: 50px 330px 50px 50px;
  max-width: 55%;
}

.grow-enter-active,
.grow-leave-active {
  transition: left 1200ms cubic-bezier(0.16, 1, 0.3, 1);
}

.grow-leave,
.grow-enter-to {
  left: 20%;
}

.grow-enter,
.grow-leave-to {
  left: 100%;
}

.top-list li::before {
  content: none;
}

.top-list li {
  display: inline-block;
  text-align: center;
  padding: 0px 5px;
  margin: 0px 4px 40px 4px;
  border-left: 1px solid black;
  letter-spacing: -0.02em;
}
</style>

<script>
export default {
  props: {
    shortcode: String,
    isOpen: Boolean
  },
  data() {
    return {
      isAnimatedOpen: false,
      job: {
        id: '1aa043',
        title: 'Senior Product Manager',
        full_title: 'Senior Product Manager - Canberra',
        shortcode: '3C392B2C19',
        code: null,
        state: 'published',
        department: 'Production',
        url: 'https://futurefriendly.workable.com/jobs/1743729',
        application_url:
          'https://futurefriendly.workable.com/jobs/1743729/candidates/new',
        shortlink: 'https://apply.workable.com/j/3C392B2C19',
        location: {
          country: 'Australia',
          country_code: 'AU',
          region: 'Australian Capital Territory',
          region_code: 'ACT',
          city: 'Canberra',
          zip_code: '2600',
          telecommuting: false
        },
        created_at: '2021-05-12T07:07:15Z',
        full_description:
          '<p>We are Future Friendly - a strategic design team that makes. For 16 years, we have designed and delivered products and services that make a difference. We improve lives through the strategic design and development of everyday services across government, finance, education, energy and health.</p><p>We are B Corp certified and we are a team of 40 based in Sydney and Canberra.</p><p><br></p><p><strong>Product Management at Future Friendly</strong><br></p><p>Our Product Managers are passionate about leading multi-disciplinary teams to define new propositions and launch new products.</p><p>Product Management at Future Friendly is a pretty unique role - often bridging the roles of a Product Manager, Product Owner, Delivery Manager, Scrum Master and Agile Coach.</p> <p>But whatever the role and mindset, as a member of the Product Management team, you will contribute to our product culture by sharing your expertise, advocating knowledge and suggesting new ways to improve our processes.<br></p><p>You are a strong influencer, who inspires a like-minded team to come together, solve real-world problems, and deliver quality work.</p><p><br></p><h3>The Opportunity</h3><p>Our experience and approach is based around providing multi-disciplinary teams to plan, design and build digital products and services delivered through our sprint-based methodology. We draw on multiple disciplines from user research, strategy, user experience, visual design, service design, policy design, front-end development, back-end development, mobile development, user testing, data science, project management and technical consulting. </p><p>Our Canberra studio is continuing to expand and we are looking for a Senior Product Manager to join our growing team. We are looking for someone with a digital product management background, which might mean you have worked as a Product Manager, Product Owner, Delivery Manager or Project Manager in the past.<br> </p><p><strong>Requirements</strong></p><p>You are an experienced Product Manager that can confidently lead digital product design and delivery projects. As a result, you will be able to demonstrate your experience managing a project and empowering product teams to meet customer needs and drive business value by:</p><ul> <li>Setting up the project with the right approach and team structure fit for solving each product problem.</li> <li>Planning and facilitating workshops to define the problem and inform a chosen direction for designing the right solution.</li> <li>Championing the product vision within the product team and communicating this upwards to senior stakeholders.</li> <li>Collaborating with the product team to roadmap product features and prioritising based on customer needs and business value.</li> <li>Facilitating sprint rituals including product stand-ups, check-ins and demonstrations to drive momentum, transparency and communication.</li> <li>Monitoring project resourcing, profitability and progress to ensure projects remain within budget. </li> <li>Driving the processes for bringing a multi-disciplinary product (strategy, design &amp; development) team together to collaborate and problem solve.</li> <li>Driving client communication to bring stakeholders on the journey and influence the direction of a product.</li> <li>Assisting in the creation of assumptions and experiments, facilitating user testing and synthesising customer insights to inform decisions.</li> <li>Empowering teams to do their best work by taking into consideration their subject expertise and personal needs.</li> </ul><h3>The type of person we’re looking for</h3><ul> <li> <strong>Influencer</strong>: You know how to build trust with your team and can influence stakeholders to support decision making and inform a product\'s direction.</li> <li> <strong>Product thinker</strong>: You have experience understanding user needs and their priorities and keeps a team focused on the user, whilst considering technical feasibility and business objectives.</li> <li> <strong>Problem solver</strong>: You understand how to build the right approach &amp; processes for solving different problems, and know which people and skills are needed to solve the problem. </li> <li> <strong>Natural collaborator</strong>: You encourage collaborative teamwork, where each person is empowered as the expert in their craft to take ownership in their decisions and collectively drive the project outcomes forward. <br> </li> </ul><p><strong>Benefits</strong></p><p>This is an exciting opportunity to help shape the future of digital government services in Australia. You will be joining an industry leading design studio that is part of some of the most meaningful and fast paced digital innovation projects across government. We do a lot of our work in the Alpha stage of the Digital Service Standard, meaning you will get the opportunity to work with decision makers to build confidence in the direction of government services through rapid prototyping. But we also have the scale and expertise to deliver Beta / engineering projects which means we get to see the best ideas through to delivery and value creation for citizens and government. You will enjoy being supported and guided by genuine leaders in their fields, and working alongside the most talented design, product, strategy and technology practitioners.</p><p>To find out more about what it would be like working with us, we have released our Team Member Handbook on our <a href="https://futurefriendly.team/careers" rel="nofollow noreferrer noopener" class="external">careers page.</a> This handbook shows how we deliver on our commitment to create a workplace where you can do the best work of your career. Every day. It outlines the specific policies, activities and ways of working that contribute to a sustainable and supporting workplace that is dedicated to the well-being, quality of life, and inclusivity of the team.</p><p>As a preview, some of the benefits of working at Future Friendly include:</p><ul> <li> <strong>Happy teams</strong>: We believe that fun and excitement are key ingredients to great work. Even when the projects are hard we always find time for good times.</li> <li> <strong>Empowerment</strong>: Every opinion is heard. Everyone presents their own work. Be supported by leadership, not managed. Own your projects from beginning to end.</li> <li> <strong>Growth</strong>: Our mission is to find the best design thinkers and empower them to learn, grow, and solve problems, together. You\'ll be backed by a team who will invest in your career progression and development.</li> <li>Events: We do lots of studio events, birthday celebrations, studio trips away for the weekend, team dinners, team offsites and activities, Brew club and book club to name a few.</li> </ul><p>You can find out more about us in the usual places:<br></p><p><a href="https://futurefriendly.team/" rel="nofollow noreferrer noopener" class="external">Website</a><br></p><p><a href="https://www.linkedin.com/company/future-friendly/" rel="nofollow noreferrer noopener" class="external">Linkedin</a></p><p><a href="https://www.instagram.com/_futurefriendly/" rel="nofollow noreferrer noopener" class="external">Instagram</a></p><p><br></p>',
        description:
          '<p>We are Future Friendly - a strategic design team that makes. For 16 years, we have designed and delivered products and services that make a difference. We improve lives through the strategic design and development of everyday services across government, finance, education, energy and health.</p><p>We are B Corp certified and we are a team of 40 based in Sydney and Canberra.</p><p><br></p><p><strong>Product Management at Future Friendly</strong><br></p><p>Our Product Managers are passionate about leading multi-disciplinary teams to define new propositions and launch new products.</p><p>Product Management at Future Friendly is a pretty unique role - often bridging the roles of a Product Manager, Product Owner, Delivery Manager, Scrum Master and Agile Coach.</p> <p>But whatever the role and mindset, as a member of the Product Management team, you will contribute to our product culture by sharing your expertise, advocating knowledge and suggesting new ways to improve our processes.<br></p><p>You are a strong influencer, who inspires a like-minded team to come together, solve real-world problems, and deliver quality work.</p><p><br></p><h3>The Opportunity</h3><p>Our experience and approach is based around providing multi-disciplinary teams to plan, design and build digital products and services delivered through our sprint-based methodology. We draw on multiple disciplines from user research, strategy, user experience, visual design, service design, policy design, front-end development, back-end development, mobile development, user testing, data science, project management and technical consulting. </p><p>Our Canberra studio is continuing to expand and we are looking for a Senior Product Manager to join our growing team. We are looking for someone with a digital product management background, which might mean you have worked as a Product Manager, Product Owner, Delivery Manager or Project Manager in the past.<br> </p>',
        requirements:
          "<p>You are an experienced Product Manager that can confidently lead digital product design and delivery projects. As a result, you will be able to demonstrate your experience managing a project and empowering product teams to meet customer needs and drive business value by:</p><ul> <li>Setting up the project with the right approach and team structure fit for solving each product problem.</li> <li>Planning and facilitating workshops to define the problem and inform a chosen direction for designing the right solution.</li> <li>Championing the product vision within the product team and communicating this upwards to senior stakeholders.</li> <li>Collaborating with the product team to roadmap product features and prioritising based on customer needs and business value.</li> <li>Facilitating sprint rituals including product stand-ups, check-ins and demonstrations to drive momentum, transparency and communication.</li> <li>Monitoring project resourcing, profitability and progress to ensure projects remain within budget. </li> <li>Driving the processes for bringing a multi-disciplinary product (strategy, design &amp; development) team together to collaborate and problem solve.</li> <li>Driving client communication to bring stakeholders on the journey and influence the direction of a product.</li> <li>Assisting in the creation of assumptions and experiments, facilitating user testing and synthesising customer insights to inform decisions.</li> <li>Empowering teams to do their best work by taking into consideration their subject expertise and personal needs.</li> </ul><h3>The type of person we’re looking for</h3><ul> <li> <strong>Influencer</strong>: You know how to build trust with your team and can influence stakeholders to support decision making and inform a product's direction.</li> <li> <strong>Product thinker</strong>: You have experience understanding user needs and their priorities and keeps a team focused on the user, whilst considering technical feasibility and business objectives.</li> <li> <strong>Problem solver</strong>: You understand how to build the right approach &amp; processes for solving different problems, and know which people and skills are needed to solve the problem. </li> <li> <strong>Natural collaborator</strong>: You encourage collaborative teamwork, where each person is empowered as the expert in their craft to take ownership in their decisions and collectively drive the project outcomes forward. <br> </li> </ul>",
        benefits:
          '<p>This is an exciting opportunity to help shape the future of digital government services in Australia. You will be joining an industry leading design studio that is part of some of the most meaningful and fast paced digital innovation projects across government. We do a lot of our work in the Alpha stage of the Digital Service Standard, meaning you will get the opportunity to work with decision makers to build confidence in the direction of government services through rapid prototyping. But we also have the scale and expertise to deliver Beta / engineering projects which means we get to see the best ideas through to delivery and value creation for citizens and government. You will enjoy being supported and guided by genuine leaders in their fields, and working alongside the most talented design, product, strategy and technology practitioners.</p><p>To find out more about what it would be like working with us, we have released our Team Member Handbook on our <a href="https://futurefriendly.team/careers" rel="nofollow noreferrer noopener" class="external">careers page.</a> This handbook shows how we deliver on our commitment to create a workplace where you can do the best work of your career. Every day. It outlines the specific policies, activities and ways of working that contribute to a sustainable and supporting workplace that is dedicated to the well-being, quality of life, and inclusivity of the team.</p><p>As a preview, some of the benefits of working at Future Friendly include:</p><ul> <li> <strong>Happy teams</strong>: We believe that fun and excitement are key ingredients to great work. Even when the projects are hard we always find time for good times.</li> <li> <strong>Empowerment</strong>: Every opinion is heard. Everyone presents their own work. Be supported by leadership, not managed. Own your projects from beginning to end.</li> <li> <strong>Growth</strong>: Our mission is to find the best design thinkers and empower them to learn, grow, and solve problems, together. You\'ll be backed by a team who will invest in your career progression and development.</li> <li>Events: We do lots of studio events, birthday celebrations, studio trips away for the weekend, team dinners, team offsites and activities, Brew club and book club to name a few.</li> </ul><p>You can find out more about us in the usual places:<br></p><p><a href="https://futurefriendly.team/" rel="nofollow noreferrer noopener" class="external">Website</a><br></p><p><a href="https://www.linkedin.com/company/future-friendly/" rel="nofollow noreferrer noopener" class="external">Linkedin</a></p><p><a href="https://www.instagram.com/_futurefriendly/" rel="nofollow noreferrer noopener" class="external">Instagram</a></p><p><br></p>',
        employment_type: 'Full-time',
        industry: 'Information Technology and Services',
        function: 'Production',
        experience: 'Not Applicable',
        education: null,
        keywords: [
          'Digital Studio',
          'Management',
          'delivery management',
          'digital design',
          'product',
          'product management'
        ]
      }
    }
  },
  watch: {
    isOpen(val) {
      if (val) {
        this.isAnimatedOpen = true
      }
    }
  },
  methods: {
    onClose() {
      this.$emit('close')
    },
    onCloseComplete() {
      this.isAnimatedOpen = false
      this.$emit('closecomplete')
    }
  },
  methods: {
    onClose() {
      this.$emit('close')
    },
    onCloseComplete() {
      this.$emit('closecomplete')
    }
  }
}
</script>
