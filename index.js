#!/usr/bin/env node

/* global process */

const aws = require('aws-sdk')
const t = require('tcomb')
const fs = require('fs')
const semverRegex = require('semver-regex')
const {blue, green, yellow} = require('colors')

const lambda = new aws.Lambda({region: process.env.AWS_DEFAULT_REGION})

fs.readFile(process.argv[process.argv.length - 1], (err, data) => {
  if (err) {
    process.stderr.write(err.toString())
    return process.exit(1)
  }
  const pjson = JSON.parse(data)
  const FunctionName = t.refinement(t.String, s => s && s.length > 0, 'Non-empty String')(process.argv[process.argv.length - 2] || pjson.name)
  const version = t.refinement(t.String, s => s && semverRegex().test(s), 'Semantic Version String')(pjson.version)
  const Description = t.String(pjson.description)
  lambda
    .getFunctionConfiguration({FunctionName})
    .promise()
    .then(({Environment}) => {
      const env = Environment ? Object.assign({}, Environment) : {Variables: {}}
      env.Variables.version = version
      return lambda
        .updateFunctionConfiguration({FunctionName, Environment: env, Description})
        .promise()
        .then(() => {
          process.stdout.write(`Updated:     ${yellow(FunctionName)}\n`)
          process.stdout.write(`${blue('Version:    ')} ${green(version)}\n`)
          process.stdout.write(`${blue('Description:')} ${green(Description)}\n`)
        })
    })
    .catch(err => {
      process.stderr.write(err.toString())
      return process.exit(1)
    })
})
