const https = require('https')

exports.handler = async event => {
  const { queryStringParameters } = event
  if (!queryStringParameters || !queryStringParameters.env) {
    console.log('BadRequest')
    return { statusCode: 400, body: 'No env specified' }
  }

  let postData = `{"ref":${
    queryStringParameters.env === 'prod' ? '"master"' : '"develop"'
  }}`
  let resData = ''

  const opts = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      'Content-Type': 'text/plain',
      'Content-Length': Buffer.byteLength(postData),
      'User-Agent': '*'
    }
  }

  console.log('Opts', JSON.stringify(opts))

  let response = await new Promise((resolve, reject) => {
    const post = https.request(
      `https://api.github.com/repos/MentallyFriendly/ff-site-2020/actions/workflows/${
        queryStringParameters.env === 'prod'
          ? 'production_publish.yml'
          : 'staging_publish.yml'
      }/dispatches`,
      opts,
      function(res) {
        res.on('data', chunk => {
          resData += chunk
        })

        res.on('end', () => {
          resolve({
            statusCode: 200,
            body: JSON.stringify(resData)
          })
        })
      }
    )

    post.on('error', e => {
      console.log('Error', JSON.stringify(e))
      reject({
        statusCode: 500,
        body: 'Something went wrong!'
      })
    })
    post.write(postData)
    post.end()
  })

  return response
}
