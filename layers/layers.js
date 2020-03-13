var wms_layers = [];

var format_DistritosBuenosAires_0 = new ol.format.GeoJSON();
var features_DistritosBuenosAires_0 = format_DistritosBuenosAires_0.readFeatures(json_DistritosBuenosAires_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistritosBuenosAires_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritosBuenosAires_0.addFeatures(features_DistritosBuenosAires_0);
var lyr_DistritosBuenosAires_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DistritosBuenosAires_0, 
                style: style_DistritosBuenosAires_0,
                interactive: true,
                title: '<img src="styles/legend/DistritosBuenosAires_0.png" /> Distritos Buenos Aires'
            });
var format_Msde50niosenelradiocensal_1 = new ol.format.GeoJSON();
var features_Msde50niosenelradiocensal_1 = format_Msde50niosenelradiocensal_1.readFeatures(json_Msde50niosenelradiocensal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Msde50niosenelradiocensal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Msde50niosenelradiocensal_1.addFeatures(features_Msde50niosenelradiocensal_1);
var lyr_Msde50niosenelradiocensal_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Msde50niosenelradiocensal_1, 
                style: style_Msde50niosenelradiocensal_1,
                interactive: true,
    title: 'Más de 50 niños en el radio censal<br />\
    <img src="styles/legend/Msde50niosenelradiocensal_1_0.png" /> 0<br />\
    <img src="styles/legend/Msde50niosenelradiocensal_1_1.png" /> 1<br />\
    <img src="styles/legend/Msde50niosenelradiocensal_1_2.png" /> <br />'
        });
var format_Msde500mdeescuelasexistentes_2 = new ol.format.GeoJSON();
var features_Msde500mdeescuelasexistentes_2 = format_Msde500mdeescuelasexistentes_2.readFeatures(json_Msde500mdeescuelasexistentes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Msde500mdeescuelasexistentes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Msde500mdeescuelasexistentes_2.addFeatures(features_Msde500mdeescuelasexistentes_2);
var lyr_Msde500mdeescuelasexistentes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Msde500mdeescuelasexistentes_2, 
                style: style_Msde500mdeescuelasexistentes_2,
                interactive: true,
                title: '<img src="styles/legend/Msde500mdeescuelasexistentes_2.png" /> Más de 500m de escuelas existentes'
            });
var format_Cercanaavenidas400m_3 = new ol.format.GeoJSON();
var features_Cercanaavenidas400m_3 = format_Cercanaavenidas400m_3.readFeatures(json_Cercanaavenidas400m_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cercanaavenidas400m_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cercanaavenidas400m_3.addFeatures(features_Cercanaavenidas400m_3);
var lyr_Cercanaavenidas400m_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cercanaavenidas400m_3, 
                style: style_Cercanaavenidas400m_3,
                interactive: true,
                title: '<img src="styles/legend/Cercanaavenidas400m_3.png" /> Cercanía avenidas (400m)'
            });
var group_FactibilidadLanus = new ol.layer.Group({
                                layers: [lyr_DistritosBuenosAires_0,lyr_Msde50niosenelradiocensal_1,lyr_Msde500mdeescuelasexistentes_2,lyr_Cercanaavenidas400m_3,],
                                title: "Factibilidad Lanus"});

