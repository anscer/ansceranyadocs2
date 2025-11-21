---
description: ANSCER ANYA FMS api Introduction
slug: /
sidebar_position: 1
---

# Introduction

ANSCER ANYA FMS offers a range of capabilities you can access through the REST APIs. These REST APIs are designed in accordance with open API standards, which ensure that the platform's features can be integrated with other applications and systems. By utilizing these APIs, you can tap into the platform's capabilities through programmatic methods. Use the APIs to build custom integrations and workflows that leverage the power of the ANSCER ANYA.

## Paths

Every API's URI has the prefix of the version and the resource, such as: `/api/v1/...`

## Authentication

ANSCER ANYA FMS supports API key user authentication:

### API Key

ANSCER ANYA uses API keys to provide secure API authentication and authorization. This enables the usage of ANSCER ANYA APIs without requiring user credentials such as username and password. The API key must be present in individual API requests in order to authenticate and authorize the request. The API Key is passed as part of the HTTP request header and in the following format:

- Key: **x-auth-token**
- Value: API key copied after Login in the ANSCER ANYA platform. E.g. `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzVhYzY0ZmZlYzBjMDUwNDM1NjIzZWUiLCJuYW1lIjoiQXNod2FuZWUgS3VtYXIgR3VwdGEiLCJlbWFpbCI6ImFzaHdhbmVlQGFuc2Nlci5jb20iLCJyb2xlIjoiZGV2ZWxvcGVyIiwiaWF0IjoxNjk2OTI5ODc2LCJleHAiOjE2OTc1MzQ2NzZ9.nmlheIA3JJm_rPy-GMlYLT94fDNWiIpJaRMlRWgZtgE`

## Requests

All requests to ANSCER ANYA's API should be in the `JSON` format. When making requests, ensure that you adhere to the following guidelines:

### HTTP Methods

The ANSCER ANYA API supports the following HTTP methods for making requests:

| HTTP Method | Description                                                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **GET**     | Use the GET method to retrieve information or data from the API. GET requests are typically used for reading or querying data.       |
| **POST**    | Employ the POST method to create new resources or submit data to the API. For example, use POST to create new Maps/Waypoint/Mission. |
| **PUT**     | Utilize the PUT method to update or replace existing resources. PUT requests are used to modify data.                                |
| **DELETE**  | Employ the DELETE method to remove resources from the API. DELETE requests are used to delete records or data.                       |

## Response Codes

The API returns standard HTTP response codes:

| **HTTP Code** | **Description**                                                                                                        |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 200           | Request succeeded. The response payload will vary depending upon the API. Refer to the respective API response schema. |
| 400           | Bad request. The request does not adhere to the API request payload schema.                                            |
| 401           | Missing authorization token or invalid authorization token.                                                            |
| 403           | The API operation is forbidden for the user.                                                                           |
| 404           | The resource or the dependent resource is not found for the operation.                                                 |
| 500           | Operational error. For 500 error code, the server responds with an explicit error code and an error message.           |

### Request Headers

When sending requests to the ANSCER ANYA API, include the following headers to ensure proper communication:

- **Content-Type**: Set the `Content-Type` header to `application/json` to indicate that the request payload is in JSON format.

- **Authorization**: Include an `x-auth-token` header with the appropriate authentication credentials.

### Request Parameters

Requests to ANSCER ANYA's API may require specific parameters to be included in the request payload or query string. The required parameters vary depending on the API endpoint and the nature of the request. Refer to the API documentation for each endpoint to understand the required parameters for specific operations.

### Example Request

Here's an example of a GET request to retrieve information from the API:

```shell
curl --location --request \
 GET 'http://localhost/api/v1/users/me' \
 --header 'Accept: application/json' \
 --header 'x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzVhYzY0ZmZlYzBjMDUwNDM1NjIzZWUiLCJuYW1lIjoiQXNod2FuZWUgS3VtYXIgR3VwdGEiLCJlbWFpbCI6ImFzaHdhbmVlQGFuc2Nlci5jb20iLCJyb2xlIjoiZGV2ZWxvcGVyIiwiaWF0IjoxNjk2OTI5ODc2LCJleHAiOjE2OTc1MzQ2NzZ9.nmlheIA3JJm_rPy-GMlYLT94fDNWiIpJaRMlRWgZtgE'

```

### Example Response

Here's an example of a response of the GET request from the API:

```shell
{
  "isActive": true,
  "_id": "635ac64ffec0c050435623ee",
  "name": "Ashwanee Kumar Gupta",
  "email": "ashwanee@anscer.com",
  "role": "developer",
  "createdBy": null,
  "createdAt": "2022-10-27T17:56:31.223Z",
  "updatedAt": "2022-10-29T18:01:57.727Z",
  "__v": 0,
  "updatedBy": null
}
```

:::info

If you do not provide the Authentication token, you will get the following error:

```shell
{
  "status": 401,
  "message": "Access denied. No token provided."
}
```

:::
