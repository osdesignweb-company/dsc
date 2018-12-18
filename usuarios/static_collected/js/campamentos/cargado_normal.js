if(typeof(options)=='undefined'){options=[]}
if(typeof(custom_order)=='undefined'){custom_order=[0, 'asc']}

var columnas = function(dtSettings){
    var api = new $.fn.dataTable.Api(dtSettings);
    var arrayColumnas = api.columns(":last").context[0].aoColumns;
    var tituloUltimaColumna = arrayColumnas[arrayColumnas.length-1].sTitle;
    if(tituloUltimaColumna == 'Opciones') {
        return api.columns(":not(:last)").indexes().toArray();
    }
    return api.columns().indexes().toArray()
}

var table = $('#'+idTabla).DataTable({
    responsive: true,
    order: custom_order,
    dom: 'TRC<"clear">lfrtip',
    tableTools: {
        "sSwfPath": base+"plugins/DataTables/swf/copy_csv_xls_pdf.swf",
        "aButtons": [
            {
                "sExtends": "copy",
                "mColumns": columnas,
                "sButtonClass": "btn",
                "sButtonText": "<i class='fa fa-copy bigger-110 pink'></i> Copiar",
            },
            {
                "sExtends": "xls",
                "sButtonClass": "btn",
                "mColumns": columnas,
                "sButtonText": "<i class='fa fa-file-excel-o bigger-110 green'></i> XLS"
            },
            {
                "sExtends": "pdf",
                "sButtonClass": "btn",
                "mColumns": columnas,
                "sButtonText": "<i class='fa fa-file-pdf-o bigger-110 red'></i> PDF"
            },
            {
                "sExtends": "print",
                "sButtonClass": "btn",
                "mColumns": columnas,
                "sButtonText": "<i class='fa fa-print bigger-110 grey'></i> Imprimir",
            },
        ]
    },
    "columnDefs": options,
});