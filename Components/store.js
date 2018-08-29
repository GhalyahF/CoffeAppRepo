import { extendObservable } from "mobx";


class Store {
    constructor() {
        extendObservable(this, 
            {
                list: [],
                currentCoffeShop: {},
                cart: [],
                currentCartFrom: {
                    name: "",
                },
            }
    )
    }
}
export default new Store()