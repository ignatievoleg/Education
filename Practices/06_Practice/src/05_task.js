function myBind (context) {
    const self = this;
    return function  () {
        return self.call(context)
    }
}
Function.prototype.myBind = myBind;

let user = {
    firstName: "Вася",
};
let obj = {
    firstName: 'Коля',
    func: func,
    myFunc:func.myBind(user)
}

function func() {
   return this.firstName;
}


obj.func();
obj.myFunc();


module.exports = {obj,user,myBind,func};