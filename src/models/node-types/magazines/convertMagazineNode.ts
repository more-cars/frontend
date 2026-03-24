import {MagazineNode} from "../../../data/node-types/magazines/types/MagazineNode"
import {Magazine} from "./types/Magazine"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertMagazineNode(dataNode: MagazineNode) {
    const magazine: Magazine = {
        type: ModelNodeType.MAGAZINE,
        fields: {
            id: dataNode.data.id,
            name: dataNode.data.name,
            founded: dataNode.data.founded || null,
            defunct: dataNode.data.defunct || null,
            focus: dataNode.data.focus || null,
            publication_frequency: dataNode.data.publication_frequency || null,
            single_copy_price: dataNode.data.single_copy_price || null,
            single_copy_price_unit: dataNode.data.single_copy_price_unit || null,
            publication_format: dataNode.data.publication_format || null,
            circulation: dataNode.data.circulation || null,
            circulation_year: dataNode.data.circulation_year || null,
            publisher: dataNode.data.publisher || null,
            issn: dataNode.data.issn || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return magazine
}
