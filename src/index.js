import axios from "axios";
import {load} from 'cheerio';

const BVC_URL = "http://www.bcv.org.ve/";

function getBvcDolar() {
    const { data } = await axios.get(BVC_URL);
    const $ = load(data);
    const dolarAttr = $("#dolar");

    return number(dolarAttr.find("strong").html());
}

export default getBvcDolar;