import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import "../../styles/reels.css";
import ReelFeed from "../../components/ReelFeed";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    API.get("/api/food", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        // backend ne "food" bheja hai ya "foodItems"? check karo
        setVideos(response.data.food || response.data.foodItems || []);
      })
      .catch(() => {
        /* optional: error handle */
      });
  }, []);

  async function likeVideo(item) {
    const response = await API.post(
      "/api/food/like",
      { foodId: item._id },
      { withCredentials: true },
    );

    if (response.data.like) {
      console.log("Video liked");
      setVideos((prev) =>
        prev.map((v) =>
          v._id === item._id ? { ...v, likeCount: (v.likeCount || 0) + 1 } : v,
        ),
      );
    } else {
      console.log("Video unliked");
      setVideos((prev) =>
        prev.map((v) =>
          v._id === item._id ? { ...v, likeCount: (v.likeCount || 0) - 1 } : v,
        ),
      );
    }
  }

  async function saveVideo(item) {
    const response = await API.post(
    "/api/food/save",
      { foodId: item._id },
      { withCredentials: true },
    );

    if (response.data.save) {
      setVideos((prev) =>
        prev.map((v) =>
          v._id === item._id
            ? { ...v, savesCount: (v.savesCount || 0) + 1 }
            : v,
        ),
      );
    } else {
      setVideos((prev) =>
        prev.map((v) =>
          v._id === item._id
            ? { ...v, savesCount: (v.savesCount || 0) - 1 }
            : v,
        ),
      );
    }
  }

  return (
    <ReelFeed
      items={videos}
      onLike={likeVideo}
      onSave={saveVideo}
      emptyMessage="No videos available."
    />
  );
};

export default Home;
