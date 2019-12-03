#!/bin/bash

ROOT_DIR=./coverage/
REPORT_DIR=reports/
JEST_DIR=jest-coverage/
CYPRESS_DIR=cypress-coverage/
COVERAGE_JSON=coverage.json
COVERAGE_FINAL_JSON=coverage-final.json

if [[ ! "$NODE_ENV" == 'testing' ]]; then
    echo 'Exit at "build_report.sh"'
    echo 'Only exec build report NODE_ENV == "testing"'
    exit 0
fi

echo "> Initiating -- build coverage report"

if [[ ! -f "${ROOT_DIR}${CYPRESS_DIR}${COVERAGE_FINAL_JSON}" ]] ||
    [[ ! -f "${ROOT_DIR}${JEST_DIR}${COVERAGE_FINAL_JSON}" ]]; then
    echo "> ERROR: dir ${ROOT_DIR}{${CYPRESS_DIR} || ${JEST_DIR}} not found"
    exit 1
fi

echo "> building coverage report..."

[[ ! -d "${ROOT_DIR}${REPORT_DIR}" ]] && mkdir -p "${ROOT_DIR}${REPORT_DIR}"

cp "${ROOT_DIR}${CYPRESS_DIR}${COVERAGE_FINAL_JSON}" "${ROOT_DIR}${REPORT_DIR}report-cypress.json"
cp "${ROOT_DIR}${JEST_DIR}${COVERAGE_FINAL_JSON}" "${ROOT_DIR}${REPORT_DIR}report-jest.json"

nyc merge "${ROOT_DIR}${REPORT_DIR}" "${ROOT_DIR}${REPORT_DIR}${COVERAGE_JSON}" &&
    mv "${ROOT_DIR}${REPORT_DIR}${COVERAGE_JSON}" "./.nyc_output/out.json"

echo "nyc report --reporter text-lcov --report-dir $ROOT_DIR"
nyc report --reporter lcov --report-dir "$ROOT_DIR"

echo "> coverage report ready!"
exit 0
