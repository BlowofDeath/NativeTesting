import { AsyncStorage } from "react-native";

export default class AStool {
    static setData(name, data) {
        data = JSON.stringify(data); 
        AsyncStorage.setItem(name, data);
    }
    static removeData(name) {
        AsyncStorage.removeItem(name);
    }
    // static async getData(name) {
    //     let data = await AsyncStorage.getItem('contacts');
    //     if (data !== null) {
    //         console.log(data);
    //         return data;
    //       }
    //     else return null;
    // }

    static getData(name) {
        return AsyncStorage.getItem(name).then(value => { 
            if(value!=null)
            {
                return JSON.parse(value);
            } 
            else console.log('error');
        });
    }
    static async addDataToArray(data,name) {
        let item = await AsyncStorage.getItem(name);
        let value = JSON.parse(item);
        value.push(data)
        this.setData(name, value);
    }
}