let name = process.argv[2]
console.log(`goodBaye, ${name}`)

if (process.argv.length !== 3) {
    console.log('usage: node stars.js number')
    process.exit(1)
}
