import {BrandNode} from "../../../data/node-types/brands/types/BrandNode"
import {Brand} from "./types/Brand"

export function convertBrandNode(dataNode: BrandNode) {
    const brand: Brand = {
        id: dataNode.id,
        name: dataNode.name,
        full_name: dataNode.full_name || null,
        founded: dataNode.founded || null,
        defunct: dataNode.defunct || null,
        wmi: dataNode.wmi || null,
        hsn: dataNode.hsn || null,
        created_at: dataNode.created_at,
        updated_at: dataNode.updated_at,
    }

    return brand
}
