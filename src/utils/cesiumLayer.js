import * as cesium from 'cesium'
export function getTdtImgLayer() {
    const urlTemplate =
        'http://{s}.tianditu.com/img_c/wmts?SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&LAYER=img&STYLE=default&FORMAT=tiles&TILEMATRIXSET=c&TILEMATRIX={TileMatrix}&TILEROW={TileRow}&TILECOL={TileCol}&tk=bc583fc978a02e283d437b781f314b51';
    var imgMap = new cesium.WebMapTileServiceImageryProvider({
        url: urlTemplate,
        layer: 'tdtImg_c',
        style: 'default',
        format: 'tiles',
        tileMatrixSetID: 'c',
        subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
        tilingScheme: new cesium.GeographicTilingScheme(),
        tileMatrixLabels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
        maximumLevel: 50,
        show: true
    });
    return new cesium.ImageryLayer(imgMap);
}