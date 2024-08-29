import React from 'react';
import catalog from '../../images/catalog.png';
import showroom from '../../images/showroom.png';
import portfolio from '../../images/portfolio.png';
import './SquareServices.css';

const SquareServices = () => {
    return (
        <div className="mt-5">
            <p className="text-center fs-1">
                SQUARE <span className="highlight">SERVICES</span>
            </p>
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card card-rounded">
                        <img src={catalog} className="card-img-top img-fluid" alt="Service 1" />
                        <div className="card-body">
                            <h3 className="card-title">Catalog</h3>
                            <p className="text-muted">Square Furnisys의 카탈로그를 PDF로 제공합니다.</p>
                            <button className="btn btn-primary btn-sm">다운로드</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card card-rounded">
                        <img src={showroom} className="card-img-top img-fluid" alt="Service 2" />
                        <div className="card-body">
                            <h3 className="card-title">Showroom</h3>
                            <p className="text-muted">대표가구를 3D 입체 사진으로 만나보세요</p>
                            <button className="btn btn-primary btn-sm">더 알아보기</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card card-rounded">
                        <img src={portfolio} className="card-img-top img-fluid" alt="Service 3" />
                        <div className="card-body">
                            <h3 className="card-title">Portfolio</h3>
                            <p className="text-muted">Square Furnisys의 포트폴리오</p>
                            <button className="btn btn-primary btn-sm">구경하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SquareServices;