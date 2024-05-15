import React from "react";
import ReactDOM from "react-dom/client";

const Header=()=>{
    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" src="data:image/png;base64,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"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li> Contact Us</li>
                <li> Cart</li>
            </ul>
        </div>
        </div>
    )
}

const RestaurantCard=(props)=>{
   const {respData}=props;
   console.log(respData)
   const {name,cuisines,avgRatingString,costForTwo,cloudinaryImageId}=respData?.info
    // const respData=props;
    return (
        <div className="res-card">
        
            <img className="res-logo" 
            alt="res-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId} />
            
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRatingString+ " ⭐Ratings"}</h4>
            <h4>{costForTwo }</h4>
        </div>
    )
}
const resObj=[
    {
        "info": {
            "id": "257428",
            "name": "Raajbagh Restaurant ",
            "cloudinaryImageId": "xvyrclhxftulsglktaek",
            "locality": "Seoni Road",
            "areaName": "Chhindwara Locality",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Indian",
                "Chinese",
                "Fast Food",
                "Beverages"
            ],
            "avgRating": 3.5,
            "veg": true,
            "parentId": "164019",
            "avgRatingString": "3.5",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 56,
                "lastMileTravel": 10.3,
                "serviceability": "SERVICEABLE",
                "slaString": "55-60 mins",
                "lastMileTravelString": "10.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-15 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹110"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/raajbagh-restaurant-seoni-road-chhindwara-locality-chhindwara-257428",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "151656",
            "name": "Dev International",
            "cloudinaryImageId": "enj3srsnhbltbom2ovvh",
            "locality": "khajri road",
            "areaName": "Mohan Nagar",
            "costForTwo": "₹100 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Fast Food",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "71556",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 62,
                "lastMileTravel": 11.5,
                "serviceability": "SERVICEABLE",
                "slaString": "60-65 mins",
                "lastMileTravelString": "11.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-15 22:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dev-international-khajri-road-mohan-nagar-chhindwara-151656",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "234875",
            "name": "Adil Hotel",
            "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
            "locality": "Rautha Wada",
            "areaName": "Chhindwara Locality",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "North Indian",
                "Biryani",
                "Tandoor"
            ],
            "avgRating": 4.3,
            "parentId": "27123",
            "avgRatingString": "4.3",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 45,
                "lastMileTravel": 10.4,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "10.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-15 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹349",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/adil-hotel-rautha-wada-chhindwara-locality-chhindwara-234875",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "151518",
            "name": "Bakery World",
            "cloudinaryImageId": "mt2aggiscfl3yviatwng",
            "locality": "Parasia Road",
            "areaName": "Parasia Road",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Bakery",
                "Ice Cream",
                "Snacks",
                "Beverages"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "40363",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 49,
                "lastMileTravel": 13.2,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "13.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-15 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/bakery-world-parasia-road-chhindwara-151518",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "151648",
            "name": "Mr. Gurung Momo & Chinese Corner",
            "cloudinaryImageId": "h7oibtpm7kqks8cqz3gh",
            "locality": "Teacher's Colony",
            "areaName": "Mohan Nagar",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Momos",
                "Chinese",
                "Fast Food"
            ],
            "avgRating": 4.1,
            "veg": true,
            "parentId": "140255",
            "avgRatingString": "4.1",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 52,
                "lastMileTravel": 11.6,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "11.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-15 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "ABOVE ₹550",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mr-gurung-momo-and-chinese-corner-teachers-colony-mohan-nagar-chhindwara-151648",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "658210",
            "name": "The Fusion Lounge",
            "cloudinaryImageId": "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
            "locality": "Triloki nagar",
            "areaName": "Railway Station",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Chinese",
                "Beverages",
                "Fast Food",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "395453",
            "avgRatingString": "4.3",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 53,
                "lastMileTravel": 9.9,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "9.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-15 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-fusion-lounge-triloki-nagar-railway-station-chhindwara-658210",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "151649",
            "name": "Hotel Sai Nath & Sai Restaurant",
            "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
            "locality": "railway station",
            "areaName": "Chhindwara Locality",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Chinese",
                "Beverages",
                "Fast Food",
                "Desserts"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "101802",
            "avgRatingString": "4.5",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 52,
                "lastMileTravel": 10,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "10.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-15 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-chhindwara-151649",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "531441",
            "name": "Gourmet Ice Cream Cakes by Baskin Robbins",
            "cloudinaryImageId": "d679c532ca07a6f3fd6d89d603861412",
            "locality": "Satkar Square",
            "areaName": "Mohan Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Ice Cream Cakes",
                "Desserts",
                "Ice Cream",
                "Bakery"
            ],
            "avgRating": 5,
            "veg": true,
            "parentId": "21932",
            "avgRatingString": "5.0",
            "totalRatingsString": "2",
            "sla": {
                "deliveryTime": 50,
                "lastMileTravel": 11,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "11.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-15 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/gourmet-ice-cream-cakes-by-baskin-robbins-satkar-square-mohan-nagar-chhindwara-531441",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "150591",
            "name": "Satkar Restaurant",
            "cloudinaryImageId": "rvxp5xbniat84r6efku2",
            "locality": "Sinchai Colony",
            "areaName": "Satkar Chowk",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Indian",
                "Salads",
                "Desserts"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "21553",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 43,
                "lastMileTravel": 10.9,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "10.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-15 22:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/satkar-restaurant-sinchai-colony-satkar-chowk-chhindwara-150591",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "385824",
            "name": "The Belgian Waffle Co.",
            "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
            "locality": "Sinchai Colony",
            "areaName": "Mohan Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Waffle",
                "Desserts",
                "Ice Cream",
                "Beverages"
            ],
            "avgRating": 4.5,
            "veg": true,
            "parentId": "2233",
            "avgRatingString": "4.5",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 50,
                "lastMileTravel": 11,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "11.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-15 22:45:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-sinchai-colony-mohan-nagar-chhindwara-385824",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "496348",
            "name": "Pizza Box",
            "cloudinaryImageId": "n7wbtvlifwbw5y4a7rrv",
            "locality": "Sanchar Colony",
            "areaName": "Chhindwara Locality",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Burgers",
                "Beverages"
            ],
            "avgRating": 4.2,
            "veg": true,
            "parentId": "3045",
            "avgRatingString": "4.2",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 60,
                "lastMileTravel": 11.3,
                "serviceability": "SERVICEABLE",
                "slaString": "60-65 mins",
                "lastMileTravelString": "11.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-15 22:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-box-sanchar-colony-chhindwara-locality-chhindwara-496348",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "150597",
            "name": "Scoops Fast Food And Ice Cream",
            "cloudinaryImageId": "fm3rs3g6z7ibfhesmxnu",
            "locality": "Irrigation Colony",
            "areaName": "Khajri Road",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Bakery",
                "Ice Cream",
                "Snacks",
                "Beverages"
            ],
            "avgRating": 3.8,
            "veg": true,
            "parentId": "179482",
            "avgRatingString": "3.8",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 69,
                "lastMileTravel": 11.2,
                "serviceability": "SERVICEABLE",
                "slaString": "65-70 mins",
                "lastMileTravelString": "11.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-05-15 22:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "15% OFF",
                "subHeader": "UPTO ₹45"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/scoops-fast-food-and-ice-cream-irrigation-colony-khajri-road-chhindwara-150597",
            "type": "WEBLINK"
        }
    }
]
const Body=()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resObj.map(value=><RestaurantCard key={value.info.id} respData={value} />)
                }
                {/* <RestaurantCard respData={resObj[0]} />
                <RestaurantCard respData={resObj[1]} />
                <RestaurantCard respData={resObj[2]} />
                <RestaurantCard respData={resObj[3]} />
                <RestaurantCard respData={resObj[4]} /> */}
               
            </div>
        </div>
    )
}
const AppLayout=()=>{
    return (
        <div className="app">          
            <Header />
            <Body />
        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)