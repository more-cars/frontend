import express from "express"
import {ProgrammeEpisodeModelFacade} from "../../../models/ProgrammeEpisodeModelFacade"
import {ControllerNodeType} from "../../types/ControllerNodeType"
import {getNodeProperties} from "../../../models/node-types/getNodeProperties"
import {DataNodeType} from "../../../data/types/DataNodeType"
import {getProgrammeThumbnails} from "../programmes/getProgrammeThumbnails"
import {getProgrammeEpisodeThumbnails} from "./getProgrammeEpisodeThumbnails"
import {getCarModelThumbnails} from "../car-models/getCarModelThumbnails"
import {getCarModelVariantThumbnails} from "../car-model-variants/getCarModelVariantThumbnails"

export async function displayNode(req: express.Request, res: express.Response) {
    const programmeEpisodeId = parseInt(req.params.id)
    const programmeEpisode = await ProgrammeEpisodeModelFacade.getNodeById(programmeEpisodeId)

    if (!programmeEpisode) {
        return res.render('templates/node-types/programme-episodes/programme-episode-not-found-page', {
            page_title: `Programme Episode not found`
        }, (error, html) => {
            res.statusCode = 404
            res.send(html)
        })
    }

    const programme = await ProgrammeEpisodeModelFacade.getConnectedProgramme(programmeEpisodeId)
    const predecessor = await ProgrammeEpisodeModelFacade.getConnectedPredecessor(programmeEpisodeId)
    const successor = await ProgrammeEpisodeModelFacade.getConnectedSuccessor(programmeEpisodeId)
    const carModels = await ProgrammeEpisodeModelFacade.getConnectedCarModels(programmeEpisodeId)
    const carModelVariants = await ProgrammeEpisodeModelFacade.getConnectedCarModelVariants(programmeEpisodeId)
    const images = await ProgrammeEpisodeModelFacade.getConnectedImages(programmeEpisodeId)

    res.render('templates/node-types/programme-episodes/programme-episode-detail-page', {
        page_title: `${programmeEpisode.fields.title} - Programme Episode`,
        node: {
            type: ControllerNodeType.PROGRAMME_EPISODE,
            data: programmeEpisode,
            title: ProgrammeEpisodeModelFacade.getNodeTitle(programmeEpisode),
            sub_title: ProgrammeEpisodeModelFacade.getNodeSubTitle(programmeEpisode),
            node_properties: getNodeProperties(DataNodeType.PROGRAMME_EPISODE),
            main_image: await ProgrammeEpisodeModelFacade.getConnectedMainImage(programmeEpisodeId),
        },
        relationships: {
            programme: {
                item: programme,
                node_properties: getNodeProperties(DataNodeType.PROGRAMME),
                thumbnails: await getProgrammeThumbnails(programme ? [programme] : []),
            },
            predecessor: {
                item: predecessor,
                node_properties: getNodeProperties(DataNodeType.PROGRAMME_EPISODE),
                thumbnails: await getProgrammeEpisodeThumbnails(predecessor ? [predecessor] : []),
            },
            successor: {
                item: successor,
                node_properties: getNodeProperties(DataNodeType.PROGRAMME_EPISODE),
                thumbnails: await getProgrammeEpisodeThumbnails(successor ? [successor] : []),
            },
            car_models: {
                items: carModels,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL),
                thumbnails: await getCarModelThumbnails(carModels),
            },
            car_model_variants: {
                items: carModelVariants,
                node_properties: getNodeProperties(DataNodeType.CAR_MODEL_VARIANT),
                thumbnails: await getCarModelVariantThumbnails(carModelVariants),
            },
            images: {
                items: images,
                node_properties: getNodeProperties(DataNodeType.IMAGE),
            },
        },
    })
}
