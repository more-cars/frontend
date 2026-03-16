import {ProgrammeEpisode} from "../../../models/node-types/programme-episodes/types/ProgrammeEpisode"
import {Image} from "../../../models/node-types/images/types/Image"
import {ProgrammeEpisodeModelFacade} from "../../../models/ProgrammeEpisodeModelFacade"

export async function getProgrammeEpisodeThumbnails(programmeEpisodes: ProgrammeEpisode[]) {
    const thumbnails = new Map<number, Image | null>

    for (const programmeEpisode of programmeEpisodes) {
        thumbnails.set(programmeEpisode.id, await ProgrammeEpisodeModelFacade.getConnectedMainImage(programmeEpisode.id) || null)
    }

    return thumbnails
}
