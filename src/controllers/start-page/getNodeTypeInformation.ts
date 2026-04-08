import {dasherize, pluralize, titleize} from "inflection"
import type {DataNodeType} from "../../data/types/DataNodeType"
import type {NodeTypeInformation} from "../types/NodeTypeInformation"

export function getNodeTypeInformation(nodeType: DataNodeType, nodeCount: number): NodeTypeInformation {
    return {
        name: dasherize(nodeType),
        label: titleize(pluralize(nodeType)),
        overview_page_path: '/' + dasherize(pluralize(nodeType)),
        count: nodeCount,
    }
}
