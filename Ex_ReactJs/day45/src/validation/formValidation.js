
import { ruleConfig } from "../config/ruleConfig";
export const formValidate = (value) => {
    const numberDigits = ruleConfig.MAX_NUMBER.toString().length;
    const pattern = `^\\d{0,${numberDigits}}?$`;
    const regex = new RegExp(pattern)
    // console.log(regex);
    var check = regex.test(value);
    return check;
}

