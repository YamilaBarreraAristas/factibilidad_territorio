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
var format_filtro_mas_de_500_privadas_y_publicas_1 = new ol.format.GeoJSON();
var features_filtro_mas_de_500_privadas_y_publicas_1 = format_filtro_mas_de_500_privadas_y_publicas_1.readFeatures(json_filtro_mas_de_500_privadas_y_publicas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_filtro_mas_de_500_privadas_y_publicas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_filtro_mas_de_500_privadas_y_publicas_1.addFeatures(features_filtro_mas_de_500_privadas_y_publicas_1);
var lyr_filtro_mas_de_500_privadas_y_publicas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_filtro_mas_de_500_privadas_y_publicas_1, 
                style: style_filtro_mas_de_500_privadas_y_publicas_1,
                interactive: true,
                title: '<img src="styles/legend/filtro_mas_de_500_privadas_y_publicas_1.png" /> filtro_mas_de_500_privadas_y_publicas'
            });
var format_filtro_privadas_publicas_poblacion_2 = new ol.format.GeoJSON();
var features_filtro_privadas_publicas_poblacion_2 = format_filtro_privadas_publicas_poblacion_2.readFeatures(json_filtro_privadas_publicas_poblacion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_filtro_privadas_publicas_poblacion_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_filtro_privadas_publicas_poblacion_2.addFeatures(features_filtro_privadas_publicas_poblacion_2);
var lyr_filtro_privadas_publicas_poblacion_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_filtro_privadas_publicas_poblacion_2, 
                style: style_filtro_privadas_publicas_poblacion_2,
                interactive: true,
                title: '<img src="styles/legend/filtro_privadas_publicas_poblacion_2.png" /> filtro_privadas_publicas_poblacion'
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
    <img src="styles/legend/Msde50niosenelradiocensal_3_1.png" /> 1<br />'
        });
var format_LineaRoca_4 = new ol.format.GeoJSON();
var features_LineaRoca_4 = format_LineaRoca_4.readFeatures(json_LineaRoca_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineaRoca_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineaRoca_4.addFeatures(features_LineaRoca_4);
var lyr_LineaRoca_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LineaRoca_4, 
                style: style_LineaRoca_4,
                interactive: true,
                title: '<img src="styles/legend/LineaRoca_4.png" /> Linea Roca'
            });
var format_roads_lanus_planos_5 = new ol.format.GeoJSON();
var features_roads_lanus_planos_5 = format_roads_lanus_planos_5.readFeatures(json_roads_lanus_planos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_lanus_planos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_lanus_planos_5.addFeatures(features_roads_lanus_planos_5);
var lyr_roads_lanus_planos_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_roads_lanus_planos_5, 
                style: style_roads_lanus_planos_5,
                interactive: true,
                title: '<img src="styles/legend/roads_lanus_planos_5.png" /> roads_lanus_planos'
            });
var format_Caminosprincipales_6 = new ol.format.GeoJSON();
var features_Caminosprincipales_6 = format_Caminosprincipales_6.readFeatures(json_Caminosprincipales_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caminosprincipales_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caminosprincipales_6.addFeatures(features_Caminosprincipales_6);
var lyr_Caminosprincipales_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Caminosprincipales_6, 
                style: style_Caminosprincipales_6,
                interactive: true,
                title: '<img src="styles/legend/Caminosprincipales_6.png" /> Caminos principales'
            });
var format_EstacioneslineaRoca_7 = new ol.format.GeoJSON();
var features_EstacioneslineaRoca_7 = format_EstacioneslineaRoca_7.readFeatures(json_EstacioneslineaRoca_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstacioneslineaRoca_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacioneslineaRoca_7.addFeatures(features_EstacioneslineaRoca_7);
var lyr_EstacioneslineaRoca_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EstacioneslineaRoca_7, 
                style: style_EstacioneslineaRoca_7,
                interactive: true,
                title: '<img src="styles/legend/EstacioneslineaRoca_7.png" /> Estaciones linea Roca'
            });
var format_asentamientos_lanus_techo_2016_8 = new ol.format.GeoJSON();
var features_asentamientos_lanus_techo_2016_8 = format_asentamientos_lanus_techo_2016_8.readFeatures(json_asentamientos_lanus_techo_2016_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_asentamientos_lanus_techo_2016_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_asentamientos_lanus_techo_2016_8.addFeatures(features_asentamientos_lanus_techo_2016_8);
var lyr_asentamientos_lanus_techo_2016_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_asentamientos_lanus_techo_2016_8, 
                style: style_asentamientos_lanus_techo_2016_8,
                interactive: true,
                title: '<img src="styles/legend/asentamientos_lanus_techo_2016_8.png" /> asentamientos_lanus_techo_2016'
            });
var format_cementerios_9 = new ol.format.GeoJSON();
var features_cementerios_9 = format_cementerios_9.readFeatures(json_cementerios_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cementerios_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cementerios_9.addFeatures(features_cementerios_9);
var lyr_cementerios_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cementerios_9, 
                style: style_cementerios_9,
                interactive: true,
                title: '<img src="styles/legend/cementerios_9.png" /> cementerios'
            });
var format_polideportivos_lanus_10 = new ol.format.GeoJSON();
var features_polideportivos_lanus_10 = format_polideportivos_lanus_10.readFeatures(json_polideportivos_lanus_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_polideportivos_lanus_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_polideportivos_lanus_10.addFeatures(features_polideportivos_lanus_10);
var lyr_polideportivos_lanus_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_polideportivos_lanus_10, 
                style: style_polideportivos_lanus_10,
                interactive: true,
                title: '<img src="styles/legend/polideportivos_lanus_10.png" /> polideportivos_lanus'
            });
var format_Espaciosverdes_11 = new ol.format.GeoJSON();
var features_Espaciosverdes_11 = format_Espaciosverdes_11.readFeatures(json_Espaciosverdes_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Espaciosverdes_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espaciosverdes_11.addFeatures(features_Espaciosverdes_11);
var lyr_Espaciosverdes_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Espaciosverdes_11, 
                style: style_Espaciosverdes_11,
                interactive: true,
                title: '<img src="styles/legend/Espaciosverdes_11.png" /> Espacios verdes'
            });
var format_Publicos_mas_de_1_condicionalescopy_12 = new ol.format.GeoJSON();
var features_Publicos_mas_de_1_condicionalescopy_12 = format_Publicos_mas_de_1_condicionalescopy_12.readFeatures(json_Publicos_mas_de_1_condicionalescopy_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Publicos_mas_de_1_condicionalescopy_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Publicos_mas_de_1_condicionalescopy_12.addFeatures(features_Publicos_mas_de_1_condicionalescopy_12);
var lyr_Publicos_mas_de_1_condicionalescopy_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Publicos_mas_de_1_condicionalescopy_12, 
                style: style_Publicos_mas_de_1_condicionalescopy_12,
                interactive: true,
                title: '<img src="styles/legend/Publicos_mas_de_1_condicionalescopy_12.png" /> Publicos_mas_de_1_condicionales copy'
            });
