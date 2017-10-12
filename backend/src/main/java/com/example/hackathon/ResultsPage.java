package com.example.hackathon;
import java.util.List;
public class ResultsPage {

        List<Place> results;


        public ResultsPage() {

        }


        public List<Place> getResults() {
            return results;
        }

        public void setResults(List<Place> results) {
            this.results = results;
        }

        @Override
        public String toString() {
            return "ResultsPage{" +
                    "results=" + results +
                    '}';
        }
    }
}
