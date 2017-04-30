export const tasks:Task[] = [
  {
    id: "cleaning air filters",
    weight: 3,
    kW: 1,
  },
  {
    id: "recycling water",
    weight: 4,
    kW: 8,
  },
  {
    id: "heating/living quarters",
    weight: 3,
    kW: 12,
  },
  {
    id: "heating/green house",
    weight: 4,
    kW: 2,
  },
]

export interface Task {
  id: string,
  kW: number,
  weight: number,
}

export function run (space:number, tasks:Task[]) {
  const sortedByWeight = tasks.sort((a,b) => (a.weight/a.kW > b.weight/b.kW) ? 1 : 0)

  const selected = []
  const rest = []

  for (let i = 0; i < sortedByWeight.length; i++) {
    const task = sortedByWeight[ i ]
    if (space - task.kW >= 0) {
      space -= task.kW
      selected.push(task)
    }
    else {
      rest.push(task)
    }
  }

  return {
    selected,
    rest,
    space,
    sortedByWeight
  }
}