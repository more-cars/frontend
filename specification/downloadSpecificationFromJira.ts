import {fetchEpicsFromJira} from "./lib/fetchEpicsFromJira.ts"
import {saveEpicData} from "./lib/saveEpicData.ts"
import {extractRawEpics} from "./lib/extractRawEpics.ts"

async function downloadSpecificationFromJira() {
    const rawEpics = await fetchEpicsFromJira()
    if (!rawEpics) {
        return false
    }

    const epics = extractRawEpics(rawEpics)
    epics.forEach((epic) => {
        const foldername = epic.id + ' » ' + epic.title
        const filename = 'specification.json'
        saveEpicData(epic, filename, foldername)
    })
}

await downloadSpecificationFromJira()
