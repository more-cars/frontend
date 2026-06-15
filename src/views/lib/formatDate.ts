export function formatDate(isoDate: string) {
    try {
        return Temporal
            .PlainDate
            .from(isoDate)
            .toLocaleString('en', {
                dateStyle: 'medium'
            })
    } catch {
        return isoDate
    }
}
