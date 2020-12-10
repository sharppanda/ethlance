import { SetJobCall } from '../generated/Ethlance/Jobs'
import { Job } from '../generated/schema'
import { Languages, Skills } from './constants'
import { BigInt, BigDecimal, store, Address } from '@graphprotocol/graph-ts'

export function handleSetJob(event: SetJobCall): void {
  let id = event.inputs.jobId.toHex()
  let job = Job.load(id)
  if (job == null) {
    job = new Job(id)
  }



  job.title = event.inputs.title
  job.description = event.inputs.description

  job.language = Languages[event.inputs.language.toI32() - 1]

  // job.skills = event.inputs.skills.map<string>((id :BigInt, index, array) => Skills[id.toI32() - 1])

  job.budget = event.inputs.budget
  job.save()
}
