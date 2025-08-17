import React, { useState } from 'react';
import { PortfolioItem } from '../';
// import { portfolioData } from './PortfolioData';
import { getBarberPortfolioData, getHairstylistPortfolioData, getnailTechPortfolioData, getMakeupArtistPortfolioData, getEstheticianPortfolioData } from './PortfolioData';


const Portfolio = ({ aboutContent,
    leadType, portfolioImage1, portfolioImage2, portfolioImage3, portfolioImage4, color
}) => {
    const hairstylistPortfolioData = getHairstylistPortfolioData(portfolioImage1, portfolioImage2, portfolioImage3, portfolioImage4)
    const barberPortfolioData = getBarberPortfolioData(portfolioImage1, portfolioImage2, portfolioImage3, portfolioImage4)
    const nailtechPortfolioData = getnailTechPortfolioData(portfolioImage1, portfolioImage2, portfolioImage3, portfolioImage4)
    const makeupPortfolioData = getMakeupArtistPortfolioData(portfolioImage1, portfolioImage2, portfolioImage3, portfolioImage4)
    const estheticianPortfolioData = getEstheticianPortfolioData(portfolioImage1, portfolioImage2, portfolioImage3, portfolioImage4)


    const portfolioData = leadType === 'barber' ? barberPortfolioData : leadType === 'hairstylist' ? hairstylistPortfolioData : leadType === 'nail_tech' ? nailtechPortfolioData : leadType === 'makeup_artist' ? makeupPortfolioData : leadType === 'esthetician' ? estheticianPortfolioData : hairstylistPortfolioData;

    const [selectedFilter, setSelectedFilter] = useState('');

    const filteredProjects = selectedFilter === ''
        ? portfolioData.projects
        : portfolioData.projects.filter((item) => item.category === selectedFilter);

    return (
        <div className="section-box mt-4" id="portfolio">
            <div className="row">
                <div className="col-12 col-md-10 col-xl-8">
                    <h6 className="title-heading mb-3" data-backdrop-text={portfolioData.mainData.title}>{portfolioData.mainData.title}</h6>
                    <h1>{portfolioData.mainData.title2}</h1>
                    <p>{portfolioData.mainData.description}</p>
                </div>
            </div>
            <div className="filter mt-4 mt-lg-5 mb-3">
                <ul>
                    <li
                        onClick={() => setSelectedFilter('')}
                        className={selectedFilter === '' ? 'mixitup-control-active' : ''}
                        // style = {{background: color}}
                    >
                        Show All
                    </li>
                    {portfolioData.navigationList.map((listItem, index) => (
                        <li
                            key={index}
                            onClick={() => setSelectedFilter(listItem.dataFilter.slice(1))}
                            className={selectedFilter === listItem.dataFilter.slice(1) ? 'mixitup-control-active' : ''}
                            style={{border: `2px dashed ${color}`}}
                        >
                            {listItem.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="row g-4 portfolio-grid">
                {filteredProjects.map((item, index) => (
                    <PortfolioItem
                        key={index}
                        imageSrc={item.imageSrc}
                        category={item.category}
                        projectTitle={item.projectTitle}
                        slug={item.slug}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio