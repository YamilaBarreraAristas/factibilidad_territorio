var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DistritosBuenosAires_1 = new ol.format.GeoJSON();
var features_DistritosBuenosAires_1 = format_DistritosBuenosAires_1.readFeatures(json_DistritosBuenosAires_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistritosBuenosAires_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritosBuenosAires_1.addFeatures(features_DistritosBuenosAires_1);
var lyr_DistritosBuenosAires_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DistritosBuenosAires_1, 
                style: style_DistritosBuenosAires_1,
                interactive: true,
                title: '<img src="styles/legend/DistritosBuenosAires_1.png" /> Distritos Buenos Aires'
            });
var format_Lanus_2 = new ol.format.GeoJSON();
var features_Lanus_2 = format_Lanus_2.readFeatures(json_Lanus_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lanus_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lanus_2.addFeatures(features_Lanus_2);
var lyr_Lanus_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lanus_2, 
                style: style_Lanus_2,
                interactive: true,
                title: '<img src="styles/legend/Lanus_2.png" /> Lanus'
            });
var format_Msde50niosenelradiocensal_3 = new ol.format.GeoJSON();
var features_Msde50niosenelradiocensal_3 = format_Msde50niosenelradiocensal_3.readFeatures(json_Msde50niosenelradiocensal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Msde50niosenelradiocensal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Msde50niosenelradiocensal_3.addFeatures(features_Msde50niosenelradiocensal_3);
var lyr_Msde50niosenelradiocensal_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Msde50niosenelradiocensal_3, 
                style: style_Msde50niosenelradiocensal_3,
                interactive: true,
    title: 'Más de 50 niños en el radio censal<br />\
    <img src="styles/legend/Msde50niosenelradiocensal_3_0.png" /> 0<br />\
    <img src="styles/legend/Msde50niosenelradiocensal_3_1.png" /> 1<br />\
    <img src="styles/legend/Msde50niosenelradiocensal_3_2.png" /> <br />'
        });
var format_Msde500mdeestpublicos_4 = new ol.format.GeoJSON();
var features_Msde500mdeestpublicos_4 = format_Msde500mdeestpublicos_4.readFeatures(json_Msde500mdeestpublicos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Msde500mdeestpublicos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Msde500mdeestpublicos_4.addFeatures(features_Msde500mdeestpublicos_4);
var lyr_Msde500mdeestpublicos_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Msde500mdeestpublicos_4, 
                style: style_Msde500mdeestpublicos_4,
                interactive: true,
                title: '<img src="styles/legend/Msde500mdeestpublicos_4.png" /> Más de 500m de est publicos'
            });
var format_Publicos_5 = new ol.format.GeoJSON();
var features_Publicos_5 = format_Publicos_5.readFeatures(json_Publicos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Publicos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Publicos_5.addFeatures(features_Publicos_5);
var lyr_Publicos_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Publicos_5, 
                style: style_Publicos_5,
                interactive: true,
                title: '<img src="styles/legend/Publicos_5.png" /> Publicos'
            });
var format_Msde500mdeestprivados_6 = new ol.format.GeoJSON();
var features_Msde500mdeestprivados_6 = format_Msde500mdeestprivados_6.readFeatures(json_Msde500mdeestprivados_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Msde500mdeestprivados_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Msde500mdeestprivados_6.addFeatures(features_Msde500mdeestprivados_6);
var lyr_Msde500mdeestprivados_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Msde500mdeestprivados_6, 
                style: style_Msde500mdeestprivados_6,
                interactive: true,
                title: '<img src="styles/legend/Msde500mdeestprivados_6.png" /> Más de 500m de est privados'
            });
var format_Privados_7 = new ol.format.GeoJSON();
var features_Privados_7 = format_Privados_7.readFeatures(json_Privados_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Privados_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Privados_7.addFeatures(features_Privados_7);
var lyr_Privados_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Privados_7, 
                style: style_Privados_7,
                interactive: true,
                title: '<img src="styles/legend/Privados_7.png" /> Privados'
            });
var format_espacios_verdes_lanus_8 = new ol.format.GeoJSON();
var features_espacios_verdes_lanus_8 = format_espacios_verdes_lanus_8.readFeatures(json_espacios_verdes_lanus_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_espacios_verdes_lanus_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_espacios_verdes_lanus_8.addFeatures(features_espacios_verdes_lanus_8);
var lyr_espacios_verdes_lanus_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_espacios_verdes_lanus_8, 
                style: style_espacios_verdes_lanus_8,
                interactive: true,
                title: '<img src="styles/legend/espacios_verdes_lanus_8.png" /> espacios_verdes_lanus'
            });
