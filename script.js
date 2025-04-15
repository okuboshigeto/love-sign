const Obniz = require("obniz");
const obniz = new Obniz(obnizPath);

obniz.onconnect = async function () {
    const led = obniz.wired("LED", {
        // 記述
    });
    
};
