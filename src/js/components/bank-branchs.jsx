import React from "react";
import GoogleMapReact from "google-map-react";

const BankBranchs = () => {
  const key = "AIzaSyAMe9CfR61jshFAOQLeS3B5RlUg45KrQMo";
  const location = {
    lat: 57.0,
    lng: 77.3,
  };
  const MapMarker = () => <div className="bank-branchs__map-marker"></div>;
  const zoom = 4.6;
  return (
    <section className="page-content__bank-branchs bank-branchs">
      <h2>Отделения Лига Банка</h2>
      <div className="bank-branchs__map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          defaultCenter={location}
          defaultZoom={zoom}
        >
          <MapMarker lat={61.25} lng={73.41667} />
          <MapMarker lat={54.99244} lng={73.36859} />
          <MapMarker lat={55.0415} lng={82.9346} />
          <MapMarker lat={58.01046} lng={56.25017} />
          <MapMarker lat={57.15222} lng={65.52722} />
          <MapMarker lat={55.78874} lng={55.78874} />
          <MapMarker lat={51.54056} lng={46.00861} />
          <MapMarker lat={55.75222} lng={37.61556} />
        </GoogleMapReact>
      </div>
    </section>
  );
};

export default BankBranchs;
