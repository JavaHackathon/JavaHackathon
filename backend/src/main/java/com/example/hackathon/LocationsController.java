package com.example.hackathon;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.ui.Model;
import java.util.List;
import java.util.stream.Collectors;

public interface LocationsController {
    @CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
    @RestController // or does this need to be a regular @controller?

    public class LocationsController {
        static final String API_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/output?parametersAIzaSyCwjWWNj0dGJsoYs91DvxGRXOnDahowTUg";
//
// api key is as follows: AIzaSyCwjWWNj0dGJsoYs91DvxGRXOnDahowTUg
//

        @RequestMapping(path = "/", method = RequestMethod.GET)
        public String home() {
            return "home"; //returns homepage path
        }


        // link up Results page
        @RequestMapping(path = "/Results", method = RequestMethod.GET)
        public String mediumPop(Model model) { // do i need a stream?
            List<Place> places = getPlaces("/Results).stream()
                    // filter by name
                    //filter by rating
                    //filter by price level

            model.addAttribute("places", places);
            //above dictates the template
            return "Results";
        }


        public static List<Place> getPlaces(String route) {
            RestTemplate restTemplate = new RestTemplate();
            ResultsPage results = restTemplate.getForObject(API_URL, ResultsPage.class);
            return results.getResults();


        }}

}
