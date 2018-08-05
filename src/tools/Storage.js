import { AsyncStorage } from "react-native";

export default class Storage {
    static setData(name, data) {
        data = JSON.stringify(data); 
        AsyncStorage.setItem(name, data);
    }
    static async getData(name) {
        let data = await AsyncStorage.getItem(name);
        let value = JSON.parse(data);
        return value;
    }
    static async addDataToArray(data,name) {
        let item = await AsyncStorage.getItem(name);
        let value = JSON.parse(item);
        value.push(data)
        this.setData(name, value);
    }
}