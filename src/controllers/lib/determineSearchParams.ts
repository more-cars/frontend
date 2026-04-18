import express from "express"
import type {ModelSearchParams} from "../../models/types/ModelSearchParams"

export function determineSearchParams(req: express.Request) {
    return {
        page: getPageParam(req),
        sortByProperty: getSortByPropertyParam(req),
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

export function getSortByPropertyParam(req: express.Request) {
    const sortByProperty = req.query.sort_by_property as string

    if (!sortByProperty) {
        return undefined
    }

    return sortByProperty
}

export function getSortDirectionParam(req: express.Request) {
    const sortDirection = req.query.sort_direction as string

    if (!['desc', 'asc'].includes(sortDirection)) {
        return undefined
    }

    return sortDirection === 'desc' ? 'desc' : 'asc'
}
