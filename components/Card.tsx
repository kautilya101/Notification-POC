"use client"

import { LikeAction } from "@/app/actions/like";
import { IAnimals } from "@/types/animals.types";
import { INotificationService } from "@/types/notification.types";
import { Heart } from "lucide-react";
import { useState } from "react";

interface IAnimalCard {
  animal: IAnimals  
}

export const AnimalCard = ({ animal }: IAnimalCard ) => {
  const [isLiked, setIsLiked] = useState(false);
  const currentUser = 'Kautilya101';
  
  const handleLike = async () => {
  const updatedLike = !isLiked;
  setIsLiked(updatedLike);

  if (updatedLike) {
    const payload: INotificationService = {
      likeUserId: currentUser, // Simulated current user
      postId: animal.id,
      postOwnerId: animal.ownerId,
    };

    try {
      const res = await fetch('/api/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      console.log(`Like Api response: ${result}`);

      if (result.status === 'notified') {
        console.log('Ntofication Triggered on backend')
        alert('✅ Notification triggered!');
      } else if (result.status === 'skipped') {
        alert('⚠️ Self-like. No notification sent.');
      }
    } catch (error) {
      console.error('Error sending like:', error);
    }
  }
};

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative">
        <img 
          src={animal.image} 
          alt={animal.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={handleLike}
          className={`absolute top-3 right-3 cursor-pointer p-2 rounded-full transition-colors duration-200 bg-white text-gray-600 hover:bg-gray-50`}
        >
          <Heart 
            size={20} 
            fill={isLiked ? 'red' : 'none'}
            color={isLiked ? 'red' : 'currentColor'}
          />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {animal.name}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {animal.description}
        </p>
      </div>
    </div>
  );
};