#!/bin/bash

# Define the endpoint URL
URL="http://localhost:8080/auth/register"

# Define the JSON payload
DATA=$(cat <<EOF
{
    "firstName": "Jeff",
    "lastName": "Monja",
    "email": "jmonja@utec.edu.pe",
    "password": "123456",
    "phone": "999999999"
}
EOF
)

# Send the POST request
curl -X POST $URL \
    -H "Content-Type: application/json" \
    -d "$DATA"
