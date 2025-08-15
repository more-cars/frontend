import {fetchEpicsFromJira} from "./lib/fetchEpicsFromJira.ts"
import {saveEpicData} from "./lib/saveEpicData.ts"
import {extractRawEpics} from "./lib/extractRawEpics.ts"
import {saveEpicMarkdownFile} from "./lib/saveEpicMarkdownFile.ts"
import {createMarkdownForEpic} from "./lib/createMarkdownForEpic.ts"

async function downloadSpecificationFromJira() {
    const rawEpics = await fetchEpicsFromJira()
    if (!rawEpics) {
        return false
    }

    const epics = extractRawEpics(rawEpics)
    epics.forEach((epic) => {
        const foldername = epic.id + ' » ' + epic.title
        const filename = 'specification'
        const markdown = createMarkdownForEpic(epic)

        saveEpicData(epic, filename + '.json', foldername)
        saveEpicMarkdownFile(markdown, filename + '.md', foldername)
    })
}

await downloadSpecificationFromJira()
