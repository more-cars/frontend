import type {SessionResult} from "./types/SessionResult"

export function getNodeSubTitle(node: SessionResult) {
    return `#${node.race_number} | ${node.team_name}`
}
