import React from 'react';

function Footer() {
    return (
        <footer className="w-100 py-4 flex-shrink-0 bg-dark">
            <div className="container py-4">
                <div className="row gy-4 gx-5">
                    <div className="col-lg-4 col-md-6">
                        <p className="small text-muted"></p>
                        <p className="text-primary"></p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <p className="small text-muted">Portfolio site for Lewis Sneddon</p>
                        <p className="text-primary">lewiscodes.io</p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <p className="small text-muted"></p>
                        <p className="text-primary"></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
