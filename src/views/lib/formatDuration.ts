export function formatDuration(isoDuration: string) {
    try {
        return Temporal
            .Duration
            .from(isoDuration)
            .toLocaleString('en')
    } catch {
        return isoDuration
    }
}
