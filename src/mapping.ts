import {  Jobs, onJobAdded, SetJobCall } from '../generated/Ethlance/Jobs'
import { Job, DbMapping } from '../generated/schema'
import { keccak256 } from 'js-sha3';

export function handleOnJobAdded(event: onJobAdded): void {
  let jobId = event.params.jobId.toHex()
  
  let job = new Job(event.params.jobId.toHex())
  job.title = "test"
  job.description = "test"
  createMapping(jobId, "job/title")
  createMapping(jobId, "job/description")
  job.save()
   
}

function createMapping(jobId: string, propertyType: string): void {
  let mapping = new DbMapping(keccak256(propertyType.concat(jobId.toString())))
  mapping.jobId = jobId
  mapping.propertyType = propertyType
  mapping.save()
}

export function handleSetJob(event: SetJobCall): void {
  let job = new Job(event.inputs.jobId.toHex())
  job.title = event.inputs.title
  job.description = event.inputs.description
  Jobs.state = parseJobStatus(event.inputs.)
  job.save()
  
}

function parseJobStatus(statusId: number): string {
  switch (statusId) {
    case 1:
      return "Hiring"
    case 2:
      return "HiringDone"
    case 3:
      return "Blocked"
    case 4:
      return "Draft"
    case 5:
      return "Refunding"
    case 6:
      return "Refunded"
  }

  throw new Error("Unsupported job state: " + statusId);
}
