import { greatest, sum } from '../math';

export default function bagCalories(input: string) {
  return greatest(
    input
      .split('\n\n')
      .map(bag => bag.split('\n').reduce(sum, 0))
  )
}
