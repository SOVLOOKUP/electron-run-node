const { app } = require("electron");
const { runNode } = require("../")

runNode(["./test/file.js"]).then((o) => {
    console.log(o)
    app.quit()
})
