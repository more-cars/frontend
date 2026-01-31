import express from "express"
import {getNodeTypeInformation} from "./getNodeTypeInformation"
import {DataNodeType} from "../../data/types/DataNodeType"
import {CompanyModelFacade} from "../../models/CompanyModelFacade"
import {BrandModelFacade} from "../../models/BrandModelFacade"
import {CarModelModelFacade} from "../../models/CarModelModelFacade"
import {RaceTrackModelFacade} from "../../models/RaceTrackModelFacade"
import {TrackLayoutModelFacade} from "../../models/TrackLayoutModelFacade"
import {RacingSeriesModelFacade} from "../../models/RacingSeriesModelFacade"
import {ImageModelFacade} from "../../models/ImageModelFacade"

export async function display(req: express.Request, res: express.Response) {
    const nodeTypes = [
        getNodeTypeInformation(DataNodeType.COMPANY, '🏭', await CompanyModelFacade.getTotalNodeCount()),
        getNodeTypeInformation(DataNodeType.BRAND, '🛡️', await BrandModelFacade.getTotalNodeCount()),
        getNodeTypeInformation(DataNodeType.CAR_MODEL, '🚘', await CarModelModelFacade.getTotalNodeCount()),
        getNodeTypeInformation(DataNodeType.RACE_TRACK, '⭖', await RaceTrackModelFacade.getTotalNodeCount()),
        getNodeTypeInformation(DataNodeType.TRACK_LAYOUT, '⮓', await TrackLayoutModelFacade.getTotalNodeCount()),
        getNodeTypeInformation(DataNodeType.RACING_SERIES, '🏎', await RacingSeriesModelFacade.getTotalNodeCount()),
        getNodeTypeInformation(DataNodeType.IMAGE, '🖼️', await ImageModelFacade.getTotalNodeCount()),
    ]

    res.render('templates/start-page/start-page', {
        page_title: 'More Cars',
        node_types: nodeTypes,
    })
}
