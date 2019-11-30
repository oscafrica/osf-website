NYC=./.nyc_output
OUT=out.json

echo "> Cleaning .nyc_output/out.json"

rm -rf $NYC
mkdir -p $NYC && touch $NYC/$OUT

echo "{}" >$NYC/$OUT
