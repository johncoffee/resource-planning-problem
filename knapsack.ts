import * as chalk from "chalk"
import {run, Task, tasks} from "./data"
const table = require('console.table')

const  dayForecast = [0,0,0,0,0,1,1,1,2,3,4,5,6,6,7,5,4,4,3,2,1,0,0,0]
const weekForecast = [10,20,10,30,30,40,20]

 weekForecast.forEach(daySpace => {
   const {selected, rest, sortedByWeight} = run(daySpace, [...tasks])
   console.log( JSON.stringify(sortedByWeight.map(item => item.id)) )
   console.log( chalk.green( JSON.stringify(selected.map(item => item.id)) ) )
   console.log( chalk.red( JSON.stringify(rest.map(item => item.id)) ) )
   console.log("----------")

   // console.log(chalk.green("Included"))
   // console.table(selected)
   // console.log(chalk.red("Excluded"))
   // rest.length ? console.table(rest) : console.log("[]")

   console.log( chalk.blue( new Array<string>(100).fill('-').join('') )) // divider
 })

