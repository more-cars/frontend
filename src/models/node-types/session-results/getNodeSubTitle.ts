import type {SessionResult} from "./types/SessionResult"

export function getNodeSubTitle(node: SessionResult) {
    return `#${node.fields.race_number} | ${node.fields.team_name}`
}
