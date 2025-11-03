import fs from "fs"

export function saveFeatureFile(feature: string, filename: string, path: string = __dirname + '/../behavior') {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, {recursive: true})
    }

    fs.writeFileSync(path + '/' + filename, feature)
}
