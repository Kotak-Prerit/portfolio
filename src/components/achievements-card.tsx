"use client";
import React from "react";
import { useEffect, useState } from "react";

export const AchievementsCard: React.FC = () => {
  const [profile, setProfile] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/cssbattle-profile")
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setProfile(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch profile");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="card">Loading achievements...</div>;
  if (error) return <div className="card">{error}</div>;
  if (!profile) return null;

  return (
    <div className="card bg-background text-foreground p-6 rounded-lg shadow-lg flex flex-col items-center">
      <img src={profile.avatar} alt="Avatar" className="w-20 h-20 rounded-full mb-4" />
      <h3 className="text-xl font-bold mb-2">{profile.name} <span className="text-xs text-muted-foreground">({profile.username})</span></h3>
      {profile.job && <div className="text-sm mb-2">{profile.job}</div>}
      <div className="text-sm mb-2">Country: {profile.country || "N/A"}</div>
      <div className="grid grid-cols-2 gap-4 w-full mb-4">
        <div>Rank: <span className="font-bold">{profile.ranking.rank}</span></div>
        <div>Total Players: <span className="font-bold">{profile.ranking.totalPlayers}</span></div>
        <div>Score: <span className="font-bold">{profile.ranking.totalScore}</span></div>
        <div>Battles Played: <span className="font-bold">{profile.ranking.battlesPlayed}</span></div>
      </div>
      {profile.networks && (
        <div className="flex gap-2 mt-2">
          {profile.networks.website && <a href={profile.networks.website} target="_blank" rel="noopener noreferrer" className="underline">Website</a>}
          {profile.networks.github && <a href={profile.networks.github} target="_blank" rel="noopener noreferrer" className="underline">GitHub</a>}
          {profile.networks.twitter && <a href={profile.networks.twitter} target="_blank" rel="noopener noreferrer" className="underline">Twitter</a>}
          {profile.networks.codepen && <a href={profile.networks.codepen} target="_blank" rel="noopener noreferrer" className="underline">CodePen</a>}
        </div>
      )}
    </div>
  );
};
