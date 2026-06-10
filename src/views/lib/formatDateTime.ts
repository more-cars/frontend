export function formatDateTime(isoDate: string) {
    return Temporal.Instant.from(isoDate)
        .toLocaleString('en', {
            dateStyle: 'medium',
            timeStyle: 'short'
        })
}
