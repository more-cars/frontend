import type {Epic} from "./Types/Epic.ts"

export function createMarkdownForEpic(epic: Epic) {
    let md = "# " + epic.title + "\n" + "\n"
    md += "* ID: " + epic.id + "\n"
    md += "* Created At: " + epic.created_at + "\n"
    md += "* Updated At: " + epic.updated_at + "\n"

    return md
}
