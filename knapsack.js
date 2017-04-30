const tasks = [
    {
        id: "heat",
        weight: 2,
        space: 2,
    },
    {
        id: "kitchen",
        weight: 1,
        space: 2,
    },
    {
        id: "living room",
        weight: 3,
        space: 2,
    },
];
const timeframe = [
    [tasks[2], tasks[0]],
    [tasks[2], tasks[1]],
    [tasks[1], tasks[0]],
    [tasks[0], tasks[1], tasks[2]],
];
const selected = run(4, [...tasks]);
console.log("total weight", selected[0].reduce((prev, current) => prev + current.weight, 0), " of ");
function run(space, tasks) {
    const sortedByWeight = tasks.sort((a, b) => {
        const aVal = a.weight / a.space;
        const bVal = b.weight / b.space;
        return aVal < bVal;
    });
    const selected = [];
    const rest = [];
    for (let i = 0; i < sortedByWeight.length; i++) {
        const task = sortedByWeight[i];
        if (space - task.space >= 0) {
            space -= task.space;
            selected.push(task);
        }
        else {
            rest.push(task);
        }
    }
    return [selected, rest, space];
}
