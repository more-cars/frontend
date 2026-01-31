import {dasherize, pluralize, titleize} from "inflection"
import {DataNodeType} from "../../data/types/DataNodeType"

export function getNodeTypeInformation(nodeType: DataNodeType, icon: string, nodeCount: number) {
    return {
        name: dasherize(nodeType),
        label: titleize(pluralize(nodeType)),
        overview_page_path: '/' + dasherize(pluralize(nodeType)),
        icon: icon,
        count: nodeCount,
    }
}
