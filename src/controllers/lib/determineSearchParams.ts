import express from "express"
import {ControllerNodeType} from "../types/ControllerNodeType"
import type {ModelSearchParams} from "../../models/types/ModelSearchParams"
import {getNodeProperties} from "../../specification/getNodeProperties"

export function determineSearchParams(req: express.Request, nodeType: ControllerNodeType) {
    return {
        page: getPageParam(req),
        sortByProperty: getSortByPropertyParam(req, nodeType),
        sortDirection: getSortDirectionParam(req),
    } satisfies ModelSearchParams
}

export function getPageParam(req: express.Request) {
    const page = parseInt(req.query.page as string)

    if (!page || page < 1) {
        return 1
    }

    return page
}

export function getSortByPropertyParam(req: express.Request, nodeType: ControllerNodeType) {
    const sortByProperty = (req.query.sort_by_property as string || '').toLowerCase()

    if (!sortByProperty) {
        return undefined
    }

    if (!getNodeProperties(nodeType).find(prop => prop.name === sortByProperty)) {
        throw Error(`Invalid sorting property "${sortByProperty}"`)
    }

    return sortByProperty
}

export function getSortDirectionParam(req: express.Request) {
    const sortDirection = (req.query.sort_direction as string || '').toLowerCase()

    if (!sortDirection) {
        return undefined
    }

    if (!['desc', 'asc'].includes(sortDirection)) {
        throw Error(`Invalid sorting direction "${sortDirection}"`)
    }

    return sortDirection === 'desc' ? 'desc' : 'asc'
}
