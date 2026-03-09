#!/bin/sh

SCRIPT=$(readlink -f "$0")
SCRIPT_PATH=$(dirname "$SCRIPT")

echo 🟢 Starting API mock server
node --env-file=.env -r ts-node/register "$SCRIPT_PATH"/lib/mockServer.ts &

echo 🟢 Starting frontend application...
API_URL=http://localhost:3003 NODE_ENV=test node -r ts-node/register "$SCRIPT_PATH"/../../src/server.ts &

echo 🟢 Starting behavior tests...
CYPRESS_filterSpecs=true CYPRESS_omitFiltered=true npx cypress run
