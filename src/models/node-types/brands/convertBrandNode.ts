import {BrandNode} from "../../../data/node-types/brands/types/BrandNode"
import {Brand} from "./types/Brand"
import {ModelNodeType} from "../../types/ModelNodeType"

export function convertBrandNode(dataNode: BrandNode) {
    const brand: Brand = {
        type: ModelNodeType.BRAND,
        fields: {
            id: dataNode.data.id,
            name: dataNode.data.name,
            full_name: dataNode.data.full_name || null,
            founded: dataNode.data.founded || null,
            defunct: dataNode.data.defunct || null,
            wmi: dataNode.data.wmi || null,
            hsn: dataNode.data.hsn || null,
            country_code: dataNode.data.country_code || null,
            created_at: dataNode.data.created_at,
            updated_at: dataNode.data.updated_at,
        }
    }

    return brand
}
