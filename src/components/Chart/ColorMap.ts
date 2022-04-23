/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2022/02/23
 */



// https://github.com/d3/d3-scale-chromatic 으로부터 참조
const colorMap = {
    schemeAccent : "7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666",
    schemePaired: "a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928",
}

export function mapChartColor(index) {
    const src = colorMap.schemeAccent
    const count = src.length / 6
    return '#' + src.substr((index % count ) * 6, 6)
}
