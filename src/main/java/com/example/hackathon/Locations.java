package com.example.hackathon;

import java.util.List;
import java.util.ArrayList;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.web.client.RestTemplate;

    @JsonIgnoreProperties(ignoreUnknown = true)
    public class Locations {
        static final String API_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/output?parametersAIzaSyCwjWWNj0dGJsoYs91DvxGRXOnDahowTUg";
// might have to use radar search to avoid 10x multiplier aka only allowed to make 10 search calls per api key

        private String LocationName;
        @JsonProperty(value = "name")
        private String photos;
        private String vicinity;
        private String openingHours; //needs annotation? is opening_hours in json
        @JsonProperty(value = "opening_hours")
        private String rating;


        //
        // Beans Below
        //

        public Location() {

        }
}
