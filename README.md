# More Cars - Frontend

## Quickstart

* Install Node.js and npm
    * for a local Kubernetes setup check out the [Minikube](#minikube-local-dev-cluster) section
* Clone the repository: https://github.com/more-cars/frontend.git
* Make sure the More Cars API is running somewhere (locally, Minikube or remote)
    * see https://github.com/more-cars/rest-api.git
    * for this quickstart it is assumed to run at http://localhost:3000
* Run `npm install` to install all required dependencies and tools
* Run `npm run local:app:start` to start the app locally
    * it should be available at http://localhost:4000 (http) and https://localhost:4443 (https)
    * an `.env` should have been created automatically in the project's root folder
        * it should contain the location of the More Cars API -> default: `API_HOST=localhost`
        * it should contain the port of the More Cars API -> default: `API_PORT=3000`
        * change those values when you want to use a different API (e.g. from the Minikube cluster)
* If you want to use "pretty" hostnames instead of `localhost`:
    * run `npm run local:hostnames:add`
    * now, the app should be available at http://frontend.more-cars.internal:4000/ (http)
      and https://frontend.more-cars.internal:4443/ (https)

## Minikube (Local Dev Cluster)

### Start cluster

* Run `npm run minikube:install` to install the latest version of Minikube
    * requires sudo privileges
    * can be run multiple times -> if a newer version is available it will be installed
* Run `npm run minikube:start` to start a local Minikube cluster
    * this should open the Kubernetes dashboard in the browser (might take a few minutes)
    * memory and CPU settings can be adjusted in the file `deployment/minikube-cluster-start.sh`
* Run `npm run minikube:stop` to stop the Minikube cluster
    * aborting the `minikube:start` terminal (`ctrl` + `c` or `command` + `c`) will NOT stop the cluster
* Run `npm run minikube:delete` to destroy the Minikube cluster
    * changes to the memory or CPU settings require a hard delete (a restart is not sufficient)
    * a new cluster can be created by running `npm run minikube:start` again

### Start application

* Make sure the Minikube cluster is running (see [Minikube](#start-cluster) section)
* Run `npm run app:deploy`
    * a wizard will start
        * select `minikube`, `dev`, `frontend` and `latest`
    * this will deploy the app in Minikube
    * it will start all needed services
    * it will create the necessary host entries in the local `/etc/hosts` file
        * needs to be confirmed via password
            * abort if you want to do it manually or you when you use a different hosts file
    * the app should now be available under `https://dev.frontend.more-cars.internal`
        * accept the browser's security risk warning (all local environments use a dummy SSL certificate)
* Run `npm run app:undeploy` to completely remove the app from the Minikube cluster
    * a wizard will ask for the concrete cluster and environment that should be deleted
    * run `npm run app:deploy` to create a fresh version of the app again

## Docker Images

* run `npm run docker:build-image` to create a docker image of the application
    * it can be used for local deployments or as "real" release candidates for production
* run `npm run docker:tag-image:dev` to tag the image as a local development image
* run `npm run docker:tag-image:dockerhub` to tag the image as a production image to be stored in the docker hub
  registry
* run `npm run docker:tag-image:github` to tag the image as a production image to be stored in the GitHub registry

## SSL Certificate

At the moment, an SSL certificate is not mandatory to run the application -
be it locally, in Minikube or in the production system.
Should there be a certificate then the app will start an HTTP and an HTTPS server in parallel.
When there is no certificate then only the HTTP server is started.

In a local environment the application expects the certificate files in the folder `certificates`,
named `tls.crt` and `tls.key`.

In Minikube a dummy certificate is automatically added when deploying the app for the first time.
There should be no need to replace it, because it is not possible to create a valid one for local environments anyway.

For GKE the certificate needs to be added manually:

```
./deployment/lib/store-certificate-as-k8s-secret.sh api <NAMESPACE> <CERTIFICATE_PATH>
```

This will create a "Kubernetes Secret" with the name `certificate-frontend` in the given namespace (e.g. `testing`).

To replace or renew the certificate the following commands can be used:

```
kubectl delete secret certificate-frontend \
  --ignore-not-found \
  --namespace=<NAMESPACE> && \
kubectl create secret tls certificate-frontend \
  --cert=<CERTIFICATE_PATH>/tls.crt \
  --key=<CERTIFICATE_PATH>/tls.key \
  --namespace=<NAMESPACE>
```

## Tests

### Behavior Tests

The application's expected behavior is documented via `Gherkin` scenarios.
They can be found in the directory `specification/behavior`.
Those scenarios are automated in form of `Cucumber` tests.
Their implementation can be found in the directory `tests/behavior/steps`.

With `npm run tests:behavior:cli` the whole suite of Cucumber tests can be executed.
They produce test reports that can be found in the directory `test-reports/behavior`.

### Accessibility Tests

The accessibility tests can be found in the folder `tests/a11y`.
The command `npm run tests:a11y:cli` executes them.

### Load Tests

The load tests are written in TypeScript and will be executed with `Grafana k6`.
The test scripts can be found in the folder `tests/performance`.
By default, the command line will show a summary report at the end of a test run.
For more detailed information an HTML report can be generated (see steps below).

The k6 documentation can be found here: https://grafana.com/docs/k6/latest/.

#### Via Local Installation

When running k6 locally, it needs to be installed manually.
Please refer to the official documentation: https://grafana.com/docs/k6/latest/set-up/install-k6/.

When installation was successful, open a terminal.
Run the command `npm run tests:performance`.
This will perform a 5-minute-long test against one of the frontend pages.

For more control over the parameters use the following snippet to run the tests:

```
K6_WEB_DASHBOARD=true \
K6_WEB_DASHBOARD_OPEN=true \
K6_WEB_DASHBOARD_EXPORT=./test-reports/performance/html-report.html \
FRONTEND_URL=http://localhost:4000 \
k6 run ./tests/performance/get-all-brands.ts
```

## Development mode

Running the app with `npm start` will start it with a production-like configuration.
When developing and debugging the app it is recommended to use the command `npm run local:app:start` instead.
This will activate a file watcher which listens to all modules that are used by the app.
Whenever one of them is updated the app will automatically restart to reflect those changes.
The script also activates a CSS watcher.
It will regenerate the CSS files when styling changes are made in the templates.

Both start scripts make the application available at `localhost:4000` and `127.0.0.1:4000`.
For better readability and easier handling within the different tools the app should be given a proper domain name.
This can be achieved by manually adding the necessary information to the `/etc/hosts/` file
or by running `npm run local:hostnames:add` (requires sudo privileges).
This will make the app available under the domain name `frontend.more-cars.internal`.

## Deployment To Production Environment

### Deploying From Local Machine

Deploying the application to a "real" kubernetes cluster is very similar
to the deployment with Minikube (see [minikube section](#minikube-local-dev-cluster)).
The Kubernetes configs are indeed exactly the same, see folder `deployment/prod`.
They are used for both clusters identically.
The only difference lies in getting access to the cluster.

#### Production-like Environment In Minikube

With `npm run minikube:deploy:prod` the application is deployed to the local Minikube cluster.
This is the same command that was used in the [minikube section](#minikube-local-dev-cluster),
only this time it creates a `prod` environment instead of a `dev` environment.
The main difference being the source of the docker image (local vs remote repository).

The start script (`npm run minikube:start`) will automatically create a cluster if it doesn't exist yet.

#### Real Production Environment In Google Cloud

The command `npm run gke:deploy:prod` will log in to the Google Cloud,
select the correct cluster and then roll out all the Kubernetes configuration files.

When this is the first time, all pods and services will be created.
When the deployment already exists it will be updated.
When there is nothing to update (because no changes) then nothing will happen to the existing deployment.

The cluster will **not** be created on the fly.
If it doesn't exist then the deployment will fail.
It needs to be created manually.
There exists no script, yet.

The login step will open a browser window and requires a manual login to the Google Cloud.

For the script to work the tools `gcloud` and `kubectl` need to be installed.
See https://cloud.google.com/sdk/docs/install and https://kubernetes.io/docs/tasks/tools/.
