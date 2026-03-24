import type {CarModelVariant} from "./types/CarModelVariant"

export function getNodeSubTitle(node: CarModelVariant) {
    return `${node.fields.built_from} - ${node.fields.built_to} | ${node.fields.internal_code} | ${node.fields.transmission}`
}
