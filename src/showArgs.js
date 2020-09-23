let a = process.argv[2]
let b = process.argv[3]
let c = process.argv[4]
let d = process.argv[5]

const showArgs = (a, b, c, d) => {
    console.log(d, c, b, a)
}
if (process.argv.length !== 6) {
    console.log('usage: node stars.js number')
    process.exit(1)
}

showArgs(a, b, c, d)
