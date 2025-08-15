import type {RawEpic} from "./Types/RawEpic.ts"
import type {Epic} from "./Types/Epic.ts"

export function extractRawEpics(epics: Array<RawEpic>): Array<Epic> {
    const extractedEpics: Array<Epic> = []
    epics.forEach(epic => {
        extractedEpics.push({
            id: epic.key,
            title: epic.fields.summary,
            description: epic.fields.description,
            created_at: epic.fields.created,
            updated_at: epic.fields.updated,
        })
    })

    return extractedEpics
}
