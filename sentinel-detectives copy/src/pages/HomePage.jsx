import { Link } from 'react-router-dom';
import { Shield, Search, BookOpen } from 'lucide-react';
// Import images from assets folder
import batmanSilhouette from '../assets/batman.png';
import sherlockSilhouette from '../assets/sher.png';
import yodaSilhouette from '../assets/yoda.webp';

const HomePage = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-cyan-700 to-cyan-900 rounded-2xl p-8 lg:p-12 mb-16 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choose Your <span className="text-orange-300">Sentinel</span>
            </h1>
            <p className="text-cyan-100 text-lg md:text-xl mb-8">
              Our team of legendary detectives is here to help you uncover the truth.
              Each sentinel has their own special abilities to assist you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/batman" className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white font-medium py-2 px-4 rounded-md hover:from-cyan-700 hover:to-cyan-900 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2">
                <Shield size={18} />
                <span>Meet Our Sentinels</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Sentinels Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Choose Your Sentinel</h2>
            <div className="h-0.5 flex-grow ml-6 bg-gradient-to-r from-cyan-200 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SentinelCard 
              name="Batman"
              role="YouTube Fact Checker"
              description="Batman specializes in analyzing YouTube videos for misinformation. His detective skills help identify misleading content."
              icon={<Shield className="w-6 h-6 text-cyan-500" />}
              color="from-blue-500 to-blue-700"
              imageSrc={batmanSilhouette}
              link="/batman"
            />
            
            <SentinelCard 
              name="Sherlock Holmes"
              role="Text Fact Checker"
              description="With his legendary deductive reasoning, Sherlock analyzes text and audio to separate fact from fiction."
              icon={<Search className="w-6 h-6 text-cyan-500" />}
              color="from-indigo-500 to-purple-700"
              imageSrc={sherlockSilhouette}
              link="/sherlock"
            />

            <SentinelCard 
              name="Yoda"
              role="Education Sentinel"
              description="Learn about misinformation, you will. Through interactive games and software, he teaches you his ways."
              icon={<BookOpen className="w-6 h-6 text-cyan-500" />}
              color="from-green-500 to-green-700"
              imageSrc={yodaSilhouette}
              link="/yoda"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SentinelCard = ({ name, role, description, color, imageSrc, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 h-full hover:-translate-y-1 transition-transform duration-300">
      <div className={`relative h-48 bg-gradient-to-r ${color} overflow-hidden flex items-center justify-center`}>
        <img src={imageSrc} alt={name} className="h-40 object-contain" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-cyan-600 font-medium text-sm mb-3">{role}</p>
        <p className="text-gray-600 mb-5">{description}</p>
        
        <Link to={link} className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white font-medium py-2 px-4 rounded-md hover:from-cyan-700 hover:to-cyan-900 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 w-full flex items-center justify-center gap-2">
          <span>Choose {name}</span>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;