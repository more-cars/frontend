import http from 'k6/http'
import {check} from "k6"
import {Trend} from "k6/metrics"

const trendDuration = new Trend('duration', true)

export const options = {
    summaryTrendStats: ['count', 'min', 'p(1)', 'p(90)', 'p(95)', 'p(98)'],
    thresholds: {
        http_req_failed: ['rate<=0.0'],
        duration: ['p(1)<=50', 'p(90)<=175', 'p(95)<=200', 'p(98)<=250'],
    },
    scenarios: {
        getAllCarModels: {
            exec: 'getAllCarModels',
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

export function getAllCarModels() {
    const url = `${__ENV.FRONTEND_URL}/car-models`
    const response = http.get(url)

    check(response, {
        'returns with status code 200': (r) => r.status === 200,
        'content-type is HTML': (r) => r.headers['Content-Type'].includes('text/html'),
    })

    trendDuration.add(response.timings.duration)
}
