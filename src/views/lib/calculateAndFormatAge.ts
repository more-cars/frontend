export function calculateAndFormatAge(date: string) {
    const startDate = Temporal.Instant.from(date).toZonedDateTimeISO('UTC')
    const endDate = Temporal.Now.zonedDateTimeISO('UTC')

    if (startDate.epochMilliseconds === endDate.epochMilliseconds) {
        return null
    }

    const diff = endDate.since(startDate, {
        largestUnit: 'year',
        smallestUnit: 'hour',
        roundingMode: 'trunc',
    })

    if (diff.blank) {
        return '<1 hour'
    }

    const formatter = new Intl.DurationFormat('en', {style: 'long'})

    return formatter.format({
        years: diff.years,
        months: diff.months,
        weeks: Math.floor(diff.days / 7),
        days: diff.days % 7,
        hours: diff.hours,
    })
}
