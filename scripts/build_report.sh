ROOT=./coverage/
REPORT=reports/
CYPRESS=cypress-coverage/
JEST=jest-coverage/
CFF=coverage-final.json
CF=coverage.json
NYC_DIR=./.nyc_output/

echo "> build coverage report \n"


[[ -f "$ROOT$REPORT" ]] || mkdir "$ROOT$REPORT"

[[ -f "$ROOT$CYPRESS$CFF" ]] &&
    cp "$ROOT$CYPRESS$CFF" $ROOT$REPORT"report-cypress.json"

[[ -f "$ROOT$JEST$CFF" ]] &&
    cp "$ROOT$JEST$CFF" $ROOT$REPORT"report-jest.json"

nyc merge $ROOT$REPORT $ROOT$REPORT$CF && mv $ROOT$REPORT$CF $NYC_DIR"out.json"

echo "\n> nyc report --reporter text-lcov --report-dir $ROOT"
nyc report --reporter lcov --report-dir $ROOT
