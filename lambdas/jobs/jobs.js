'use strict'
const axios = require('axios')

const token = 'Bearer ' + process.env.WORKABLE_TOKEN

module.exports.jobs = async () => {
  const {
    data: { jobs }
  } = await axios.get('https://futurefriendly.workable.com/spi/v3/jobs', {
    headers: {
      Authorization: token
    },
    params: {
      state: 'published',
      include_fields: 'employment_type'
    }
  })

  const jobsRequiredData = jobs.map(job => ({
    state: job.state,
    city: job.location.city,
    title: job.title,
    shortcode: job.shortcode,
    employment_type: job.employment_type
  }))

  return {
    statusCode: 200,
    body: JSON.stringify(jobsRequiredData)
  }
}

module.exports.job = async ({ pathParameters: { shortCode } }) => {
  const { data } = await axios.get(
    `https://futurefriendly.workable.com/spi/v3/jobs/${shortCode}`,
    {
      headers: {
        Authorization: token
      }
    }
  )

  const {
    department,
    employment_type,
    application_url,
    location,
    description,
    requirements,
    benefits
  } = data

  return {
    statusCode: 200,
    body: JSON.stringify({
      department,
      employment_type,
      application_url,
      location,
      description,
      requirements,
      benefits
    })
  }
}

module.exports.jobForm = async ({ pathParameters: { shortCode } }) => {
  const { data } = await axios.get(
    `https://futurefriendly.workable.com/spi/v3/jobs/${shortCode}/application_form`,
    {
      headers: {
        Authorization: token
      }
    }
  )

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}

module.exports.submit = async event => {
  const {
    body,
    pathParameters: { shortCode }
  } = event

  const { data, status } = await axios.post(
    `https://futurefriendly.workable.com/spi/v3/jobs/${shortCode}/candidates`,
    body,
    {
      headers: {
        Authorization: token
      }
    }
  )

  if (status === 201) {
    return {
      statusCode: 200
    }
  } else {
    return {
      statusCode: status,
      body: JSON.stringify(data)
    }
  }
}
