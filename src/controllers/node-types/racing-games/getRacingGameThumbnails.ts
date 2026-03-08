import {RacingGame} from "../../../models/node-types/racing-games/types/RacingGame"
import {Image} from "../../../models/node-types/images/types/Image"
import {RacingGameModelFacade} from "../../../models/RacingGameModelFacade"

export async function getRacingGameThumbnails(racingGames: RacingGame[]) {
    const thumbnails = new Map<number, Image | null>

    for (const racingGame of racingGames) {
        thumbnails.set(racingGame.id, await RacingGameModelFacade.getConnectedMainImage(racingGame.id) || null)
    }

    return thumbnails
}
