import React from "react"
import axios from 'axios'
import Head from "next/head"
import { mainData } from '../lib/data'
import data from '../lib/data.json';
import { BackgroundImages, Header, Navigation, About, Portfolio, Services, Testimonial, Pricing, Connect } from '@/components'


export const getServerSideProps = async (context) => {

    const { name } = context.params;

    const getDetails = async (name) => {

        try {
            const response = await axios.get(
                `https://leslieaine.github.io/sample-data/${encodeURIComponent(`${name}`)}.json`
                );

            if (response.status == 200 && !!response.data) {
                console.log(response.data.docs[0])
                return response.data.docs?.[0];
            }
        } catch (error) {
            console.log(error)
        }

        return null;
    }


    const demoData = await getDetails(name);

    if (!demoData) {
        return {
            props: { notFound: true }, 
        };
    }
        const leadType = demoData.lead_type;
        const portfolioImage1 = demoData.portfolio_image_1;
        const portfolioImage2 = demoData.portfolio_image_2;
        const portfolioImage3 = demoData.portfolio_image_3;
        const portfolioImage4 = demoData.portfolio_image_4;
        const businessName = demoData.business_name;
        const hairType = demoData.hair_type
        const firstName = demoData.first_name
        const email = demoData.email
        const phone = demoData.phone


        let mainTitle = '';
        let aboutContent = '';
        let mainBackgrdImage = '';
        let color = '';
        let jobTitle = '';
        let employees = []
        let services = [];
        let reviews = [];
        let skills = [];

        if (leadType === 'hairstylist' && hairType === 'black_hair') {
            mainTitle = data.hairstylist.mainTitle;
            color = data.hairstylist.color;
            aboutContent = data.hairstylist.aboutContent;
            mainBackgrdImage = data.hairstylist.mainBackgrdImageBlack;
            employees = data.hairstylist.blackHairEmployees
            services = data.hairstylist.services;
            reviews = data.hairstylist.reviews;
            jobTitle = data.hairstylist.jobTitle;
            skills = data.hairstylist.skills;
        } else if (leadType === 'hairstylist' && hairType === 'white_hair') {
            mainTitle = data.hairstylist.mainTitle;
            color = data.hairstylist.color;
            aboutContent = data.hairstylist.aboutContent;
            mainBackgrdImage = data.hairstylist.mainBackgrdImageWhite;
            employees = data.hairstylist.whiteHairEmployees;
            services = data.hairstylist.services;
            reviews = data.hairstylist.reviews;
            jobTitle = data.hairstylist.jobTitle;
            skills = data.hairstylist.skills;
        }else if (leadType === 'barber' && hairType === 'black_hair') {
            mainTitle = data.barber.mainTitle;
            color = data.barber.color;
            aboutContent = data.barber.aboutContent;
            mainBackgrdImage = data.barber.mainBackgrdImageWhite;
            employees = data.barber.blackHairEmployees;
            services = data.barber.services;
            reviews = data.barber.reviews;
            jobTitle = data.barber.jobTitle;
            skills = data.barber.skills;
        }else if (leadType === 'barber' && hairType === 'white_hair') {
            mainTitle = data.barber.mainTitle;
            color = data.barber.color;
            aboutContent = data.barber.aboutContent;
            mainBackgrdImage = data.barber.mainBackgrdImageWhite;
            employees = data.barber.whiteHairEmployees;
            services = data.barber.services;
            reviews = data.barber.reviews;
            jobTitle = data.barber.jobTitle;
            skills = data.barber.skills;
        }else if (leadType === 'esthetician') {
            mainTitle = data.esthetician.mainTitle;
            color = data.esthetician.color;
            aboutContent = data.esthetician.aboutContent;
            mainBackgrdImage = data.esthetician.mainBackgrdImage;
            employees = data.esthetician.employees
            services = data.esthetician.services;
            reviews = data.esthetician.reviews;
            jobTitle = data.esthetician.jobTitle;
            skills = data.esthetician.skills;
        }else if (leadType === 'makeup_artist') {
            mainTitle = data.makeup.mainTitle;
            color = data.makeup.color;
            aboutContent = data.makeup.aboutContent;
            mainBackgrdImage = data.makeup.mainBackgrdImage;
            employees = data.makeup.employees
            services = data.makeup.services;
            reviews = data.makeup.reviews;
            jobTitle = data.makeup.jobTitle;
            skills = data.makeup.skills;
        }else if (leadType === 'nail_tech') {
            mainTitle = data.nails.mainTitle;
            color = data.nails.color;
            aboutContent = data.nails.aboutContent;
            mainBackgrdImage = data.nails.mainBackgrdImage;
            employees = data.nails.employees
            services = data.nails.services;
            reviews = data.nails.reviews;
            jobTitle = data.nails.jobTitle;
            skills = data.nails.skills;
        }

        return {
            props: {
                mainTitle: mainTitle || null,
                firstName: firstName || null,
                aboutContent: aboutContent || null,
                mainBackgrdImage: mainBackgrdImage || null,
                portfolioImage1: portfolioImage1 || null,
                portfolioImage2: portfolioImage2 || null,
                portfolioImage3: portfolioImage3 || null,
                portfolioImage4: portfolioImage4 || null,
                color: color || null,
                email: email || null,
                phone: phone || null,
                businessName: businessName || null,
                employees: employees || null,
                services: services || [],
                reviews: reviews || [],
                jobTitle: jobTitle || null,
                skills: skills || [],
                leadType: leadType || null,
              },
        };
    } 


const Landing = ({ mainTitle, skills, aboutContent, mainBackgrdImage, portfolioImage1, portfolioImage2, portfolioImage3, portfolioImage4, color, email, phone, businessName, services, reviews, jobTitle, leadType, firstName, employees }) => {
    
    return (
        <>
            <Head>
                <title>{mainData.websiteTitle}</title>
                <meta name="description" content={mainData.description} />
                <meta name="keywords" content={mainData.keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="container" >
                {/* Header */}
                <Header
                businessName={businessName} />
                {/* Main row */}
                <div className="row g-4 g-lg-5">
                    <div className="col-12 col-lg-4 col-xl-3">
                        <Navigation color={color} />
                    </div>
                    <div className="col-12 col-lg-8 col-xl-9" >

                        <div className="sections-wrapper">
                            <About jobTitle={jobTitle}
                                mainTitle={mainTitle}
                                firstName={firstName}
                                skills={skills}
                                color = {color}
                                mainBackgrdImage={mainBackgrdImage} />
                            <Portfolio
                                aboutContent={aboutContent}
                                leadType={leadType}
                                color = {color}
                                portfolioImage1={portfolioImage1}
                                portfolioImage2={portfolioImage2}
                                portfolioImage3={portfolioImage3}
                                portfolioImage4={portfolioImage4} />
                            <Services
                                aboutContent = {aboutContent}
                                employees = {employees}
                                color = {color} />
                            <Pricing
                                employees = {employees}
                                services={services}
                                color = {color} />
                            <Testimonial
                                reviews={reviews}
                                color={color} />
                            <Connect 
                            email={email}
                            phone={phone}
                            color={color} />
                        </div>
                    </div>
                </div>
                <BackgroundImages />
            </div>
        </>
    )
}

export default Landing;