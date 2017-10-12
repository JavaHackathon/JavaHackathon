package com.example.hackathon;
import javax.xml.stream.Location;
import java.util.List;
public class ResultsPage {

        List<Locations> results;


        public ResultsPage() {

        }


        public List<Locations> getResults() {
            return results;
        }

        public void setResults(List<Locations> results) {
            this.results = results;
        }

        @Override
        public String toString() {
            return "ResultsPage{" +
                    "results=" + results +
                    '}';
        }
    }