var format_Caminosprincipales_9 = new ol.format.GeoJSON();
var features_Caminosprincipales_9 = format_Caminosprincipales_9.readFeatures(json_Caminosprincipales_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caminosprincipales_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caminosprincipales_9.addFeatures(features_Caminosprincipales_9);
var lyr_Caminosprincipales_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Caminosprincipales_9, 
                style: style_Caminosprincipales_9,
                interactive: true,
                title: '<img src="styles/legend/Caminosprincipales_9.png" /> Caminos principales'
            });
var format_Cercanaavenidas400m_10 = new ol.format.GeoJSON();
var features_Cercanaavenidas400m_10 = format_Cercanaavenidas400m_10.readFeatures(json_Cercanaavenidas400m_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cercanaavenidas400m_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cercanaavenidas400m_10.addFeatures(features_Cercanaavenidas400m_10);
var lyr_Cercanaavenidas400m_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cercanaavenidas400m_10, 
                style: style_Cercanaavenidas400m_10,
                interactive: true,
                title: '<img src="styles/legend/Cercanaavenidas400m_10.png" /> Cercanía avenidas (400m)'
            });
var format_LineaRoca_11 = new ol.format.GeoJSON();
var features_LineaRoca_11 = format_LineaRoca_11.readFeatures(json_LineaRoca_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineaRoca_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineaRoca_11.addFeatures(features_LineaRoca_11);
var lyr_LineaRoca_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LineaRoca_11, 
                style: style_LineaRoca_11,
                interactive: true,
                title: '<img src="styles/legend/LineaRoca_11.png" /> Linea Roca'
            });
var format_EstacioneslineaRoca_12 = new ol.format.GeoJSON();
var features_EstacioneslineaRoca_12 = format_EstacioneslineaRoca_12.readFeatures(json_EstacioneslineaRoca_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstacioneslineaRoca_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacioneslineaRoca_12.addFeatures(features_EstacioneslineaRoca_12);
var lyr_EstacioneslineaRoca_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EstacioneslineaRoca_12, 
                style: style_EstacioneslineaRoca_12,
                interactive: true,
                title: '<img src="styles/legend/EstacioneslineaRoca_12.png" /> Estaciones linea Roca'
            });
var group_FactibilidadLanus = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_DistritosBuenosAires_1,lyr_Lanus_2,lyr_Msde50niosenelradiocensal_3,lyr_Msde500mdeestpublicos_4,lyr_Publicos_5,lyr_Msde500mdeestprivados_6,lyr_Privados_7,lyr_espacios_verdes_lanus_8,lyr_Caminosprincipales_9,lyr_Cercanaavenidas400m_10,lyr_LineaRoca_11,lyr_EstacioneslineaRoca_12,],
                                title: "Factibilidad Lanus"});