lyr_DistritosBuenosAires_0.setVisible(true);lyr_Msde50niosenelradiocensal_1.setVisible(true);lyr_Msde500mdeescuelasexistentes_2.setVisible(true);lyr_Cercanaavenidas400m_3.setVisible(true);
var layersList = [group_FactibilidadLanus];
lyr_DistritosBuenosAires_0.set('fieldAliases', {'objectid': 'objectid', 'departa': 'departa', 'cabecer': 'cabecer', 'provincia': 'provincia', 'fuente': 'fuente', 'fec_actual': 'fec_actual', 'fuente1': 'fuente1', 'cod_depto': 'cod_depto', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_Msde50niosenelradiocensal_1.set('fieldAliases', {'fid': 'fid', 'toponimo_i': 'toponimo_i', 'link': 'link', 'varon': 'varon', 'mujer': 'mujer', 'totalpobl': 'totalpobl', 'hogares': 'hogares', 'viviendasp': 'viviendasp', 'viv_part_h': 'viv_part_h', 'peques': 'peques', 'muchos_chi': 'muchos_chi', });
lyr_Msde500mdeescuelasexistentes_2.set('fieldAliases', {'objectid': 'objectid', 'departa': 'departa', 'cabecer': 'cabecer', 'provincia': 'provincia', 'fuente': 'fuente', 'fec_actual': 'fec_actual', 'fuente1': 'fuente1', 'cod_depto': 'cod_depto', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_Cercanaavenidas400m_3.set('fieldAliases', {'objectid': 'objectid', 'departa': 'departa', 'cabecer': 'cabecer', 'provincia': 'provincia', 'fuente': 'fuente', 'fec_actual': 'fec_actual', 'fuente1': 'fuente1', 'cod_depto': 'cod_depto', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_id': '_id', 'area': 'area', 'highway': 'highway', 'type': 'type', 'surface': 'surface', 'bicycle': 'bicycle', 'motor_vehi': 'motor_vehi', 'lanes': 'lanes', 'maxspeed': 'maxspeed', 'oneway': 'oneway', 'ref': 'ref', 'sidewalk': 'sidewalk', 'source': 'source', 'destinatio': 'destinatio', 'destinat_1': 'destinat_1', 'layer': 'layer', 'minspeed': 'minspeed', 'official_n': 'official_n', 'lit': 'lit', 'abutters': 'abutters', 'bridge': 'bridge', 'embedded_r': 'embedded_r', 'destinat_2': 'destinat_2', 'maxspeed_h': 'maxspeed_h', 'hgv': 'hgv', 'maxheight': 'maxheight', 'maxweight': 'maxweight', 'wikidata': 'wikidata', 'alt_name': 'alt_name', 'turn_lanes': 'turn_lanes', 'horse': 'horse', 'busway_rig': 'busway_rig', 'lanes_bus': 'lanes_bus', 'short_name': 'short_name', 'note': 'note', 'source_wid': 'source_wid', 'width': 'width', 'cutting': 'cutting', 'smoothness': 'smoothness', 'source_max': 'source_max', 'embankment': 'embankment', 'access': 'access', 'foot': 'foot', 'fixme': 'fixme', 'noname': 'noname', 'lanes_back': 'lanes_back', 'lanes_forw': 'lanes_forw', 'old_name': 'old_name', 'junction': 'junction', 'tunnel': 'tunnel', 'turn_lan_1': 'turn_lan_1', 'maxspeed_t': 'maxspeed_t', 'hazard': 'hazard', 'maxspeed_c': 'maxspeed_c', 'service': 'service', 'turn_lan_2': 'turn_lan_2', 'lanes_psv': 'lanes_psv', 'psv_lanes': 'psv_lanes', 'cycleway': 'cycleway', 'overtaking': 'overtaking', 'parking_la': 'parking_la', 'surface_la': 'surface_la', 'surface__1': 'surface__1', 'covered': 'covered', 'incline': 'incline', 'tracktype': 'tracktype', 'constructi': 'constructi', 'ele': 'ele', 'leisure': 'leisure', 'sport': 'sport', 'wikipedia': 'wikipedia', 'segregated': 'segregated', 'destinat_3': 'destinat_3', 'loc_name': 'loc_name', 'bus': 'bus', 'hgv_lanes': 'hgv_lanes', 'bridge_mov': 'bridge_mov', 'bench': 'bench', 'public_tra': 'public_tra', 'shelter': 'shelter', 'psv': 'psv', 'emergency': 'emergency', 'footway': 'footway', 'vehicle': 'vehicle', 'crossing': 'crossing', 'surface__2': 'surface__2', 'handrail': 'handrail', 'level': 'level', 'conveying': 'conveying', 'traffic_si': 'traffic_si', 'enforcemen': 'enforcemen', 'traffic_ca': 'traffic_ca', 'noref': 'noref', 'traffic__1': 'traffic__1', 'source_pos': 'source_pos', 'name_es': 'name_es', 'bin': 'bin', 'departures': 'departures', 'network': 'network', 'operator': 'operator', });
lyr_DistritosBuenosAires_0.set('fieldImages', {'objectid': '', 'departa': '', 'cabecer': '', 'provincia': '', 'fuente': '', 'fec_actual': '', 'fuente1': '', 'cod_depto': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'st_area_sh': '', 'st_length_': '', });
lyr_Msde50niosenelradiocensal_1.set('fieldImages', {'fid': '', 'toponimo_i': '', 'link': '', 'varon': '', 'mujer': '', 'totalpobl': '', 'hogares': '', 'viviendasp': '', 'viv_part_h': '', 'peques': '', 'muchos_chi': '', });
lyr_Msde500mdeescuelasexistentes_2.set('fieldImages', {'objectid': '', 'departa': '', 'cabecer': '', 'provincia': '', 'fuente': '', 'fec_actual': '', 'fuente1': '', 'cod_depto': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'st_area_sh': '', 'st_length_': '', });
lyr_Cercanaavenidas400m_3.set('fieldImages', {'objectid': 'TextEdit', 'departa': 'TextEdit', 'cabecer': 'TextEdit', 'provincia': 'TextEdit', 'fuente': 'TextEdit', 'fec_actual': 'TextEdit', 'fuente1': 'TextEdit', 'cod_depto': 'TextEdit', 'created_us': 'TextEdit', 'created_da': 'DateTime', 'last_edite': 'TextEdit', 'last_edi_1': 'DateTime', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', '_id': 'TextEdit', 'area': 'TextEdit', 'highway': 'TextEdit', 'type': 'TextEdit', 'surface': 'TextEdit', 'bicycle': 'TextEdit', 'motor_vehi': 'TextEdit', 'lanes': 'TextEdit', 'maxspeed': 'TextEdit', 'oneway': 'TextEdit', 'ref': 'TextEdit', 'sidewalk': 'TextEdit', 'source': 'TextEdit', 'destinatio': 'TextEdit', 'destinat_1': 'TextEdit', 'layer': 'TextEdit', 'minspeed': 'TextEdit', 'official_n': 'TextEdit', 'lit': 'TextEdit', 'abutters': 'TextEdit', 'bridge': 'TextEdit', 'embedded_r': 'TextEdit', 'destinat_2': 'TextEdit', 'maxspeed_h': 'TextEdit', 'hgv': 'TextEdit', 'maxheight': 'TextEdit', 'maxweight': 'TextEdit', 'wikidata': 'TextEdit', 'alt_name': 'TextEdit', 'turn_lanes': 'TextEdit', 'horse': 'TextEdit', 'busway_rig': 'TextEdit', 'lanes_bus': 'TextEdit', 'short_name': 'TextEdit', 'note': 'TextEdit', 'source_wid': 'TextEdit', 'width': 'TextEdit', 'cutting': 'TextEdit', 'smoothness': 'TextEdit', 'source_max': 'TextEdit', 'embankment': 'TextEdit', 'access': 'TextEdit', 'foot': 'TextEdit', 'fixme': 'TextEdit', 'noname': 'TextEdit', 'lanes_back': 'TextEdit', 'lanes_forw': 'TextEdit', 'old_name': 'TextEdit', 'junction': 'TextEdit', 'tunnel': 'TextEdit', 'turn_lan_1': 'TextEdit', 'maxspeed_t': 'TextEdit', 'hazard': 'TextEdit', 'maxspeed_c': 'TextEdit', 'service': 'TextEdit', 'turn_lan_2': 'TextEdit', 'lanes_psv': 'TextEdit', 'psv_lanes': 'TextEdit', 'cycleway': 'TextEdit', 'overtaking': 'TextEdit', 'parking_la': 'TextEdit', 'surface_la': 'TextEdit', 'surface__1': 'TextEdit', 'covered': 'TextEdit', 'incline': 'TextEdit', 'tracktype': 'TextEdit', 'constructi': 'TextEdit', 'ele': 'TextEdit', 'leisure': 'TextEdit', 'sport': 'TextEdit', 'wikipedia': 'TextEdit', 'segregated': 'TextEdit', 'destinat_3': 'TextEdit', 'loc_name': 'TextEdit', 'bus': 'TextEdit', 'hgv_lanes': 'TextEdit', 'bridge_mov': 'TextEdit', 'bench': 'TextEdit', 'public_tra': 'TextEdit', 'shelter': 'TextEdit', 'psv': 'TextEdit', 'emergency': 'TextEdit', 'footway': 'TextEdit', 'vehicle': 'TextEdit', 'crossing': 'TextEdit', 'surface__2': 'TextEdit', 'handrail': 'TextEdit', 'level': 'TextEdit', 'conveying': 'TextEdit', 'traffic_si': 'TextEdit', 'enforcemen': 'TextEdit', 'traffic_ca': 'TextEdit', 'noref': 'TextEdit', 'traffic__1': 'TextEdit', 'source_pos': 'TextEdit', 'name_es': 'TextEdit', 'bin': 'TextEdit', 'departures': 'TextEdit', 'network': 'TextEdit', 'operator': 'TextEdit', });
lyr_DistritosBuenosAires_0.set('fieldLabels', {});
lyr_Msde50niosenelradiocensal_1.set('fieldLabels', {});
lyr_Msde500mdeescuelasexistentes_2.set('fieldLabels', {});
lyr_Cercanaavenidas400m_3.set('fieldLabels', {});
lyr_Cercanaavenidas400m_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});