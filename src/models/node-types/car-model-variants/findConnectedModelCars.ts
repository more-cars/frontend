import {CarModelVariantDataFacade} from "../../../data/CarModelVariantDataFacade"
import {ModelCar} from "../model-cars/types/ModelCar"
import {convertModelCarNode} from "../model-cars/convertModelCarNode"

export async function findConnectedModelCars(id: number) {
    const relations = await CarModelVariantDataFacade.getConnectedModelCarNodes(id)
    const modelCars: ModelCar[] = []

    for (const relation of relations) {
        modelCars.push(convertModelCarNode(relation.partner_node))
    }

    return [...modelCars].sort((a, b) => (a.fields.name + "").localeCompare(b.fields.name + ""))
}
