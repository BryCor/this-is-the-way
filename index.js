import * as core from '@actions/core';
import * as core from '@actions/github';



try{

    const name = core.getInput('name');
    const output_value = (`This is the way ${name}! -the Mando and Grogu`);
    core.setOutput('greeting', 'output_value');
    
} catch (error) {
    core.setFailed(error.message);
  }