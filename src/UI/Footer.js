
import React from "react";

export function Footer(){

    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">  
                    {/* Column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Columna 1</h4>
                       <ul className="list-unstyled">
                           <li>Lorem ipsum</li>
                           <li>Lorem ipsum</li>
                           <li>Lorem ipsum</li>
                           <li>Lorem ipsum</li>
                       </ul>
                    </div>
                     {/* Column 2 */}
                     <div className="col-md-3 col-sm-6">
                        <h4>Columna 2</h4>
                       <ul className="list-unstyled">
                           <li>Lorem ipsum</li>
                           <li>Lorem ipsum</li>
                           <li>Lorem ipsum</li>
                           <li>Lorem ipsum</li>
                       </ul>
                    </div> {/* Column 3 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Columna 3</h4>
                       <ul className="list-unstyled">
                           <li>Lorem ipsum</li>
                           <li>Lorem ipsum</li>
                           <li>Lorem ipsum</li>
                           <li>Lorem ipsum</li>
                       </ul>
                    </div> {/* Column 4 */}
                    <div className="col-md-3 col-sm-6">
                        <h4>Columna 4</h4>
                       <ul className="list-unstyled">
                           <li>Lorem ipsum</li>
                           <li>Lorem ipsum</li>
                           <li>Lorem ipsum</li>
                           <li>Lorem ipsum</li>
                       </ul>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear} Nefflix - All Rights Reserved
                </p>
                </div>
            </div>
        </div>
    );

}