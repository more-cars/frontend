import fs from "fs"

export function cacheRawEpics(epics: object, filename = 'epics.json', path: string = './_temp') {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, {recursive: true})
    }

    fs.writeFileSync(path + '/' + filename, JSON.stringify(epics, null, 2))
}
