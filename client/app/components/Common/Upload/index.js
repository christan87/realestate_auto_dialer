import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';

//utils
import { modelOutline } from '../../../utils/singleUse';

const ExcelUploader = props => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const {
    uploadContact,
    contactData
  } = props;

  /*
  Due to the asynchronous nature of the FileReader and uploadContact functions. 
  When you call uploadContact(jsonData) inside the reader.onload callback, it 
  initiates an asynchronous process to upload the contact data. However, 
  the contactData property wont be available immediately following it and it 
  may not reflect the updated contactData value because the asynchronous upload process 
  may not have completed yet.
  To fix this, you can use the useEffect hook to monitor changes in the contactData prop
   and log its value whenever it changes. Here's an updated version of your code:
  */
  useEffect(() => {
    if (contactData) {
      console.log('=================>useEffect>Upload>contactData: ', contactData);
    }
  }, [contactData]);

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
        //let str = modelOutline(jsonData[0]);
        uploadContact(jsonData[1]);
        console.log('Uploaded Excel data Size:', jsonData.length);
      };
      reader.readAsArrayBuffer(selectedFile);

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
