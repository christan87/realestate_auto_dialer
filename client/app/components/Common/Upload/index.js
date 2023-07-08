import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelUploader = props => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const modelOutline = data =>{
    let dataSchema = '{'
    data.map(field =>{
        dataSchema += '\n'
        dataSchema += `${field.replace(/[^a-zA-Z0-9]/g, '')} : {`
        dataSchema +='\n'
        dataSchema += ` type: String,`
        dataSchema +='\n'
        dataSchema += ` trim: true`
        dataSchema +='\n'
        dataSchema += `},`
        dataSchema +='\n'
    })
    dataSchema +='}'
    return dataSchema
  }

  const handleFileUpload = () => {
    if (selectedFile) {
      // Perform your file upload logic here
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Do something with the jsonData, such as sending it to a server or processing it further
        let str = modelOutline(jsonData[0]);
        console.log('Uploaded Excel data:', str);
      };
      reader.readAsArrayBuffer(selectedFile);

      console.log('Uploading file:', selectedFile.name);
      // You can use libraries like XLSX or other server-side processing to handle the Excel file
    } else {
      console.log('No file selected.');
    }
  };

  return (
    <div className='upload'>
      <input type="file" onChange={handleFileChange} accept=".xls, .xlsx" />
      <button className='upload-submit' onClick={handleFileUpload}>Upload</button>
    </div>
  );
}

export default ExcelUploader;
