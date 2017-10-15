package com.example.hackathon;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.*;
import se.walkercrou.places.GooglePlaces;
import se.walkercrou.places.Param;
import se.walkercrou.places.Place;
import se.walkercrou.places.exception.GooglePlacesException;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class LocationsController {

    private static GooglePlaces client = new GooglePlaces("AIzaSyCwjWWNj0dGJsoYs91DvxGRXOnDahowTUg");

        // make the ajax call to localhost:8080/google-places/ for front end
    @RequestMapping(path = "/google-places/", method = RequestMethod.GET)
    public List<JsonNode> getGoogleSearchResult(@RequestParam("searchterm") final String searchQuery) throws Exception {
        // whatever $searchterm is = will be the searchQuery (spring puts this here)
        // workaround because could not get jackson to parse json. jackson does not understand "place" but understands json node
        // Example of adding extra Parameters to the Places API request https://developers.google.com/places/web-service/search
        // final Param typeParam = new Param("type");
        // typeParam.value("restaurant);
        // placeQueryResults = client.getPlacesByQuery(searchQuery, 10, typeParam);

        List<Place> placeQueryResults = new ArrayList<>();

        try {
            placeQueryResults = client.getPlacesByQuery(searchQuery, 10);
        } catch (GooglePlacesException e) {
            System.out.println("no results found;");
        }

        final List <JsonNode> result = new ArrayList<>();
        final ObjectMapper mapper = new ObjectMapper();

        for (final Place place : placeQueryResults) {
            result.add(mapper.readTree(place.getJson().toString()));
            // we convert place into json object and then convert into a string and
            // we read with objMapper to map to json node which it reads
        }

        return result;
    }

}


