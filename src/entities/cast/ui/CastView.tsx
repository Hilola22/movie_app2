import { memo, type FC } from "react";
import { useCasts } from "../model/useCast";
import { useNavigate } from "react-router-dom";
import profile from "@/shared/assets/profile.jpg";

interface Props {
  id: string;
  type: "cast" | "crew"; 
}

function img(path?: string): string {
  return path ? `https://image.tmdb.org/t/p/w500${path}` : profile;
}

export const CastView: FC<Props> = memo(({ id, type }) => {
  const navigate = useNavigate();
  const { getCasts } = useCasts();
  const { data } = getCasts(id);

  const list = data?.[type] ?? []; 

  return (
    <div className="container mx-auto flex gap-5 overflow-x-auto mt-5 mb-10">
      {list.length > 0 ? (
        list.map((item: any) => (
          <div
            key={item.id}
            role="button"
            tabIndex={0}
            onClick={() => navigate(`/crew/${item.id}`)}
            onKeyDown={(e) => e.key === "Enter" && navigate(`/crew/${item.id}`)}
            className="w-auto cursor-pointer dark:hover:bg-slate-700 rounded-xl p-2"
          >
            <img
              className="bg-white object-cover rounded-xl mx-auto h-[200px] w-[160px]"
              src={img(item.profile_path)}
              alt={item.original_name ?? "Profile"}
            />
            <h3 className="w-[150px] font-semibold mt-3">
              {item.original_name}
            </h3>
            <h4 className="text-gray-500">
              {type === "cast" ? item.character : item.job}
            </h4>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No {type} found</p>
      )}
    </div>
  );
});