var format_Publicos_mas_de_50_condicionales_13 = new ol.format.GeoJSON();
var features_Publicos_mas_de_50_condicionales_13 = format_Publicos_mas_de_50_condicionales_13.readFeatures(json_Publicos_mas_de_50_condicionales_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Publicos_mas_de_50_condicionales_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Publicos_mas_de_50_condicionales_13.addFeatures(features_Publicos_mas_de_50_condicionales_13);
var lyr_Publicos_mas_de_50_condicionales_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Publicos_mas_de_50_condicionales_13, 
                style: style_Publicos_mas_de_50_condicionales_13,
                interactive: true,
                title: '<img src="styles/legend/Publicos_mas_de_50_condicionales_13.png" /> Publicos_mas_de_50_condicionales'
            });
var format_Publicos_14 = new ol.format.GeoJSON();
var features_Publicos_14 = format_Publicos_14.readFeatures(json_Publicos_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Publicos_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Publicos_14.addFeatures(features_Publicos_14);
var lyr_Publicos_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Publicos_14, 
                style: style_Publicos_14,
                interactive: true,
                title: '<img src="styles/legend/Publicos_14.png" /> Publicos'
            });
var format_Privados_15 = new ol.format.GeoJSON();
var features_Privados_15 = format_Privados_15.readFeatures(json_Privados_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Privados_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Privados_15.addFeatures(features_Privados_15);
var lyr_Privados_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Privados_15, 
                style: style_Privados_15,
                interactive: true,
                title: '<img src="styles/legend/Privados_15.png" /> Privados'
            });
var format_DistritosBuenosAires_16 = new ol.format.GeoJSON();
var features_DistritosBuenosAires_16 = format_DistritosBuenosAires_16.readFeatures(json_DistritosBuenosAires_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistritosBuenosAires_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritosBuenosAires_16.addFeatures(features_DistritosBuenosAires_16);
var lyr_DistritosBuenosAires_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DistritosBuenosAires_16, 
                style: style_DistritosBuenosAires_16,
                interactive: true,
                title: '<img src="styles/legend/DistritosBuenosAires_16.png" /> Distritos Buenos Aires'
            });
var format_Lanus_17 = new ol.format.GeoJSON();
var features_Lanus_17 = format_Lanus_17.readFeatures(json_Lanus_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lanus_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lanus_17.addFeatures(features_Lanus_17);
var lyr_Lanus_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lanus_17, 
                style: style_Lanus_17,
                interactive: true,
                title: '<img src="styles/legend/Lanus_17.png" /> Lanus'
            });
var group_Lanusyotrosdistritos = new ol.layer.Group({
                                layers: [lyr_DistritosBuenosAires_16,lyr_Lanus_17,],
                                title: "Lanus y otros distritos"});
var group_Establecimientos = new ol.layer.Group({
                                layers: [lyr_Publicos_mas_de_1_condicionalescopy_12,lyr_Publicos_mas_de_50_condicionales_13,lyr_Publicos_14,lyr_Privados_15,],
                                title: "Establecimientos"});
var group_Otrosusosdelsuelo = new ol.layer.Group({
                                layers: [lyr_asentamientos_lanus_techo_2016_8,lyr_cementerios_9,lyr_polideportivos_lanus_10,lyr_Espaciosverdes_11,],
                                title: "Otros usos del suelo"});
var group_redvial = new ol.layer.Group({
                                layers: [lyr_LineaRoca_4,lyr_roads_lanus_planos_5,lyr_Caminosprincipales_6,lyr_EstacioneslineaRoca_7,],
                                title: "red vial"});
var group_filtros = new ol.layer.Group({
                                layers: [lyr_filtro_mas_de_500_privadas_y_publicas_1,lyr_filtro_privadas_publicas_poblacion_2,lyr_Msde50niosenelradiocensal_3,],
                                title: "filtros"});
var group_Mapas = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,],
                                title: "Mapas"});

