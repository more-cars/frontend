export function formatDateTime(isoDateTime: string) {
    try {
        return Temporal
            .Instant
            .from(isoDateTime)
            .toLocaleString('en', {
                dateStyle: 'medium',
                timeStyle: 'short',
                timeZone: 'UTC',
            })
    } catch {
        return isoDateTime
    }
}
