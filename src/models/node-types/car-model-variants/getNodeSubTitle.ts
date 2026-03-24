import type {CarModelVariant} from "./types/CarModelVariant"

export function getNodeSubTitle(node: CarModelVariant) {
    return `${node.built_from} - ${node.built_to} | ${node.internal_code} | ${node.transmission}`
}
