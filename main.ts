let car1: string= "dodge"
let car2: string= "la ferrari"
let car3: string= "lambo"

let carsName=["dodge challenger","hellcat","la ferrari"]
//              0               ,  1       ,    2     index
console.log(carsName[0])

carsName.push('Porsche 911')
console.log(carsName)

carsName.pop()
console.log(carsName)


let country=['Pakistan','China','Japan','Egypet','Indonisea','Jamica','England','Africa'];
country.forEach((country=>{
    console.log(country)
}))

//let myName =[];
//console.log(myName)



let friends=['habiba','olivia','vina','hayat']

friends.unshift('natalia','calista')
//use for add
console.log(friends)

friends.shift()
//use for remove
console.log(friends)


