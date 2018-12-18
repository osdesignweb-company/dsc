$.getScript(base+"plugins/DataTables/js/jquery.dataTables.min.js",function(){
	$.getScript(base+"plugins/DataTables/js/dataTables.colReorder.js", function() {
        $.getScript(base + "plugins/DataTables/js/dataTables.colVis.js", function () {
            $.getScript(base + "plugins/DataTables/js/dataTables.keyTable.js", function () {
                $.getScript(base + "plugins/DataTables/js/dataTables.tableTools.js", function () {
                    $.getScript(base + "plugins/DataTables/js/dataTables.responsive.js", function () {
                        $.getScript(base + "js/datatables/ajax_cache_pipeline_datatables.js", function () {
                            $(document).ready(function () {

                                // DEFINICIÓN DE LOS BOTONES PARA LA DATATABLE
                                try {
                                    var custom_buttons = custom_buttons;
                                } catch (err) {
                                    var custom_buttons = null;
                                }
                                var final_buttons;
                                if (custom_buttons) {
                                    final_buttons = custom_buttons;
                                } else {
                                    final_buttons = [
                                        {
                                            extend: 'copy',
                                            exportOptions: {
                                                columns: ':not(:last)'
                                            },
                                            ButtonText: 'Copiar'
                                        },
                                        {
                                            extend: 'csv',
                                            exportOptions: {
                                                columns: ':not(:last)'
                                            },
                                            ButtonText: 'CSV'
                                        },
                                        {
                                            extend: 'excel',
                                            exportOptions: {
                                                columns: ':not(:last)'
                                            },
                                            ButtonText: 'Excel'
                                        },
                                        {
                                            extend: 'pdf',
                                            exportOptions: {
                                                columns: ':not(:last)'
                                            },
                                            ButtonText: 'PDF'
                                        },

                                        {
                                            extend: 'print',
                                            customize: function (win) {
                                                $(win.document.body).addClass('white-bg');
                                                $(win.document.body).css('font-size', '10px');

                                                $(win.document.body).find('table')
                                                    .addClass('compact')
                                                    .css('font-size', 'inherit');
                                            },
                                            exportOptions: {
                                                columns: ':not(:last)'
                                            },
                                            text: 'Imprimir'
                                        }
                                    ]
                                }
                                // =========================================================================================================

                                // DEFINICIÓN DE COLUMNAS
                                var columns = column_defs;

                                if (opciones) {
                                    columns.push({
                                        "title": "Opciones",
                                        "targets": columns.length,
                                        "orderable": false,
                                        "searchable": false
                                    });
                                }

                                //==========================================================================================================

                                $("#datatable-coldeportes").DataTable({
                                    language: {
                                        "url": "//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json"
                                    },
                                    responsive: true,
                                    bAutoWidth: false,
                                    pageLength: 10,
                                    columnDefs: columns,
                                    serverSide: true,
                                    processing: true,
                                    ajax: $.fn.dataTable.pipeline({
                                        url: "",
                                        pages: 7 // number of pages to cache
                                    }),
                                    dom: 'TRC<"clear">lfrtip',
                                    tableTools: {
                                        "sSwfPath": base+"plugins/DataTables/swf/copy_csv_xls_pdf.swf",
                                        "aButtons": [
                                            {
                                                "sExtends": "copy",
                                                "mColumns": function(dtSettings){
                                                    var api = new $.fn.dataTable.Api(dtSettings);
                                                    if(opciones == true){
                                                        return api.columns(":not(:last)").indexes().toArray();
                                                    }else{
                                                        return api.columns().indexes().toArray();
                                                    }
                                                },
                                                "sButtonClass": "btn",
                                                "sButtonText": "<i class='fa fa-copy bigger-110 pink'></i> Copiar",
                                            },
                                            {
                                                "sExtends": "xls",
                                                "mColumns": function(dtSettings){
                                                    var api = new $.fn.dataTable.Api(dtSettings);
                                                    if(opciones == true){
                                                        return api.columns(":not(:last)").indexes().toArray();
                                                    }else{
                                                        return api.columns().indexes().toArray();
                                                    }
                                                },
                                                "sButtonClass": "btn",
                                                "sButtonText": "<i class='fa fa-file-excel-o bigger-110 green'></i> XLS"
                                            },
                                            {
                                                "sExtends": "pdf",
                                                "mColumns": function(dtSettings){
                                                    var api = new $.fn.dataTable.Api(dtSettings);
                                                    if(opciones == true){
                                                        return api.columns(":not(:last)").indexes().toArray();
                                                    }else{
                                                        return api.columns().indexes().toArray();
                                                    }
                                                },
                                                "sButtonClass": "btn",
                                                "sButtonText": "<i class='fa fa-file-pdf-o bigger-110 red'></i> PDF"
                                            },
                                            {
                                                "sExtends": "print",
                                                "mColumns": function(dtSettings){
                                                    var api = new $.fn.dataTable.Api(dtSettings);
                                                    if(opciones == true){
                                                        return api.columns(":not(:last)").indexes().toArray();
                                                    }else{
                                                        return api.columns().indexes().toArray();
                                                    }
                                                },
                                                "sButtonClass": "btn",
                                                "sButtonText": "<i class='fa fa-print bigger-110 grey'></i> Imprimir",
                                            },
                                        ],
                                    },

                                });
                            });
                        });
                    });
                });
            });
        });
    });
});