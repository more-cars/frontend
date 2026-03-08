export function getNodeTypeIcon(nodeType: string) {
    const map = new Map<string, string>([
        ['company', '🏭'],
        ['brand', '🛡️'],
        ['car-model', '🚘'],
        ['car-model-variant', '🚙'],
        ['race-track', '🛣️'],
        ['track-layout', '⭖'],
        ['racing-series', '🏎'],
        ['racing-event', '🏞'],
        ['racing-session', '🚦'],
        ['session-result', '🏁'],
        ['lap-time', '⏱️'],
        ['racing-game', '🎮'],
        ['gaming-platform', '🖥️'],
        ['image', '🖼️'],
    ])

    return map.get(nodeType)
}
