import type {SessionResult} from "./types/SessionResult"

export function getNodeTitle(node: SessionResult) {
    return node.position.toString()
}
