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

  // job.skills = new Array<string>()
  // for (let index = 0; index < event.inputs.skills.length; index++) {
    
  //   let a = event.inputs.skills[index].toI32()
  //   job.skills.push(Skills[a])
  // }
  // event.inputs.skills.forEach((id, index, array) => 
  //   job.skills.push(Skills[id.toI32() - 1])
  // );
  //job.skills = event.inputs.skills.map((id :BigInt, index, array) => Skills[id.toI32() - 1])
  // let skillIds : Array<BigInt> = event.inputs.skills
  // let ids = skillIds.map((id:BigInt) => id.toI32())
  // ids.forEach(id => {
  //   Skills[id]
  // });
  // job.skills = ids.map(id => Skills[id])
  // job.skills = new Array<string>()

  job.budget = event.inputs.budget
  job.save()
}
