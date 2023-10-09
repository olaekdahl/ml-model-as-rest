# Publishing ML data using Node/Express

This model predicts whether or not a medical patient will get type II diabetes based on certain measurements. The user will submit an array of objects in JSON format and the service will return an array of predictions; 1=>Yes, they're going to develop diabetes. 2=>No, they're not going to develop diabetes.

## To run
1. `npm install`
1. `npm start`
1. Make a POST request to http://localhost:3000/predict with a body like what you see in [app.json](./app.js). Use Postman/similar or here's a curl command:
```bash
curl -X POST -H "Content-Type: application/json" --data @data.json http://localhost:3000/predict
```
3. The response will be the predictions for each set of patient data objects.

