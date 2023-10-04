import type { ExecaReturnValue, Options } from "execa"
import { existsSync } from "fs"
import { resolve as rp } from "path"
import { isAbsolute, join } from "path"

export const runNode = (argv: string[], options?: Options<"utf8">) => new Promise<ExecaReturnValue>(async (resolve, reject) => {
    const { execa } = await import("execa")
    if (!isAbsolute(argv[0])) {
        argv[0] = rp(argv[0])
    }
    if (existsSync(argv[0])) {
        try {
            resolve(await execa(process.argv.at(0)!, [join(__dirname, "../loader.js"), ...argv], options))
        } catch (error) {
            reject(error)
        }
    } else {
        reject(new Error("module not found"))
    }
})
