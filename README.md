# fullstack-assessment
Angular and .Net apps

This Repo Contains 2 Folders:
  1. dog-album
  2. WideWorldImportersApi
     
each Folder contains an application, dog-album FE app and WideWorldImportersApi BE and SQL app.

# DogAlbum

  # Setup and Configuration
  1. Navigate to the dog-album directory:
     in terminal/cmd:
       cd dog-album
     
  3. Install dependencies:
      npm install
     
  5. Start the development server:
    ng serve
  
  The application will be accessible at http://localhost:4200.
------------------------------------------------------------------------------------------------------------
# WideWorldImportersApi

  # Setup and Configuration
  1. SQL Server Setup
    Ensure the WideWorldImporters database is restored and accessible on your SQL Server instance.
    Use the following connection string in appsettings.json:
      {
        "ConnectionStrings": {
           "DefaultConnection":"Server=localhost,1433;
           Database=WideWorldImporters;
           UserId=SA;Password=YourOwnPassword;
           TrustServerCertificate=True;"
        }
      }
     
    Update Server, User Id, and Password if your SQL Server configuration is different.
    
  2. Run the API
    Navigate to the WideWorldImportersAPI directory:
      cd WideWorldImportersAPI
     
    Restore dependencies:
      dotnet restore
      
    Run the application:
      dotnet run
      
  The API will be accessible at https://localhost:5001 or http://localhost:5000.
  
  Access Swagger UI for API documentation and testing:
    https://localhost:5001/swagger
    API Endpoints
    GET /customers: Retrieve all customers.
    GET /customers/{id}: Retrieve a customer by ID.
    POST /customers: Add a new customer.
    PUT /customers/{id}: Update an existing customer.
    DELETE /customers/{id}: Delete a customer by ID.

