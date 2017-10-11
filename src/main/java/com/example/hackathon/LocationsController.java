package com.example.hackathon;

public interface LocationsController {
    import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.stereotype.Controller;
import org.springframework.web.client.RestTemplate;
import org.springframework.ui.Model;
import java.util.List;
import java.util.stream.Collectors;


//
//
//

    @Controller
    public class LocationsController {
        static final String API_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/output?parametersAIzaSyCwjWWNj0dGJsoYs91DvxGRXOnDahowTUg";
//
// api key is as follows: AIzaSyCwjWWNj0dGJsoYs91DvxGRXOnDahowTUg
//

        @RequestMapping(path = "/", method = RequestMethod.GET)
        public String home() {
            return "home"; //returns homepage path
        }


        // link up medium-popular-long-name.html
        @RequestMapping(path = "/Results", method = RequestMethod.GET)
        public String mediumPop(Model model) {
            List<Place> movies = getPlaces("/medium-popular-long-name").stream()

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
