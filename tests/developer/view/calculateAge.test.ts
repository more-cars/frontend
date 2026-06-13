import {describe, expect, test, vi} from 'vitest'
import {DateTime} from "luxon"
import {calculateAndFormatAge} from "../../../src/views/lib/calculateAndFormatAge"

describe('Calculate age', () => {
    test.each([
        ['2025-07-12T20:00:00.000Z', '2025-07-12T20:00:00.000Z', null],
        ['2025-07-12T19:45:00.000Z', '2025-07-12T20:00:00.000Z', '<1 hour'],
        ['2025-07-12T19:00:00.000Z', '2025-07-12T20:00:00.000Z', '1 hour'],
        ['2025-07-12T12:00:00.000Z', '2025-07-12T20:00:00.000Z', '8 hours'],
        ['2025-07-11T12:00:00.000Z', '2025-07-12T20:00:00.000Z', '1 day, 8 hours'],
        ['2025-07-09T19:00:00.000Z', '2025-07-12T20:00:00.000Z', '3 days, 1 hour'],
        ['2025-07-06T12:00:00.000Z', '2025-07-12T20:00:00.000Z', '6 days, 8 hours'],
        ['2025-07-05T19:00:00.000Z', '2025-07-12T20:00:00.000Z', '1 week, 1 hour'],
        ['2025-06-27T16:00:00.000Z', '2025-07-12T20:00:00.000Z', '2 weeks, 1 day, 4 hours'],
        ['2018-06-27T16:00:00.000Z', '2025-07-12T20:00:00.000Z', '7 years, 2 weeks, 1 day, 4 hours'],
    ])('$2', async (startDateTime, now, expectedAge) => {
        vi.spyOn(DateTime, 'now')
            .mockImplementation(() => {
                return DateTime.fromISO(now, {zone: "utc"}) as DateTime<true>
            })

        const age = calculateAndFormatAge(startDateTime)

        expect(age)
            .toEqual(expectedAge)
    })
})
