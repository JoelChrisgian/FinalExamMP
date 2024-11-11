import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const UserMap = ({ route }) => {
  const { user } = route.params;
  const { geo } = user.address;

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: parseFloat(geo.lat),
          longitude: parseFloat(geo.lng),
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: parseFloat(geo.lat),
            longitude: parseFloat(geo.lng),
          }}
          title={user.name}
          description={`${user.address.street}, ${user.address.city}`}
        />
      </MapView>
    </View>
  );
};

export default UserMap;
