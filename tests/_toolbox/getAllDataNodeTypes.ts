import {DataNodeType} from "../../src/data/types/DataNodeType"

export function getAllDataNodeTypes() {
    return Array.from(new Set(Object.values(DataNodeType) as string[])) as DataNodeType[]
}
