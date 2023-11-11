
import { ruleConfig } from "../config/ruleConfig";
export const create = () => {
    return Math.floor(Math.random() * (ruleConfig.MAX_NUMBER - ruleConfig.MIN_NUMBER + 1)) + ruleConfig.MIN_NUMBER;
}

