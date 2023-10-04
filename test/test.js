const { app } = require("electron");
const { runNode } = require("../")

runNode(["./test/file.js"]).then(e => {
    console.log(e);
    app.quit()
})
