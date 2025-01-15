"use client";
import { PrintPageProps } from "@/types/types";

const Size2Sales: React.FC<PrintPageProps> = ({ data }) => {
  const internalIdColumnIndex = 0;
  const mainLineName = 1;
  const billingAddress = 2;
  const billingAddress1 = 3;
  const billingAddress2 = 4;
  const billingAddress3 = 5;
  const taxNumber = 6;
  const date = 7;
  const terms = 8;
  const item = 9;
  const quantity = 10;
  const units = 11;
  const units1 = 12;
  const itemRate = 13;
  const itemRate1 = 14;
  const amount = 15;
  const totalSales = 16;
  const amountTax = 17;
  const netTax = 18;
  const transactionTotal = 19;

  return (
    <div className="text-xs h-[774.8px] w-[604.72px] border">
      <div className="flex mt-[120.94px]">
        <p className="w-[389.29px] pl-[94.488px]">
          Silvestre Lumapas Allan Justine Mascarinas
        </p>
        <p className="w-[215.43px] pl-[52.91px] h-[20.3px]">{data[date]?.[7]}</p>
      </div>
      <div className="flex">
        <p className="w-[389.29px] pl-[94.488px] h-[20.3px]">Tin No data</p>
        <p className="w-[215.43px] pl-[52.91px] h-[20.3px]">Terms</p>
      </div>
      <div className="flex h-[32px]">
        <p className="w-[604.72px] pl-[94.488px]">Address</p>
      </div>
      <div className="flex">
        <p className="w-[604.72px] pl-[109.6px]">Business style</p>
      </div>
      <div className="mx-[26.4px] mt-[18.9px] h-[321.2598px] border">
        <table className="border-collapse w-full h-auto">
          <tbody>
            {data.slice(1, 11).map((row, index) => (
              <tr key={index} className="text-[10px] text-center">
                <td className="w-[75.59px] h-[20.3px]">{row[10]}</td>
                <td className="w-[56.69px] h-[20.3px]">{row[11]}</td>
                <td
                  className={`w-[238.11px] h-[20.3px] ${
                    row[9]?.length > 41 ? "text-[7px]" : ""
                  }`}
                >
                  {row[9]}
                </td>
                <td className="w-[79.37px] h-[20.3px]">{row[13]}</td>
                <td className="w-[102.047px] h-[20.3px]">{row[15]}</td>
              </tr>
            ))}
            <tr className="text-[10px] text-center">
              <td className="w-[75.59px] h-[20.3px]">1</td>
              <td className="w-[56.69px] h-[20.3px]">Unit</td>
              <td className={`w-[238.11px] h-[20.3px]`}>
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[79.37px] h-[20.3px]">1000</td>
              <td className="w-[102.047px] h-[20.3px]">1000</td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[75.59px] h-[20.3px]">1</td>
              <td className="w-[56.69px] h-[20.3px]">Unit</td>
              <td className={`w-[238.11px] h-[20.3px]`}>
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[79.37px] h-[20.3px]">1000</td>
              <td className="w-[102.047px] h-[20.3px]">1000</td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[75.59px] h-[20.3px]">1</td>
              <td className="w-[56.69px] h-[20.3px]">Unit</td>
              <td className={`w-[238.11px] h-[20.3px]`}>
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[79.37px] h-[20.3px]">1000</td>
              <td className="w-[102.047px] h-[20.3px]">1000</td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[75.59px] h-[20.3px]">1</td>
              <td className="w-[56.69px] h-[20.3px]">Unit</td>
              <td className={`w-[238.11px] h-[20.3px]`}>
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[79.37px] h-[20.3px]">1000</td>
              <td className="w-[102.047px] h-[20.3px]">1000</td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[75.59px] h-[20.3px]">1</td>
              <td className="w-[56.69px] h-[20.3px]">Unit</td>
              <td className={`w-[238.11px] h-[20.3px]`}>
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[79.37px] h-[20.3px]">1000</td>
              <td className="w-[102.047px] h-[20.3px]">1000</td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[75.59px] h-[20.3px]">1</td>
              <td className="w-[56.69px] h-[20.3px]">Unit</td>
              <td className={`w-[238.11px] h-[20.3px]`}>
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[79.37px] h-[20.3px]">1000</td>
              <td className="w-[102.047px] h-[20.3px]">1000</td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[75.59px] h-[20.3px]">1</td>
              <td className="w-[56.69px] h-[20.3px]">Unit</td>
              <td className={`w-[238.11px] h-[20.3px]`}>
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[79.37px] h-[20.3px]">1000</td>
              <td className="w-[102.047px] h-[20.3px]">1000</td>
            </tr>
            <tr className="text-[10px] text-center">
              <td className="w-[75.59px] h-[20.3px]">1</td>
              <td className="w-[56.69px] h-[20.3px]">Unit</td>
              <td className={`w-[238.11px] h-[20.3px]`}>
                Avenis UN125NE Pearl Mirage White
              </td>
              <td className="w-[79.37px] h-[20.3px]">1000</td>
              <td className="w-[102.047px] h-[20.3px]">1000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[26.4px] h-[143.622px] border">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-[10px]">
              <td className="h-[20.3px] w-[132.28px]"></td>
              <td className="h-[20.3px] w-[185.2px]">PHP0.00</td>
              <td className="h-[20.3px] w-[132.28px]"></td>
              <td className="h-[20.3px] w-[102.047px] text-center">PHP142,857.14</td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[20.3px] w-[132.28px]"></td>
              <td className="h-[20.3px] w-[185.2px]">PHP0.00</td>
              <td className="h-[20.3px] w-[132.28px]"></td>
              <td className="h-[20.3px] w-[102.047px] text-center">17,142.86</td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[20.3px] w-[132.28px]"></td>
              <td className="h-[20.3px] w-[185.2px]">PHP0.00</td>
              <td className="h-[20.3px] w-[132.28px]"></td>
              <td className="h-[20.3px] w-[102.047px] text-center"></td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[20.3px] w-[132.28px]"></td>
              <td className="h-[20.3px] w-[185.2px]">PHP17,142.86</td>
              <td className="h-[20.3px] w-[132.28px]"></td>
              <td className="h-[20.3px] w-[102.047px] text-center"></td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[20.3px] w-[132.28px]"></td>
              <td className="h-[20.3px] w-[185.2px]"></td>
              <td className="h-[20.3px] w-[132.28px]"></td>
              <td className="h-[20.3px] w-[102.047px] text-center">PHP160,000.00</td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[20.3px] w-[132.28px]"></td>
              <td className="h-[20.3px] w-[185.2px]"></td>
              <td className="h-[20.3px] w-[132.28px]"></td>
              <td className="h-[20.3px] w-[102.047px] text-center">PHP160,000.00</td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[20.3px] w-[132.28px]"></td>
              <td className="h-[20.3px] w-[185.2px]"></td>
              <td className="h-[20.3px] w-[132.28px]"></td>
              <td className="h-[20.3px] w-[102.047px] text-center">PHP160,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Size2Sales;
