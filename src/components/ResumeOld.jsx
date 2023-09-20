
import {Document, Page } from 'react-pdf';

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Resume() {

  return (
    <div style={{textAlign:'center'}}>
      <Document file="resume-portfolio.pdf">
        <Page pageNumber={1}/>
      </Document>
    </div>
  );
}