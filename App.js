import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const MRT_STATIONS = [
  {
      name: 'Pasir Ris',
      latitude: 1.373277,
      longitude: 103.949547,
    },
    {
      name: 'Tampines',
      latitude: 1.353301,
      longitude: 103.945145,
    },
    {
      name: 'Simei',
      latitude: 1.343274,
      longitude: 103.953368,
    },
    {
      name: 'Tanah Merah',
      latitude: 1.327345,
      longitude: 103.946355,
    },
    {
      name: 'Bedok',
      latitude: 1.324019,
      longitude: 103.930162,
    },
    {
      name: 'Kembangan',
      latitude: 1.321055,
      longitude: 103.912032,
    },
    {
      name: 'Eunos',
      latitude: 1.319108,
      longitude: 103.903224,
    },
    {
      name: 'Paya Lebar',
      latitude: 1.317226,
      longitude: 103.892525,
    },
    {
      name: 'Aljunied',
      latitude: 1.316414,
      longitude: 103.882753,
    },
    {
      name: 'Kallang',
      latitude: 1.311361,
      longitude: 103.871972,
    },
    {
      name: 'Lavender',
      latitude: 1.307372,
      longitude: 103.862971,
    },
    {
      name: 'Bugis',
      latitude: 1.299094,
      longitude: 103.855468,
    },
    {
      name: 'City Hall',
      latitude: 1.292925,
      longitude: 103.851587,
    },
    {
      name: 'Raffles Place',
      latitude: 1.284424,
      longitude: 103.851012,
    },
    {
      name: 'Tanjong Pagar',
      latitude: 1.276302,
      longitude: 103.846764,
    },
    {
      name: 'Outram Park',
      latitude: 1.280656,
      longitude: 103.839088,
    },
    {
      name: 'Tiong Bahru',
      latitude: 1.286108,
      longitude: 103.827658,
    },
    {
      name: 'Redhill',
      latitude: 1.289083,
      longitude: 103.816122,
    },
    {
      name: 'Queenstown',
      latitude: 1.294111,
      longitude: 103.806629,
    },
    {
      name: 'Commonwealth',
      latitude: 1.302509,
      longitude: 103.798184,
    },
    {
      name: 'Buona Vista',
      latitude: 1.307154,
      longitude: 103.789166,
    },
    {
      name: 'Dover',
      latitude: 1.31168,
      longitude: 103.778447,
    },
    {
      name: 'Clementi',
      latitude: 1.315092,
      longitude: 103.765231,
    },
    {
      name: 'Jurong East',
      latitude: 1.333236,
      longitude: 103.742208,
    },
    {
      name: 'Chinese Garden',
      latitude: 1.342505,
      longitude: 103.732026,
    },
    {
      name: 'Lakeside',
      latitude: 1.34404,
      longitude: 103.72094,
    },
    {
      name: 'Boon Lay',
      latitude: 1.33852,
      longitude: 103.70578,
    },
    {
      name: 'Pioneer',
      latitude: 1.33758,
      longitude: 103.69781,
    },
    {
      name: 'Joo Koon',
      latitude: 1.32784,
      longitude: 103.67815,
    },
    {
      name: 'Gul Circle',
      latitude: 1.31910,
      longitude: 103.66275,
    },
    {
      name: 'Tuas Crescent',
      latitude: 1.31961,
      longitude: 103.64944,
    },
    {
      name: 'Tuas West Road',
      latitude: 1.32925,
      longitude: 103.63950,
    },
    {
      name: 'Tuas Link',
      latitude: 1.34039,
      longitude: 103.63697,
    },
    {
      name: 'Dhoby Ghaut',
      latitude: 1.2987,
      longitude: 103.8462,
    },
    {
      name: 'Bras Basah',
      latitude: 1.2966,
      longitude: 103.8501,
    },
    {
      name: 'Esplanade',
      latitude: 1.2930,
      longitude: 103.8555,
    },
    {
      name: 'Promenade',
      latitude: 1.2934,
      longitude: 103.8616,
    },
    {
      name: 'Nicoll Highway',
      latitude: 1.2992,
      longitude: 103.8636,
    },
    {
      name: 'Stadium',
      latitude: 1.3029,
      longitude: 103.8755,
    },
    {
      name: 'Mountbatten',
      latitude: 1.3058,
      longitude: 103.8821,
    },
    {
      name: 'Dakota',
      latitude: 1.3083,
      longitude: 103.8883,
    },
    {
      name: 'Paya Lebar',
      latitude: 1.3170,
      longitude: 103.8932,
    },
    {
      name: 'MacPherson',
      latitude: 1.3261,
      longitude: 103.8896,
    },
    {
      name: 'Tai Seng',
      latitude: 1.3356,
      longitude: 103.8874,
    },
    {
      name: 'Bartley',
      latitude: 1.3424,
      longitude: 103.8794,
    },
    {
      name: 'Serangoon',
      latitude: 1.3508,
      longitude: 103.8720,
    },
    {
      name: 'Lorong Chuan',
      latitude: 1.3517,
      longitude: 103.8644,
    },
    {
      name: 'Bishan',
      latitude: 1.3509,
      longitude: 103.8487,
    },
    {
      name: 'Marymount',
      latitude: 1.3485,
      longitude: 103.8393,
    },
    {
      name: 'Caldecott',
      latitude: 1.3376,
      longitude: 103.8393,
    },
    {
      name: 'Botanic Gardens',
      latitude: 1.3224,
      longitude: 103.8148,
    },
    {
      name: 'Farrer Road',
      latitude: 1.3176,
      longitude: 103.8078,
    },
    {
      name: 'Holland Village',
      latitude: 1.3119,
      longitude: 103.7963,
    },
    {
      name: 'Buona Vista',
      latitude: 1.3072,
      longitude: 103.7905,
    },
    {
      name: 'one-north',
      latitude: 1.2994,
      longitude: 103.7871,
    },
    {
      name: 'Kent Ridge',
      latitude: 1.2930,
      longitude: 103.7841,
    },
    {
      name: 'Haw Par Villa',
      latitude: 1.2823,
      longitude: 103.7811,
    },
    {
      name: 'Pasir Panjang',
      latitude: 1.2767,
      longitude: 103.7911,
    },
    {
      name: 'Labrador Park',
      latitude: 1.2722,
      longitude: 103.8022,
    },
    {
      name: 'Telok Blangah',
      latitude: 1.2709,
      longitude: 103.8096,
    },
    {
      name: 'Marina Bay',
      latitude: 1.2764,
      longitude: 103.8543,
    },
    {
      name: 'HarbourFront',
      latitude: 1.2654,
      longitude: 103.8205,
    },
    {
      name: 'Bayfront',
      latitude: 1.2827,
      longitude: 103.8592,
    },
    {
      name: 'Chinatown',
      latitude: 1.2844,
      longitude: 103.8433,
    },
    {
      name: 'Clarke Quay',
      latitude: 1.2886,
      longitude: 103.8467,
    },
    {
      name: 'Dhoby Ghaut',
      latitude: 1.2982,
      longitude: 103.8455,
    },
    {
      name: 'Little India',
      latitude: 1.3067,
      longitude: 103.8497,
    },
    {
      name: 'Farrer Park',
      latitude: 1.3123,
      longitude: 103.8542,
    },
    {
      name: 'Boon Keng',
      latitude: 1.3193,
      longitude: 103.8615,
    },
    {
      name: 'Potong Pasir',
      latitude: 1.3315,
      longitude: 103.8697,
    },
    {
      name: 'Woodleigh',
      latitude: 1.3400,
      longitude: 103.8701,
    },
    {
      name: 'Serangoon',
      latitude: 1.3492,
      longitude: 103.8737,
    },
    {
      name: 'Kovan',
      latitude: 1.3606,
      longitude: 103.8851,
    },
    {
      name: 'Hougang',
      latitude: 1.3713,
      longitude: 103.8922,
    },
    {
      name: 'Buangkok',
      latitude: 1.3833,
      longitude: 103.8935,
    },
    {
      name: 'Sengkang',
      latitude: 1.3915,
      longitude: 103.8952,
    },
    {
      name: 'Punggol',
      latitude: 1.4051,
      longitude: 103.9023,
    },
    {
      name: 'Bukit Panjang',
      latitude: 1.3782,
      longitude: 103.7617,
    },
    {
      name: 'Cashew',
      latitude: 1.3689,
      longitude: 103.7648,
    },
    {
      name: 'Hillview',
      latitude: 1.3621,
      longitude: 103.7676,
    },
    {
      name: 'Beauty World',
      latitude: 1.3414,
      longitude: 103.7753,
    },
    {
      name: 'King Albert Park',
      latitude: 1.3385,
      longitude: 103.7837,
    },
    {
      name: 'Sixth Avenue',
      latitude: 1.3305,
      longitude: 103.7978,
    },
    {
      name: 'Tan Kah Kee',
      latitude: 1.3268,
      longitude: 103.8073,
    },
    {
      name: 'Botanic Gardens',
      latitude: 1.3225,
      longitude: 103.8141,
    },
    {
      name: 'Stevens',
      latitude: 1.3206,
      longitude: 103.8267,
    },
    {
      name: 'Newton',
      latitude: 1.3138,
      longitude: 103.8383,
    },
    {
      name: 'Little India',
      latitude: 1.3068,
      longitude: 103.8492,
    },
    {
      name: 'Rochor',
      latitude: 1.3034,
      longitude: 103.8524,
    },
    {
      name: 'Bugis',
      latitude: 1.2996,
      longitude: 103.8552,
    },
    {
      name: 'Promenade',
      latitude: 1.2931,
      longitude: 103.8617,
    },
    {
      name: 'Bayfront',
      latitude: 1.2819,
      longitude: 103.8592,
    },
    {
      name: 'Downtown',
      latitude: 1.2794,
      longitude: 103.8523,
    },
    {
      name: 'Telok Ayer',
      latitude: 1.2823,
      longitude: 103.8489,
    },
    {
      name: 'Chinatown',
      latitude: 1.2842,
      longitude: 103.8445,
    },
    {
      name: 'Fort Canning',
      latitude: 1.2935,
      longitude: 103.8445,
    },
    {
      name: 'Bencoolen',
      latitude: 1.2985,
      longitude: 103.8503,
    },
    {
      name: 'Jalan Besar',
      latitude: 1.3056,
      longitude: 103.8547,
    },
    {
      name: 'Bendemeer',
      latitude: 1.3133,
      longitude: 103.8643,
    },
    {
      name: 'Geylang Bahru',
      latitude: 1.3212,
      longitude: 103.8714,
    },
    {
      name: 'Mattar',
      latitude: 1.3269,
      longitude: 103.8833,
    },
    {
      name: 'MacPherson',
      latitude: 1.3264,
      longitude: 103.8892,
    },
    {
      name: 'Ubi',
      latitude: 1.3295,
      longitude: 103.8989,
    },
    {
      name: 'Kaki Bukit',
      latitude: 1.3347,
      longitude: 103.9086,
    },
    {
      name: 'Bedok North',
      latitude: 1.3345,
      longitude: 103.9172,
    },
    {
      name: 'Bedok Reservoir',
      latitude: 1.3377,
      longitude: 103.9317,
    },
    {
      name: 'Tampines West',
      latitude: 1.3451,
      longitude: 103.9387,
    },
    {
      name: 'Tampines',
      latitude: 1.3533,
      longitude: 103.9452,
    },
    {
      name: 'Tampines East',
      latitude: 1.3576,
      longitude: 103.9554,
    },
    {
      name: 'Upper Changi',
      latitude: 1.3411,
      longitude: 103.9616,
    },
    {
      name: 'Expo',
      latitude: 1.3344,
      longitude: 103.9623,
    },
    {
      name: 'Changi Airport',
      latitude: 1.3578,
      longitude: 103.9882,
    },
    {
      name: 'Bukit Batok',
      latitude: 1.3485,
      longitude: 103.7496,
    },
    {
      name: 'Bukit Gombak',
      latitude: 1.3594,
      longitude: 103.7519,
    },
    {
      name: 'Choa Chu Kang',
      latitude: 1.3844,
      longitude: 103.7442,
    },
    {
      name: 'Yew Tee',
      latitude: 1.3974,
      longitude: 103.7475,
    },
    {
      name: 'Kranji',
      latitude: 1.4252,
      longitude: 103.7622,
    },
    {
      name: 'Marsiling',
      latitude: 1.4327,
      longitude: 103.7747,
    },
    {
      name: 'Woodlands',
      latitude: 1.4369,
      longitude: 103.7864,
    },
    {
      name: 'Admiralty',
      latitude: 1.4406,
      longitude: 103.8015,
    },
    {
      name: 'Sembawang',
      latitude: 1.4492,
      longitude: 103.8204,
    },
    {
      name: 'Canberra',
      latitude: 1.4436,
      longitude: 103.8299,
    },
    {
      name: 'Yishun',
      latitude: 1.4294,
      longitude: 103.835,
    },
    {
      name: 'Khatib',
      latitude: 1.4174,
      longitude: 103.8328,
    },
    {
      name: 'Yio Chu Kang',
      latitude: 1.3818,
      longitude: 103.8446,
    },
    {
      name: 'Ang Mo Kio',
      latitude: 1.3698,
      longitude: 103.8495,
    },
    {
      name: 'Bishan',
      latitude: 1.3507,
      longitude: 103.8485,
    },
    {
      name: 'Braddell',
      latitude: 1.3404,
      longitude: 103.8462,
    },
    {
      name: 'Toa Payoh',
      latitude: 1.3324,
      longitude: 103.8474,
    },
    {
      name: 'Novena',
      latitude: 1.3201,
      longitude: 103.8431,
    },
    {
      name: 'Newton',
      latitude: 1.313,
      longitude: 103.8383,
    },
    {
      name: 'Orchard',
      latitude: 1.3038,
      longitude: 103.8325,
    },
    {
      name: 'Somerset',
      latitude: 1.3005,
      longitude: 103.838,
    },
    {
      name: 'Dhoby Ghaut',
      latitude: 1.2983,
      longitude: 103.8461,
    },
    {
      name: 'City Hall',
      latitude: 1.293,
      longitude: 103.852,
    },
    {
      name: 'Raffles Place',
      latitude: 1.2836,
      longitude: 103.8515,
    },
    {
      name: 'Marina Bay',
      latitude: 1.2762,
      longitude: 103.8544,
    },
    {
      name: 'Marina South Pier',
      latitude: 1.2711,
      longitude: 103.8632,
    },
    {
      name: 'Woodlands North',
      latitude: 1.43798,
      longitude: 103.78665,
    },
    {
      name: 'Woodlands',
      latitude: 1.43678,
      longitude: 103.78605,
    },
    {
      name: 'Woodlands South',
      latitude: 1.43265,
      longitude: 103.78537,
    },
    {
      name: 'Springleaf',
      latitude: 1.39746,
      longitude: 103.81805,
    },
    {
      name: 'Lentor',
      latitude: 1.38208,
      longitude: 103.83803,
    },
    {
      name: 'Mayflower',
      latitude: 1.36378,
      longitude: 103.8363,
    },
    {
      name: 'Bright Hill',
      latitude: 1.35438,
      longitude: 103.83237,
    },
    {
      name: 'Upper Thomson',
      latitude: 1.35443,
      longitude: 103.82335,
    },
    {
      name: 'Caldecott',
      latitude: 1.33757,
      longitude: 103.83994,
    },
    {
      name: 'Mount Pleasant',
      latitude: 1.33133,
      longitude: 103.83609,
    },
    {
      name: 'Stevens',
      latitude: 1.32046,
      longitude: 103.82621,
    },
    {
      name: 'Napier',
      latitude: 1.30694,
      longitude: 103.81562,
    },
    {
      name: 'Orchard Boulevard',
      latitude: 1.30312,
      longitude: 103.82676,
    },
    {
      name: 'Orchard',
      latitude: 1.30307,
      longitude: 103.83214,
    },
    {
      name: 'Great World',
      latitude: 1.29302,
      longitude: 103.83298,
    },
    {
      name: 'Havelock',
      latitude: 1.28819,
      longitude: 103.82955,
    },
    {
      name: 'Outram Park',
      latitude: 1.2804,
      longitude: 103.839,
    },
    {
      name: 'Maxwell',
      latitude: 1.28081,
      longitude: 103.84428,
    },
    {
      name: 'Shenton Way',
      latitude: 1.27501,
      longitude: 103.84697,
    },
    {
      name: 'Marina Bay',
      latitude: 1.27636,
      longitude: 103.85467,
    },
    {
      name: 'Gardens by the Bay',
      latitude: 1.28195,
      longitude: 103.86539,
    },
]

export default function App() {
  const [location, setLocation] = useState(null);
  const [nearestStation, setNearestStation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    if (location) {
      let minDistance = Number.MAX_VALUE;
      let nearestStation = null;

      MRT_STATIONS.forEach(station => {
        const distance = getDistance(
          location.coords.latitude,
          location.coords.longitude,
          station.latitude,
          station.longitude
        );

        if (distance < minDistance) {
          minDistance = distance;
          nearestStation = station;
        }
      });

      setNearestStation(nearestStation);
    }
  }, [location]);

  function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // radius of Earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // distance in km
    return d * 1000; // distance in m
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
        >
          {nearestStation && (
            <Marker
              coordinate={{
                latitude: nearestStation.latitude,
                longitude: nearestStation.longitude,
              }}
              title={nearestStation.name}
            />
          )}
        </MapView>
      )}
      <Text>{nearestStation ? `Nearest MRT Station: ${nearestStation.name}` : 'Loading...'}</Text>
      </View>
      );
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
map: {
width: '100%',
height: '100%',
},
});
