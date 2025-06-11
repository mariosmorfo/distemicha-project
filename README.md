# Weather App

## Overview
This is a responsive web-based weather application built with Angular.
The app allows users to search for real-time weather information for any city, view the details with a dynamic background, and manage a list of favorite cities.

## Features
City Weather Search: Enter any city name to fetch current weather data using WeatherAPI.

Real-time Display: Displays temperature, weather description, and an icon.

Dynamic Background: The background adjusts visually depending on weather conditions and day/night.

Favorites Management: Users can save their favorite cities for quick access and delete them if needed.

Responsive UI: Built with Bootstrap for mobile and desktop responsiveness.

## Project Structure

user-search: Main component handling city search, favorites list, and interaction with the Weather API.

weather-info: Component that displays weather details and allows marking the city as a favorite.

weather-background: Component that visually represents the weather condition using dynamic CSS classes.

geocoding-service.ts: Service layer that converts city names into geographic coordinates (latitude & longitude) using the OpenCage Geocoding API.
 Enables precise weather lookups by location.

weather.service.ts: Service layer handling HTTP communication with the Weather API and mapping the response.

proxy.conf.json: Used to proxy API requests through Angular dev server to avoid CORS issues.


## Installation & Running

git clone <git@github.com:mariosmorfo/distemicha-project.git>
cd distemicha-project
npm install
ng serve