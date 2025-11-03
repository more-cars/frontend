import fs from "fs"
import type {Epic} from "./Types/Epic.ts"

export function saveEpicData(epicData: Epic, filename: string, foldername: string, basepath: string = __dirname + '/../epics') {
    if (!fs.existsSync(basepath + '/' + foldername)) {
        fs.mkdirSync(basepath + '/' + foldername, {recursive: true})
    }

    fs.writeFileSync(basepath + '/' + foldername + '/' + filename, JSON.stringify(epicData, null, 2) + "\n")
}
