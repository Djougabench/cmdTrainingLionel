let a = Number(process.argv[2])
let b = Number(process.argv[3])
let c = Number(process.argv[4])

const counter = (min, max, step) => {
    for (let i = min; i <= max; i += step) {
        console.log(i)
    }
}

if (process.argv.length !== 5) {
    console.log('ERREURE, 3 CHIFFRES ATTENDUS !!!')
    process.exit(1)
}

if (isNaN(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is not a number bro !!`)
    process.exit(1)
}

if (isNaN(process.argv[3])) {
    console.log(`Error: ${process.argv[3]} is not a number !!`)
    process.exit(1)
}
if (isNaN(process.argv[4])) {
    console.log(`Error: "${process.argv[4]}  is not a number !!`)
    process.exit(1)
}

counter(a, b, c)
