package com.example.hackathon;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.client.RestTemplate;
import org.springframework.ui.Model;

import javax.xml.stream.Location;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class LocationsController {



   // public class LocationsController {
        public static String keyword = "";
        static final String API_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?" + keyword + "AIzaSyCwjWWNj0dGJsoYs91DvxGRXOnDahowTUg";
        private String searchTerm;

    //
// api key is as follows: AIzaSyCwjWWNj0dGJsoYs91DvxGRXOnDahowTUg
//
    public String buildUrl(String keyword) {
        return "https://maps.googleapis.com/maps/api/place/nearbysearch/json?" + keyword + "AIzaSyCwjWWNj0dGJsoYs91DvxGRXOnDahowTUg";
    }

    //
    //below is pseudocode but not complete
    //

    @RequestMapping(path = "/get-location/", method = RequestMethod.GET)
    public String getLocation(@RequestBody Locations location) {
        String searchTerm = location.getApiUrl();
       String newUrl = buildUrl(searchTerm);
        return newUrl;
        
    }

    //
    // normal paths below
    //

        @RequestMapping(path = "/", method = RequestMethod.GET)
        public String home() {
            return "home"; //returns homepage path
        }


        // link up Results page
        @RequestMapping(path = "/Results", method = RequestMethod.GET)
        public List<Locations> getPlaces() { // do i need a stream?

            return getPlaces();
        }


        public static List<Locations> getPlaces(String route) {
            RestTemplate restTemplate = new RestTemplate();
            ResultsPage results = restTemplate.getForObject(API_URL, ResultsPage.class);
            return results.getResults();


        }
}


