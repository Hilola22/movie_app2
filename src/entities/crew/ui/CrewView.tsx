import { memo, useState, useRef, useEffect } from "react";
import { useCrew } from "../model/useCrew";
import { useParams } from "react-router-dom";
import { createImageUrl } from "@/shared/utils";
import { Loading } from "../../loading";

export const CrewView = memo(() => {
  const { id } = useParams();
  const { getCrewById } = useCrew();
  const { data } = getCrewById(id as string);
  const [showFullBio, setShowFullBio] = useState(false);
  const [bioHeight, setBioHeight] = useState<number | null>(null);
  const bioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bioRef.current) {
      setBioHeight(bioRef.current.scrollHeight);
    }
  }, [data]);

  if (!data) return <Loading />;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 flex flex-col gap-4">
          <img
            src={createImageUrl(data.profile_path)}
            alt={data.name}
            className="rounded-xl w-full shadow-lg object-cover"
          />
        </div>

        <div className="md:flex-1 text-gray-800 dark:text-gray-200 flex flex-col ml-10 gap-8">
          <div className="space-y-2 text-gray-800 dark:text-gray-200">
            <h1 className="text-2xl md:text-3xl font-bold">{data.name}</h1>
            {data.birthday && (
              <p>
                <span className="font-semibold">Birthday:</span> {data.birthday}
              </p>
            )}
            {data.place_of_birth && (
              <p>
                <span className="font-semibold">Place of Birth:</span>{" "}
                {data.place_of_birth}
              </p>
            )}
            {data.known_for_department && (
              <p>
                <span className="font-semibold">Department:</span>{" "}
                {data.known_for_department}
              </p>
            )}
            {data.gender !== undefined && (
              <p>
                <span className="font-semibold">Gender:</span>{" "}
                {data.gender === 1 ? "Female" : "Male"}
              </p>
            )}
            {data.popularity !== undefined && (
              <p>
                <span className="font-semibold">Popularity:</span>{" "}
                {data.popularity.toFixed(1)}
              </p>
            )}
            {data.homepage && (
              <a
                href={data.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:scale-105 transition"
              >
                Official Site
              </a>
            )}
          </div>
          {data.biography && (
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-md overflow-hidden">
              <h2 className="text-2xl font-semibold mb-3">Biography</h2>
              <div
                ref={bioRef}
                style={{
                  maxHeight: showFullBio ? `${bioHeight}px` : "240px",
                  overflow: "hidden",
                  transition: "max-height",
                }}
                className="leading-relaxed whitespace-pre-line"
              >
                {data.biography}
              </div>
              {bioHeight && bioHeight > 200 && (
                <button
                  onClick={() => setShowFullBio(!showFullBio)}
                  className="mt-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  {showFullBio ? "Hide" : "More..."}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
