import PortfolioImg from '@/public/images/portfolio-img.jpg';
import MainImage from '@/public/images/col-1.jpg';
import axios from 'axios';
// import { getPortfolioImages } from '../../pages';

// Base structure for portfolio data
const basePortfolioData = {
    mainData: {
        title: "Portfolio",
        title2: "My Latest Works",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
    }
};

export const getBarberPortfolioData = (portfolioImage1, portfolioImage2, portfolioImage3, portfolioImage4) => {

    return {
        ...basePortfolioData,
        mainData: {
            ...basePortfolioData.mainData,
            description: "Showcasing the finest barber skills and styles."
        },
        navigationList: [
            {
                title: "Haircut",
                classes: "haircut",
                dataFilter: ".haircut"
            },
            {
                title: "Fade",
                classes: "fade",
                dataFilter: ".fade"
            },
        ],
        projects: [
            {
                projectTitle: 'Classic Cut',
                slug: 'classic-cut',
                description: 'A timeless classic haircut for the modern man.',
                keywords: 'classic, cut, barber',
                category: 'haircut',
                services: 'Haircut, Styling',
                client: 'John Doe',
                duration: '1 hour',
                imageSrc: portfolioImage1,
                mainImage: portfolioImage2,
                categories: [
                    { name: 'Haircut' },
                    { name: 'Styling' },
                ],
                images: [
                    { image: PortfolioImg },
                    { image: MainImage },
                ]
            },
            {
                projectTitle: 'Fade Haircut',
                slug: 'fade-haircut',
                description: 'A modern fade haircut with precision and style.',
                keywords: 'fade, haircut, barber',
                category: 'fade',
                services: 'Fade Cut, Shaving',
                client: 'Jane Smith',
                duration: '45 minutes',
                imageSrc: portfolioImage3,
                mainImage: portfolioImage4,
                categories: [
                    { name: 'Fade Cut' },
                    { name: 'Shaving' }
                ],
                images: [
                    { image: PortfolioImg },
                    { image: MainImage },
                ]
            }

        ]
    }
};

export const getHairstylistPortfolioData = (portfolioImage1, portfolioImage2, portfolioImage3, portfolioImage4) => {

    return {
        ...basePortfolioData,
        mainData: {
            ...basePortfolioData.mainData,
            description: "Highlighting the latest hairstyles and trends."
        },
        navigationList: [
            {
                title: "Braiding",
                classes: "braiding",
                dataFilter: ".braiding"
            },
            {
                title: "Styling",
                classes: "styling",
                dataFilter: ".styling"
            },
        ],
        projects: [
            {
                projectTitle: 'Hair Styling',
                slug: 'modern-hairstyle',
                description: 'A trendy hairstyle perfect for any occasion.',
                keywords: 'modern, hairstyle, stylist',
                category: 'braiding',
                services: 'Haircut, Coloring, Styling',
                client: 'Jane Smith',
                duration: '2 hours',
                imageSrc: portfolioImage1,
                mainImage: portfolioImage2,
                categories: [
                    { name: 'Haircut' },
                    { name: 'Coloring' },
                    { name: 'Styling' }
                ],
                images: [
                    { image: portfolioImage3 },
                    { image: portfolioImage4 },
                ]
            },
            {
                projectTitle: 'Hair Braiding',
                slug: 'modern-hairstyle',
                description: 'A trendy hairstyle perfect for any occasion.',
                keywords: 'modern, hairstyle, stylist',
                category: 'styling',
                services: 'Haircut, Coloring, Styling',
                client: 'Jane Smith',
                duration: '2 hours',
                imageSrc: portfolioImage3,
                mainImage: portfolioImage4,
                categories: [
                    { name: 'Haircut' },
                    { name: 'Coloring' },
                    { name: 'Styling' }
                ],
                images: [
                    { image: PortfolioImg },
                    { image: MainImage },
                ]
            },
        ]
    }
}

export const getnailTechPortfolioData = (portfolioImage1, portfolioImage2, portfolioImage3, portfolioImage4) => {
    return {
        ...basePortfolioData,
        mainData: {
            ...basePortfolioData.mainData,
            description: "Exhibiting beautiful and creative nail designs."
        },
        navigationList: [
            {
                title: "Gel Nails",
                classes: "gel",
                dataFilter: ".gel"
            },
            {
                title: "Acrylics",
                classes: "acrylics",
                dataFilter: ".acrylics"
            },
        ],
        projects: [
            {
                projectTitle: 'Gel Nails',
                slug: 'gel-nails',
                description: 'Elegant and durable gel nails for any occasion.',
                keywords: 'gel, nails, nail technician',
                category: 'gel',
                services: 'Manicure, Gel Nails',
                client: 'Alice Johnson',
                duration: '1.5 hours',
                imageSrc: portfolioImage1,
                mainImage: portfolioImage2,
                categories: [
                    { name: 'Manicure' },
                    { name: 'Gel Nails' }
                ],
                images: [
                    { image: PortfolioImg },
                    { image: MainImage },
                ]
            },
            {
                projectTitle: 'Acrylic Nails',
                slug: 'acrylic-nails',
                description: 'Stunning acrylic nails customized to your style.',
                keywords: 'acrylic, nails, nail technician',
                category: 'acrylic',
                services: 'Manicure, Acrylic Nails',
                client: 'Emily Brown',
                duration: '2 hours',
                imageSrc: portfolioImage3,
                mainImage: portfolioImage4,
                categories: [
                    { name: 'Manicure' },
                    { name: 'Acrylic Nails' }
                ],
                images: [
                    { image: PortfolioImg },
                    { image: MainImage },
                ]
            }
        ]
    }
};

