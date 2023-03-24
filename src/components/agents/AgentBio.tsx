/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

interface Bio {
  classAgent: string;
  bio: string;
}

export default function AgentBio({ classAgent, bio }: Bio) {
  return (
    <div className="flex flex-col text-left gap-6">
      <div className="flex flex-col ">
        <div className="text-[26px]">// FUNÇÃO</div>
        <div className="text-[60px]">{classAgent}</div>
      </div>
      <div>
        <div className="text-[26px]">// BIOGRAFIA</div>
        <div className="text-lg font-bold" style={{ fontFamily: "DINNextW1G" }}>
          {bio}
        </div>
      </div>
    </div>
  );
}
