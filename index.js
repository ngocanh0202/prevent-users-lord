function handleFile() {
    var fileInput = document.getElementById('file');
    console.log(fileInput.files);
    
    if (fileInput.files.length === 0) {
        console.log('No file selected');
        return;
    }
    var file = fileInput.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, {type: 'array'});
        
        var firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        var jsonData = XLSX.utils.sheet_to_json(firstSheet, {header: 1});
        
        if(jsonData.length > 0){
            var table = document.createElement("table");
            var header = table.createTHead();
            header.insertRow(0);
            for(var i = 0; i < jsonData[0].length; i++){
                var cell = document.createElement("th");
                cell.textContent = jsonData[0][i];
                header.rows[0].appendChild(cell);
            }
            
            for(var i = 1; i < jsonData.length; i++){
                var row = document.createElement("tr");
                for(var j = 0; j < jsonData[i].length; j++){
                    var cell = document.createElement("td");
                    cell.textContent = jsonData[i][j];
                    row.appendChild(cell);
                }
                table.appendChild(row);
            }
            document.getElementById('output').appendChild(table);
        }
    };
    reader.readAsArrayBuffer(file);
}