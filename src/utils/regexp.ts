// 航班編號 英文字母大小寫和數字
export const flightNumberPattern = /^[a-zA-Z0-9]{1,10}$/;

// 姓名 英文字母大小寫和空格
export const namePattern = /^[a-zA-Z\s]{1,20}$/;

// 電話 數字
export const phonePattern = /^[0-9]{1,10}$/;

// 身份證字號/護照編號 英文字母大小寫和數字
export const idPassportNumberPattern = /^[a-zA-Z0-9]{1,20}$/;