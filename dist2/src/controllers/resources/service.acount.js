"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage_Ref = void 0;
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const service_acount = {
    projectId: "el-rey-33b3b",
    clientEmail: "firebase-adminsdk-6sihz@el-rey-33b3b.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC5ir6xKBoTNEtQ\nIe4mqjRCVczHWW5Bcqa/JdicZujzcwog6tEt9z1kouRNibfuitqTG2XQvVpAHatC\nGGg7yx7eY+eZ4ZxabXV4+t8E9YrCskYH0E+Eg3F8Ggy0hyOFgNQyp7AK9OOUmF2A\nFnNvqpm+kCosbnOXufE5Z1/yC9vEyWga15sVcZ+2eDSiHUHWhcRudtXSK1dreRJ7\nLPaXjplKLz/r0XkKBUyxYL1/QzJ2j0NCf6gt8M0XkVWy8/ETu8JT7N2T3omJdEew\n1xBl7hVZntTxDHealutpoDH1j4/BpM0cUxvv1Fg83AMnm8LMzzvWTKL0iONGw/bU\n80K9P01ZAgMBAAECggEADJAh8FHkTheU3+SkQPb2WeWAW6EpD4JpWvj/jTuEm3NX\nJLpxlniurgE/jyZ7j0nUmfBZeQRRN5Uqsut/J0lOGkXOeUNm+FKACUSHVEkh76Pt\njPrkX3cc+Ie1A4ZA9/mspI9pIpzJShb1AcbDYzS8e0Q8rsx9xDDBbh8bRoLaCx1w\nUvuIwbFP4/XbGK6M1WUtw7AFa/xseIpr8DsX/LdhsjdkUYiPz5RU5P50elS7GSNx\n9MM+Yv2JSBAusmuv/0T27MJ5XMuAhNA3Ak3RiQGs26egAJ3JmjK0qNJnirXV110D\n2W684jQVxQk8l53jpZmfBlrk5sspLZMaf4guBFQi3wKBgQD2rVHfSCZE4FCqoTNv\nCVQiBU79VHfHq57X6PxJy4I9bcXXkpHr/bU4jTKJcNhtSv6J7CI7ZYxEtgc7Sjqj\nOmqFrlqxVZKwwDpRUAzTCVhVVzh1JF8MsY77tmK/h5/i+sdYPEr6v2wrg3aujoJf\nniPQ7uhspwZ0L0HByAQTbRIXFwKBgQDAjexv5cBCVNPp+Ayq2rFShINdYT2ASl9o\nXkRkdu8db0HFwNZ6NEFIXGiAODr6Xjb7Q+R/bpo6ANLzZ5OjHg6uHD7VFj0Amlb2\nQvlhvtGyqfY+jlr3PgxqYGwRiEABZZQ05lgDIss68BXxAST3yu/NUxqG6fYpeZ+R\nO0cwNPeFDwKBgCuyDfOoWycOORvQjETZ+S5BlHlpcgJLk0qZub70rrBk9ou2KeUM\nvwIyeMZB2AScKTSTQIkW9t7hA6zr/DEX0vC1LtmE2AQ5ONtYe70SRbRwS87sT233\nMeXCrAFTa+4QECnAHGQIbofStL48/jkj0SJcf41nlMwV5ucFoDs0seSnAoGAGQDU\n2Nrekj5tng4FpxHqwKpQXInJ8KS3qtfCzcDb39iYk9MshoXOjFTjhPLIRcaCITJ5\ns0prYGjG+7BRbXbztQwZ5JWUqkVgUW308ApVNHv5a7oUedJmzlFi9wvYM9Y63nui\nphWYijiuwLLDWCHT7beC1E4BFvWiELu/zLS0B2UCgYAy1rs810LZQxZ2jJCBZuqB\nZlTFI0LSC152TezkBMx8y+ifXSRu00uMmtyPqtiUE9fb77tfS9ZrwF4N6VNR5Su6\nYTxf5VlEkj0Rsl2XgoFTTSstFLDzvF/C7UZE+Z1T/9SR5vpkAuu/Z1lfqy3yx9xe\nYXeTn9Cp99st9JvF4XgAVw==\n-----END PRIVATE KEY-----\n",
};
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(service_acount),
    databaseURL: "https://el-rey-33b3b-default-rtdb.firebaseio.com/",
    storageBucket: "gs://el-rey-33b3b.appspot.com/",
});
exports.storage_Ref = firebase_admin_1.default.storage().bucket();
