class TestData {

    static generateUser() {

        const timestamp = Date.now();

        return {

            name: "Nishkarsh",

            email: `nishkarsh${timestamp}@gmail.com`,

            password: "Password@123",

            firstName: "Nishkarsh",

            lastName: "Hublikar",

            company: "OpenAI",

            address1: "123 MG Road",

            address2: "Apartment 101",

            country: "India",

            state: "Maharashtra",

            city: "Mumbai",

            zipcode: "400001",

            mobile: "9876543210"

        };

    }

}

export default TestData;