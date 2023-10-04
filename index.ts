import type { ExecaReturnValue, Options } from "execa"
import { existsSync } from "fs"
import { join } from "path"

export const runNode = (argv: string[], options?: Options<"utf8">) => new Promise<ExecaReturnValue>(async (resolve, reject) => {
    const { execa } = await import("execa")
    const m = argv.at(0)
    if (m && existsSync(m)) {
        const res = await execa(process.argv.at(0)!, [join(__dirname, "../loader.js"), ...argv], options)
        resolve(res)
    } else {
        reject(new Error("module not found"))
    }
})
