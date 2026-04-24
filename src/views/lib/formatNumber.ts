export function formatNumber(number: number) {
    return Intl.NumberFormat('en-US', {style: "decimal"})
        .format(number)
}
