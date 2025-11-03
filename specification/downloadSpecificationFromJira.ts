import {fetchEpicsFromJira} from "./lib/fetchEpicsFromJira"
import {saveEpicData} from "./lib/saveEpicData"
import {extractRawEpics} from "./lib/extractRawEpics"
import {saveEpicMarkdownFile} from "./lib/saveEpicMarkdownFile"
import {createMarkdownForEpic} from "./lib/createMarkdownForEpic"

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

downloadSpecificationFromJira().then(() => true)
