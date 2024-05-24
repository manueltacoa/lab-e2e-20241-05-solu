#!/bin/bash

# Realizar la solicitud al endpoint de prueba
response=$(curl -X GET http://localhost:8080/auth/test/connection)

# Imprimir la respuesta
echo "Response: $response"
