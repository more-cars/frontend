import express from "express"
import type {CarModelVariant} from "../../models/node-types/car-model-variants/types/CarModelVariant"
import {CarModelVariantModelFacade} from "../../models/CarModelVariantModelFacade"
import {getNodeThumbnails} from "../lib/getNodeThumbnails"
import {getAllNodeTypeInformation} from "./getAllNodeTypeInformation"

export async function display(req: express.Request, res: express.Response) {
    const latestCarModelVariants: CarModelVariant[] = []
    const candidates = await CarModelVariantModelFacade.getAllNodes({
        sortByProperty: 'created_at',
        sortDirection: 'desc',
        page: 1
    })
    const thumbnails = await getNodeThumbnails(candidates)

    candidates.forEach(candidate => {
        const thumbnail = thumbnails.get(candidate.fields.id)
        if (thumbnail && thumbnail.fields.image_url_s) {
            latestCarModelVariants.push(candidate)
        }
    })

    res.render('templates/start-page/start-page', {
        page_title: 'More Cars',
        node_types: await getAllNodeTypeInformation(),
        latest_additions: latestCarModelVariants,
        thumbnails,
    })
}
