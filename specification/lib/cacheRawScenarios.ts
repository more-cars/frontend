import fs from "fs"

export async function cacheRawScenarios(scenarios: object, filename = 'scenarios.json', path: string = './_temp') {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, {recursive: true})
    }

    fs.writeFileSync(path + '/' + filename, JSON.stringify(scenarios, null, 2))
}