lyr_OpenStreetMap_0.setVisible(true);lyr_DistritosBuenosAires_1.setVisible(true);lyr_Lanus_2.setVisible(true);lyr_Msde50niosenelradiocensal_3.setVisible(true);lyr_Msde500mdeestpublicos_4.setVisible(true);lyr_Publicos_5.setVisible(true);lyr_Msde500mdeestprivados_6.setVisible(true);lyr_Privados_7.setVisible(true);lyr_espacios_verdes_lanus_8.setVisible(true);lyr_Caminosprincipales_9.setVisible(true);lyr_Cercanaavenidas400m_10.setVisible(true);lyr_LineaRoca_11.setVisible(true);lyr_EstacioneslineaRoca_12.setVisible(true);
var layersList = [group_FactibilidadLanus];
lyr_DistritosBuenosAires_1.set('fieldAliases', {'objectid': 'objectid', 'departa': 'departa', 'cabecer': 'cabecer', 'provincia': 'provincia', 'fuente': 'fuente', 'fec_actual': 'fec_actual', 'fuente1': 'fuente1', 'cod_depto': 'cod_depto', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_Lanus_2.set('fieldAliases', {'objectid': 'objectid', 'departa': 'departa', 'cabecer': 'cabecer', 'provincia': 'provincia', 'fuente': 'fuente', 'fec_actual': 'fec_actual', 'fuente1': 'fuente1', 'cod_depto': 'cod_depto', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_Msde50niosenelradiocensal_3.set('fieldAliases', {'fid': 'fid', 'toponimo_i': 'toponimo_i', 'link': 'link', 'varon': 'varon', 'mujer': 'mujer', 'totalpobl': 'totalpobl', 'hogares': 'hogares', 'viviendasp': 'viviendasp', 'viv_part_h': 'viv_part_h', 'peques': 'peques', 'muchos_chi': 'muchos_chi', });
lyr_Msde500mdeestpublicos_4.set('fieldAliases', {'objectid': 'objectid', 'departa': 'departa', 'cabecer': 'cabecer', 'provincia': 'provincia', 'fuente': 'fuente', 'fec_actual': 'fec_actual', 'fuente1': 'fuente1', 'cod_depto': 'cod_depto', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_Publicos_5.set('fieldAliases', {'Ciclo de C': 'Ciclo de C', 'Nº de Reg': 'Nº de Reg', 'Nº de Dis': 'Nº de Dis', 'Nombre de': 'Nombre de', 'Tipo de Or': 'Tipo de Or', 'Clave Prov': 'Clave Prov', 'CUE': 'CUE', 'Nombre': 'Nombre', 'Número': 'Número', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Medio': 'Medio', 'Nombre d_1': 'Nombre d_1', 'Jornada': 'Jornada', 'Nombre d_2': 'Nombre d_2', 'Fecha de C': 'Fecha de C', 'Matrícula': 'Matrícula', 'Condiciona': 'Condiciona', 'Nº de Sec': 'Nº de Sec', 'Nº de Car': 'Nº de Car', 'Nº de Des': 'Nº de Des', 'Desempeño': 'Desempeño', 'Desempe�_1': 'Desempe�_1', 'Desempe�_2': 'Desempe�_2', 'Desempe�_3': 'Desempe�_3', 'Secciones': 'Secciones', 'Seccione_1': 'Seccione_1', 'Seccione_2': 'Seccione_2', 'Seccione_3': 'Seccione_3', 'Seccione_4': 'Seccione_4', 'Seccione_5': 'Seccione_5', 'Seccione_6': 'Seccione_6', 'Seccione_7': 'Seccione_7', 'Matrícu_1': 'Matrícu_1', 'Matrícu_2': 'Matrícu_2', 'Matrícu_3': 'Matrícu_3', 'Matrícu_4': 'Matrícu_4', 'Matrícu_5': 'Matrícu_5', 'Matrícu_6': 'Matrícu_6', 'Matrícu_7': 'Matrícu_7', 'Matrícu_8': 'Matrícu_8', 'Condicio_1': 'Condicio_1', 'Condicio_2': 'Condicio_2', 'Condicio_3': 'Condicio_3', 'Condicio_4': 'Condicio_4', 'Condicio_5': 'Condicio_5', 'Condicio_6': 'Condicio_6', 'Filtro Tip': 'Filtro Tip', 'Filtro Med': 'Filtro Med', 'Filtro Jor': 'Filtro Jor', });
lyr_Msde500mdeestprivados_6.set('fieldAliases', {'objectid': 'objectid', 'departa': 'departa', 'cabecer': 'cabecer', 'provincia': 'provincia', 'fuente': 'fuente', 'fec_actual': 'fec_actual', 'fuente1': 'fuente1', 'cod_depto': 'cod_depto', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_Privados_7.set('fieldAliases', {'CLAVEESTAB': 'CLAVEESTAB', 'DEPENDENCI': 'DEPENDENCI', 'ENTORNO': 'ENTORNO', 'CALLE': 'CALLE', 'NRODIRECCI': 'NRODIRECCI', 'NOMBRE': 'NOMBRE', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_espacios_verdes_lanus_8.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'fdc': 'fdc', 'sag': 'sag', });
lyr_Caminosprincipales_9.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_id': '_id', 'area': 'area', 'highway': 'highway', 'type': 'type', 'surface': 'surface', 'bicycle': 'bicycle', 'motor_vehi': 'motor_vehi', 'lanes': 'lanes', 'maxspeed': 'maxspeed', 'oneway': 'oneway', 'ref': 'ref', 'sidewalk': 'sidewalk', 'source': 'source', 'destinatio': 'destinatio', 'destinat_1': 'destinat_1', 'layer': 'layer', 'minspeed': 'minspeed', 'official_n': 'official_n', 'lit': 'lit', 'abutters': 'abutters', 'bridge': 'bridge', 'embedded_r': 'embedded_r', 'destinat_2': 'destinat_2', 'maxspeed_h': 'maxspeed_h', 'hgv': 'hgv', 'maxheight': 'maxheight', 'maxweight': 'maxweight', 'wikidata': 'wikidata', 'alt_name': 'alt_name', 'turn_lanes': 'turn_lanes', 'horse': 'horse', 'busway_rig': 'busway_rig', 'lanes_bus': 'lanes_bus', 'short_name': 'short_name', 'note': 'note', 'source_wid': 'source_wid', 'width': 'width', 'cutting': 'cutting', 'smoothness': 'smoothness', 'source_max': 'source_max', 'embankment': 'embankment', 'access': 'access', 'foot': 'foot', 'fixme': 'fixme', 'noname': 'noname', 'lanes_back': 'lanes_back', 'lanes_forw': 'lanes_forw', 'old_name': 'old_name', 'junction': 'junction', 'tunnel': 'tunnel', 'turn_lan_1': 'turn_lan_1', 'maxspeed_t': 'maxspeed_t', 'hazard': 'hazard', 'maxspeed_c': 'maxspeed_c', 'service': 'service', 'turn_lan_2': 'turn_lan_2', 'lanes_psv': 'lanes_psv', 'psv_lanes': 'psv_lanes', 'cycleway': 'cycleway', 'overtaking': 'overtaking', 'parking_la': 'parking_la', 'surface_la': 'surface_la', 'surface__1': 'surface__1', 'covered': 'covered', 'incline': 'incline', 'tracktype': 'tracktype', 'constructi': 'constructi', 'ele': 'ele', 'leisure': 'leisure', 'sport': 'sport', 'wikipedia': 'wikipedia', 'segregated': 'segregated', 'destinat_3': 'destinat_3', 'loc_name': 'loc_name', 'bus': 'bus', 'hgv_lanes': 'hgv_lanes', 'bridge_mov': 'bridge_mov', 'bench': 'bench', 'public_tra': 'public_tra', 'shelter': 'shelter', 'psv': 'psv', 'emergency': 'emergency', 'footway': 'footway', 'vehicle': 'vehicle', 'crossing': 'crossing', 'surface__2': 'surface__2', 'handrail': 'handrail', 'level': 'level', 'conveying': 'conveying', 'traffic_si': 'traffic_si', 'enforcemen': 'enforcemen', 'traffic_ca': 'traffic_ca', 'noref': 'noref', 'traffic__1': 'traffic__1', 'source_pos': 'source_pos', 'name_es': 'name_es', 'bin': 'bin', 'departures': 'departures', 'network': 'network', 'operator': 'operator', });
lyr_Cercanaavenidas400m_10.set('fieldAliases', {'objectid': 'objectid', 'departa': 'departa', 'cabecer': 'cabecer', 'provincia': 'provincia', 'fuente': 'fuente', 'fec_actual': 'fec_actual', 'fuente1': 'fuente1', 'cod_depto': 'cod_depto', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_id': '_id', 'area': 'area', 'highway': 'highway', 'type': 'type', 'surface': 'surface', 'bicycle': 'bicycle', 'motor_vehi': 'motor_vehi', 'lanes': 'lanes', 'maxspeed': 'maxspeed', 'oneway': 'oneway', 'ref': 'ref', 'sidewalk': 'sidewalk', 'source': 'source', 'destinatio': 'destinatio', 'destinat_1': 'destinat_1', 'layer': 'layer', 'minspeed': 'minspeed', 'official_n': 'official_n', 'lit': 'lit', 'abutters': 'abutters', 'bridge': 'bridge', 'embedded_r': 'embedded_r', 'destinat_2': 'destinat_2', 'maxspeed_h': 'maxspeed_h', 'hgv': 'hgv', 'maxheight': 'maxheight', 'maxweight': 'maxweight', 'wikidata': 'wikidata', 'alt_name': 'alt_name', 'turn_lanes': 'turn_lanes', 'horse': 'horse', 'busway_rig': 'busway_rig', 'lanes_bus': 'lanes_bus', 'short_name': 'short_name', 'note': 'note', 'source_wid': 'source_wid', 'width': 'width', 'cutting': 'cutting', 'smoothness': 'smoothness', 'source_max': 'source_max', 'embankment': 'embankment', 'access': 'access', 'foot': 'foot', 'fixme': 'fixme', 'noname': 'noname', 'lanes_back': 'lanes_back', 'lanes_forw': 'lanes_forw', 'old_name': 'old_name', 'junction': 'junction', 'tunnel': 'tunnel', 'turn_lan_1': 'turn_lan_1', 'maxspeed_t': 'maxspeed_t', 'hazard': 'hazard', 'maxspeed_c': 'maxspeed_c', 'service': 'service', 'turn_lan_2': 'turn_lan_2', 'lanes_psv': 'lanes_psv', 'psv_lanes': 'psv_lanes', 'cycleway': 'cycleway', 'overtaking': 'overtaking', 'parking_la': 'parking_la', 'surface_la': 'surface_la', 'surface__1': 'surface__1', 'covered': 'covered', 'incline': 'incline', 'tracktype': 'tracktype', 'constructi': 'constructi', 'ele': 'ele', 'leisure': 'leisure', 'sport': 'sport', 'wikipedia': 'wikipedia', 'segregated': 'segregated', 'destinat_3': 'destinat_3', 'loc_name': 'loc_name', 'bus': 'bus', 'hgv_lanes': 'hgv_lanes', 'bridge_mov': 'bridge_mov', 'bench': 'bench', 'public_tra': 'public_tra', 'shelter': 'shelter', 'psv': 'psv', 'emergency': 'emergency', 'footway': 'footway', 'vehicle': 'vehicle', 'crossing': 'crossing', 'surface__2': 'surface__2', 'handrail': 'handrail', 'level': 'level', 'conveying': 'conveying', 'traffic_si': 'traffic_si', 'enforcemen': 'enforcemen', 'traffic_ca': 'traffic_ca', 'noref': 'noref', 'traffic__1': 'traffic__1', 'source_pos': 'source_pos', 'name_es': 'name_es', 'bin': 'bin', 'departures': 'departures', 'network': 'network', 'operator': 'operator', });
lyr_LineaRoca_11.set('fieldAliases', {'id': 'id', '@id': '@id', 'colour': 'colour', 'from': 'from', 'name': 'name', 'network': 'network', 'operator': 'operator', 'public_tra': 'public_tra', 'ref': 'ref', 'route': 'route', 'service': 'service', 'to': 'to', 'type': 'type', 'alt_name': 'alt_name', 'interval': 'interval', 'via': 'via', 'website': 'website', 'stopping_p': 'stopping_p', 'bicycle': 'bicycle', 'wheelchair': 'wheelchair', 'payment_su': 'payment_su', 'wikipedia': 'wikipedia', 'bridge': 'bridge', 'descriptio': 'descriptio', 'electrifie': 'electrifie', 'gauge': 'gauge', 'layer': 'layer', 'passenger_': 'passenger_', 'railway': 'railway', 'railway_pr': 'railway_pr', 'embankment': 'embankment', 'disused': 'disused', 'usage': 'usage', 'razed_brid': 'razed_brid', 'tunnel': 'tunnel', '@relations': '@relations', 'voltage': 'voltage', 'public_t_1': 'public_t_1', 'short_name': 'short_name', 'train': 'train', 'wikidata': 'wikidata', 'old_name': 'old_name', 'start_date': 'start_date', 'railway_po': 'railway_po', 'platforms': 'platforms', 'railway__1': 'railway__1', });
lyr_EstacioneslineaRoca_12.set('fieldAliases', {'id': 'id', '@id': '@id', 'colour': 'colour', 'from': 'from', 'name': 'name', 'network': 'network', 'operator': 'operator', 'public_tra': 'public_tra', 'ref': 'ref', 'route': 'route', 'service': 'service', 'to': 'to', 'type': 'type', 'alt_name': 'alt_name', 'interval': 'interval', 'via': 'via', 'website': 'website', 'stopping_p': 'stopping_p', 'bicycle': 'bicycle', 'wheelchair': 'wheelchair', 'payment_su': 'payment_su', 'wikipedia': 'wikipedia', 'bridge': 'bridge', 'descriptio': 'descriptio', 'electrifie': 'electrifie', 'gauge': 'gauge', 'layer': 'layer', 'passenger_': 'passenger_', 'railway': 'railway', 'railway_pr': 'railway_pr', 'embankment': 'embankment', 'disused': 'disused', 'usage': 'usage', 'razed_brid': 'razed_brid', 'tunnel': 'tunnel', '@relations': '@relations', 'voltage': 'voltage', 'public_t_1': 'public_t_1', 'short_name': 'short_name', 'train': 'train', 'wikidata': 'wikidata', 'old_name': 'old_name', 'start_date': 'start_date', 'railway_po': 'railway_po', 'platforms': 'platforms', 'railway__1': 'railway__1', });
lyr_DistritosBuenosAires_1.set('fieldImages', {'objectid': '', 'departa': '', 'cabecer': '', 'provincia': '', 'fuente': '', 'fec_actual': '', 'fuente1': '', 'cod_depto': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'st_area_sh': '', 'st_length_': '', });
lyr_Lanus_2.set('fieldImages', {'objectid': '', 'departa': '', 'cabecer': '', 'provincia': '', 'fuente': '', 'fec_actual': '', 'fuente1': '', 'cod_depto': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'st_area_sh': '', 'st_length_': '', });
lyr_Msde50niosenelradiocensal_3.set('fieldImages', {'fid': '', 'toponimo_i': '', 'link': '', 'varon': '', 'mujer': '', 'totalpobl': '', 'hogares': '', 'viviendasp': '', 'viv_part_h': '', 'peques': '', 'muchos_chi': '', });
lyr_Msde500mdeestpublicos_4.set('fieldImages', {'objectid': '', 'departa': '', 'cabecer': '', 'provincia': '', 'fuente': '', 'fec_actual': '', 'fuente1': '', 'cod_depto': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'st_area_sh': '', 'st_length_': '', });
lyr_Publicos_5.set('fieldImages', {'Ciclo de C': '', 'Nº de Reg': '', 'Nº de Dis': '', 'Nombre de': '', 'Tipo de Or': '', 'Clave Prov': '', 'CUE': '', 'Nombre': '', 'Número': '', 'Latitud': '', 'Longitud': '', 'Medio': '', 'Nombre d_1': '', 'Jornada': '', 'Nombre d_2': '', 'Fecha de C': '', 'Matrícula': '', 'Condiciona': '', 'Nº de Sec': '', 'Nº de Car': '', 'Nº de Des': '', 'Desempeño': '', 'Desempe�_1': '', 'Desempe�_2': '', 'Desempe�_3': '', 'Secciones': '', 'Seccione_1': '', 'Seccione_2': '', 'Seccione_3': '', 'Seccione_4': '', 'Seccione_5': '', 'Seccione_6': '', 'Seccione_7': '', 'Matrícu_1': '', 'Matrícu_2': '', 'Matrícu_3': '', 'Matrícu_4': '', 'Matrícu_5': '', 'Matrícu_6': '', 'Matrícu_7': '', 'Matrícu_8': '', 'Condicio_1': '', 'Condicio_2': '', 'Condicio_3': '', 'Condicio_4': '', 'Condicio_5': '', 'Condicio_6': '', 'Filtro Tip': '', 'Filtro Med': '', 'Filtro Jor': '', });
lyr_Msde500mdeestprivados_6.set('fieldImages', {'objectid': '', 'departa': '', 'cabecer': '', 'provincia': '', 'fuente': '', 'fec_actual': '', 'fuente1': '', 'cod_depto': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'st_area_sh': '', 'st_length_': '', });
lyr_Privados_7.set('fieldImages', {'CLAVEESTAB': '', 'DEPENDENCI': '', 'ENTORNO': '', 'CALLE': '', 'NRODIRECCI': '', 'NOMBRE': '', 'LATITUD': '', 'LONGITUD': '', });
lyr_espacios_verdes_lanus_8.set('fieldImages', {'gid': '', 'entidad': '', 'objeto': '', 'fna': '', 'gna': '', 'nam': '', 'fdc': '', 'sag': '', });
lyr_Caminosprincipales_9.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', '_id': '', 'area': '', 'highway': '', 'type': '', 'surface': '', 'bicycle': '', 'motor_vehi': '', 'lanes': '', 'maxspeed': '', 'oneway': '', 'ref': '', 'sidewalk': '', 'source': '', 'destinatio': '', 'destinat_1': '', 'layer': '', 'minspeed': '', 'official_n': '', 'lit': '', 'abutters': '', 'bridge': '', 'embedded_r': '', 'destinat_2': '', 'maxspeed_h': '', 'hgv': '', 'maxheight': '', 'maxweight': '', 'wikidata': '', 'alt_name': '', 'turn_lanes': '', 'horse': '', 'busway_rig': '', 'lanes_bus': '', 'short_name': '', 'note': '', 'source_wid': '', 'width': '', 'cutting': '', 'smoothness': '', 'source_max': '', 'embankment': '', 'access': '', 'foot': '', 'fixme': '', 'noname': '', 'lanes_back': '', 'lanes_forw': '', 'old_name': '', 'junction': '', 'tunnel': '', 'turn_lan_1': '', 'maxspeed_t': '', 'hazard': '', 'maxspeed_c': '', 'service': '', 'turn_lan_2': '', 'lanes_psv': '', 'psv_lanes': '', 'cycleway': '', 'overtaking': '', 'parking_la': '', 'surface_la': '', 'surface__1': '', 'covered': '', 'incline': '', 'tracktype': '', 'constructi': '', 'ele': '', 'leisure': '', 'sport': '', 'wikipedia': '', 'segregated': '', 'destinat_3': '', 'loc_name': '', 'bus': '', 'hgv_lanes': '', 'bridge_mov': '', 'bench': '', 'public_tra': '', 'shelter': '', 'psv': '', 'emergency': '', 'footway': '', 'vehicle': '', 'crossing': '', 'surface__2': '', 'handrail': '', 'level': '', 'conveying': '', 'traffic_si': '', 'enforcemen': '', 'traffic_ca': '', 'noref': '', 'traffic__1': '', 'source_pos': '', 'name_es': '', 'bin': '', 'departures': '', 'network': '', 'operator': '', });
lyr_Cercanaavenidas400m_10.set('fieldImages', {'objectid': 'TextEdit', 'departa': 'TextEdit', 'cabecer': 'TextEdit', 'provincia': 'TextEdit', 'fuente': 'TextEdit', 'fec_actual': 'TextEdit', 'fuente1': 'TextEdit', 'cod_depto': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', '_id': 'TextEdit', 'area': 'TextEdit', 'highway': 'TextEdit', 'type': 'TextEdit', 'surface': 'TextEdit', 'bicycle': 'TextEdit', 'motor_vehi': 'TextEdit', 'lanes': 'TextEdit', 'maxspeed': 'TextEdit', 'oneway': 'TextEdit', 'ref': 'TextEdit', 'sidewalk': 'TextEdit', 'source': 'TextEdit', 'destinatio': 'TextEdit', 'destinat_1': 'TextEdit', 'layer': 'TextEdit', 'minspeed': 'TextEdit', 'official_n': 'TextEdit', 'lit': 'TextEdit', 'abutters': 'TextEdit', 'bridge': 'TextEdit', 'embedded_r': 'TextEdit', 'destinat_2': 'TextEdit', 'maxspeed_h': 'TextEdit', 'hgv': 'TextEdit', 'maxheight': 'TextEdit', 'maxweight': 'TextEdit', 'wikidata': 'TextEdit', 'alt_name': 'TextEdit', 'turn_lanes': 'TextEdit', 'horse': 'TextEdit', 'busway_rig': 'TextEdit', 'lanes_bus': 'TextEdit', 'short_name': 'TextEdit', 'note': 'TextEdit', 'source_wid': 'TextEdit', 'width': 'TextEdit', 'cutting': 'TextEdit', 'smoothness': 'TextEdit', 'source_max': 'TextEdit', 'embankment': 'TextEdit', 'access': 'TextEdit', 'foot': 'TextEdit', 'fixme': 'TextEdit', 'noname': 'TextEdit', 'lanes_back': 'TextEdit', 'lanes_forw': 'TextEdit', 'old_name': 'TextEdit', 'junction': 'TextEdit', 'tunnel': 'TextEdit', 'turn_lan_1': 'TextEdit', 'maxspeed_t': 'TextEdit', 'hazard': 'TextEdit', 'maxspeed_c': 'TextEdit', 'service': 'TextEdit', 'turn_lan_2': 'TextEdit', 'lanes_psv': 'TextEdit', 'psv_lanes': 'TextEdit', 'cycleway': 'TextEdit', 'overtaking': 'TextEdit', 'parking_la': 'TextEdit', 'surface_la': 'TextEdit', 'surface__1': 'TextEdit', 'covered': 'TextEdit', 'incline': 'TextEdit', 'tracktype': 'TextEdit', 'constructi': 'TextEdit', 'ele': 'TextEdit', 'leisure': 'TextEdit', 'sport': 'TextEdit', 'wikipedia': 'TextEdit', 'segregated': 'TextEdit', 'destinat_3': 'TextEdit', 'loc_name': 'TextEdit', 'bus': 'TextEdit', 'hgv_lanes': 'TextEdit', 'bridge_mov': 'TextEdit', 'bench': 'TextEdit', 'public_tra': 'TextEdit', 'shelter': 'TextEdit', 'psv': 'TextEdit', 'emergency': 'TextEdit', 'footway': 'TextEdit', 'vehicle': 'TextEdit', 'crossing': 'TextEdit', 'surface__2': 'TextEdit', 'handrail': 'TextEdit', 'level': 'TextEdit', 'conveying': 'TextEdit', 'traffic_si': 'TextEdit', 'enforcemen': 'TextEdit', 'traffic_ca': 'TextEdit', 'noref': 'TextEdit', 'traffic__1': 'TextEdit', 'source_pos': 'TextEdit', 'name_es': 'TextEdit', 'bin': 'TextEdit', 'departures': 'TextEdit', 'network': 'TextEdit', 'operator': 'TextEdit', });
lyr_LineaRoca_11.set('fieldImages', {'id': '', '@id': '', 'colour': '', 'from': '', 'name': '', 'network': '', 'operator': '', 'public_tra': '', 'ref': '', 'route': '', 'service': '', 'to': '', 'type': '', 'alt_name': '', 'interval': '', 'via': '', 'website': '', 'stopping_p': '', 'bicycle': '', 'wheelchair': '', 'payment_su': '', 'wikipedia': '', 'bridge': '', 'descriptio': '', 'electrifie': '', 'gauge': '', 'layer': '', 'passenger_': '', 'railway': '', 'railway_pr': '', 'embankment': '', 'disused': '', 'usage': '', 'razed_brid': '', 'tunnel': '', '@relations': '', 'voltage': '', 'public_t_1': '', 'short_name': '', 'train': '', 'wikidata': '', 'old_name': '', 'start_date': '', 'railway_po': '', 'platforms': '', 'railway__1': '', });
lyr_EstacioneslineaRoca_12.set('fieldImages', {'id': '', '@id': '', 'colour': '', 'from': '', 'name': '', 'network': '', 'operator': '', 'public_tra': '', 'ref': '', 'route': '', 'service': '', 'to': '', 'type': '', 'alt_name': '', 'interval': '', 'via': '', 'website': '', 'stopping_p': '', 'bicycle': '', 'wheelchair': '', 'payment_su': '', 'wikipedia': '', 'bridge': '', 'descriptio': '', 'electrifie': '', 'gauge': '', 'layer': '', 'passenger_': '', 'railway': '', 'railway_pr': '', 'embankment': '', 'disused': '', 'usage': '', 'razed_brid': '', 'tunnel': '', '@relations': '', 'voltage': '', 'public_t_1': '', 'short_name': '', 'train': '', 'wikidata': '', 'old_name': '', 'start_date': '', 'railway_po': '', 'platforms': '', 'railway__1': '', });
lyr_DistritosBuenosAires_1.set('fieldLabels', {});
lyr_Lanus_2.set('fieldLabels', {});
lyr_Msde50niosenelradiocensal_3.set('fieldLabels', {});
lyr_Msde500mdeestpublicos_4.set('fieldLabels', {});
lyr_Publicos_5.set('fieldLabels', {});
lyr_Msde500mdeestprivados_6.set('fieldLabels', {});
lyr_Privados_7.set('fieldLabels', {});
lyr_espacios_verdes_lanus_8.set('fieldLabels', {});
lyr_Caminosprincipales_9.set('fieldLabels', {});
lyr_Cercanaavenidas400m_10.set('fieldLabels', {});
lyr_LineaRoca_11.set('fieldLabels', {});
lyr_EstacioneslineaRoca_12.set('fieldLabels', {});
lyr_EstacioneslineaRoca_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});