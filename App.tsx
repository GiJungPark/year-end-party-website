import React from 'react';
import KakaoMap from './components/KakaoMap';

const CalendarIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-amber-800 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const LocationIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-amber-800 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const App: React.FC = () => {
  return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4 sm:p-8">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-2xl overflow-hidden my-8 animate-fade-in">
          <div className="p-6 sm:p-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-amber-800 tracking-wider mb-8">
              송년회에 초대합니다
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 break-keep">
              그간 안녕하셨습니까?
              <br />
              어느덧 다사다난했던 한 해가 저물어가고 있습니다.
              <br />
              향우회 회원님들과 따뜻한 정을 나누고자
              <br />
              송년회를 마련하였으니,
              <br />
              귀한 걸음 하시어 자리를 빛내주시길 바랍니다.
            </p>

            <div className="space-y-6 my-10 text-left">
              <div className="flex items-center bg-amber-50/50 p-4 rounded-lg border-l-4 border-amber-600">
                <CalendarIcon />
                <div>
                  <p className="font-bold text-lg sm:text-xl text-gray-800">일시</p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed break-keep">
                    2025년 12월 6일 토요일
                    <br />
                    오후 5시 30분
                  </p>
                </div>
              </div>
              <div className="flex items-center bg-amber-50/50 p-4 rounded-lg border-l-4 border-amber-600">
                <LocationIcon />
                <div>
                  <p className="font-bold text-lg sm:text-xl text-gray-800">장소</p>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed break-keep">
                    제주 본가
                    <br />
                    (부천시 부흥로 315번길 69, 101호)
                  </p>
                </div>
              </div>
            </div>

            <div className="my-12">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">오시는 길</h2>
              <KakaoMap />
              <div className="mt-6 text-center">
                <a
                    href="https://map.kakao.com/link/to/제주 본가,37.4985,126.7832"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 sm:px-8 border border-transparent text-base font-bold rounded-md shadow-sm text-white bg-amber-700 hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 transition-transform transform hover:scale-105"
                    aria-label="카카오맵에서 '제주 본가' 길찾기"
                >
                  카카오맵으로 길찾기
                </a>
              </div>
            </div>
          </div>
        </div>
        <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
      </div>
  );
}

export default App;
