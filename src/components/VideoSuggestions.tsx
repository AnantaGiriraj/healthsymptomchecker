
import React, { useState, useEffect } from "react";
import { Video, ExternalLink } from "lucide-react";

interface VideoSuggestionsProps {
  disease: string;
}

interface VideoInfo {
  title: string;
  thumbnailUrl: string;
  duration: string;
  url: string;
}

const VideoSuggestions: React.FC<VideoSuggestionsProps> = ({ disease }) => {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState<VideoInfo[]>([]);

  useEffect(() => {
    // Simulate fetching data
    const fetchVideos = () => {
      setLoading(true);
      // Simulated delay for API call
      setTimeout(() => {
        // Mock videos based on the disease
        const mockVideos: Record<string, VideoInfo[]> = {
          "Migraine": [
            {
              title: "Understanding Migraines: Causes, Symptoms & Treatments",
              thumbnailUrl: "https://picsum.photos/seed/migraine1/320/180",
              duration: "5:24",
              url: "#"
            },
            {
              title: "Quick Relief Techniques for Migraine Headaches",
              thumbnailUrl: "https://picsum.photos/seed/migraine2/320/180",
              duration: "3:45",
              url: "#"
            },
            {
              title: "Migraine Prevention: Lifestyle Changes That Work",
              thumbnailUrl: "https://picsum.photos/seed/migraine3/320/180",
              duration: "7:12",
              url: "#"
            }
          ],
          "Common Cold": [
            {
              title: "Effective Home Remedies for Common Cold",
              thumbnailUrl: "https://picsum.photos/seed/cold1/320/180",
              duration: "4:30",
              url: "#"
            },
            {
              title: "How to Boost Your Immune System During Cold Season",
              thumbnailUrl: "https://picsum.photos/seed/cold2/320/180",
              duration: "6:15",
              url: "#"
            },
            {
              title: "Cold vs. Flu: How to Tell the Difference",
              thumbnailUrl: "https://picsum.photos/seed/cold3/320/180",
              duration: "5:52",
              url: "#"
            }
          ],
          "Gastroenteritis": [
            {
              title: "Stomach Flu Recovery: What to Eat and Drink",
              thumbnailUrl: "https://picsum.photos/seed/gastro1/320/180",
              duration: "4:18",
              url: "#"
            },
            {
              title: "Understanding Gastroenteritis: Causes and Treatments",
              thumbnailUrl: "https://picsum.photos/seed/gastro2/320/180",
              duration: "7:32",
              url: "#"
            },
            {
              title: "How to Prevent Stomach Bugs in Your Home",
              thumbnailUrl: "https://picsum.photos/seed/gastro3/320/180",
              duration: "4:55",
              url: "#"
            }
          ],
          "Arthritis": [
            {
              title: "Gentle Exercises for Arthritis Pain Relief",
              thumbnailUrl: "https://picsum.photos/seed/arthritis1/320/180",
              duration: "8:42",
              url: "#"
            },
            {
              title: "Anti-Inflammatory Diet for Arthritis Management",
              thumbnailUrl: "https://picsum.photos/seed/arthritis2/320/180",
              duration: "6:30",
              url: "#"
            },
            {
              title: "Latest Treatments for Rheumatoid Arthritis",
              thumbnailUrl: "https://picsum.photos/seed/arthritis3/320/180",
              duration: "5:15",
              url: "#"
            }
          ],
          "Dermatitis": [
            {
              title: "Natural Remedies for Eczema and Dermatitis",
              thumbnailUrl: "https://picsum.photos/seed/dermatitis1/320/180",
              duration: "6:22",
              url: "#"
            },
            {
              title: "How to Identify Different Types of Skin Rashes",
              thumbnailUrl: "https://picsum.photos/seed/dermatitis2/320/180",
              duration: "4:48",
              url: "#"
            },
            {
              title: "Skincare Routine for Sensitive, Irritated Skin",
              thumbnailUrl: "https://picsum.photos/seed/dermatitis3/320/180",
              duration: "7:10",
              url: "#"
            }
          ],
          "Unknown Condition": [
            {
              title: "When to See a Doctor: Understanding Unusual Symptoms",
              thumbnailUrl: "https://picsum.photos/seed/unknown1/320/180",
              duration: "5:35",
              url: "#"
            },
            {
              title: "How to Describe Your Symptoms Effectively to Doctors",
              thumbnailUrl: "https://picsum.photos/seed/unknown2/320/180",
              duration: "4:20",
              url: "#"
            },
            {
              title: "Building a Strong Immune System: Essential Tips",
              thumbnailUrl: "https://picsum.photos/seed/unknown3/320/180",
              duration: "6:45",
              url: "#"
            }
          ]
        };

        setVideos(mockVideos[disease] || mockVideos["Unknown Condition"]);
        setLoading(false);
      }, 1000);
    };

    fetchVideos();
  }, [disease]);

  return (
    <div className="glass rounded-2xl p-8 shadow-lg mb-6 animate-fadeIn">
      <div className="flex items-center justify-center mb-6">
        <Video className="h-6 w-6 text-health-600 mr-2" />
        <h3 className="text-xl font-bold">Helpful Videos</h3>
      </div>

      {loading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-health-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white group animate-fadeIn"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative">
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.title} 
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="p-4">
                <h4 className="font-medium text-gray-800 line-clamp-2 h-12">{video.title}</h4>
                <a 
                  href={video.url} 
                  className="mt-2 inline-flex items-center text-health-600 hover:text-health-700 text-sm"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Watch video <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoSuggestions;
