import {  Jobs, onJobAdded, SetJobCall } from '../generated/Ethlance/Jobs'
import { Job } from '../generated/schema'

export function handleOnJobAdded(event: onJobAdded): void {
  let job = new Job(event.params.jobId.toHex())
  job.title = "test"
  job.description = "test"
  
  job.save()
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
