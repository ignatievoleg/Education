function myBind (context) {
    const self = this;
    return function  () {
        return self.call(context)
    }
}
Function.prototype.myBind = myBind;

let user = {
    firstName: "Вася",
    func: func
};
let obj = {
    firstName: 'Коля',
    func: func,
    myFunc:func.myBind(user)
}

function func() {
    console.log(this.firstName);
}


obj.func();
obj.myFunc();
user.func()