import FormattedNumber from "./FormattedNumber";

export default function FormattedSumTotal(data: any, value: any, range: any) {
  const sumOfTotalSalesVatInclusive = Array.from(
    { length: range },
    (_, index) => index
  ).reduce((sum, index) => {
    return sum + Number(data[index + 1]?.[value] || 0);
  }, 0);

  return FormattedNumber(sumOfTotalSalesVatInclusive);
}
