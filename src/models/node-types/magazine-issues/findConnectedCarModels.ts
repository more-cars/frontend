import {MagazineIssueDataFacade} from "../../../data/MagazineIssueDataFacade"
import {CarModel} from "../car-models/types/CarModel"
import {convertCarModelNode} from "../car-models/convertCarModelNode"

export async function findConnectedCarModels(id: number) {
    const relations = await MagazineIssueDataFacade.getConnectedCarModelNodes(id)
    const carModels: CarModel[] = []

    for (const relation of relations) {
        carModels.push(convertCarModelNode(relation.partner_node))
    }

    return [...carModels].sort((a, b) => (a.name + "").localeCompare(b.name + ""))
}
