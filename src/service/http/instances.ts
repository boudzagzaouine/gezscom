import { Constants } from "config/Constants";
import { HttpService } from "./http";

export const http = new HttpService();
export const api = new HttpService(Constants.API_PREFIX);

api.useCredentials(
  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aCI6IlJPTEVfQVVUSCIsIl9pXyI6MSwiX3NfaV8iOjY2MDkyNjMsIl9mX2RfIjoiUE9TVE1BTi0yMCIsImEiOjE2MTk0MzU0MzY0MTJ9.QL80nkxymL9hfHS5CtKgdqlck-NnpczKoyIdETBZnHqjwyPrYYeRBT6C_1JOMDsXxWTAUcNfYI69kEdJPqqHQg"
);
