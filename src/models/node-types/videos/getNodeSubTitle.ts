import type {Video} from "./types/Video"
import {formatDuration} from "../../../views/lib/formatDuration"

export function getNodeSubTitle(node: Video) {
    const creator = node.fields.creator
    const provider = node.fields.video_provider
    const duration = node.fields.duration

    const subtitleParts = []

    if (creator) {
        subtitleParts.push(`by ${creator}`)
    }

    if (provider) {
        if (provider === 'youtube') {
            subtitleParts.push(`via YouTube`)
        } else {
            subtitleParts.push(`via ${provider}`)
        }
    }

    if (duration) {
        subtitleParts.push(formatDuration(duration))
    }

    return subtitleParts.join(' | ')
}
