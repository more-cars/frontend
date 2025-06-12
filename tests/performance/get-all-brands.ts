import http from 'k6/http'
import {check} from "k6"
import {Trend} from "k6/metrics"

const trendDuration = new Trend('duration', true)

export const options = {
    summaryTrendStats: ['count', 'min', 'p(1)', 'p(90)', 'p(95)', 'p(98)'],
    thresholds: {
        http_req_failed: ['rate<=0.0'],
        duration: ['p(1)<=10', 'p(90)<=30', 'p(95)<=50', 'p(98)<=100'],
    },
    scenarios: {
        getAllBrands: {
            exec: 'getAllBrands',
            executor: 'constant-arrival-rate',
            duration: '5m',
            rate: 5,
            timeUnit: '2s',
            preAllocatedVUs: 5,
            maxVUs: 5,
            gracefulStop: '10s',
        }
    }
}

export function getAllBrands() {
    const url = `${__ENV.FRONTEND_URL}/brands`
    const response = http.get(url)

    check(response, {
        'returns with status code 200': (r) => r.status === 200,
        'content-type is JSON': (r) => r.headers['Content-Type'].includes('text/html'),
    })

    trendDuration.add(response.timings.duration)
}
