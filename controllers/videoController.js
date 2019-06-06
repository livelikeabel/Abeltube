import { videos } from "../db";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "search", searchingBy });
};

export const upload = (req, res) => res.send("Upload", { pageTitle: "Upload" });

export const videoDetail = (req, res) =>
  res.send("Video Detail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.send("Edit Video", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.send("Delete Video", { pageTitle: "Delete Video" });
