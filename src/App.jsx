import React from 'react';
import image from './assets/image.svg';
import google from './assets/playstore.webp';
import apple from './assets/appsore.webp';

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full flex flex-col items-center text-center">
        {/* Logo with animation */}
        <div className="mb-6 transform transition-all duration-500">
          <img src={image} alt="Track Logo" className="h-20 md:h-24 lg:h-32" />
        </div>

        {/* Main heading with responsive text size */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase mb-6 text-orange-500 tracking-wider">
          Welcome to My Track
        </h1>

        {/* Subheading */}
        <p className="text-white text-lg md:text-xl mb-8 max-w-xl">
          Create and manage your own racing tracks, challenge yourself, and race
          toward victory with our dynamic app — or book your favorite track and
          hit the road!
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-2 w-full justify-center">
          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.mytracksdarren.roe"
            className="rounded-lg w-fit flex items-center justify-center transition-all duration-300 "
          >
            <img className="h-10" src={google} alt="Google Play Store" />
          </a>
          <a
            target="_blank"
            href="https://apps.apple.com/us/app/my-tracks-app/id6744345686?platform=iphone"
            className="rounded-lg w-fit flex items-center justify-center transition-all duration-300 "
          >
            <img className="h-10" src={apple} alt="Apple App Store" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
