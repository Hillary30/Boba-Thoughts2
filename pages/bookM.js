import Header from '../comps/Header';
import List from '../comps/List';
import Map from '../comps/Map';
import PlaceDetail from '../comps/PlaceDetail';
import { Flex } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import { getPlacesData } from './api/bookM';
import Head from 'next/head'; 
import Script from 'next/script';


const bookM = () => {
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);
    const [type, setType] = useState("restaurants");
    const [ratings, setRatings] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        //get the users current Location on initial login/loaded website
        navigator.geolocation.getCurrentPosition(({coords : {latitude, longitude}}) => {
            console.log({latitude, longitude});
            setCoordinates({lat : latitude, lng : longitude});
        });
    }, []);


    useEffect(() => {
        const filteredData = places.filter((places) => places.rating = ratings);
        setFilteredPlaces(filteredData);
        console.log({ratings});
    }, [ratings]);
    

    useEffect(() => {
        setIsLoading(true)
        getPlacesData( type, bounds?.sw, bounds?.ne).then((data) => {
            console.log(data);
            setPlaces(data);
            setIsLoading(false);
        });
    }, [type, coordinates, bounds]);
    

    return ( 
        <Flex
            justifyContent = {'center'}
            alignItems = {'center'}
            width = {'100vw'}
            height = {'100vh'}
            maxWidth = {'100vw'}
            maxHeight = {'100vh'}
            position = {'relative'}
        >
            
            <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDmGVGawF_swxkP1HFvHDpBys9QwXs6iRo"></script>
            
            <Header 
                setType = {setType}
                setRatings = {setRatings}
                setCoordinates = {setCoordinates}
            />

            <List places={filteredPlaces.length ? filteredPlaces : places} isLoading={isLoading}/>

             <Map 
                setCoordinates={setCoordinates} 
                coordinates={coordinates} 
                setBounds={setBounds} 
                places={filteredPlaces.length ? filteredPlaces : places}
            />
        </Flex>
    );
};
 
export default bookM;