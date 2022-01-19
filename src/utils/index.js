export const numberComma = (number) => {
    return (number).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').split('.')[0];
};