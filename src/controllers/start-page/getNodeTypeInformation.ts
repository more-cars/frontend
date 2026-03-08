import {dasherize, pluralize, titleize} from "inflection"
import {DataNodeType} from "../../data/types/DataNodeType"

export function getNodeTypeInformation(nodeType: DataNodeType, nodeCount: number) {
    return {
        name: dasherize(nodeType),
        label: titleize(pluralize(nodeType)),
        overview_page_path: '/' + dasherize(pluralize(nodeType)),
        count: nodeCount,
    }
}
