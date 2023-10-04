import type { Options } from "execa"
import { existsSync } from "fs"
import { resolve as rp, isAbsolute, join } from "path"

export const runNode = async (argv: string[], options?: Options<"utf8">) => {
    const { execa } = await import("execa")
    if (!isAbsolute(argv[0])) {
        argv[0] = rp(argv[0])
    }
    if (existsSync(argv[0])) {
        return execa(process.argv.at(0)!, [join(__dirname, "../loader.js"), ...argv], options)
    } else {
        throw new Error("module not found")
    }
}
