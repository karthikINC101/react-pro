import React from "react";
import { BsListUl, BsFillGridFill } from "react-icons/bs";

function Listing() {
  return (
    <section>
      <div className="container">
        <div className="listingHeader">
          <div className="listTitle">
            <div className="listMainTitle">
              <div>Ecommerce Acceories & Fashion item </div>
            </div>
            <div className="listresults">
              <span>About 9,620 results (0.62 seconds)</span>
            </div>
          </div>
          <div className="filters">
            <div className="page_Listing">
              <span>Per Page:</span>
              <select name="productCount" id="productCount">
                <option value="ten">10</option>
                <option value="twenty">20</option>
                <option value="thirty">30</option>
              </select>
            </div>
            <div className="sort_Listing">
              <span>Sort By:</span>
              <select name="Sort" id="Sort">
                <option value="Bestmatch">Bestmatch</option>
                <option value="rated">rated</option>
                <option value="lowTohigh">lowTohigh</option>
                <option value="highTolow">highTolow</option>
              </select>
            </div>
            <div className="view_Listing">
              <span>View:</span>
              <span className="grid">
                <BsFillGridFill />
              </span>
              <span className="list">
                <BsListUl />
              </span>
            </div>
          </div>
        </div>
        <div className="listingMainblock">
          <div className="mainfilterblock">
            <div className="filterList">
              <div className="Product Brand  ftitle">
                <span className="fitertitle">Product Brand</span>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      id="Brand"
                      name="Brand"
                      value="Brand"
                    />
                    <span>Coaster Furniture</span>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="Brand"
                      name="Brand"
                      value="Brand"
                    />
                    <span>Coaster Furniture</span>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      id="Brand"
                      name="Brand"
                      value="Brand"
                    />
                    <span>Coaster Furniture</span>
                  </li>
                </ul>
              </div>
              <div className="Discount Offer ftitle">
                <span className="fitertitle">Discount Offer</span>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      id="Brand"
                      name="Brand"
                      value="Brand"
                    />
                    <span>Coaster Furniture</span>
                  </li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="Rating Item ftitle">
                <span className="fitertitle">Rating Item</span>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      id="Brand"
                      name="Brand"
                      value="Brand"
                    />
                    <span>Coaster Furniture</span>
                  </li>
                  <li></li>
                  <li></li>
                </ul>
              </div>

              <div className="Categories ftitle">
                <span className="fitertitle">Categories</span>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      id="Brand"
                      name="Brand"
                      value="Brand"
                    />
                    <span>Coaster Furniture</span>
                  </li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="Price Filter ftitle">
                <span className="fitertitle">Price Filter</span>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="productblock"></div>
        </div>
      </div>
    </section>
  );
}

export default Listing;
