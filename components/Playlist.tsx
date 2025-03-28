import { ImmProfile } from '@/lib/types';
import { Shuffle, Play } from 'lucide-react';
import PlaylistItem from './PlaylistItem';
import { useState } from 'react';

interface PlaylistProps {
  profiles: ImmProfile[];
}

export default function Playlist({ profiles: initialProfiles }: PlaylistProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [profiles, setProfiles] = useState(initialProfiles);

  const handleShuffle = () => {
    const shuffled = [...profiles].sort(() => Math.random() - 0.5);
    setProfiles(shuffled);
  };

  return (
    <div className="rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-xl font-bold text-[#414759]">
          We are IMM's 2025
        </div>
        <div className="flex gap-4">
          <button 
            onClick={handleShuffle}
            className="p-2 hover:bg-gray-100 rounded-full text-black">
            <Shuffle className="w-6 h-6" />
          </button>
          <button className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white">
            <Play className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Playlist Items */}
      <div className="max-h-[500px] overflow-y-auto">
        {profiles.map((profile) => (
          <PlaylistItem 
            key={profile.id} 
            profile={profile} 
            isSelected={selectedId === profile.id}
            onClick={() => setSelectedId(profile.id)}
          />
        ))}
      </div>
    </div>
  );
} 