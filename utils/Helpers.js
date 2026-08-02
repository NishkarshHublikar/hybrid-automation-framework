export default class Helpers {

    static generateEmail() {
        return `user${Date.now()}@gmail.com`;
    }

    static randomNumber() {
        return Math.floor(Math.random() * 100000);
    }

}