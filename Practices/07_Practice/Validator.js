class Validator {
    constructor() {
    }

    isPhone(str) {
        let result = str.match(/\+38 \([063|099|098|095|050|067|057]{3}\) [0-9]{2}-[0-9]{2}-[0-9]{3}/);
        if (result) {
            return true;
        }
        return false;
    }

    isDate(str) {
        let result = str.match(/[0-9]{2}.[0-9]{2}.[0-9]{4}/)
        if (result) {
            return true;
        }
        return false;
    }

    isEmail(str) {
        let result = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        return result.test(String(str));
    }
    isDomain(str) {
        let result = /^(?!:\/\/)([a-zA-Z0-9]+\.)?[a-zA-Z0-9][a-zA-Z0-9-]+\.[a-zA-Z]{2,6}?$/i;
        return result.test(String(str));
    }


}

let validator = new Validator();


module.exports = {validator};


