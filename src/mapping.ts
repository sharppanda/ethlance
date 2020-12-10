import {  SetJobCall } from '../generated/Ethlance/Jobs'
import { Job } from '../generated/schema'

export function handleSetJob(event: SetJobCall): void {
  let id = event.inputs.jobId.toHex()
  let job = Job.load(id)
  if (job == null) {
    job = new Job(id)
  }

  job.title = event.inputs.title
  job.description = event.inputs.description
  job.save()
}
