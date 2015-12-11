# uglifyjs-test-sourcemaps

Modified and simplified from https://github.com/saibotsivad/uglifyjs-test-sourcemaps

Run `npm run build`, this will build `file1.js` and `file2.js` using grunt-concat and UglifyJS2.
Source map files are then saved to the `tmp` directory.

`tmp/out.js.map-2.4.16` contains the map generated from UglifyJS 2.4.16
`tmp/out.js.map-2.6.1` contains the map generated from UglifyJS 2.6.1

Each file is then ran through `dump-mappings.js`, which dumps out all mappings contained in the source map
in the following format:

    (file name) (generated line/column) -> (original line/column)

Notice that `out.js.map-2.6.1` contains many invalid mappings such as:

    ../../file2.js 4:24 => 1:24

Generated position 4:24 doesn't exist in out.js, as the file is only 3 lines long.

`out.js.map-2.4.16` appears to be correct, with all mappings occuring at generated line 2.
