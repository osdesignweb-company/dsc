/**
 * Created by yalilebs on 14/09/16.
 */
//FUNCIÓN AUXILIAR PARA VALIDAR EL NO_DATA EN LOS ARCHIVOS GENERADOS POR LA FUNCIÓN SUMAR_DATOS_INICIALES DE PYTHON
var chart;
function valoresEnCero(datos, valores){
    for(i=0;i<datos.length;i++){
        for( j=0; j<valores.length;j++) {
            if (datos[i][valores[j]]) {
                return false;
            }
        }
    }
    return true;
}

function valorMaximo(datos){
    var max = 100;
    for(i=0;i<datos.length;i++){
        if(datos[i].valor && datos[i].valor<max){
            max = datos[i].valor;
        }
    }
}

AmCharts.checkEmptyData = function (chart, valores) {
    if ( 0 == chart.dataProvider.length || valoresEnCero(chart.dataProvider, valores)) {
        chart.valueAxes[0].minimum = 0;
        chart.valueAxes[0].maximum = valorMaximo(chart.dataProvider);
        chart.addLabel(0, '50%', 'No hay datos para el reporte especificado', 'center', 19, "#00acac");
    }else {
        chart.allLabels = [];
    }
    chart.validateNow();
};

function BarrasAgrupadas() {

    function generarBarrasAgrupadas(datos, nombreGrafica, nombreDiv, valoresAgrupados) {
        console.log(valoresAgrupados);
        chart = new AmCharts.AmSerialChart(AmCharts.themes.light);
        chart.theme = AmCharts.themes.light;
        chart.dataProvider = datos;
        chart.categoryField = "descripcion";
        chart.startDuration = 0.5;
        chart.depth3D = 100;
        chart.angle = 30;
        //chart.balloon.color = "#000000";
        chart.titles = [{
            "text": nombreGrafica,
            "size": 16
        }];

        // AXES
        // Category
        var categoryAxis = chart.categoryAxis;
        categoryAxis.gridPosition = "start";
        categoryAxis.gridAlpha = 0.1;
        categoryAxis.axisAlpha = 0;
        //categoryAxis.ignoreAxisWidth = true;
        //categoryAxis.autoWrap = true;
        categoryAxis.labelFunction = function (label) {
            label = label.replace(/(.{5}[ ])/g, "$1\n");
            return label;
        };

        // value
        var valueAxis = new AmCharts.ValueAxis();
        valueAxis.title = "Cantidad";
        //valueAxis.dashLength = 5;
        valueAxis.axisAlpha = 0;
        valueAxis.minimum = 0;
        valueAxis.integersOnly = true;
        valueAxis.stackType = "3d";
        valueAxis.gridCount = 10;
        valueAxis.reversed = false; // this line makes the value axis reversed

        chart.addValueAxis(valueAxis);


        //GRAPHS
        for (j=0; j<valoresAgrupados.length;j++) {
            console.log(valoresAgrupados+" lol");
            var graph = new AmCharts.AmGraph();
            graph.valueField = valoresAgrupados[j];
            graph.balloonText = valoresAgrupados[j]+" ([[value]])";
            //graph.bullet = "round";
            graph.type = "column";
            graph.lineAlpha = 0;
            graph.fillAlphas = 1;
            //graph.labelText = valoresAgrupados[j];
            chart.addGraph(graph);

        }


        // CURSOR
        var chartCursor = new AmCharts.ChartCursor();
        chartCursor.cursorPosition = "mouse";
        chartCursor.zoomable = false;
        chartCursor.cursorAlpha = 0;
        chart.addChartCursor(chartCursor);

        chart.marginLeft = 200;
        chart.exportConfig = exportConfig();
        chart.responsive = {"enabled": true};
        // WRITE
        chart.write(nombreDiv);
    }

    var exportConfig = function () {
        return {
            menuTop: "0px",
            menuBottom: "auto",
            menuRight: "0px",
            backgroundColor: "#efefef",
            menuItemStyle: {
                backgroundColor: '#EFEFEF',
                rollOverBackgroundColor: '#DDDDDD'
            },
            menuItems: [{
                textAlign: 'center',
                icon: base + "plugins/amcharts/images/export.png",
                onclick: function () {
                },
                items: [{
                    title: 'JPG',
                    format: 'jpg'
                }, {
                    title: 'PNG',
                    format: 'png'
                }, {
                    title: 'SVG',
                    format: 'svg'
                }]
            }]
        }
    };

    function barras(datos, nombreDiv, nombreGrafica, valoresAgrupados) {
        if (AmCharts.isReady) {
            generarBarrasAgrupadas(datos, nombreDiv, nombreGrafica, valoresAgrupados);
        } else {
            AmCharts.ready(generarBarrasAgrupadas(datos, nombreDiv, nombreGrafica, valoresAgrupados));
        }
    }

    function nuevosGraficos(valoresAgrupados){
        for (j=0; j<valoresAgrupados.length;j++) {
            var graph = new AmCharts.AmGraph();
            graph.valueField = valoresAgrupados[j];
            graph.balloonText = valoresAgrupados[j]+" ([[value]])";
            //graph.bullet = "round";
            graph.type = "column";
            graph.lineAlpha = 0;
            graph.fillAlphas = 1;
            //graph.labelText = valoresAgrupados[j];
            chart.addGraph(graph);
        }
    }

    return {
        graficarBarras: function(datos, nombreDiv, nombreGrafica, valoresAgrupados){
            barras(datos, nombreDiv, nombreGrafica, valoresAgrupados);
            AmCharts.checkEmptyData(chart, valoresAgrupados);
        },
        modificarDatos: function(datos, valores){
            chart.dataProvider = datos;
            var len = chart.graphs.length;
            for(i=0; i<len; i++) {
                var graph = chart.graphs.pop();
                chart.removeGraph(graph);
            }
            nuevosGraficos(valores);
            chart.validateData();
            chart.animateAgain();
            AmCharts.checkEmptyData(chart, valores);
        }
    }
}