import { RequestHandler } from "express";
import Video from "../models/Videos";

export const getVideos: RequestHandler = async (req, res) => {
  const videos = await Video.find();
  return res.status(200).json(videos);
};

export const createVideo: RequestHandler = async (req, res) => {
  const videoFound = await Video.findOne({ url: req.body.url });
  if (videoFound)
    return res.status(301).json({ message: "The url already exits!" });
  const video = new Video(req.body);
  await video.save();
  console.log(video);
  res.status(200).json({ message: "Video Saved!" });
};

export const getVideo: RequestHandler = async (req, res) => {
  const Id = req.params.id;
  const videoFound = await Video.findById(Id);
  console.log(Id);
  if (!videoFound) return res.status(204).json();
  res.status(200).json(videoFound);
};

export const updateVideo: RequestHandler = async (req, res) => {
  const Id = req.params.id;
  const videoUpdated = await Video.findByIdAndUpdate(Id, req.body, {
    new: true,
  });
  if (!videoUpdated) return res.status(204).json();
  res.status(200).json(videoUpdated);
};

export const daleteVideo: RequestHandler = async (req, res) => {
  const Id = req.params.id;
  const videoDeleted = await Video.findByIdAndDelete(Id);
  console.log(Id);
  if (!videoDeleted) return res.status(204).json();
  res.status(200).json({ message: "Video Deleted" });
};
