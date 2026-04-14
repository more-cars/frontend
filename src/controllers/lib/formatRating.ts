export function formatRating(rating: number, max: number, unit = 'Points') {
    if (rating && max) {
        return `${rating} / ${max} ${unit}`
    }

    if (rating && !max) {
        return `${rating}`
    }

    return ''
}
