import React from 'react';             // Importing React to create a component
import '../Styles/search.css';         // Importing css file for external styles
import axios from 'axios';             // Importing axios to make API Calls within the component
import queryString from 'query-string';// Importing query-string package to parse the values from URL's query string 

class Filter extends React.Component {
    render() {
        return (
            <div>
                <div class="heading-search">Breakfast Places in Mumbai</div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-4 col-md-4 col-lg-4 filter-options">
                            <div class="filter-heading">Filters / Sort</div>
                            <span class="glyphicon glyphicon-chevron-down toggle-span" data-toggle="collapse"
                                data-target="#demo"></span>
                            <div id="demo" class="collapse show">
                                <div class="Select-Location">Select Location</div>
                                <select class="Rectangle-2236">
                                    <option>Select</option>
                                    <option>Delhi</option>
                                </select>
                                <div class="Cuisine">Cuisine</div>
                                <div>
                                    <input type="checkbox" />
                                    <span class="checkbox-items">North Indian</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <span class="checkbox-items">South Indian</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <span class="checkbox-items">Chineese</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <span class="checkbox-items">Fast Food</span>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <span class="checkbox-items">Street Food</span>
                                </div>
                                <div class="Cuisine">Cost For Two</div>
                                <div>
                                    <input type="radio" />
                                    <span class="checkbox-items">Less than &#8377; 500</span>
                                </div>
                                <div>
                                    <input type="radio" />
                                    <span class="checkbox-items">&#8377; 500 to &#8377; 1000</span>
                                </div>
                                <div>
                                    <input type="radio" />
                                    <span class="checkbox-items">&#8377; 1000 to &#8377; 1500</span>
                                </div>
                                <div>
                                    <input type="radio" />
                                    <span class="checkbox-items">&#8377; 1500 to &#8377; 2000</span>
                                </div>
                                <div>
                                    <input type="radio" />
                                    <span class="checkbox-items">&#8377; 2000 +</span>
                                </div>
                                <div class="Cuisine">Sort</div>
                                <div>
                                    <input type="radio" />
                                    <span class="checkbox-items">Price low to high</span>
                                </div>
                                <div>
                                    <input type="radio" />
                                    <span class="checkbox-items">Price high to low</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-8 col-md-8 col-lg-8">

                            <div class="Item">
                                <div>
                                    <div class="small-item vertical">
                                        <img class="img" src="../Assets/breakfast.jpg" />
                                    </div>
                                    <div class="big-item">
                                        <div class="rest-name">The Big Chill Cakery</div>
                                        <div class="rest-location">FORT</div>
                                        <div class="rest-address">Shop 1, Plot D, Complex, Chincholi</div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div class="margin-left">
                                        <div class="Bakery">CUISINES : Bakery</div>
                                        <div class="Bakery">COST FOR TWO : &#8377; 700 </div>
                                    </div>
                                </div>
                            </div>

                             <div class="Item">
                                <div>
                                    <div class="small-item vertical">
                                        <img class="img" src="../Assets/lunch.jpg" />
                                    </div>
                                    <div class="big-item">
                                        <div class="rest-name">The Big Chill Cakery</div>
                                        <div class="rest-location">FORT</div>
                                        <div class="rest-address">Shop 1, Plot D, Complex, Chincholi</div>
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div class="margin-left">
                                        <div class="Bakery">CUISINES : Bakery</div>
                                        <div class="Bakery">COST FOR TWO : &#8377; 700 </div>
                                    </div>
                                </div>
                            </div> 
                           
    

                            <div class="pagination">
                                <a href="#">&laquo;</a>
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">4</a>
                                <a href="#">5</a>
                                <a href="#">6</a>
                                <a href="#">&raquo;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter;