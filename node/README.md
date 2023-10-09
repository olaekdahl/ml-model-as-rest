# Publishing ML data using Node/Express

## To run
1. `npm install`
1. `npm start`
1. Make a POST request to http://localhost:3000/predict with a body like what you see in [app.json](./app.js). Use Postman/similar or here's a curl command:
```bash
curl -X POST -H "Content-Type: application/json" --data @data.json http://localhost:3000/predict
```
1. The response will be the predictions for each set of patient data objects.

