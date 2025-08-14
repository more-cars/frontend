import fs from 'node:fs'
import {fileURLToPath} from 'url'
import {dirname} from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export function loadGraphqlQuery(path: string) {
    return fs.readFileSync(__dirname + '/' + path, 'utf8')
}
