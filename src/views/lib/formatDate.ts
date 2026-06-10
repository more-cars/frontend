export function formatDate(isoDate: string) {
    return Temporal.PlainDate.from(isoDate)
        .toLocaleString('en', {
            dateStyle: 'medium'
        })
}
