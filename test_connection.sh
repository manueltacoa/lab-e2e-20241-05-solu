#!/bin/bash

# Variables de conexión
DB_HOST="localhost"
DB_PORT="5432"
DB_NAME="postgres"
DB_USER="postgres"
DB_PASSWORD="mypassword"

# Comando para probar la conexión
PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -U $DB_USER -d $DB_NAME -c "SELECT 1" >/dev/null 2>&1

if [ $? -eq 0 ]; then
  echo "Conexión a PostgreSQL exitosa"
  exit 0
else
  echo "Error de conexión a PostgreSQL"
  exit 1
fi
