import * as core from '@actions/core';

const name = core.getInput('name');
const output_value = (`This is the way ${name}! -the Mando and Grogu`);
core.setOutput('greeting', 'output_value');
