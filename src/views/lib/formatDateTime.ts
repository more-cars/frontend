export function formatDateTime(isoDateTime: string) {
    return Temporal.Instant.from(isoDateTime)
        .toLocaleString('en', {
            dateStyle: 'medium',
            timeStyle: 'short'
        })
}
