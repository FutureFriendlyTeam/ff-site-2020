const jobsLambda = require('./lambdas/jobs/jobs')
const fs = require('fs')

const getJobs = async () => {
  console.log('Retrieving jobs from workable.')
  const { body } = await jobsLambda.jobs()

  const output = {
    list: [],
    details: []
  }

  try {
    console.log('Parsing JSON')
    output.list = JSON.parse(body)

    console.log(`Retrieved ${output.list.length} jobs`)
    const individualJobs = await Promise.all(
      output.list.map(({ shortcode }) => {
        return jobsLambda.job({ pathParameters: { shortCode: shortcode } })
      })
    )
    output.list.map(({ shortcode }, index) => {
      const { body } = individualJobs[index]
      output.details.push({
        shortcode,
        ...JSON.parse(body)
      })
    })

    await fs.writeFile(
      './data/jobs.json',
      JSON.stringify(output),
      async () => {}
    )
  } catch (e) {
    console.error(e)
  }
}

getJobs()