lyr_OpenStreetMap_0.setVisible(true);lyr_filtro_mas_de_500_privadas_y_publicas_1.setVisible(true);lyr_filtro_privadas_publicas_poblacion_2.setVisible(true);lyr_Msde50niosenelradiocensal_3.setVisible(true);lyr_LineaRoca_4.setVisible(true);lyr_roads_lanus_planos_5.setVisible(true);lyr_Caminosprincipales_6.setVisible(true);lyr_EstacioneslineaRoca_7.setVisible(true);lyr_asentamientos_lanus_techo_2016_8.setVisible(true);lyr_cementerios_9.setVisible(true);lyr_polideportivos_lanus_10.setVisible(true);lyr_Espaciosverdes_11.setVisible(true);lyr_Publicos_mas_de_1_condicionalescopy_12.setVisible(true);lyr_Publicos_mas_de_50_condicionales_13.setVisible(true);lyr_Publicos_14.setVisible(true);lyr_Privados_15.setVisible(true);lyr_DistritosBuenosAires_16.setVisible(true);lyr_Lanus_17.setVisible(true);
var layersList = [group_Mapas,group_filtros,group_redvial,group_Otrosusosdelsuelo,group_Establecimientos,group_Lanusyotrosdistritos];
lyr_filtro_mas_de_500_privadas_y_publicas_1.set('fieldAliases', {'objectid': 'objectid', 'departa': 'departa', 'cabecer': 'cabecer', 'provincia': 'provincia', 'fuente': 'fuente', 'fec_actual': 'fec_actual', 'fuente1': 'fuente1', 'cod_depto': 'cod_depto', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'objectid_2': 'objectid_2', 'departa_2': 'departa_2', 'cabecer_2': 'cabecer_2', 'provincia_': 'provincia_', 'fuente_2': 'fuente_2', 'fec_actu_1': 'fec_actu_1', 'fuente1_2': 'fuente1_2', 'cod_depto_': 'cod_depto_', 'created__1': 'created__1', 'created__2': 'created__2', 'last_edi_2': 'last_edi_2', 'last_edi_3': 'last_edi_3', 'st_area__1': 'st_area__1', 'st_lengt_1': 'st_lengt_1', });
lyr_filtro_privadas_publicas_poblacion_2.set('fieldAliases', {'objectid': 'objectid', 'departa': 'departa', 'cabecer': 'cabecer', 'provincia': 'provincia', 'fuente': 'fuente', 'fec_actual': 'fec_actual', 'fuente1': 'fuente1', 'cod_depto': 'cod_depto', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'objectid_2': 'objectid_2', 'departa_2': 'departa_2', 'cabecer_2': 'cabecer_2', 'provincia_': 'provincia_', 'fuente_2': 'fuente_2', 'fec_actu_1': 'fec_actu_1', 'fuente1_2': 'fuente1_2', 'cod_depto_': 'cod_depto_', 'created__1': 'created__1', 'created__2': 'created__2', 'last_edi_2': 'last_edi_2', 'last_edi_3': 'last_edi_3', 'st_area__1': 'st_area__1', 'st_lengt_1': 'st_lengt_1', 'fid': 'fid', 'toponimo_i': 'toponimo_i', 'link': 'link', 'varon': 'varon', 'mujer': 'mujer', 'totalpobl': 'totalpobl', 'hogares': 'hogares', 'viviendasp': 'viviendasp', 'viv_part_h': 'viv_part_h', 'peques': 'peques', 'muchos_chi': 'muchos_chi', });
lyr_Msde50niosenelradiocensal_3.set('fieldAliases', {'fid': 'fid', 'toponimo_i': 'toponimo_i', 'link': 'link', 'varon': 'varon', 'mujer': 'mujer', 'totalpobl': 'totalpobl', 'hogares': 'hogares', 'viviendasp': 'viviendasp', 'viv_part_h': 'viv_part_h', 'peques': 'peques', 'muchos_chi': 'muchos_chi', });
lyr_LineaRoca_4.set('fieldAliases', {'id': 'id', '@id': '@id', 'colour': 'colour', 'from': 'from', 'name': 'name', 'network': 'network', 'operator': 'operator', 'public_tra': 'public_tra', 'ref': 'ref', 'route': 'route', 'service': 'service', 'to': 'to', 'type': 'type', 'alt_name': 'alt_name', 'interval': 'interval', 'via': 'via', 'website': 'website', 'stopping_p': 'stopping_p', 'bicycle': 'bicycle', 'wheelchair': 'wheelchair', 'payment_su': 'payment_su', 'wikipedia': 'wikipedia', 'bridge': 'bridge', 'descriptio': 'descriptio', 'electrifie': 'electrifie', 'gauge': 'gauge', 'layer': 'layer', 'passenger_': 'passenger_', 'railway': 'railway', 'railway_pr': 'railway_pr', 'embankment': 'embankment', 'disused': 'disused', 'usage': 'usage', 'razed_brid': 'razed_brid', 'tunnel': 'tunnel', '@relations': '@relations', 'voltage': 'voltage', 'public_t_1': 'public_t_1', 'short_name': 'short_name', 'train': 'train', 'wikidata': 'wikidata', 'old_name': 'old_name', 'start_date': 'start_date', 'railway_po': 'railway_po', 'platforms': 'platforms', 'railway__1': 'railway__1', });
lyr_roads_lanus_planos_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_id': '_id', 'area': 'area', 'highway': 'highway', 'type': 'type', 'surface': 'surface', 'bicycle': 'bicycle', 'motor_vehi': 'motor_vehi', 'lanes': 'lanes', 'maxspeed': 'maxspeed', 'oneway': 'oneway', 'ref': 'ref', 'sidewalk': 'sidewalk', 'source': 'source', 'destinatio': 'destinatio', 'destinat_1': 'destinat_1', 'layer': 'layer', 'minspeed': 'minspeed', 'official_n': 'official_n', 'lit': 'lit', 'abutters': 'abutters', 'bridge': 'bridge', 'embedded_r': 'embedded_r', 'destinat_2': 'destinat_2', 'maxspeed_h': 'maxspeed_h', 'hgv': 'hgv', 'maxheight': 'maxheight', 'maxweight': 'maxweight', 'wikidata': 'wikidata', 'alt_name': 'alt_name', 'turn_lanes': 'turn_lanes', 'horse': 'horse', 'busway_rig': 'busway_rig', 'lanes_bus': 'lanes_bus', 'short_name': 'short_name', 'note': 'note', 'source_wid': 'source_wid', 'width': 'width', 'cutting': 'cutting', 'smoothness': 'smoothness', 'source_max': 'source_max', 'embankment': 'embankment', 'access': 'access', 'foot': 'foot', 'fixme': 'fixme', 'noname': 'noname', 'lanes_back': 'lanes_back', 'lanes_forw': 'lanes_forw', 'old_name': 'old_name', 'junction': 'junction', 'tunnel': 'tunnel', 'turn_lan_1': 'turn_lan_1', 'maxspeed_t': 'maxspeed_t', 'hazard': 'hazard', 'maxspeed_c': 'maxspeed_c', 'service': 'service', 'turn_lan_2': 'turn_lan_2', 'lanes_psv': 'lanes_psv', 'psv_lanes': 'psv_lanes', 'cycleway': 'cycleway', 'overtaking': 'overtaking', 'parking_la': 'parking_la', 'surface_la': 'surface_la', 'surface__1': 'surface__1', 'covered': 'covered', 'incline': 'incline', 'tracktype': 'tracktype', 'constructi': 'constructi', 'ele': 'ele', 'leisure': 'leisure', 'sport': 'sport', 'wikipedia': 'wikipedia', 'segregated': 'segregated', 'destinat_3': 'destinat_3', 'loc_name': 'loc_name', 'bus': 'bus', 'hgv_lanes': 'hgv_lanes', 'bridge_mov': 'bridge_mov', 'bench': 'bench', 'public_tra': 'public_tra', 'shelter': 'shelter', 'psv': 'psv', 'emergency': 'emergency', 'footway': 'footway', 'vehicle': 'vehicle', 'crossing': 'crossing', 'surface__2': 'surface__2', 'handrail': 'handrail', 'level': 'level', 'conveying': 'conveying', 'traffic_si': 'traffic_si', 'enforcemen': 'enforcemen', 'traffic_ca': 'traffic_ca', 'noref': 'noref', 'traffic__1': 'traffic__1', 'source_pos': 'source_pos', 'name_es': 'name_es', 'bin': 'bin', 'departures': 'departures', 'network': 'network', 'operator': 'operator', });
lyr_Caminosprincipales_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', '_id': '_id', 'area': 'area', 'highway': 'highway', 'type': 'type', 'surface': 'surface', 'bicycle': 'bicycle', 'motor_vehi': 'motor_vehi', 'lanes': 'lanes', 'maxspeed': 'maxspeed', 'oneway': 'oneway', 'ref': 'ref', 'sidewalk': 'sidewalk', 'source': 'source', 'destinatio': 'destinatio', 'destinat_1': 'destinat_1', 'layer': 'layer', 'minspeed': 'minspeed', 'official_n': 'official_n', 'lit': 'lit', 'abutters': 'abutters', 'bridge': 'bridge', 'embedded_r': 'embedded_r', 'destinat_2': 'destinat_2', 'maxspeed_h': 'maxspeed_h', 'hgv': 'hgv', 'maxheight': 'maxheight', 'maxweight': 'maxweight', 'wikidata': 'wikidata', 'alt_name': 'alt_name', 'turn_lanes': 'turn_lanes', 'horse': 'horse', 'busway_rig': 'busway_rig', 'lanes_bus': 'lanes_bus', 'short_name': 'short_name', 'note': 'note', 'source_wid': 'source_wid', 'width': 'width', 'cutting': 'cutting', 'smoothness': 'smoothness', 'source_max': 'source_max', 'embankment': 'embankment', 'access': 'access', 'foot': 'foot', 'fixme': 'fixme', 'noname': 'noname', 'lanes_back': 'lanes_back', 'lanes_forw': 'lanes_forw', 'old_name': 'old_name', 'junction': 'junction', 'tunnel': 'tunnel', 'turn_lan_1': 'turn_lan_1', 'maxspeed_t': 'maxspeed_t', 'hazard': 'hazard', 'maxspeed_c': 'maxspeed_c', 'service': 'service', 'turn_lan_2': 'turn_lan_2', 'lanes_psv': 'lanes_psv', 'psv_lanes': 'psv_lanes', 'cycleway': 'cycleway', 'overtaking': 'overtaking', 'parking_la': 'parking_la', 'surface_la': 'surface_la', 'surface__1': 'surface__1', 'covered': 'covered', 'incline': 'incline', 'tracktype': 'tracktype', 'constructi': 'constructi', 'ele': 'ele', 'leisure': 'leisure', 'sport': 'sport', 'wikipedia': 'wikipedia', 'segregated': 'segregated', 'destinat_3': 'destinat_3', 'loc_name': 'loc_name', 'bus': 'bus', 'hgv_lanes': 'hgv_lanes', 'bridge_mov': 'bridge_mov', 'bench': 'bench', 'public_tra': 'public_tra', 'shelter': 'shelter', 'psv': 'psv', 'emergency': 'emergency', 'footway': 'footway', 'vehicle': 'vehicle', 'crossing': 'crossing', 'surface__2': 'surface__2', 'handrail': 'handrail', 'level': 'level', 'conveying': 'conveying', 'traffic_si': 'traffic_si', 'enforcemen': 'enforcemen', 'traffic_ca': 'traffic_ca', 'noref': 'noref', 'traffic__1': 'traffic__1', 'source_pos': 'source_pos', 'name_es': 'name_es', 'bin': 'bin', 'departures': 'departures', 'network': 'network', 'operator': 'operator', });
lyr_EstacioneslineaRoca_7.set('fieldAliases', {'id': 'id', '@id': '@id', 'colour': 'colour', 'from': 'from', 'name': 'name', 'network': 'network', 'operator': 'operator', 'public_tra': 'public_tra', 'ref': 'ref', 'route': 'route', 'service': 'service', 'to': 'to', 'type': 'type', 'alt_name': 'alt_name', 'interval': 'interval', 'via': 'via', 'website': 'website', 'stopping_p': 'stopping_p', 'bicycle': 'bicycle', 'wheelchair': 'wheelchair', 'payment_su': 'payment_su', 'wikipedia': 'wikipedia', 'bridge': 'bridge', 'descriptio': 'descriptio', 'electrifie': 'electrifie', 'gauge': 'gauge', 'layer': 'layer', 'passenger_': 'passenger_', 'railway': 'railway', 'railway_pr': 'railway_pr', 'embankment': 'embankment', 'disused': 'disused', 'usage': 'usage', 'razed_brid': 'razed_brid', 'tunnel': 'tunnel', '@relations': '@relations', 'voltage': 'voltage', 'public_t_1': 'public_t_1', 'short_name': 'short_name', 'train': 'train', 'wikidata': 'wikidata', 'old_name': 'old_name', 'start_date': 'start_date', 'railway_po': 'railway_po', 'platforms': 'platforms', 'railway__1': 'railway__1', });
lyr_asentamientos_lanus_techo_2016_8.set('fieldAliases', {'id': 'id', 'provincia': 'provincia', 'departamen': 'departamen', 'localidad': 'localidad', 'nombre_bar': 'nombre_bar', 'otros_nomb': 'otros_nomb', 'tipo_de_ba': 'tipo_de_ba', 'cantidad_d': 'cantidad_d', 'anio_creo_': 'anio_creo_', 'luz': 'luz', 'excretas': 'excretas', 'agua': 'agua', 'energia_ca': 'energia_ca', 'energia_co': 'energia_co', 'emergencia': 'emergencia', 'emergenc_1': 'emergenc_1', 'emergenc_2': 'emergenc_2', 'plantacion': 'plantacion', 'ribera_rio': 'ribera_rio', 'pendiente': 'pendiente', 'basural': 'basural', 'torres_de_': 'torres_de_', 'linea_de_t': 'linea_de_t', 'camino_de_': 'camino_de_', 'desechos_i': 'desechos_i', 'actividad_': 'actividad_', 'relleno_sa': 'relleno_sa', 'inundacion': 'inundacion', 'jardin_de_': 'jardin_de_', 'escuela_pr': 'escuela_pr', 'escuela_se': 'escuela_se', 'hospital': 'hospital', 'sala_medic': 'sala_medic', 'comisaria': 'comisaria', 'parada_tra': 'parada_tra', 'plaza': 'plaza', 'centro_de_': 'centro_de_', 'alcantaril': 'alcantaril', 'asfalto': 'asfalto', 'alumbrado': 'alumbrado', 'recoleccio': 'recoleccio', 'organizaci': 'organizaci', 'mayores_pr': 'mayores_pr', 'cosas_que_': 'cosas_que_', 'identifica': 'identifica', 'anio': 'anio', });
lyr_cementerios_9.set('fieldAliases', {'id': 'id', '@id': '@id', 'landuse': 'landuse', 'name': 'name', 'barrier': 'barrier', 'addr:city': 'addr:city', 'addr:housenumber': 'addr:housenumber', 'addr:postcode': 'addr:postcode', 'addr:street': 'addr:street', 'denomination': 'denomination', 'religion': 'religion', });
lyr_polideportivos_lanus_10.set('fieldAliases', {'id': 'id', '@id': '@id', 'landuse': 'landuse', 'name': 'name', 'sport': 'sport', 'leisure': 'leisure', });
lyr_Espaciosverdes_11.set('fieldAliases', {'id': 'id', '@id': '@id', 'leisure': 'leisure', 'name': 'name', 'sport': 'sport', 'type': 'type', 'source': 'source', 'designatio': 'designatio', 'descriptio': 'descriptio', 'surface': 'surface', 'access': 'access', 'covered': 'covered', 'indoor': 'indoor', 'lit': 'lit', 'addr_city': 'addr_city', 'addr_house': 'addr_house', 'addr_postc': 'addr_postc', 'addr_stree': 'addr_stree', 'descript_1': 'descript_1', 'id_2': 'id_2', '@id_2': '@id_2', 'leisure_2': 'leisure_2', 'type_2': 'type_2', 'name_2': 'name_2', 'addr_str_1': 'addr_str_1', 'source_2': 'source_2', 'addr_city_': 'addr_city_', 'addr_hou_1': 'addr_hou_1', 'addr_pos_1': 'addr_pos_1', 'opening_ho': 'opening_ho', 'landuse': 'landuse', 'name_en': 'name_en', 'footway': 'footway', 'sidewalk': 'sidewalk', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', 'wheelchair': 'wheelchair', 'landcover': 'landcover', 'url': 'url', 'alt_name': 'alt_name', 'website': 'website', 'id_3': 'id_3', '@id_3': '@id_3', 'landuse_2': 'landuse_2', 'barrier': 'barrier', 'fence_type': 'fence_type', 'name_3': 'name_3', 'landcover_': 'landcover_', 'leisure_3': 'leisure_3', 'url_2': 'url_2', 'alt_name_2': 'alt_name_2', 'wikipedia_': 'wikipedia_', });
lyr_Publicos_mas_de_1_condicionalescopy_12.set('fieldAliases', {'Ciclo de C': 'Ciclo de C', 'Nº de Reg': 'Nº de Reg', 'Nº de Dis': 'Nº de Dis', 'Nombre de': 'Nombre de', 'Tipo de Or': 'Tipo de Or', 'Clave Prov': 'Clave Prov', 'CUE': 'CUE', 'Nombre': 'Nombre', 'Número': 'Número', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Medio': 'Medio', 'Nombre d_1': 'Nombre d_1', 'Jornada': 'Jornada', 'Nombre d_2': 'Nombre d_2', 'Fecha de C': 'Fecha de C', 'Matrícula': 'Matrícula', 'Condiciona': 'Condiciona', 'Nº de Sec': 'Nº de Sec', 'Nº de Car': 'Nº de Car', 'Nº de Des': 'Nº de Des', 'Desempeño': 'Desempeño', 'Desempe�_1': 'Desempe�_1', 'Desempe�_2': 'Desempe�_2', 'Desempe�_3': 'Desempe�_3', 'Secciones': 'Secciones', 'Seccione_1': 'Seccione_1', 'Seccione_2': 'Seccione_2', 'Seccione_3': 'Seccione_3', 'Seccione_4': 'Seccione_4', 'Seccione_5': 'Seccione_5', 'Seccione_6': 'Seccione_6', 'Seccione_7': 'Seccione_7', 'Matrícu_1': 'Matrícu_1', 'Matrícu_2': 'Matrícu_2', 'Matrícu_3': 'Matrícu_3', 'Matrícu_4': 'Matrícu_4', 'Matrícu_5': 'Matrícu_5', 'Matrícu_6': 'Matrícu_6', 'Matrícu_7': 'Matrícu_7', 'Matrícu_8': 'Matrícu_8', 'Condicio_1': 'Condicio_1', 'Condicio_2': 'Condicio_2', 'Condicio_3': 'Condicio_3', 'Condicio_4': 'Condicio_4', 'Condicio_5': 'Condicio_5', 'Condicio_6': 'Condicio_6', 'Filtro Tip': 'Filtro Tip', 'Filtro Med': 'Filtro Med', 'Filtro Jor': 'Filtro Jor', });
lyr_Publicos_mas_de_50_condicionales_13.set('fieldAliases', {'Ciclo de C': 'Ciclo de C', 'Nº de Reg': 'Nº de Reg', 'Nº de Dis': 'Nº de Dis', 'Nombre de': 'Nombre de', 'Tipo de Or': 'Tipo de Or', 'Clave Prov': 'Clave Prov', 'CUE': 'CUE', 'Nombre': 'Nombre', 'Número': 'Número', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Medio': 'Medio', 'Nombre d_1': 'Nombre d_1', 'Jornada': 'Jornada', 'Nombre d_2': 'Nombre d_2', 'Fecha de C': 'Fecha de C', 'Matrícula': 'Matrícula', 'Condiciona': 'Condiciona', 'Nº de Sec': 'Nº de Sec', 'Nº de Car': 'Nº de Car', 'Nº de Des': 'Nº de Des', 'Desempeño': 'Desempeño', 'Desempe�_1': 'Desempe�_1', 'Desempe�_2': 'Desempe�_2', 'Desempe�_3': 'Desempe�_3', 'Secciones': 'Secciones', 'Seccione_1': 'Seccione_1', 'Seccione_2': 'Seccione_2', 'Seccione_3': 'Seccione_3', 'Seccione_4': 'Seccione_4', 'Seccione_5': 'Seccione_5', 'Seccione_6': 'Seccione_6', 'Seccione_7': 'Seccione_7', 'Matrícu_1': 'Matrícu_1', 'Matrícu_2': 'Matrícu_2', 'Matrícu_3': 'Matrícu_3', 'Matrícu_4': 'Matrícu_4', 'Matrícu_5': 'Matrícu_5', 'Matrícu_6': 'Matrícu_6', 'Matrícu_7': 'Matrícu_7', 'Matrícu_8': 'Matrícu_8', 'Condicio_1': 'Condicio_1', 'Condicio_2': 'Condicio_2', 'Condicio_3': 'Condicio_3', 'Condicio_4': 'Condicio_4', 'Condicio_5': 'Condicio_5', 'Condicio_6': 'Condicio_6', 'Filtro Tip': 'Filtro Tip', 'Filtro Med': 'Filtro Med', 'Filtro Jor': 'Filtro Jor', });
lyr_Publicos_14.set('fieldAliases', {'Ciclo de C': 'Ciclo de C', 'Nº de Reg': 'Nº de Reg', 'Nº de Dis': 'Nº de Dis', 'Nombre de': 'Nombre de', 'Tipo de Or': 'Tipo de Or', 'Clave Prov': 'Clave Prov', 'CUE': 'CUE', 'Nombre': 'Nombre', 'Número': 'Número', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Medio': 'Medio', 'Nombre d_1': 'Nombre d_1', 'Jornada': 'Jornada', 'Nombre d_2': 'Nombre d_2', 'Fecha de C': 'Fecha de C', 'Matrícula': 'Matrícula', 'Condiciona': 'Condiciona', 'Nº de Sec': 'Nº de Sec', 'Nº de Car': 'Nº de Car', 'Nº de Des': 'Nº de Des', 'Desempeño': 'Desempeño', 'Desempe�_1': 'Desempe�_1', 'Desempe�_2': 'Desempe�_2', 'Desempe�_3': 'Desempe�_3', 'Secciones': 'Secciones', 'Seccione_1': 'Seccione_1', 'Seccione_2': 'Seccione_2', 'Seccione_3': 'Seccione_3', 'Seccione_4': 'Seccione_4', 'Seccione_5': 'Seccione_5', 'Seccione_6': 'Seccione_6', 'Seccione_7': 'Seccione_7', 'Matrícu_1': 'Matrícu_1', 'Matrícu_2': 'Matrícu_2', 'Matrícu_3': 'Matrícu_3', 'Matrícu_4': 'Matrícu_4', 'Matrícu_5': 'Matrícu_5', 'Matrícu_6': 'Matrícu_6', 'Matrícu_7': 'Matrícu_7', 'Matrícu_8': 'Matrícu_8', 'Condicio_1': 'Condicio_1', 'Condicio_2': 'Condicio_2', 'Condicio_3': 'Condicio_3', 'Condicio_4': 'Condicio_4', 'Condicio_5': 'Condicio_5', 'Condicio_6': 'Condicio_6', 'Filtro Tip': 'Filtro Tip', 'Filtro Med': 'Filtro Med', 'Filtro Jor': 'Filtro Jor', });
lyr_Privados_15.set('fieldAliases', {'CLAVEESTAB': 'CLAVEESTAB', 'DEPENDENCI': 'DEPENDENCI', 'ENTORNO': 'ENTORNO', 'CALLE': 'CALLE', 'NRODIRECCI': 'NRODIRECCI', 'NOMBRE': 'NOMBRE', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_DistritosBuenosAires_16.set('fieldAliases', {'objectid': 'objectid', 'departa': 'departa', 'cabecer': 'cabecer', 'provincia': 'provincia', 'fuente': 'fuente', 'fec_actual': 'fec_actual', 'fuente1': 'fuente1', 'cod_depto': 'cod_depto', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_Lanus_17.set('fieldAliases', {'objectid': 'objectid', 'departa': 'departa', 'cabecer': 'cabecer', 'provincia': 'provincia', 'fuente': 'fuente', 'fec_actual': 'fec_actual', 'fuente1': 'fuente1', 'cod_depto': 'cod_depto', 'created_us': 'created_us', 'created_da': 'created_da', 'last_edite': 'last_edite', 'last_edi_1': 'last_edi_1', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_filtro_mas_de_500_privadas_y_publicas_1.set('fieldImages', {'objectid': '', 'departa': '', 'cabecer': '', 'provincia': '', 'fuente': '', 'fec_actual': '', 'fuente1': '', 'cod_depto': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'st_area_sh': '', 'st_length_': '', 'objectid_2': '', 'departa_2': '', 'cabecer_2': '', 'provincia_': '', 'fuente_2': '', 'fec_actu_1': '', 'fuente1_2': '', 'cod_depto_': '', 'created__1': '', 'created__2': '', 'last_edi_2': '', 'last_edi_3': '', 'st_area__1': '', 'st_lengt_1': '', });
lyr_filtro_privadas_publicas_poblacion_2.set('fieldImages', {'objectid': '', 'departa': '', 'cabecer': '', 'provincia': '', 'fuente': '', 'fec_actual': '', 'fuente1': '', 'cod_depto': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'st_area_sh': '', 'st_length_': '', 'objectid_2': '', 'departa_2': '', 'cabecer_2': '', 'provincia_': '', 'fuente_2': '', 'fec_actu_1': '', 'fuente1_2': '', 'cod_depto_': '', 'created__1': '', 'created__2': '', 'last_edi_2': '', 'last_edi_3': '', 'st_area__1': '', 'st_lengt_1': '', 'fid': '', 'toponimo_i': '', 'link': '', 'varon': '', 'mujer': '', 'totalpobl': '', 'hogares': '', 'viviendasp': '', 'viv_part_h': '', 'peques': '', 'muchos_chi': '', });
lyr_Msde50niosenelradiocensal_3.set('fieldImages', {'fid': '', 'toponimo_i': '', 'link': '', 'varon': '', 'mujer': '', 'totalpobl': '', 'hogares': '', 'viviendasp': '', 'viv_part_h': '', 'peques': '', 'muchos_chi': '', });
lyr_LineaRoca_4.set('fieldImages', {'id': '', '@id': '', 'colour': '', 'from': '', 'name': '', 'network': '', 'operator': '', 'public_tra': '', 'ref': '', 'route': '', 'service': '', 'to': '', 'type': '', 'alt_name': '', 'interval': '', 'via': '', 'website': '', 'stopping_p': '', 'bicycle': '', 'wheelchair': '', 'payment_su': '', 'wikipedia': '', 'bridge': '', 'descriptio': '', 'electrifie': '', 'gauge': '', 'layer': '', 'passenger_': '', 'railway': '', 'railway_pr': '', 'embankment': '', 'disused': '', 'usage': '', 'razed_brid': '', 'tunnel': '', '@relations': '', 'voltage': '', 'public_t_1': '', 'short_name': '', 'train': '', 'wikidata': '', 'old_name': '', 'start_date': '', 'railway_po': '', 'platforms': '', 'railway__1': '', });
lyr_roads_lanus_planos_5.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', '_id': '', 'area': '', 'highway': '', 'type': '', 'surface': '', 'bicycle': '', 'motor_vehi': '', 'lanes': '', 'maxspeed': '', 'oneway': '', 'ref': '', 'sidewalk': '', 'source': '', 'destinatio': '', 'destinat_1': '', 'layer': '', 'minspeed': '', 'official_n': '', 'lit': '', 'abutters': '', 'bridge': '', 'embedded_r': '', 'destinat_2': '', 'maxspeed_h': '', 'hgv': '', 'maxheight': '', 'maxweight': '', 'wikidata': '', 'alt_name': '', 'turn_lanes': '', 'horse': '', 'busway_rig': '', 'lanes_bus': '', 'short_name': '', 'note': '', 'source_wid': '', 'width': '', 'cutting': '', 'smoothness': '', 'source_max': '', 'embankment': '', 'access': '', 'foot': '', 'fixme': '', 'noname': '', 'lanes_back': '', 'lanes_forw': '', 'old_name': '', 'junction': '', 'tunnel': '', 'turn_lan_1': '', 'maxspeed_t': '', 'hazard': '', 'maxspeed_c': '', 'service': '', 'turn_lan_2': '', 'lanes_psv': '', 'psv_lanes': '', 'cycleway': '', 'overtaking': '', 'parking_la': '', 'surface_la': '', 'surface__1': '', 'covered': '', 'incline': '', 'tracktype': '', 'constructi': '', 'ele': '', 'leisure': '', 'sport': '', 'wikipedia': '', 'segregated': '', 'destinat_3': '', 'loc_name': '', 'bus': '', 'hgv_lanes': '', 'bridge_mov': '', 'bench': '', 'public_tra': '', 'shelter': '', 'psv': '', 'emergency': '', 'footway': '', 'vehicle': '', 'crossing': '', 'surface__2': '', 'handrail': '', 'level': '', 'conveying': '', 'traffic_si': '', 'enforcemen': '', 'traffic_ca': '', 'noref': '', 'traffic__1': '', 'source_pos': '', 'name_es': '', 'bin': '', 'departures': '', 'network': '', 'operator': '', });
lyr_Caminosprincipales_6.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', '_id': '', 'area': '', 'highway': '', 'type': '', 'surface': '', 'bicycle': '', 'motor_vehi': '', 'lanes': '', 'maxspeed': '', 'oneway': '', 'ref': '', 'sidewalk': '', 'source': '', 'destinatio': '', 'destinat_1': '', 'layer': '', 'minspeed': '', 'official_n': '', 'lit': '', 'abutters': '', 'bridge': '', 'embedded_r': '', 'destinat_2': '', 'maxspeed_h': '', 'hgv': '', 'maxheight': '', 'maxweight': '', 'wikidata': '', 'alt_name': '', 'turn_lanes': '', 'horse': '', 'busway_rig': '', 'lanes_bus': '', 'short_name': '', 'note': '', 'source_wid': '', 'width': '', 'cutting': '', 'smoothness': '', 'source_max': '', 'embankment': '', 'access': '', 'foot': '', 'fixme': '', 'noname': '', 'lanes_back': '', 'lanes_forw': '', 'old_name': '', 'junction': '', 'tunnel': '', 'turn_lan_1': '', 'maxspeed_t': '', 'hazard': '', 'maxspeed_c': '', 'service': '', 'turn_lan_2': '', 'lanes_psv': '', 'psv_lanes': '', 'cycleway': '', 'overtaking': '', 'parking_la': '', 'surface_la': '', 'surface__1': '', 'covered': '', 'incline': '', 'tracktype': '', 'constructi': '', 'ele': '', 'leisure': '', 'sport': '', 'wikipedia': '', 'segregated': '', 'destinat_3': '', 'loc_name': '', 'bus': '', 'hgv_lanes': '', 'bridge_mov': '', 'bench': '', 'public_tra': '', 'shelter': '', 'psv': '', 'emergency': '', 'footway': '', 'vehicle': '', 'crossing': '', 'surface__2': '', 'handrail': '', 'level': '', 'conveying': '', 'traffic_si': '', 'enforcemen': '', 'traffic_ca': '', 'noref': '', 'traffic__1': '', 'source_pos': '', 'name_es': '', 'bin': '', 'departures': '', 'network': '', 'operator': '', });
lyr_EstacioneslineaRoca_7.set('fieldImages', {'id': '', '@id': '', 'colour': '', 'from': '', 'name': '', 'network': '', 'operator': '', 'public_tra': '', 'ref': '', 'route': '', 'service': '', 'to': '', 'type': '', 'alt_name': '', 'interval': '', 'via': '', 'website': '', 'stopping_p': '', 'bicycle': '', 'wheelchair': '', 'payment_su': '', 'wikipedia': '', 'bridge': '', 'descriptio': '', 'electrifie': '', 'gauge': '', 'layer': '', 'passenger_': '', 'railway': '', 'railway_pr': '', 'embankment': '', 'disused': '', 'usage': '', 'razed_brid': '', 'tunnel': '', '@relations': '', 'voltage': '', 'public_t_1': '', 'short_name': '', 'train': '', 'wikidata': '', 'old_name': '', 'start_date': '', 'railway_po': '', 'platforms': '', 'railway__1': '', });
lyr_asentamientos_lanus_techo_2016_8.set('fieldImages', {'id': '', 'provincia': '', 'departamen': '', 'localidad': '', 'nombre_bar': '', 'otros_nomb': '', 'tipo_de_ba': '', 'cantidad_d': '', 'anio_creo_': '', 'luz': '', 'excretas': '', 'agua': '', 'energia_ca': '', 'energia_co': '', 'emergencia': '', 'emergenc_1': '', 'emergenc_2': '', 'plantacion': '', 'ribera_rio': '', 'pendiente': '', 'basural': '', 'torres_de_': '', 'linea_de_t': '', 'camino_de_': '', 'desechos_i': '', 'actividad_': '', 'relleno_sa': '', 'inundacion': '', 'jardin_de_': '', 'escuela_pr': '', 'escuela_se': '', 'hospital': '', 'sala_medic': '', 'comisaria': '', 'parada_tra': '', 'plaza': '', 'centro_de_': '', 'alcantaril': '', 'asfalto': '', 'alumbrado': '', 'recoleccio': '', 'organizaci': '', 'mayores_pr': '', 'cosas_que_': '', 'identifica': '', 'anio': '', });
lyr_cementerios_9.set('fieldImages', {'id': '', '@id': '', 'landuse': '', 'name': '', 'barrier': '', 'addr:city': '', 'addr:housenumber': '', 'addr:postcode': '', 'addr:street': '', 'denomination': '', 'religion': '', });
lyr_polideportivos_lanus_10.set('fieldImages', {'id': '', '@id': '', 'landuse': '', 'name': '', 'sport': '', 'leisure': '', });
lyr_Espaciosverdes_11.set('fieldImages', {'id': '', '@id': '', 'leisure': '', 'name': '', 'sport': '', 'type': '', 'source': '', 'designatio': '', 'descriptio': '', 'surface': '', 'access': '', 'covered': '', 'indoor': '', 'lit': '', 'addr_city': '', 'addr_house': '', 'addr_postc': '', 'addr_stree': '', 'descript_1': '', 'id_2': '', '@id_2': '', 'leisure_2': '', 'type_2': '', 'name_2': '', 'addr_str_1': '', 'source_2': '', 'addr_city_': '', 'addr_hou_1': '', 'addr_pos_1': '', 'opening_ho': '', 'landuse': '', 'name_en': '', 'footway': '', 'sidewalk': '', 'wikidata': '', 'wikipedia': '', 'wheelchair': '', 'landcover': '', 'url': '', 'alt_name': '', 'website': '', 'id_3': '', '@id_3': '', 'landuse_2': '', 'barrier': '', 'fence_type': '', 'name_3': '', 'landcover_': '', 'leisure_3': '', 'url_2': '', 'alt_name_2': '', 'wikipedia_': '', });
lyr_Publicos_mas_de_1_condicionalescopy_12.set('fieldImages', {'Ciclo de C': '', 'Nº de Reg': '', 'Nº de Dis': '', 'Nombre de': '', 'Tipo de Or': '', 'Clave Prov': '', 'CUE': '', 'Nombre': '', 'Número': '', 'Latitud': '', 'Longitud': '', 'Medio': '', 'Nombre d_1': '', 'Jornada': '', 'Nombre d_2': '', 'Fecha de C': '', 'Matrícula': '', 'Condiciona': '', 'Nº de Sec': '', 'Nº de Car': '', 'Nº de Des': '', 'Desempeño': '', 'Desempe�_1': '', 'Desempe�_2': '', 'Desempe�_3': '', 'Secciones': '', 'Seccione_1': '', 'Seccione_2': '', 'Seccione_3': '', 'Seccione_4': '', 'Seccione_5': '', 'Seccione_6': '', 'Seccione_7': '', 'Matrícu_1': '', 'Matrícu_2': '', 'Matrícu_3': '', 'Matrícu_4': '', 'Matrícu_5': '', 'Matrícu_6': '', 'Matrícu_7': '', 'Matrícu_8': '', 'Condicio_1': '', 'Condicio_2': '', 'Condicio_3': '', 'Condicio_4': '', 'Condicio_5': '', 'Condicio_6': '', 'Filtro Tip': '', 'Filtro Med': '', 'Filtro Jor': '', });
lyr_Publicos_mas_de_50_condicionales_13.set('fieldImages', {'Ciclo de C': '', 'Nº de Reg': '', 'Nº de Dis': '', 'Nombre de': '', 'Tipo de Or': '', 'Clave Prov': '', 'CUE': '', 'Nombre': '', 'Número': '', 'Latitud': '', 'Longitud': '', 'Medio': '', 'Nombre d_1': '', 'Jornada': '', 'Nombre d_2': '', 'Fecha de C': '', 'Matrícula': '', 'Condiciona': '', 'Nº de Sec': '', 'Nº de Car': '', 'Nº de Des': '', 'Desempeño': '', 'Desempe�_1': '', 'Desempe�_2': '', 'Desempe�_3': '', 'Secciones': '', 'Seccione_1': '', 'Seccione_2': '', 'Seccione_3': '', 'Seccione_4': '', 'Seccione_5': '', 'Seccione_6': '', 'Seccione_7': '', 'Matrícu_1': '', 'Matrícu_2': '', 'Matrícu_3': '', 'Matrícu_4': '', 'Matrícu_5': '', 'Matrícu_6': '', 'Matrícu_7': '', 'Matrícu_8': '', 'Condicio_1': '', 'Condicio_2': '', 'Condicio_3': '', 'Condicio_4': '', 'Condicio_5': '', 'Condicio_6': '', 'Filtro Tip': '', 'Filtro Med': '', 'Filtro Jor': '', });
lyr_Publicos_14.set('fieldImages', {'Ciclo de C': '', 'Nº de Reg': '', 'Nº de Dis': '', 'Nombre de': '', 'Tipo de Or': '', 'Clave Prov': '', 'CUE': '', 'Nombre': '', 'Número': '', 'Latitud': '', 'Longitud': '', 'Medio': '', 'Nombre d_1': '', 'Jornada': '', 'Nombre d_2': '', 'Fecha de C': '', 'Matrícula': '', 'Condiciona': '', 'Nº de Sec': '', 'Nº de Car': '', 'Nº de Des': '', 'Desempeño': '', 'Desempe�_1': '', 'Desempe�_2': '', 'Desempe�_3': '', 'Secciones': '', 'Seccione_1': '', 'Seccione_2': '', 'Seccione_3': '', 'Seccione_4': '', 'Seccione_5': '', 'Seccione_6': '', 'Seccione_7': '', 'Matrícu_1': '', 'Matrícu_2': '', 'Matrícu_3': '', 'Matrícu_4': '', 'Matrícu_5': '', 'Matrícu_6': '', 'Matrícu_7': '', 'Matrícu_8': '', 'Condicio_1': '', 'Condicio_2': '', 'Condicio_3': '', 'Condicio_4': '', 'Condicio_5': '', 'Condicio_6': '', 'Filtro Tip': '', 'Filtro Med': '', 'Filtro Jor': '', });
lyr_Privados_15.set('fieldImages', {'CLAVEESTAB': '', 'DEPENDENCI': '', 'ENTORNO': '', 'CALLE': '', 'NRODIRECCI': '', 'NOMBRE': '', 'LATITUD': '', 'LONGITUD': '', });
lyr_DistritosBuenosAires_16.set('fieldImages', {'objectid': '', 'departa': '', 'cabecer': '', 'provincia': '', 'fuente': '', 'fec_actual': '', 'fuente1': '', 'cod_depto': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'st_area_sh': '', 'st_length_': '', });
lyr_Lanus_17.set('fieldImages', {'objectid': '', 'departa': '', 'cabecer': '', 'provincia': '', 'fuente': '', 'fec_actual': '', 'fuente1': '', 'cod_depto': '', 'created_us': '', 'created_da': '', 'last_edite': '', 'last_edi_1': '', 'st_area_sh': '', 'st_length_': '', });
lyr_filtro_mas_de_500_privadas_y_publicas_1.set('fieldLabels', {});
lyr_filtro_privadas_publicas_poblacion_2.set('fieldLabels', {});
lyr_Msde50niosenelradiocensal_3.set('fieldLabels', {});
lyr_LineaRoca_4.set('fieldLabels', {});
lyr_roads_lanus_planos_5.set('fieldLabels', {});
lyr_Caminosprincipales_6.set('fieldLabels', {});
lyr_EstacioneslineaRoca_7.set('fieldLabels', {});
lyr_asentamientos_lanus_techo_2016_8.set('fieldLabels', {});
lyr_cementerios_9.set('fieldLabels', {});
lyr_polideportivos_lanus_10.set('fieldLabels', {});
lyr_Espaciosverdes_11.set('fieldLabels', {});
lyr_Publicos_mas_de_1_condicionalescopy_12.set('fieldLabels', {});
lyr_Publicos_mas_de_50_condicionales_13.set('fieldLabels', {});
lyr_Publicos_14.set('fieldLabels', {});
lyr_Privados_15.set('fieldLabels', {});
lyr_DistritosBuenosAires_16.set('fieldLabels', {});
lyr_Lanus_17.set('fieldLabels', {});
lyr_Lanus_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});