/**
 * Created by yalilebs on 14/09/16.
 */
$.getScript(base+"plugins/amcharts/amcharts.js", function(){
    $.getScript(base+"plugins/amcharts/themes/light.js", function() {
        $.getScript(base + "plugins/amcharts/serial.js", function () {
            $.getScript(base + "plugins/amcharts/plugins/responsive/responsive.min.js", function() {
                $.getScript(base + "plugins/amcharts/exporting/amexport.js", function () {
                    $.getScript(base + "plugins/amcharts/exporting/canvg.js", function () {
                        $.getScript(base + "plugins/amcharts/exporting/rgbcolor.js", function () {
                            $.getScript(base + "plugins/amcharts/exporting/filesaver.js", function () {
                                $.getScript(base + "plugins/amcharts/barras_agrupadas.js", function () {
                                    $.getScript(base + "js/randomColor.js", function () {
                                        if (typeof Reporte == 'undefined') {
                                            Reporte = BarrasAgrupadas();
                                        }
                                        function graficar(nombre){
                                            Reporte.graficarBarras(datos, nombre, idChart, valoresAgrupados);

                                        }
                                        $(document).ready(function(){
                                            graficar(nombreReporte);
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});