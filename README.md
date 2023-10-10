# ML Model as REST
Two examples of publishing machine learning (ML) data using
- [Node/Express](/node/)
- [Flask](/flask/)

One example of using a React component to talk to the diabetes REST API.
- [React](/react/diabetes-client/)

The ML data was generated using Python data engineering/data science tools so it needs to be published by running Python scripts.

Approach #1: Publish a Node/Express service that forks and runs a Python script from JavaScript using python-shell.

Approach #2: Publish the service using Python exclusively with the Flask library.

