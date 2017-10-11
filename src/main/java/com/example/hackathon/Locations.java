package com.example.hackathon;

import java.util.List;
import java.util.ArrayList;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.web.client.RestTemplate;

    @JsonIgnoreProperties(ignoreUnknown = true)
    public class Locations {
        static final String API_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/output?parametersAIzaSyCwjWWNj0dGJsoYs91DvxGRXOnDahowTUg";


        private String title;
        @JsonProperty(value = "poster_path")

        private String name
        private String overView;
        private double popularity;


        //
        // Beans Below
        //

        public Movie() {

        }
}
