# @nRFCloud/update-lambda-environment

[![npm](https://img.shields.io/npm/v/@nrfcloud/update-lambda-environment.svg)](https://www.npmjs.com/package/@nrfcloud/update-lambda-environment)
[![Build Status](https://travis-ci.org/nRFCloud/update-lambda-environment.svg?branch=master)](https://travis-ci.org/nRFCloud/update-lambda-environment)
[![Greenkeeper badge](https://badges.greenkeeper.io/coderbyheart/update-lambda-environment.svg)](https://greenkeeper.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Known Vulnerabilities](https://snyk.io/test/github/nrfcloud/update-lambda-environment/badge.svg)](https://snyk.io/test/github/nrfcloud/update-lambda-environment)
[![DeepScan Grade](https://deepscan.io/api/projects/835/branches/1775/badge/grade.svg)](https://deepscan.io/dashboard/#view=project&pid=835&bid=1775)

Helper for updating the environment variables of a lambda.

Reads the configuration from the provided package.json, and updates the
lambdas `description` and `version` environment variable. 

Usage (with [npx](https://www.npmjs.com/package/npx)):

    npx @nRFCloud/update-lambda-environment <functionName> </path/to/package.json>

