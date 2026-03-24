import type {ProgrammeEpisode} from "./types/ProgrammeEpisode"

export function getNodeTitle(node: ProgrammeEpisode) {
    return node.fields.title
}
