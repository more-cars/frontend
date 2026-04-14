import type {CarModelVariant} from "./types/CarModelVariant"

export function getNodeSubTitle(node: CarModelVariant) {
    const builtFrom = node.fields.built_from
    const builtTo = node.fields.built_to
    const internalCode = node.fields.internal_code
    const transmission = node.fields.transmission

    const subtitle = []

    if (builtFrom && builtTo) {
        subtitle.push(`${builtFrom} - ${builtTo}`)
    }

    if (builtFrom && !builtTo) {
        subtitle.push(`since ${builtFrom}`)
    }

    if (!builtFrom && builtTo) {
        subtitle.push(`until ${builtTo}`)
    }

    if (internalCode) {
        subtitle.push(internalCode)
    }

    if (transmission) {
        subtitle.push(getFormattedTransmission(transmission))
    }

    return subtitle.join(' | ')
}

function getFormattedTransmission(transmission: string) {
    switch (transmission.toLowerCase()) {
        case 'auto':
            return 'Automatic'
        case 'manual':
            return 'Manual'
        case 'dual clutch':
            return 'Dual Clutch'
        case 'cvt':
            return 'CVT'
        case 'sequential':
            return 'Sequential'
        case 'automated manual':
            return 'Automated Manual'
    }

    return transmission
}
