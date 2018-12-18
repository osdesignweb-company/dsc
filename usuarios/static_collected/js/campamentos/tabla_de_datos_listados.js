function TablaDeDatos(identificadorTabla, columnas, datosIniciales){
	var idTabla = "#"+identificadorTabla;
	var todasLasColumnas = columnas;
	var estado = 0;
	var generado = false;
	var datos = datosIniciales;

	function transformarDatos(datos){
		var datosTransformados = [];
        for(i in datos){
			var datos_individual = [];
			for (j in datos[i]){
				datos_individual.push(datos[i][j]);
			}
            datosTransformados.push(datos_individual);
        }
        return datosTransformados;
	}

	function actualizar(){
		var misColumnas = [];
		for(i in todasLasColumnas){
			misColumnas.push(
				{
					"sTitle": todasLasColumnas[i],
					"aTargets": [i]
				}
			);
		}
		setTimeout(function(){
			var tabla = $(idTabla).dataTable( {
				"responsive": true,
	            "dom": 'TRC<"clear">lfrtip',
	            "bDestroy": true,
	            "aaData": datos,
	            "columns": misColumnas,
	            "tableTools": {
		            "sSwfPath": base+"plugins/DataTables/swf/copy_csv_xls_pdf.swf",
		            "aButtons": [
		                {
		                    "sExtends": "copy",
		                    "sButtonClass": "btn",
		                    "sButtonText": "<i class='fa fa-copy bigger-110 pink'></i> Copiar"
		                },
		                {
		                    "sExtends": "xls",
		                    "sButtonClass": "btn",
		                    "sButtonText": "<i class='fa fa-file-excel-o bigger-110 green'></i> XLS"
		                },
		                {
		                    "sExtends": "pdf",
		                    "sButtonClass": "btn",
		                    "sButtonText": "<i class='fa fa-file-pdf-o bigger-110 red'></i> PDF"
		                },
		                {
		                    "sExtends": "print",
		                    "sButtonClass": "btn",
		                    "sButtonText": "<i class='fa fa-print bigger-110 grey'></i> Imprimir"
		                }
		            ]
		        }
			});
		}
		, 500);
	}

	return{
		actualizar: function(){
			actualizar();
		},
		transformarDatos: function(datos){
			transformarDatos(datos);
		},
		setDatos: function(data){
			datos = transformarDatos(data);
		},
		setColumnas: function(cols){
			todasLasColumnas = cols;
		},
		verificarActualizacion: function(){
			generado = false;
			if(estado == 1){
				cambioDiv(estado);
			}
		},
		borrarActualizar : function(){
			if($.fn.DataTable.isDataTable(idTabla)){
				$(idTabla).dataTable().fnDestroy();
				$(idTabla).empty();
			}
			actualizar();
		},
		borrar : function(){
			if($.fn.DataTable.isDataTable(idTabla)){
				$(idTabla).dataTable().fnDestroy();
				$(idTabla).empty();
			}
		}
	}
}