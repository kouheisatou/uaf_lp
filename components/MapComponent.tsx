'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

// カスタムマーカーアイコンを作成
const createCustomIcon = (featured: boolean) => {
  return new L.DivIcon({
    html: `
      <div class="flex items-center justify-center w-8 h-8 rounded-full border-2 shadow-lg ${
        featured ? 'bg-blue-500 border-blue-600' : 'bg-gray-400 border-gray-500'
      }">
        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 2C6.686 2 4 4.686 4 8c0 2.247 1.25 5.696 6 10.476C14.75 13.696 16 10.247 16 8c0-3.314-2.686-6-6-6zm0 8a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
        </svg>
      </div>
    `,
    className: 'custom-marker',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

interface University {
  id: string;
  name: string;
  location: string;
  appName?: string;
  appDescription?: string;
  studentCount?: number;
  logo?: string;
  website?: string;
  featured: boolean;
  latitude: number;
  longitude: number;
}

interface MapComponentProps {
  center: [number, number];
  zoom: number;
  universities: University[];
  selectedUniversity: University | null;
  onUniversitySelect: (university: University) => void;
}

export default function MapComponent({
  center,
  zoom,
  universities,
  selectedUniversity,
  onUniversitySelect,
}: MapComponentProps) {
  // Leafletのデフォルトアイコンの問題を修正
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl:
        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, []);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />

      {universities.map((university) => (
        <Marker
          key={university.id}
          position={[university.latitude, university.longitude]}
          icon={createCustomIcon(university.featured)}
          eventHandlers={{
            click: () => onUniversitySelect(university),
          }}
        >
          <Popup className="custom-popup">
            <div className="p-2 min-w-[200px]">
              <h4 className="font-bold text-gray-900 mb-2">
                {university.name}
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                {university.location}
              </p>

              {university.appName && (
                <div className="mb-2">
                  <p className="font-semibold text-blue-700 text-sm">
                    {university.appName}
                  </p>
                  <p className="text-xs text-gray-600">
                    {university.appDescription}
                  </p>
                </div>
              )}

              {university.studentCount && (
                <p className="text-xs text-gray-600">
                  学生数: 約{university.studentCount.toLocaleString()}名
                </p>
              )}

              <div className="mt-2">
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs ${
                    university.featured
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {university.featured ? '主要参加大学' : '参加大学'}
                </span>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
