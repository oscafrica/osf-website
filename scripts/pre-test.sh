#!/bin/bash

NYC_DIR=./.nyc_output
OUT_JSON=out.json

echo "> Cleaning ${NYC_DIR}/${OUT_JSON}"

rm -rf "${NYC_DIR}"
mkdir -p "${NYC_DIR}" && touch "${NYC_DIR}/${OUT_JSON}"

echo '{}' >"${NYC_DIR}/${OUT_JSON}"
