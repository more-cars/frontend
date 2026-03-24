import type {ModelNode} from "../../models/types/ModelNode"

export function getAllNodeTitles<T extends ModelNode>(nodes: T[], fn: (node: T) => string) {
    const nodeTitles = new Map<number, string>()

    nodes.forEach(node => nodeTitles.set(node.fields.id, fn(node)))

    return nodeTitles
}
