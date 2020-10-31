import { RequestHandler } from "express";

export const getVideos: RequestHandler = (req, res) => {
  res.json("getting videos");
};

export const createVideo: RequestHandler = (req, res) => {};

export const getVideo: RequestHandler = (req, res) => {};

export const updateVideo: RequestHandler = (req, res) => {};

export const daleteVideo: RequestHandler = (req, res) => {};
