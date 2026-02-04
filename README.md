# More Cars - Frontend

## Quickstart (local dev environment)

This quickstart manual shows the fastest way to get the app running, with the least amount of tools.
For an alternative Kubernetes setup check out the [Minikube](#minikube-local-kubernetes-cluster) section.

### Requirements

* Node.js (version >= 24) & npm
* Any OS should work (but tested only on Linux)

### Installation

* Install Node.js and npm
    * for a local Kubernetes setup check out the [Minikube](#minikube-local-dev-cluster) section
* Clone the repository: https://github.com/more-cars/frontend.git
* Make sure the More Cars API is running somewhere (locally, Minikube or remote)
    * see https://github.com/more-cars/rest-api.git
    * for this quickstart it is assumed to run at http://localhost:3000
* Run `npm install` to install all required dependencies and tools
* Run `npm run local:app:start` to start the app locally
    * it should be available at http://localhost:4000
    * an `.env` should have been created automatically in the project's root folder
        * it should contain the location of the More Cars API → default: `API_URL=http://localhost:3000`
        * can be changed to a different API (e.g. to one in the Minikube cluster)
* If you want to use "pretty" hostnames instead of `localhost`:
    * run `npm run local:hostnames:add`
    * now, the app should be available at http://frontend.more-cars.internal:4000/

## Minikube (local Kubernetes cluster)

Minikube is a quick and simple option to create a local Kubernetes cluster.
See documentation for more information: https://minikube.sigs.k8s.io/docs/.
The Minikube cluster uses exactly the same Kubernetes configuration files as the "real" Kubernetes cluster in GKE
(see `deployment/app` and `deployment/overlays` folder).
This allows to test situations that might happen in the production environment,
but cannot be recreated in a local dev environment.

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
* Make sure the infrastructure was deployed (https://github.com/more-cars/infra)
    * This provides a gateway for all More Cars apps and tools
    * The app will not work without the gateway
* Run `npm run app:deploy`
    * a wizard will start
        * select `minikube`, `dev`, `frontend` and `latest`
    * this will deploy the app in Minikube
    * it will start all needed services
    * it will create the necessary host entries in the local `/etc/hosts` file
        * needs to be confirmed via password
            * abort if you want to do it manually or you when you use a different hosts file
    * the app should now be available under `https://frontend.dev.more-cars.internal`
        * accept the browser's security risk warning (the gateways in the local cluster use dummy certificates)
* Run `npm run app:undeploy` to completely remove the app from the Minikube cluster
    * a wizard will ask for the concrete cluster and environment that should be deleted
    * run `npm run app:deploy` to create a fresh version of the app again

## Docker Images

All docker images are managed automatically in the pipeline (see files in folder `.github/workflows`).
There should be no need to create, tag or push them locally.

## Basic Authentication

Each environment can be protected via `Basic Auth`.
This feature is disabled by default.
It is automatically activated when the application finds a set of credentials.
For each environment only one set of credentials can be created.
They are the same for all users.
The credentials are expected as environment variables `BASIC_AUTH_USERNAME` and `BASIC_AUTH_PASSWORD`.
One option of providing them is manually via the command line.
In this case, Cypress needs to be started in the same terminal.

```
export BASIC_AUTH_USERNAME=<USERNAME>
export BASIC_AUTH_PASSWORD=<PASSWORD>
```

Alternatively, they can be added to the `.env` file in the project's root directory.
Cypress can be started from anywhere.
The `.env` file will automatically be injected.

```
BASIC_AUTH_USERNAME=<USERNAME>
BASIC_AUTH_PASSWORD=<PASSWORD>
```

In Minikube and GKE the credentials are expected as `Kubernetes secrets`.
They can be created resp. replaced with the following command.

```
kubectl delete secret basic-auth \
--ignore-not-found \
--namespace=<NAMESPACE> && \
kubectl create secret generic basic-auth \
--from-literal=username='<USERNAME>' \
--from-literal=password='<PASSWORD>' \
--namespace=<NAMESPACE>
```

## Tests

### Developer Tests

There is no separation between **unit tests** and **integration tests**.
They live together in the same folder (`tests/developer`) and they are always executed together.
The command to start the test suite is `npm run tests:developer`.
There are no external dependencies.
When an integration test needs to test an HTTP request
it can automatically launch a copy of the app via `supertest` and mock the routes as needed.
With `npm run tests:developer:coverage` the test run will produce a code coverage report in the end.
The results can be found in the folder `test-reports/developer`.

### Behavior Tests

The application's expected behavior is documented via `Gherkin` scenarios.
They can be found in the directory `specification/behavior`.
Those scenarios are automated in form of `Cypress` tests.
Their implementation can be found in the directory `tests/behavior/step_implementation`.

With `npm run tests:behavior:cli` the whole Cypress test suite can be executed.
This will automatically start an API mock server in the background,
which allows the frontend to get (realistic) data,
without the need to start a real API server.
The mock data is automatically created,
based on the official More Cars API specification,
which can be found in the folder `tests/behavior/api-specification`.
The tests target the currently running frontend app.
If there is none running it will automatically be started.
The test reports will be written to the folder `test-reports/behavior`.

The command `npm run tests:behavior:gui` opens an interactive version of Cypress.
Here, each test can be started individually.
The test results can be followed in real-time in the embedded browser.

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
but cannot be reproduced in the local environment, like the Kubernetes gateway or load balancing.

Running the command `npm run app:deploy` will start a wizard that asks us where and what we want to deploy.
Using `minikube`, `testing`, `frontend-rc`, `latest` will deploy
the newest release candidate that exists for the frontend app.
It will be made available at https://frontend.testing.more-cars.internal.
It contains the same pods and services - in the same version -
as if they were deployed in the "real" Kubernetes cluster in GKE.
The script can be executed multiple times.
The previous data database credentials and individual settings will NOT be overridden.

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
