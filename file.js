const fileSystem = require('fs')

const file = fileSystem.createReadStream('./data.txt')


file.on('open', () => {
    console.log(`data.txt is open`)
})
const newData = "Hello JS"
// fileSystem.writeFileSync('data.txt', newData)

// fileSystem.appendFileSync('data.txt', " "+newData)

