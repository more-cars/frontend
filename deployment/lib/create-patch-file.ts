import fs from "node:fs"
import {getHostname} from "./getHostname"

createDeploymentPatchFile()
    .then((data) => {
        const path = __dirname + '/../app/'
        const filename = 'deployment.patch.json'
        fs.writeFileSync(path + filename, JSON.stringify(data, null, 2))
    })

createHttpRoutePatchFile()
    .then((data) => {
        const path = __dirname + '/../app/'
        const filename = 'http-route.patch.json'
        fs.writeFileSync(path + filename, JSON.stringify(data, null, 2))
    })

createHttpsRoutePatchFile()
    .then((data) => {
        const path = __dirname + '/../app/'
        const filename = 'https-route.patch.json'
        fs.writeFileSync(path + filename, JSON.stringify(data, null, 2))
    })

createOauth2ProxyDeploymentPatchFile()
    .then((data) => {
        const path = __dirname + '/../app/'
        const filename = 'oauth2-proxy-deployment.patch.json'
        fs.writeFileSync(path + filename, JSON.stringify(data, null, 2))
    })

async function createDeploymentPatchFile() {
    const packageName = process.env.PACKAGE_NAME
    const packageVersion = process.env.PACKAGE_VERSION
    const targetEnvironment = process.env.TARGET_ENVIRONMENT || 'prod'
    const targetCluster = process.env.TARGET_CLUSTER || 'gke'

    return [
        {
            "op": "replace",
            "path": "/spec/template/spec/containers/0/image",
            "value": `ghcr.io/more-cars/${packageName}:${packageVersion}`
        },
        {
            "op": "replace",
            "path": "/spec/template/spec/containers/0/env/0",
            "value": {
                "name": "ANALYTICS_URL",
                "value": 'https://' + getHostname(targetCluster, targetEnvironment, 'analytics'),
            }
        }
    ]
}

async function createHttpRoutePatchFile() {
    const targetEnvironment = process.env.TARGET_ENVIRONMENT || 'prod'
    const targetCluster = process.env.TARGET_CLUSTER || 'gke'

    return [
        {
            "op": "replace",
            "path": "/spec/hostnames/0",
            "value": getHostname(targetCluster, targetEnvironment, 'frontend'),
        },
    ]
}

async function createHttpsRoutePatchFile() {
    const targetEnvironment = process.env.TARGET_ENVIRONMENT || 'prod'
    const targetCluster = process.env.TARGET_CLUSTER || 'gke'

    return [
        {
            "op": "replace",
            "path": "/spec/hostnames/0",
            "value": getHostname(targetCluster, targetEnvironment, 'frontend'),
        },
    ]
}

async function createOauth2ProxyDeploymentPatchFile() {
    const targetEnvironment = process.env.TARGET_ENVIRONMENT || 'prod'
    const targetCluster = process.env.TARGET_CLUSTER || 'gke'

    return [
        {
            op: 'replace',
            path: '/spec/template/spec/containers/0/env/0',
            value: {
                name: 'ISSUER_URL',
                value: 'https://' + getHostname(targetCluster, targetEnvironment, 'pocket-id'),
            },
        },
        {
            op: 'replace',
            path: '/spec/template/spec/containers/0/env/1',
            value: {
                name: 'REDIRECT_URL',
                value: 'https://' + getHostname(targetCluster, targetEnvironment, 'frontend') + '/oauth2/callback',
            },
        },
        {
            op: 'replace',
            path: '/spec/template/spec/containers/0/env/2',
            value: {
                name: 'UPSTREAM_URL',
                value: `http://frontend.${targetEnvironment}.svc.cluster.local:80`,
            },
        },
    ]
}
