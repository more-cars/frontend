import {MagazineNode} from "../../../data/node-types/magazines/types/MagazineNode"
import {Magazine} from "./types/Magazine"

export function convertMagazineNode(dataNode: MagazineNode) {
    const magazine: Magazine = {
        id: dataNode.id,
        name: dataNode.name,
        founded: dataNode.founded || null,
        defunct: dataNode.defunct || null,
        focus: dataNode.focus || null,
        publication_frequency: dataNode.publication_frequency || null,
        single_copy_price: dataNode.single_copy_price || null,
        single_copy_price_unit: dataNode.single_copy_price_unit || null,
        publication_format: dataNode.publication_format || null,
        circulation: dataNode.circulation || null,
        circulation_year: dataNode.circulation_year || null,
        publisher: dataNode.publisher || null,
        issn: dataNode.issn || null,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return magazine
}
