#!/bin/sh

SCRIPT=$(readlink -f "$0")
SCRIPT_PATH=$(dirname "$SCRIPT")

TARGET_ENVIRONMENT=$1
MINIKUBE_IP=$(minikube ip -p morecars)

if ! getent hosts frontend."$TARGET_ENVIRONMENT".more-cars.internal >/dev/null 2>&1; then
  sudo "$(which node)" -r ts-node/register "$SCRIPT_PATH"/lib/addHostname.ts frontend."$TARGET_ENVIRONMENT".more-cars.internal $MINIKUBE_IP
fi
