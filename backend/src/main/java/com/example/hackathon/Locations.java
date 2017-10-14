package com.example.hackathon;

import java.util.List;
import java.util.ArrayList;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.web.client.RestTemplate;
import se.walkercrou.places.GooglePlaces;

@JsonIgnoreProperties(ignoreUnknown = true)
    public class Locations {
        GooglePlaces client = new GooglePlaces("AIzaSyCwjWWNj0dGJsoYs91DvxGRXOnDahowTUg");
        private static String keyword = "";
        private static final String API_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/output?" + keyword + "AIzaSyCwjWWNj0dGJsoYs91DvxGRXOnDahowTUg";
// might have to use radar search to avoid 10x multiplier aka only allowed to make 10 search calls per api key

        private String LocationName;
        @JsonProperty(value = "name")
        private String photos;
        private String vicinity;
        @JsonProperty(value = "opening_hours")
        private String openingHours; //needs annotation? is opening_hours in json
        private String rating;


        //
        // Beans Below
        //

        public Locations() {
        }

        //
        //getters and setters below
        //

        public static String getApiUrl() {
            return API_URL;
        }

        public String getLocationName() {
            return LocationName;
        }

        public void setLocationName(String locationName) {
            LocationName = locationName;
        }

        public String getPhotos() {
            return photos;
        }

        public void setPhotos(String photos) {
            this.photos = photos;
        }

        public String getVicinity() {
            return vicinity;
        }

        public void setVicinity(String vicinity) {
            this.vicinity = vicinity;
        }

        public String getOpeningHours() {
            return openingHours;
        }

        public void setOpeningHours(String openingHours) {
            this.openingHours = openingHours;
        }

        public String getRating() {
            return rating;
        }

        public void setRating(String rating) {
            this.rating = rating;
        }
    }
