import React from 'react'
import ReactPDF from '@react-pdf/renderer';
import {MyDocument} from "./MyDocument";
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';

export class PdfPackage extends React.Component {

    render() {
        return (
            <div>
                <h3>PdfPackage:</h3>
                {/*ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);*/}
                <PDFViewer width={1000} height={1000}>
                    <MyDocument />
                </PDFViewer>
            </div>
        )}


}