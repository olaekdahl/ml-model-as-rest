# Publishing ML data using Python exclusive with Flask

This model is using the famous Iris Flower Data which is installed along with scikit-learn. It takes in a list of floats which represent the measurement of petals on an iris plant. It returns the predicted variety of iris.

## To run
1. `python app.py`
1. Make a POST request to http://localhost:3000/predict with a body like `[5.1, 3.5, 1.4, 0.2]`. Use Postman/similar or here's a curl command:
```bash
curl -X POST -H "Content-Type: application/json" -d '[5.1, 3.5, 1.4, 0.2]' http://localhost:5000/predict
```
3. The response will be the prediction for this plant.
```json
{
  "predicted_class": "setosa"
}
```

