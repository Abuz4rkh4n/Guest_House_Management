import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import generatePDF from "react-to-pdf";

const Invoice = ({ invoiceData }) => {
  const componentRef = useRef();
  const numAmount = parseFloat(invoiceData.total_amount);
  const numItems = parseFloat(invoiceData.items_price);
  const sum = numAmount + numItems;
  const totalAmount = sum.toString();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        className=" bg-white flex flex-col w-[500px] p-5 rounded-md"
        ref={componentRef}
      >
        <div className=" flex flex-col items-end">
          <h1 className=" text-[3rem]">INVOICE</h1>
          <p>#1032</p>
        </div>
        <div>
          <div className="flex">
            <p className=" font-semibold mr-2">Guest Name:</p>
            <p>{invoiceData.name}</p>
          </div>
          <div className="flex">
            <p className=" font-semibold mr-2">CNIC: </p>
            <p>{invoiceData.cnic_id}</p>
          </div>
          <div className=" flex">
            <p className=" font-semibold mr-2">Phone no: </p>
            <p>030012345678</p>
          </div>
          <div className="flex">
            <p className=" font-semibold mr-2">Email: </p>
            <p>Guest@email.com</p>
          </div>
          <div className="flex">
            <p className=" font-semibold mr-2">Check In:</p>
            <p>{invoiceData.check_in_date}</p>
          </div>
          <div className="flex">
            <p className=" font-semibold mr-2">Check Out:</p>
            <p>{invoiceData.check_out_date}</p>
          </div>
        </div>
        <div>
          <table className=" table-auto border border-collapse border-black w-[400px] my-4">
            <thead className="border border-black">
              <tr>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody className="border border-black">
              <tr>
                <td>Room price</td>
                <td>{invoiceData.total_amount}</td>
              </tr>
              <tr>
                <td>Items price</td>
                <td>{invoiceData.items_price}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>{totalAmount}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <p>Thank you for your business.</p>
      </div>
      <div>
        <button
          onClick={handlePrint}
          className="bg-button-yellow rounded-md p-1 mt-8 mr-4 text-center font-Outfit w-[130px] h-[40px] text-lg"
        >
          Print
        </button>
        <button
          onClick={() =>
            generatePDF(componentRef, { filename: `${invoiceData.name}` })
          }
          className="bg-button-purple rounded-md p-1 mt-8 text-center font-Outfit w-[130px] h-[40px] text-lg "
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default Invoice;
