import fs from "fs"
import {fileURLToPath} from 'url'
import {dirname} from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export function saveEpicMarkdownFile(markdown: string, filename: string, foldername: string, basepath: string = __dirname + '/../epics') {
    if (!fs.existsSync(basepath + '/' + foldername)) {
        fs.mkdirSync(basepath + '/' + foldername, {recursive: true})
    }

    fs.writeFileSync(basepath + '/' + foldername + '/' + filename, markdown)
}
