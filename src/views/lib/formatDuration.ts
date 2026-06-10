export function formatDuration(isoDuration: string) {
    return Temporal.Duration.from(isoDuration)
        .toLocaleString('en')
}
