import fs from "node:fs"
import {getHostname} from "./getHostname.ts"

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

async function createDeploymentPatchFile() {
    const packageName = process.env.PACKAGE_NAME
    const packageVersion = process.env.PACKAGE_VERSION

    return [
        {
            "op": "replace",
            "path": "/spec/template/spec/containers/0/image",
            "value": `ghcr.io/more-cars/${packageName}:${packageVersion}`
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
