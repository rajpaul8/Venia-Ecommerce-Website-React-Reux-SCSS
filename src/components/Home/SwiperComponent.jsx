import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Spinner from "../Spinner";
import useWindowDimensions from '../../hooks/useWindowDimensions'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function SliderComponent() {
    const [loading, setLoading] = useState(false);
    const { height, width } = useWindowDimensions();

    const [listings] = useState([{
        textHeadings: 'Shop the new Signature Collection',
        textSubHeadings: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imageUrl: "https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
    },
    {
        textHeadings: 'Shop the new Signature Collection',
        textSubHeadings: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imageUrl: "https://images.unsplash.com/photo-1616150840617-a0124ea42a1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoaW5nJTIwYnJhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
    },
    {
        textHeadings: 'Shop the new Signature Collection',
        textSubHeadings: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imageUrl: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNsb3RoaW5nJTIwYnJhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
    },
    ]);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => setLoading(false), 200)
    }, [setLoading])

    if (loading) {
        return <Spinner />;
    }

    if (listings.length === 0) {
        return <></>;
    }

    return (
        listings && (
            <>
                {listings.length > 0 && (
                    <>
                        <div className="h-full">
                            <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation={true} modules={[Navigation]}>
                                {listings.map((item, id) => (
                                    <SwiperSlide key={id}>
                                        <div className="aem-Grid aem-Grid--default--12 aem-Grid--tablet--1 aem-Grid--phone--1 leftCaption">
                                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--1 aem-GridColumn--phone--1  hideInSmallScreen">
                                                <div className="bannerTitle">
                                                    <p className="swiperSlideText"><span>{item.textHeadings}</span></p>
                                                    <p className="swiperSlideSubText">
                                                        {item.textSubHeadings}
                                                    </p>
                                                    <Link to='/products'>
                                                        <button className="swiperSlideButton">Shop Now</button>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--1 aem-GridColumn--phone--1 GridColumn--image">
                                                <div style={width > 600 ? {
                                                    backgroundImage: `url(${item.imageUrl})`,
                                                    backgroundSize: "cover",
                                                    backgroundRepeat: "no-repeat",
                                                    height: "100vh",
                                                } : {
                                                    backgroundImage: `linear-gradient(181deg, #F1F1F100 0%, #F0F0F0 100%), url(${item.imageUrl})`,
                                                    backgroundSize: "cover",
                                                    backgroundRepeat: "no-repeat",
                                                    height: "100vh",
                                                }}
                                                    className="swiperSlideDiv">
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>)
                                )}
                            </Swiper>
                        </div>
                    </>
                )}
            </>
        )
    );
}

export default SliderComponent;