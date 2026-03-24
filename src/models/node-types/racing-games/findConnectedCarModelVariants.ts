import {RacingGameDataFacade} from "../../../data/RacingGameDataFacade"
import {CarModelVariant} from "../car-model-variants/types/CarModelVariant"
import {convertCarModelVariantNode} from "../car-model-variants/convertCarModelVariantNode"

export async function findConnectedCarModelVariants(id: number) {
    const relations = await RacingGameDataFacade.getConnectedCarModelVariantNodes(id)
    const carModelVariants: CarModelVariant[] = []

    for (const relation of relations) {
        carModelVariants.push(convertCarModelVariantNode(relation.partner_node))
    }

    return [...carModelVariants].sort((a, b) => (a.fields.name + "").localeCompare(b.fields.name + ""))
}
