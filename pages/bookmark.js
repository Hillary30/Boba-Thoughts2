const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
import { useState, useEffect } from "react";
import Head from "next/head";
import styles from '../styles/mapstyle.module.css'
import Link from "next/link";


const Bookmark = () => {
    
    const [Map, setMap] = useState();
    mapboxgl.accessToken = 'pk.eyJ1IjoiaGlsbGFyeTMwIiwiYSI6ImNsYThjeGt3bjAyaXozcXBrMms5ZDJzdXMifQ.mJBKVGjeRbBjcE6dgK18Ow';

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v10',
            center: [-77.034084, 38.909671],
            zoom: 13,
            scrollZoom: false
        });
        // Add zoom and rotation controls to the map.
        map.addControl(new mapboxgl.NavigationControl(), 'top-left');
        setMap(map);
    },[])
    
    
    return ( 
        <div className={styles.box}>
            <Head>
                <title>Bookmarks</title>
                <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no"></meta>
                <Link href='https://api.tiles.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.css' rel='stylesheet'/>
                <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v2.9.2/mapbox-gl.js'></script>
            </Head>
            <div className={styles.map__container}>
                <div className={styles.sidebar}>
                    <div className={styles.heading}>
                        <h1 className={styles.h1}>Your locations</h1>
                    </div>
                    <div id='listings' className='listings'>
                    </div>
                </div>
                <div id="map" className={styles.map}>
                </div>
            </div>
            
        
        </div>
    );
}
 

export default Bookmark;