import {  SetJobCall } from '../generated/Ethlance/Jobs'
import { Job } from '../generated/schema'

export function handleSetJob(event: SetJobCall): void {
  let job = new Job(event.inputs.jobId.toHex())
  job.title = event.inputs.title
  job.description = event.inputs.description
  job.save()
}
