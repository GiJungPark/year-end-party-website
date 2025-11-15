
import React, { useEffect, useRef } from 'react';

// Extend the Window interface to include the kakao object from the Kakao Maps SDK
// This prevents TypeScript errors when accessing window.kakao
declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This function will run once after the component is mounted.
    // We check if the Kakao Maps SDK script has loaded and the container ref is available.
    if (window.kakao && window.kakao.maps && mapContainer.current) {
      const locationCoords = new window.kakao.maps.LatLng(37.4985, 126.7832);

      const mapOption = {
        center: locationCoords, // The map's center coordinates
        level: 3, // The map's zoom level
      };

      // Create the map instance
      const map = new window.kakao.maps.Map(mapContainer.current, mapOption);

      // Create a marker to display on the map
      const marker = new window.kakao.maps.Marker({
        position: locationCoords,
      });

      // Display the marker on the map
      marker.setMap(map);

      // Create an info window to show when the marker is clicked or as default
      const iwContent = `
        <div style="padding:8px;text-align:center;font-size:14px;line-height:1.5;">
          <strong style="font-weight:bold;">제주 본가</strong><br>
          부천시 부흥로 315번길 69<br>
          <a href="https://map.kakao.com/link/map/제주 본가,37.4985,126.7832" style="color:#0d6efd;text-decoration:none;" target="_blank">지도 보기</a> | 
          <a href="https://map.kakao.com/link/to/제주 본가,37.4985,126.7832" style="color:#0d6efd;text-decoration:none;" target="_blank">길찾기</a>
        </div>`;
      
      const infowindow = new window.kakao.maps.InfoWindow({
          content : iwContent
      });
      
      // Open the info window over the marker
      infowindow.open(map, marker);
      
    } else {
        if(mapContainer.current) {
            mapContainer.current.innerHTML = '<div class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">지도를 불러오는 중입니다... 카카오맵 API 키를 확인해주세요.</div>'
        }
    }
  }, []); // The empty dependency array ensures this effect runs only once.

  return (
    <div 
      ref={mapContainer} 
      className="w-full h-64 md:h-80 rounded-lg shadow-md border"
    >
        {/* The map will be rendered here by the Kakao Maps SDK */}
    </div>
  );
};

export default KakaoMap;
