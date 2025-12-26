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

All docker images are managed automatically in the pipeline (see files in folder `.github/workflows`).
There should be no need to create, tag or push them locally.

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

## Deployments & Releases

### Local Dev Environment

Running the app via `npm start` will start it with a production-like configuration.
For development and debugging purposes the command `npm run local:app:start` should be used instead.
This will activate a file watcher which listens to all modules that are used by the app.
Whenever one of them is updated the app will automatically restart to reflect those changes.
The script also activates a CSS watcher.
It will regenerate the CSS files when styling changes were made in the templates.

Both start scripts make the app available at http://localhost:4000 and https://localhost:4443.
For better readability and easier handling it is recommended to give it a proper domain name.
This can be achieved by manually adding the necessary information to the `/etc/hosts/` file
or by running `npm run local:hostnames:add` (requires sudo privileges).
This will make the app available at the URLs http://frontend.more-cars.internal:4000/
and https://frontend.more-cars.internal:4443/.

### Minikube Cluster

The database in the local dev environment exists only in memory.
As soon as the docker container is stopped the database will be gone, too.
In such situations the Minikube cluster might be the better option (or a combination of Minikube and local env).
In Minikube the databases are automatically persisted.
It also allows us to run multiple environments in parallel or in different versions.
It is also useful for testing scenarios or situations that might occur in the real production environment,
but cannot be reproduced in the local environment, like the ingress controller or load balancing.

Running the command `npm run app:deploy` will start a wizard that asks us where and what we want to deploy.
Using `minikube`, `testing`, `frontend-rc`, `latest` will deploy
the newest release candidate that exists for the frontend app.
It will be made available at https://testing.frontend.more-cars.internal.
It contains the same pods and services - in the same version -
as if they were deployed in the "real" Kubernetes cluster in GKE.
The script can be executed multiple times.
The previous data, like SSL certificates, database data and individual settings will NOT be overridden.

### GKE Cluster

All deployments to the Google Cloud should be done via the CI/CD pipelines in GitHub.
The before-mentioned deployment script should be reserved for emergencies and special cases, only.
It circumvents the GitHub pipelines completely and deploys directly into GKE.

In the background GKE uses the same Kubernetes configuration files as the Minikube cluster
(see files in folder `deployment/app` and `deployment/overlays`).
The only difference are the hostnames and the login procedure into the cluster.

When the deployment is executed for the first time, all pods, config maps, services and so on will be created.
The next deployment requests will only update those components that have changed.
When nothing changed, then nothing is to update and the existing deployment will not be touched.

Neither the cluster not the node pool will be created automatically.
When they don't exist then the deployment will fail.
They need to be created manually.

#### Testing Environment

Each commit to the main branch will automatically trigger the pipeline.
Different test suites will be run and a docker container containing the app is created.
When all tests are green and nothing broke on the way,
then the new version will automatically be deployed to the testing environment.
This new version will be stored as a release candidate (RC) in the _GitHub Container Registry_.
All RCs can be found here: https://github.com/more-cars/frontend/pkgs/container/frontend-rc.

To deploy a specific version the _GitHub Actions_ interface can be used:
https://github.com/more-cars/frontend/actions/workflows/deploy-app_manual-trigger.yml.
When the specified version exists it is directly deployed.
Automated tests are skipped here,
because the code must already have run successfully through the CI/CD pipeline before.

#### Production Environment

Semantic versioning is used to identify different releases.
Git tags are used to mark those releases in the repository.
They are also the signal for the GitHub Actions to run the CI/CD pipeline whenever a new tag is created.  
Opposite to the testing environment is the app NOT automatically deployed.
That is (by design) a manual step.
But it uses the same tool as the testing environment:
https://github.com/more-cars/frontend/actions/workflows/deploy-app_manual-trigger.yml.

The resulting docker images are stored
in the _GitHub Container Registry_ (https://github.com/more-cars/frontend/pkgs/container/frontend)
and for redundancy reasons in _Docker Hub_ (https://hub.docker.com/r/dennisgerike/more-cars-frontend).
