<template>
  <div class="vertical xs-full s-half h-padding-right clear-left">
    <div
      v-for="(item, key) in availableJobsByCity"
      :key="key"
      class="v-margin-top"
    >
      <h3>{{ key }}</h3>
      <ul>
        <li v-for="job in item" :key="job.shortcode">
          <a href="" target="_blank">{{ job.title }}</a>
          <span v-if="job.employment_type" class="mini">
            ({{ job.employment_type }})
          </span>
        </li>
      </ul>
    </div>
    <div class="v-margin-top">
      Want to join our team but don't see a job listing that matches? We always
      keep our ear to the ground for great people -
      <a href="">please get in touch!</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkableList',
  data() {
    return {
      jobs: [
        {
          id: 'c485',
          title: 'Digital Account Planner',
          full_title: 'Digital Account Planner - London',
          shortcode: '33E2470CBF',
          code: null,
          state: 'archived',
          department: null,
          department_hierarchy: [],
          url: 'https://futurefriendly.workable.com/jobs/49075',
          application_url:
            'https://futurefriendly.workable.com/jobs/49075/candidates/new',
          shortlink: 'https://apply.workable.com/j/33E2470CBF',
          location: {
            location_str: 'London, United Kingdom',
            country: 'United Kingdom',
            country_code: 'GB',
            region: 'London',
            region_code: 'LND',
            city: 'London',
            zip_code: 'EC1V 1JN',
            telecommuting: false,
          },
          created_at: '2015-03-20T09:42:51Z',
        },
        {
          id: 'dbea',
          title: 'Studio and Resource Manager',
          full_title: 'Studio and Resource Manager - Sydney',
          shortcode: 'FFBD329937',
          code: null,
          state: 'archived',
          department: null,
          department_hierarchy: [],
          url: 'https://futurefriendly.workable.com/jobs/55064',
          application_url:
            'https://futurefriendly.workable.com/jobs/55064/candidates/new',
          shortlink: 'https://apply.workable.com/j/FFBD329937',
          location: {
            location_str: 'Sydney, New South Wales, Australia',
            country: 'Australia',
            country_code: 'AU',
            region: 'New South Wales',
            region_code: 'NSW',
            city: 'Sydney',
            zip_code: '2016',
            telecommuting: false,
          },
          created_at: '2015-04-15T01:30:18Z',
        },
        {
          id: '11170',
          title: 'Junior Product Manager',
          full_title: 'Junior Product Manager - Sydney',
          shortcode: 'C790E90645',
          code: null,
          state: 'published',
          department: null,
          department_hierarchy: [],
          url: 'https://futurefriendly.workable.com/jobs/68766',
          application_url:
            'https://futurefriendly.workable.com/jobs/68766/candidates/new',
          shortlink: 'https://apply.workable.com/j/C790E90645',
          location: {
            location_str: 'Sydney, New South Wales, Australia',
            country: 'Australia',
            country_code: 'AU',
            region: 'New South Wales',
            region_code: 'NSW',
            city: 'Sydney',
            zip_code: '2016',
            telecommuting: false,
          },
          created_at: '2015-05-27T02:48:59Z',
        },
        {
          id: '113a5',
          title: 'Digital Strategy Lead/Director',
          full_title: 'Digital Strategy Lead/Director - Sydney',
          shortcode: '758B00721D',
          code: null,
          state: 'archived',
          department: null,
          department_hierarchy: [],
          url: 'https://futurefriendly.workable.com/jobs/69331',
          application_url:
            'https://futurefriendly.workable.com/jobs/69331/candidates/new',
          shortlink: 'https://apply.workable.com/j/758B00721D',
          location: {
            location_str: 'Sydney, New South Wales, Australia',
            country: 'Australia',
            country_code: 'AU',
            region: 'New South Wales',
            region_code: 'NSW',
            city: 'Sydney',
            zip_code: '2016',
            telecommuting: false,
          },
          created_at: '2015-05-28T02:43:30Z',
        },
        {
          id: '11579',
          title: 'Product Manager - Digital Product Agency',
          full_title: 'Product Manager - Digital Product Agency - Sydney',
          shortcode: '30DA9F1880',
          code: null,
          state: 'published',
          department: null,
          department_hierarchy: [],
          url: 'https://futurefriendly.workable.com/jobs/69799',
          application_url:
            'https://futurefriendly.workable.com/jobs/69799/candidates/new',
          shortlink: 'https://apply.workable.com/j/30DA9F1880',
          location: {
            location_str: 'Sydney, New South Wales, Australia',
            country: 'Australia',
            country_code: 'AU',
            region: 'New South Wales',
            region_code: 'NSW',
            city: 'Sydney',
            zip_code: '2016',
            telecommuting: false,
          },
          created_at: '2015-05-29T04:35:26Z',
        },
        {
          id: '15e58',
          title: 'Senior iOS Developer',
          full_title: 'Senior iOS Developer - Sydney',
          shortcode: '9AECB45B5E',
          code: null,
          state: 'archived',
          department: null,
          department_hierarchy: [],
          url: 'https://futurefriendly.workable.com/jobs/88454',
          application_url:
            'https://futurefriendly.workable.com/jobs/88454/candidates/new',
          shortlink: 'https://apply.workable.com/j/9AECB45B5E',
          location: {
            location_str: 'Sydney, New South Wales, Australia',
            country: 'Australia',
            country_code: 'AU',
            region: 'New South Wales',
            region_code: 'NSW',
            city: 'Sydney',
            zip_code: '2016',
            telecommuting: false,
          },
          created_at: '2015-07-16T07:18:34Z',
        },
        {
          id: '16f55',
          title: 'Mobile Developer (iOS)',
          full_title: 'Mobile Developer (iOS) - London',
          shortcode: '3A4B0A2D51',
          code: null,
          state: 'published',
          department: 'Developerment',
          department_hierarchy: [
            {
              id: 58893,
              name: 'Developerment',
            },
          ],
          url: 'https://futurefriendly.workable.com/jobs/92803',
          application_url:
            'https://futurefriendly.workable.com/jobs/92803/candidates/new',
          shortlink: 'https://apply.workable.com/j/3A4B0A2D51',
          location: {
            location_str: 'London, United Kingdom',
            country: 'United Kingdom',
            country_code: 'GB',
            region: 'London',
            region_code: 'LND',
            city: 'London',
            zip_code: 'EC1V 1JN',
            telecommuting: false,
          },
          created_at: '2015-07-27T10:35:37Z',
        },
        {
          id: '1f963',
          title: 'Android Developer',
          full_title: 'Android Developer - United Kingdom',
          shortcode: '08EA05D922',
          code: null,
          state: 'published',
          department: 'Development',
          department_hierarchy: [
            {
              id: 67736,
              name: 'Development',
            },
          ],
          url: 'https://futurefriendly.workable.com/jobs/128145',
          application_url:
            'https://futurefriendly.workable.com/jobs/128145/candidates/new',
          shortlink: 'https://apply.workable.com/j/08EA05D922',
          location: {
            location_str: 'London, United Kingdom',
            country: 'United Kingdom',
            country_code: 'GB',
            region: 'London',
            region_code: 'LND',
            city: null,
            zip_code: 'EC1V 1JN',
            telecommuting: false,
          },
          created_at: '2015-09-28T14:14:53Z',
        },
        {
          id: '2aec5',
          title: 'Digital Product Designer',
          full_title: 'Digital Product Designer - Sydney',
          shortcode: 'FEF36D5046',
          code: null,
          state: 'published',
          department: null,
          department_hierarchy: [],
          url: 'https://futurefriendly.workable.com/jobs/174579',
          application_url:
            'https://futurefriendly.workable.com/jobs/174579/candidates/new',
          shortlink: 'https://apply.workable.com/j/FEF36D5046',
          location: {
            location_str: 'Sydney, New South Wales, Australia',
            country: 'Australia',
            country_code: 'AU',
            region: 'New South Wales',
            region_code: 'NSW',
            city: 'Sydney',
            zip_code: '2016',
            telecommuting: false,
          },
          created_at: '2015-12-16T00:05:50Z',
        },
        {
          id: '2f1b9',
          title: 'Senior Product Manager - Digital Agency',
          full_title: 'Senior Product Manager - Digital Agency - Sydney',
          shortcode: '399F4E4EF7',
          code: null,
          state: 'archived',
          department: null,
          department_hierarchy: [],
          url: 'https://futurefriendly.workable.com/jobs/191719',
          application_url:
            'https://futurefriendly.workable.com/jobs/191719/candidates/new',
          shortlink: 'https://apply.workable.com/j/399F4E4EF7',
          location: {
            location_str: 'Sydney, New South Wales, Australia',
            country: 'Australia',
            country_code: 'AU',
            region: 'New South Wales',
            region_code: 'NSW',
            city: 'Sydney',
            zip_code: '2016',
            telecommuting: false,
          },
          created_at: '2016-01-21T23:09:33Z',
        },
        {
          id: '3716b',
          title: 'Financial Accountant - Digital Agency',
          full_title: 'Financial Accountant - Digital Agency - Sydney',
          shortcode: 'BBB514BA7C',
          code: null,
          state: 'published',
          department: null,
          department_hierarchy: [],
          url: 'https://futurefriendly.workable.com/jobs/224409',
          application_url:
            'https://futurefriendly.workable.com/jobs/224409/candidates/new',
          shortlink: 'https://apply.workable.com/j/BBB514BA7C',
          location: {
            location_str: 'Sydney, New South Wales, Australia',
            country: 'Australia',
            country_code: 'AU',
            region: 'New South Wales',
            region_code: 'NSW',
            city: 'Sydney',
            zip_code: '2016',
            telecommuting: false,
          },
          created_at: '2016-03-18T04:23:03Z',
        },
        {
          id: '3d2cb',
          title: 'Senior PHP Developer',
          full_title: 'Senior PHP Developer - London',
          shortcode: 'D748C1CBCF',
          code: null,
          state: 'archived',
          department: null,
          department_hierarchy: [],
          url: 'https://futurefriendly.workable.com/jobs/249337',
          application_url:
            'https://futurefriendly.workable.com/jobs/249337/candidates/new',
          shortlink: 'https://apply.workable.com/j/D748C1CBCF',
          location: {
            location_str: 'London, United Kingdom',
            country: 'United Kingdom',
            country_code: 'GB',
            region: 'London',
            region_code: 'LND',
            city: 'London',
            zip_code: 'EC1V1JN',
            telecommuting: false,
          },
          created_at: '2016-04-29T16:53:26Z',
        },
        {
          id: '4d13b',
          title: 'Digital Agency Studio Manager (People and Operations Lead)',
          full_title:
            'Digital Agency Studio Manager (People and Operations Lead) - Sydney',
          shortcode: '0A5ACEE726',
          code: null,
          state: 'published',
          department: null,
          department_hierarchy: [],
          url: 'https://futurefriendly.workable.com/jobs/314473',
          application_url:
            'https://futurefriendly.workable.com/jobs/314473/candidates/new',
          shortlink: 'https://apply.workable.com/j/0A5ACEE726',
          location: {
            location_str: 'Sydney, New South Wales, Australia',
            country: 'Australia',
            country_code: 'AU',
            region: 'New South Wales',
            region_code: 'NSW',
            city: 'Sydney',
            zip_code: '2016',
            telecommuting: false,
          },
          created_at: '2016-08-11T03:15:29Z',
        },
        {
          id: '59ac4',
          title: 'Digital Product Designer',
          full_title: 'Digital Product Designer - Sydney',
          shortcode: '2D78982713',
          code: null,
          state: 'published',
          department: null,
          department_hierarchy: [],
          url: 'https://futurefriendly.workable.com/jobs/366066',
          application_url:
            'https://futurefriendly.workable.com/jobs/366066/candidates/new',
          shortlink: 'https://apply.workable.com/j/2D78982713',
          location: {
            location_str: 'Sydney, New South Wales, Australia',
            country: 'Australia',
            country_code: 'AU',
            region: 'New South Wales',
            region_code: 'NSW',
            city: 'Sydney',
            zip_code: '2016',
            telecommuting: false,
          },
          created_at: '2016-10-27T04:40:30Z',
        },
        {
          id: '59e10',
          title: 'Senior Visual Designer',
          full_title: 'Senior Visual Designer - Sydney',
          shortcode: 'B6C3F55209',
          code: null,
          state: 'published',
          department: null,
          department_hierarchy: [],
          url: 'https://futurefriendly.workable.com/jobs/366910',
          application_url:
            'https://futurefriendly.workable.com/jobs/366910/candidates/new',
          shortlink: 'https://apply.workable.com/j/B6C3F55209',
          location: {
            location_str: 'Sydney, New South Wales, Australia',
            country: 'Australia',
            country_code: 'AU',
            region: 'New South Wales',
            region_code: 'NSW',
            city: 'Sydney',
            zip_code: '2016',
            telecommuting: false,
          },
          created_at: '2016-10-28T03:28:18Z',
        },
        {
          id: '5e932',
          title: 'Senior Digital Product Strategist',
          full_title: 'Senior Digital Product Strategist - London',
          shortcode: '476713798C',
          code: null,
          state: 'archived',
          department: 'Strategy',
          department_hierarchy: [
            {
              id: 50633,
              name: 'Strategy',
            },
          ],
          url: 'https://futurefriendly.workable.com/jobs/386144',
          application_url:
            'https://futurefriendly.workable.com/jobs/386144/candidates/new',
          shortlink: 'https://apply.workable.com/j/476713798C',
          location: {
            location_str: 'London, United Kingdom',
            country: 'United Kingdom',
            country_code: 'GB',
            region: 'London',
            region_code: 'LND',
            city: 'London',
            zip_code: null,
            telecommuting: false,
          },
          created_at: '2016-11-29T14:47:21Z',
        },
        {
          id: '61e61',
          title: 'Growth Strategy Lead',
          full_title: 'Growth Strategy Lead - Sydney',
          shortcode: '861BC16170',
          code: null,
          state: 'published',
          department: 'Strategy',
          department_hierarchy: [
            {
              id: 50633,
              name: 'Strategy',
            },
          ],
          url: 'https://futurefriendly.workable.com/jobs/399759',
          application_url:
            'https://futurefriendly.workable.com/jobs/399759/candidates/new',
          shortlink: 'https://apply.workable.com/j/861BC16170',
          location: {
            location_str: 'Sydney, New South Wales, Australia',
            country: 'Australia',
            country_code: 'AU',
            region: 'New South Wales',
            region_code: 'NSW',
            city: 'Sydney',
            zip_code: '2016',
            telecommuting: false,
          },
          created_at: '2016-12-22T23:00:36Z',
        },
        {
          id: '61e79',
          title: 'Office Manager / HR Assistant',
          full_title: 'Office Manager / HR Assistant - Sydney',
          shortcode: 'C2B47F18A2',
          code: null,
          state: 'archived',
          department: 'Operations',
          department_hierarchy: [
            {
              id: 80499,
              name: 'Operations',
            },
          ],
          url: 'https://futurefriendly.workable.com/jobs/399783',
          application_url:
            'https://futurefriendly.workable.com/jobs/399783/candidates/new',
          shortlink: 'https://apply.workable.com/j/C2B47F18A2',
          location: {
            location_str: 'Sydney, New South Wales, Australia',
            country: 'Australia',
            country_code: 'AU',
            region: 'New South Wales',
            region_code: 'NSW',
            city: 'Sydney',
            zip_code: '2016',
            telecommuting: false,
          },
          created_at: '2016-12-22T23:44:07Z',
        },
        {
          id: '667d7',
          title: 'Junior Content Strategist',
          full_title: 'Junior Content Strategist - Sydney',
          shortcode: 'F259E2B9F6',
          code: null,
          state: 'published',
          department: null,
          department_hierarchy: [],
          url: 'https://futurefriendly.workable.com/jobs/418565',
          application_url:
            'https://futurefriendly.workable.com/jobs/418565/candidates/new',
          shortlink: 'https://apply.workable.com/j/F259E2B9F6',
          location: {
            location_str: 'Sydney, New South Wales, Australia',
            country: 'Australia',
            country_code: 'AU',
            region: 'New South Wales',
            region_code: 'NSW',
            city: 'Sydney',
            zip_code: null,
            telecommuting: false,
          },
          created_at: '2017-01-27T05:48:02Z',
        },
        {
          id: '6c876',
          title: 'Android Developer - Contract',
          full_title: 'Android Developer - Contract - Sydney',
          shortcode: 'DA7023D574',
          code: null,
          state: 'archived',
          department: null,
          department_hierarchy: [],
          url: 'https://futurefriendly.workable.com/jobs/443300',
          application_url:
            'https://futurefriendly.workable.com/jobs/443300/candidates/new',
          shortlink: 'https://apply.workable.com/j/DA7023D574',
          location: {
            location_str: 'Sydney, New South Wales, Australia',
            country: 'Australia',
            country_code: 'AU',
            region: 'New South Wales',
            region_code: 'NSW',
            city: 'Sydney',
            zip_code: null,
            telecommuting: false,
          },
          created_at: '2017-03-06T23:05:15Z',
        },
        {
          id: '6cc81',
          title: 'Strategist - Digital Product Studio',
          full_title: 'Strategist - Digital Product Studio - Sydney',
          shortcode: 'AE2688DFE4',
          code: null,
          state: 'published',
          department: 'Strategy',
          department_hierarchy: [
            {
              id: 50633,
              name: 'Strategy',
            },
          ],
          url: 'https://futurefriendly.workable.com/jobs/444335',
          application_url:
            'https://futurefriendly.workable.com/jobs/444335/candidates/new',
          shortlink: 'https://apply.workable.com/j/AE2688DFE4',
          location: {
            location_str: 'Sydney, New South Wales, Australia',
            country: 'Australia',
            country_code: 'AU',
            region: 'New South Wales',
            region_code: 'NSW',
            city: 'Sydney',
            zip_code: null,
            telecommuting: false,
          },
          created_at: '2017-03-08T02:47:38Z',
        },
        {
          id: '6cfe0',
          title: 'UX Prototyper',
          full_title: 'UX Prototyper - Sydney',
          shortcode: 'A4DA2562B5',
          code: null,
          state: 'published',
          department: 'Design',
          department_hierarchy: [
            {
              id: 6378,
              name: 'Design',
            },
          ],
          url: 'https://futurefriendly.workable.com/jobs/445198',
          application_url:
            'https://futurefriendly.workable.com/jobs/445198/candidates/new',
          shortlink: 'https://apply.workable.com/j/A4DA2562B5',
          location: {
            location_str: 'Sydney, New South Wales, Australia',
            country: 'Australia',
            country_code: 'AU',
            region: 'New South Wales',
            region_code: 'NSW',
            city: 'Sydney',
            zip_code: '2016',
            telecommuting: false,
          },
          created_at: '2017-03-09T03:29:49Z',
        },
        {
          id: 'd0189',
          title:
            "Want to work with us but don't see what you're looking for? Apply here",
          full_title:
            "Want to work with us but don't see what you're looking for? Apply here - Australia",
          shortcode: 'B2871A5501',
          code: null,
          state: 'published',
          department: null,
          department_hierarchy: [],
          url: 'https://futurefriendly.workable.com/jobs/851127',
          application_url:
            'https://futurefriendly.workable.com/jobs/851127/candidates/new',
          shortlink: 'https://apply.workable.com/j/B2871A5501',
          location: {
            location_str: 'Australia',
            country: 'Australia',
            country_code: 'AU',
            region: null,
            region_code: null,
            city: null,
            zip_code: null,
            telecommuting: false,
          },
          created_at: '2018-10-24T02:24:49Z',
        },
      ],
      paging: {
        next: 'https://futurefriendly.workable.com/spi/v3/jobs?limit=50&since_id=f2b6c',
      },
    }
  },
  computed: {
    availableJobsByCity() {
      const filtered = this.jobs.filter((job) => {
        return job.state !== 'archived' && job.location.city !== null
      })

      return filtered.reduce((acc, job) => {
        if (Object.keys(acc).includes(job.location.city)) {
          acc[job.location.city].push(job)
        } else {
          acc[job.location.city] = [job]
        }
        return acc
      }, {})
    },
  },
}
</script>
