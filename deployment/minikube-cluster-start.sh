#!/bin/sh

minikube start --memory 8000 --cpus 2 -p morecars
minikube addons enable metrics-server -p morecars
minikube addons enable headlamp -p morecars
minikube service headlamp -n headlamp -p morecars