export const getMakeupArtistPortfolioData = (portfolioImage1, portfolioImage2, portfolioImage3, portfolioImage4) => {
    return {
        ...basePortfolioData,
        mainData: {
            ...basePortfolioData.mainData,
            description: "Showcasing stunning makeup artistry for all occasions."
        },
        navigationList: [
            {
                title: "Editorial",
                classes: "editorial",
                dataFilter: ".editorial"
            },
            {
                title: "Bridal",
                classes: "bridal",
                dataFilter: ".bridal"
            },
        ],
        projects: [
            {
                projectTitle: 'Bridal Makeup',
                slug: 'bridal-makeup',
                description: 'Elegant and timeless bridal makeup for your special day.',
                keywords: 'bridal, makeup, makeup artist',
                category: 'first',
                services: 'Bridal Makeup, Consultation',
                client: 'Sarah Williams',
                duration: '2 hours',
                imageSrc: portfolioImage1,
                mainImage: portfolioImage2,
                categories: [
                    { name: 'Bridal Makeup' },
                    { name: 'Consultation' }
                ],
                images: [
                    { image: PortfolioImg },
                    { image: MainImage },
                ]
            },
            {
                projectTitle: 'Editorial Makeup',
                slug: 'editorial-makeup',
                description: 'Creative and bold makeup looks for editorial shoots.',
                keywords: 'editorial, makeup, makeup artist',
                category: 'second',
                services: 'Editorial Makeup, Photoshoot',
                client: 'Lily Adams',
                duration: '3 hours',
                imageSrc: portfolioImage3,
                mainImage: portfolioImage4,
                categories: [
                    { name: 'Editorial Makeup' },
                    { name: 'Photoshoot' }
                ],
                images: [
                    { image: PortfolioImg },
                    { image: MainImage },
                ]
            }
        ]
    };
};

export const getEstheticianPortfolioData = (portfolioImage1, portfolioImage2, portfolioImage3, portfolioImage4) => {
    return {
        ...basePortfolioData,
        mainData: {
            ...basePortfolioData.mainData,
            description: "Providing expert facial treatments and skincare solutions."
        },
        navigationList: [
            {
                title: "Skincare",
                classes: "skincare",
                dataFilter: ".skincare"
            },
            {
                title: "Facial Treatment",
                classes: "facial",
                dataFilter: ".facial"
            },
        ],
        projects: [
            {
                projectTitle: 'Facial Treatment',
                slug: 'facial-treatment',
                description: 'Relaxing and rejuvenating facial treatments for all skin types.',
                keywords: 'facial, treatment, esthetician',
                category: 'first',
                services: 'Facial, Skincare',
                client: 'Jessica Lee',
                duration: '1 hour',
                imageSrc: portfolioImage1,
                mainImage: portfolioImage2,
                categories: [
                    { name: 'Facial' },
                    { name: 'Skincare' }
                ],
                images: [
                    { image: PortfolioImg },
                    { image: MainImage },
                ]
            },
            {
                projectTitle: 'Chemical Peel',
                slug: 'chemical-peel',
                description: 'Advanced chemical peels to improve skin texture and tone.',
                keywords: 'chemical, peel, esthetician',
                category: 'second',
                services: 'Chemical Peel, Skincare',
                client: 'Megan Smith',
                duration: '1.5 hours',
                imageSrc: portfolioImage3,
                mainImage: portfolioImage4,
                categories: [
                    { name: 'Chemical Peel' },
                    { name: 'Skincare' }
                ],
                images: [
                    { image: PortfolioImg },
                    { image: MainImage },
                ]
            }
        ]
    };
};



export const hairstylistData = getHairstylistPortfolioData(PortfolioImg, MainImage, PortfolioImg, MainImage)
export const barberData = getBarberPortfolioData(PortfolioImg, MainImage, PortfolioImg, MainImage)
export const nailsData = getnailTechPortfolioData(PortfolioImg, MainImage, PortfolioImg, MainImage)
export const makeupData = getMakeupArtistPortfolioData(PortfolioImg, MainImage, PortfolioImg, MainImage)
export const estheticianData = getEstheticianPortfolioData(PortfolioImg, MainImage, PortfolioImg, MainImage)



