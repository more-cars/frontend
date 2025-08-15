import fs from "fs"
import type {Epic} from "./Types/Epic.ts"
import {fileURLToPath} from 'url'
import {dirname} from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export function saveEpicData(epicData: Epic, filename: string, foldername: string, basepath: string = __dirname + '/../epics') {
    if (!fs.existsSync(basepath + '/' + foldername)) {
        fs.mkdirSync(basepath + '/' + foldername, {recursive: true})
    }

    fs.writeFileSync(basepath + '/' + foldername + '/' + filename, JSON.stringify(epicData, null, 2) + "\n")
}
