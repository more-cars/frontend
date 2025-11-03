import fs from "fs"

export function saveEpicMarkdownFile(markdown: string, filename: string, foldername: string, basepath: string = __dirname + '/../epics') {
    if (!fs.existsSync(basepath + '/' + foldername)) {
        fs.mkdirSync(basepath + '/' + foldername, {recursive: true})
    }

    fs.writeFileSync(basepath + '/' + foldername + '/' + filename, markdown)
}
